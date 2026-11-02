import type { PixelImage } from "./core/types";
import type { ExecuteContext } from "./executor";
import {
	getTool,
	type FileResult,
	type Tool,
	type ToolImageFile,
	type ToolResult,
} from "./registry";
import type { Dimension } from "./registry-schema";

export type ChainExecutor = (
	tool: Tool,
	ctx: ExecuteContext,
) => Promise<ToolResult>;

export type ChainWarning =
	| { kind: "partial"; step: number; ok: number; total: number }
	| { kind: "firstOnly"; step: number; total: number }
	| { kind: "sourceSkip"; skipped: number; total: number }
	| { kind: "sizeLimitMiss"; limitKb: number; actualKb: number };

export class ChainStepError extends Error {
	constructor(
		readonly stepIndex: number,
		readonly toolId: string,
		readonly cause: unknown,
	) {
		super(`step ${stepIndex + 1} (${toolId}) failed`);
	}
}

export interface ChainRunOutput {
	stepResults: (PixelImage | null)[];
	// NOTE: Full named set per step; empty for text/verdict/none steps.
	stepFileSets: ToolImageFile[][];
	stepDims: (Dimension | undefined)[];
	// NOTE: What identifies a step for reuse: id, params and the text source it
	// consumed. The next run reuses the leading prefix that still matches.
	stepKeys: string[];
	stepOut: ToolResult[];
	stepWarnings: ChainWarning[][];
	source: ToolImageFile[];
	textSource: string | undefined;
	out: ToolResult;
	warnings: ChainWarning[];
}

// NOTE: Zip entries are encoded as PNG (see zip.ts), so names stay .png.
export function baseName(name: string): string {
	return name.replace(/\.[^./\\]+$/, "");
}

export function glueName(parent: string, part: string): string {
	return `${baseName(parent)}-${part}`;
}

// NOTE: Zip entries and keyed lists address files by name, so duplicates must
// not occur: "image.png" repeated -> "image-2.png", "image-3.png".
export function uniqueName(name: string, used: Set<string>): string {
	if (!used.has(name)) return name;
	const base = baseName(name);
	const ext = name.slice(base.length);
	for (let n = 2; ; n++) {
		const candidate = `${base}-${n}${ext}`;
		if (!used.has(candidate)) return candidate;
	}
}

function isImage(out: ToolResult): out is PixelImage {
	return typeof out === "object" && out !== null && "data" in out;
}

function sameFileSet(a: ToolImageFile[], b: ToolImageFile[]): boolean {
	return (
		a.length === b.length &&
		a.every((file, i) => file.image === b[i].image && file.name === b[i].name)
	);
}

function stepKey(
	step: { id: string; params: Record<string, unknown> },
	tool: Tool,
	textSource: string | undefined,
): string {
	const text = tool.input === "text" ? (textSource ?? null) : null;
	return JSON.stringify([step.id, step.params, text]);
}

// NOTE: Index of the first step whose cached result is no longer valid; equals
// the step count when nothing changed and the whole chain can be reused.
export function chainResumeIndex(
	steps: { id: string; params: Record<string, unknown> }[],
	source: ToolImageFile[],
	textSource: string | undefined,
	prev: ChainRunOutput | null | undefined,
): number {
	if (
		!prev ||
		prev.textSource !== textSource ||
		!sameFileSet(prev.source, source)
	) {
		return 0;
	}
	for (let i = 0; i < steps.length; i++) {
		const tool = getTool(steps[i].id);
		if (!tool || tool.impure || i >= prev.stepKeys.length) return i;
		if (prev.stepKeys[i] !== stepKey(steps[i], tool, textSource)) return i;
	}
	return steps.length;
}

