import type { OutputMime } from "$lib/core/io";
import type { PixelImage } from "$lib/core/types";
import type {
	FileResult,
	InputMode,
	ResultKind,
	ResultNote,
	ToolImageFile,
} from "$lib/registry";

export type SchemaPreviewModelInput = {
	inputMode: InputMode;
	resultKind: ResultKind;
	result: PixelImage | null;
	fileResult: FileResult | null;
	textResult: string | null;
};

// NOTE: A tile follows the result proportion only inside 16:9 to 9:16, so a
// panorama stays readable and a tall strip does not tower over its pair.
const MAX_TILE_ASPECT = 16 / 9;
const MIN_TILE_ASPECT = 9 / 16;

export function tileAspect(
	width?: number,
	height?: number,
): number | undefined {
	if (!width || !height) return undefined;
	return Math.min(MAX_TILE_ASPECT, Math.max(MIN_TILE_ASPECT, width / height));
}

// NOTE: SVG attributes of the source inside the target canvas. Both the preview
// box and the result <img> are capped at the canvas pixel size, so one unit is
// one CSS px and the placeholder cannot render a different size than the output.
export interface PlacementAttrs {
	x: number;
	y: number;
	width: number;
	height: number;
	transform?: string;
}

export function placementAttrs(
	source: { width: number; height: number },
	frame: { left: number; top: number; angle?: number } | null,
): PlacementAttrs {
	const left = frame?.left ?? 0;
	const top = frame?.top ?? 0;
	const attrs: PlacementAttrs = {
		x: left,
		y: top,
		width: source.width,
		height: source.height,
	};
	const angle = frame?.angle;
	if (angle) {
		const cx = left + source.width / 2;
		const cy = top + source.height / 2;
		attrs.transform = `rotate(${angle} ${cx} ${cy})`;
	}
	return attrs;
}

export function hasPreviewResult(input: SchemaPreviewModelInput): boolean {
	const { resultKind, result, fileResult, textResult } = input;
	if (resultKind === "image") return Boolean(result);
	if (resultKind === "files") {
		return Boolean(fileResult && fileResult.files.length > 0);
	}
	return Boolean(textResult);
}

// NOTE: Grouped view-models of SchemaPreview: one object per inner consumer
// (field names mirror the consumer's own props, so they spread directly).

/** NOTE: SchemaActions: download policy and format settings. */
export interface PreviewHeadModel {
	format: OutputMime;
	quality?: number;
	limitKb?: number;
	alphaLoss?: boolean;
	onupload: (file: File) => void;
	ondownload: () => void;
	onformat?: (mime: OutputMime) => void;
	onquality?: (value: number) => void;
	onlimit?: (kb: number | undefined) => void;
}

/** NOTE: SchemaSourceTile minus mode/running/onupload (top-level/head props). */
export interface PreviewSourceModel {
	source: PixelImage | null;
	sources?: ToolImageFile[];
	fileCount?: number;
	textSource?: string;
	ontextinput?: (text: string) => void;
	onrendertext?: () => void;
	onuploadmany?: (files: File[]) => void;
}

/** NOTE: Intermediate step tiles of the chain preview. */
export interface PreviewStepsModel {
	results?: (PixelImage | null)[];
	fileSets?: ToolImageFile[][];
	maskable?: boolean[];
	maskOn?: boolean[];
	masks?: (PixelImage | null)[];
	ontogglestepmask?: (i: number) => void;
}

/** NOTE: SchemaResultTile minus resultKind/toolId/running (top-level props). */
export interface PreviewResultModel {
	result: PixelImage | null;
	resultNote?: ResultNote | null;
	fileResult?: FileResult | null;
	textResult?: string | null;
	textVars?: Record<string, string | number>;
	mask?: PixelImage | null;
	maskOn?: boolean;
	ontogglemask?: () => void;
	oncopy?: () => void;
	ondownloadtxt?: () => void;
}
