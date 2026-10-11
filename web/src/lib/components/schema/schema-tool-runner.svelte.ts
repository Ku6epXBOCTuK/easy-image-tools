import { fitWithinBytes } from "$lib/core/compress";
import { ToolError, type ErrorVars } from "$lib/core/errors";
import { downloadBlob, encode, type OutputMime } from "$lib/core/io";
import { outputFormatByMime } from "$lib/output-formats";
import type { PixelImage } from "$lib/core/types";
import { execute } from "$lib/executor";
import { chainStepTitle, verdictText } from "$lib/i18n/schema-tool-strings";
import { t } from "$lib/i18n/t";
import type { ChainStep } from "$lib/pipeline.svelte";
import type {
	FileResult,
	Tool,
	ToolImageFile,
	ToolResult,
} from "$lib/registry";
import type { Dimension, ToolSchema } from "$lib/registry-schema";
import {
	baseName,
	ChainStepError,
	runChain,
	type ChainWarning,
} from "$lib/run-chain";
import { downloadZip } from "$lib/zip";

export type DisplayError =
	| { kind: "i18n"; key: string; vars?: ErrorVars }
	| { kind: "plain"; text: string };

export interface SchemaToolRunnerCtx {
	pageSlug: () => string;
	schema: () => ToolSchema<Record<string, unknown>> | undefined;
	steps: () => ChainStep[];
	source: () => PixelImage | null;
	sourceFiles: () => ToolImageFile[];
	textSource: () => string;
	format: () => OutputMime;
	quality: () => number | undefined;
	limitKb: () => number | undefined;
	lastTool: () => Tool;
}

interface RunnerState {
	// run() and download() have separate flags: a parallel auto-run and a
	// download click must not clobber each other's indicator/disabled state.
	running: boolean;
	downloading: boolean;
	// Generation of the latest run(): a stale in-flight chain (params changed
	// while the worker was busy) must not overwrite newer results.
	runGen: number;
	result: PixelImage | null;
	fileResult: FileResult | null;
	textResult: string | null;
	verdictVars: Record<string, string | number> | undefined;
	stepDims: (Dimension | undefined)[];
	stepResults: (PixelImage | null)[];
	// Full named set per step (batch/fan-out); intermediate tiles show a grid.
	stepFileSets: ToolImageFile[][];
	runWarnings: ChainWarning[];
	// Size-limit feedback from the last download (limit unreachable etc.).
	downloadWarnings: ChainWarning[];
	// Chain step failure: badge lands on that step's tile (0-based index).
	stepError: { step: number; label: string; detail: string } | null;
	// Source decode/upload failures (via reportError): badge on the source tile.
	sourceError: DisplayError | null;
	// Download/copy and non-chain run failures: badge near the download button.
	actionError: DisplayError | null;
}

function toDisplayError(e: unknown): DisplayError {
	if (e instanceof ToolError) {
		return { kind: "i18n", key: e.key, vars: e.vars };
	}
	if (e instanceof Error) return { kind: "plain", text: e.message };
	return { kind: "plain", text: String(e) };
}

function assignResult(s: RunnerState, out: ToolResult) {
	if (typeof out === "object" && out !== null && "files" in out) {
		s.fileResult = out;
		s.result = null;
		s.textResult = null;
		s.verdictVars = undefined;
	} else if (typeof out === "object" && out !== null && "data" in out) {
		s.result = out as PixelImage;
		s.fileResult = null;
		s.textResult = null;
		s.verdictVars = undefined;
	} else {
		if (typeof out === "string") {
			s.textResult = out;
			s.verdictVars = undefined;
		} else if (out && "key" in out) {
			s.textResult = out.key;
			s.verdictVars = out.vars;
		} else {
			s.textResult = null;
			s.verdictVars = undefined;
		}
		s.result = null;
		s.fileResult = null;
	}
}

async function run(s: RunnerState, ctx: SchemaToolRunnerCtx) {
	const schema = ctx.schema();
	const steps = ctx.steps();
	if (!schema || steps.length === 0) return;
	const gen = ++s.runGen;
	s.stepError = null;
	s.actionError = null;
	s.running = true;
	try {
		const source = ctx.source();
		const sourceFiles = ctx.sourceFiles();
		const textSource = ctx.textSource();
		const input =
			sourceFiles.length > 0
				? sourceFiles
				: source
					? [{ name: `${baseName(ctx.pageSlug())}.png`, image: source }]
					: [];
		const r = await runChain(steps, input, textSource || undefined, execute);
		if (gen !== s.runGen) return;
		s.stepDims = r.stepDims;
		s.stepResults = r.stepResults;
		s.stepFileSets = r.stepFileSets;
		s.runWarnings = r.warnings;
		assignResult(s, r.out);
	} catch (e) {
		if (gen !== s.runGen) return;
		if (e instanceof ChainStepError) {
			const base = toDisplayError(e.cause);
			const msg = base.kind === "i18n" ? t(base.key, base.vars) : base.text;
			s.stepError = {
				step: e.stepIndex,
				label: t("chain.stepFailed", { n: e.stepIndex + 1 }),
				detail: t("toolPage.stepError", {
					n: e.stepIndex + 1,
					title: chainStepTitle(e.toolId),
					msg,
				}),
			};
		} else {
			s.actionError = toDisplayError(e);
		}
	} finally {
		if (gen === s.runGen) s.running = false;
	}
}

