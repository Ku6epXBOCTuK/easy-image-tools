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