// NOTE: Fan-out chain runner: image steps apply to every file of the set,
// files-steps glue part names, analyze steps see only the first file.
// A step fails the chain only when every file fails (ChainStepError).
export async function runChain(
	steps: { id: string; params: Record<string, unknown> }[],
	source: ToolImageFile[],
	textSource: string | undefined,
	execute: ChainExecutor,
	prev?: ChainRunOutput | null,
): Promise<ChainRunOutput> {
	const start = chainResumeIndex(steps, source, textSource, prev);
	const reuse = start > 0 ? (prev ?? null) : null;
	const stepResults = reuse ? reuse.stepResults.slice(0, start) : [];
	const stepFileSets = reuse ? reuse.stepFileSets.slice(0, start) : [];
	const stepDims = reuse ? reuse.stepDims.slice(0, start) : [];
	const stepKeys = reuse ? reuse.stepKeys.slice(0, start) : [];
	const stepOut = reuse ? reuse.stepOut.slice(0, start) : [];
	const stepWarnings = reuse ? reuse.stepWarnings.slice(0, start) : [];
	let current: ToolImageFile[] = reuse ? reuse.stepFileSets[start - 1] : source;
	let out: ToolResult = reuse ? reuse.stepOut[start - 1] : "";

	for (let i = start; i < steps.length; i++) {
		const tool = getTool(steps[i].id);
		if (!tool) {
			stepKeys[i] = "";
			stepResults[i] = null;
			stepFileSets[i] = [];
			stepDims[i] = undefined;
			stepOut[i] = out;
			stepWarnings[i] = [];
			continue;
		}
		stepKeys[i] = stepKey(steps[i], tool, textSource);
		const warnings: ChainWarning[] = [];
		stepWarnings[i] = warnings;

		if (tool.input === "text" || tool.input === "none") {
			out = await execute(tool, {
				params: steps[i].params,
				text: tool.input === "text" ? textSource : undefined,
			});
			if (isImage(out)) {
				current = [{ name: tool.id, image: out }];
				stepResults[i] = out;
				stepFileSets[i] = current;
				stepDims[i] = { width: out.width, height: out.height };
			} else {
				current = [];
				stepResults[i] = null;
				stepFileSets[i] = [];
			}
			stepOut[i] = out;
			continue;
		}

		const analyze = tool.result === "text" || tool.result === "verdict";
		const inputs =
			analyze && current.length > 1 ? current.slice(0, 1) : current;
		if (analyze && current.length > 1) {
			warnings.push({ kind: "firstOnly", step: i + 1, total: current.length });
		}

		const produced: ToolImageFile[] = [];
		let failed = 0;
		let firstError: unknown;
		for (const file of inputs) {
			try {
				const res = await execute(tool, {
					params: steps[i].params,
					source: file.image,
				});
				out = res;
				if (isImage(res)) {
					produced.push({ name: file.name, image: res });
				} else if (typeof res === "object" && res !== null && "files" in res) {
					produced.push(
						...res.files.map((f) => ({
							name: glueName(file.name, f.name),
							image: f.image,
						})),
					);
				}
			} catch (e) {
				failed++;
				firstError ??= e;
			}
		}
		if (inputs.length > 0 && failed === inputs.length) {
			throw new ChainStepError(i, tool.id, firstError);
		}
		if (failed > 0) {
			warnings.push({
				kind: "partial",
				step: i + 1,
				ok: inputs.length - failed,
				total: inputs.length,
			});
		}
		current = produced;
		stepResults[i] = produced[0]?.image ?? null;
		stepFileSets[i] = produced;
		stepDims[i] = produced[0]
			? { width: produced[0].image.width, height: produced[0].image.height }
			: undefined;
		stepOut[i] = out;
	}

	if (current.length > 1) {
		out = { files: current } satisfies FileResult;
	} else if (current.length === 1) {
		out = current[0].image;
	}
	return {
		stepResults,
		stepFileSets,
		stepDims,
		stepKeys,
		stepOut,
		stepWarnings,
		source,
		textSource,
		out,
		warnings: stepWarnings.flat(),
	};
}
