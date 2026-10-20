import type { CategoryId } from "../categories";
import { ToolError } from "../core/errors";
import type { OutputMime } from "../core/io";
import type { PixelImage } from "../core/types";
import type { ToolSchema } from "../registry-schema";

export interface OutputFormat {
	mime: OutputMime;
	ext: string;
	qualityParamId?: string;
}

export const INPUT_MODES = {
	image: "image",
	text: "text",
	none: "none",
} as const;
export type InputMode = (typeof INPUT_MODES)[keyof typeof INPUT_MODES];

export const RESULT_KINDS = {
	image: "image",
	text: "text",
	verdict: "verdict",
	files: "files",
} as const;
export type ResultKind = (typeof RESULT_KINDS)[keyof typeof RESULT_KINDS];

// NOTE: `source`/`text` are present strictly per the tool's `input` mode.
export interface ToolContext<P> {
	params: P;
	source?: PixelImage;
	text?: string;
}

export interface ToolImageFile {
	name: string;
	image: PixelImage;
}

// NOTE: File-set result (1 -> many); downloaded as a zip archive.
export interface FileResult {
	files: ToolImageFile[];
}

// NOTE: Verdict: dict `key` + `vars` for `{name}` interpolation; localized on the
// UI side, never inside run().
export interface VerdictResult {
	key: string;
	vars?: Record<string, string | number>;
}

export type ToolResult = PixelImage | string | FileResult | VerdictResult;

export type ResultNote = { key: string; tone?: "warning" | "info" };

// NOTE: Tool: unique implementation without address, strings, or category; those
// belong to the page. Schema is required (defaults/validation/UI). One `run(ctx)`.
export type Tool<P = Record<string, unknown>> = {
	// NOTE: Dict key of the tool, `toolId` of the worker protocol, pipeline record.
	id: string;
	schema: ToolSchema<P>;
	input: InputMode;
	result?: ResultKind;
	run(ctx: ToolContext<P>): Promise<ToolResult> | ToolResult;
	// NOTE: Needs the DOM (canvas/document); the preview executor runs it in the main thread.
	domOnly?: boolean;
	output?: OutputFormat;
	runMask?: (ctx: ToolContext<P>) => PixelImage;
	// NOTE: Note at the result tile when the outcome differs from requested
	// (clamped, aspect-corrected, grew past canvas).
	resultNote?: (params: P, result: PixelImage) => ResultNote | null;
};

export type PageStep = {
	id: string;
	params?: Record<string, unknown>;
};

// NOTE: Page: unique address, strings, and the ordered tool list in `steps`
// (a page may be a ready-made chain run by `SchemaToolView`).
export type Page = {
	// NOTE: Address `/tools/<slug>`, downloaded file name, and icon key.
	readonly slug: string;
	// NOTE: EN string; the translation lives in the dictionary by slug.
	readonly title: string;
	readonly description: string;
	readonly category: CategoryId;
	readonly steps: readonly PageStep[];
};

export function requireSource<P>(ctx: ToolContext<P>): PixelImage {
	if (!ctx.source) {
		throw new ToolError("errors.sourceRequired");
	}
	return ctx.source;
}

export function requireText<P>(ctx: ToolContext<P>): string {
	if (!ctx.text?.trim()) {
		throw new ToolError("errors.textRequired");
	}
	return ctx.text;
}

export function imgTool<P>(
	fn: (img: PixelImage, params: P) => ToolResult | Promise<ToolResult>,
): (ctx: ToolContext<P>) => ToolResult | Promise<ToolResult> {
	return (ctx) => fn(requireSource(ctx), ctx.params);
}

export function genTool<P>(
	fn: (params: P) => ToolResult | Promise<ToolResult>,
): (ctx: ToolContext<P>) => ToolResult | Promise<ToolResult> {
	return (ctx) => fn(ctx.params);
}

export function textGen<P>(
	fn: (text: string, params: P) => ToolResult | Promise<ToolResult>,
): (ctx: ToolContext<P>) => ToolResult | Promise<ToolResult> {
	return (ctx) => fn(requireText(ctx), ctx.params);
}