async function download(s: RunnerState, ctx: SchemaToolRunnerCtx) {
	if (!ctx.schema()) return;
	s.downloading = true;
	s.actionError = null;
	try {
		if (s.fileResult) {
			await downloadZip(s.fileResult.files, `${ctx.pageSlug()}.zip`);
			return;
		}
		if (!s.result) return;
		const out = outputFormatByMime(ctx.format());
		const q = ctx.quality();
		const limit = ctx.limitKb();
		const quality = q !== undefined ? q / 100 : undefined;
		s.downloadWarnings = [];
		if (limit) {
			const fitted = await fitWithinBytes(
				s.result,
				out.mime,
				limit * 1024,
				quality,
				encode,
			);
			if (fitted.achievedBytes > limit * 1024) {
				s.downloadWarnings = [
					{
						kind: "sizeLimitMiss",
						limitKb: limit,
						actualKb: Math.ceil(fitted.achievedBytes / 1024),
					},
				];
			}
			downloadBlob(fitted.blob, `${ctx.pageSlug()}.${out.ext}`);
		} else {
			const blob = await encode(s.result, out.mime, quality);
			downloadBlob(blob, `${ctx.pageSlug()}.${out.ext}`);
		}
	} catch (e) {
		s.actionError = toDisplayError(e);
	} finally {
		s.downloading = false;
	}
}

async function copyText(s: RunnerState, ctx: SchemaToolRunnerCtx) {
	if (!s.textResult) return;
	const tool = ctx.lastTool();
	const copyValue =
		(tool.result ?? "image") === "verdict"
			? verdictText(tool.id, s.textResult, s.verdictVars)
			: s.textResult;
	try {
		await navigator.clipboard.writeText(copyValue);
	} catch (e) {
		s.actionError = toDisplayError(e);
	}
}

async function downloadText(s: RunnerState, ctx: SchemaToolRunnerCtx) {
	if (!s.textResult) return;
	try {
		const blob = new Blob([s.textResult], { type: "text/plain" });
		downloadBlob(blob, `${ctx.pageSlug()}.txt`);
	} catch (e) {
		s.actionError = toDisplayError(e);
	}
}

function clearResults(s: RunnerState) {
	s.result = null;
	s.fileResult = null;
	s.textResult = null;
	s.verdictVars = undefined;
	s.downloadWarnings = [];
	s.stepError = null;
	s.actionError = null;
}

// Execution state and actions of SchemaToolView: run/download/clipboard and
// all results. Owns the generation counter (see RunnerState.runGen).
export function createSchemaToolRunner(ctx: SchemaToolRunnerCtx) {
	const s = $state<RunnerState>({
		running: false,
		downloading: false,
		runGen: 0,
		result: null,
		fileResult: null,
		textResult: null,
		verdictVars: undefined,
		stepDims: [],
		stepResults: [],
		stepFileSets: [],
		runWarnings: [],
		downloadWarnings: [],
		stepError: null,
		sourceError: null,
		actionError: null,
	});
	return {
		get running() {
			return s.running;
		},
		get downloading() {
			return s.downloading;
		},
		get result() {
			return s.result;
		},
		get fileResult() {
			return s.fileResult;
		},
		get textResult() {
			return s.textResult;
		},
		get verdictVars() {
			return s.verdictVars;
		},
		get stepDims() {
			return s.stepDims;
		},
		get stepResults() {
			return s.stepResults;
		},
		get stepFileSets() {
			return s.stepFileSets;
		},
		get runWarnings() {
			return s.runWarnings;
		},
		get downloadWarnings() {
			return s.downloadWarnings;
		},
		get stepError() {
			return s.stepError;
		},
		get sourceError() {
			return s.sourceError;
		},
		get actionError() {
			return s.actionError;
		},
		clearSourceError: () => {
			s.sourceError = null;
		},
		run: () => run(s, ctx),
		download: () => download(s, ctx),
		copyText: () => copyText(s, ctx),
		downloadText: () => downloadText(s, ctx),
		// Host changed (another page/chain): drop run state and invalidate any
		// in-flight run from the previous host.
		resetForHost: () => {
			s.runGen++;
			s.runWarnings = [];
			s.stepFileSets = [];
			clearResults(s);
		},
		clearResults: () => clearResults(s),
		reportError: (e: unknown) => {
			s.sourceError = toDisplayError(e);
		},
	};
}
