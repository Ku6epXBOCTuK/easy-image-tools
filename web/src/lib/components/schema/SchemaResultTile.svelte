<script lang="ts">
	import ChipButton from "$lib/components/ui/ChipButton.svelte";
	import { cachedDataUrl } from "$lib/core/io";
	import type { PixelImage } from "$lib/core/types";
	import { t } from "$lib/i18n/t";
	import type {
		CanvasPreview,
		FileResult,
		ResultKind,
		ResultNote,
	} from "$lib/registry";
	import PartsGrid from "./PartsGrid.svelte";
	import PreviewCanvas from "./PreviewCanvas.svelte";
	import PreviewTile from "./PreviewTile.svelte";
	import SchemaTextResult from "./SchemaTextResult.svelte";

	interface Props {
		resultKind?: ResultKind;
		result: PixelImage | null;
		resultNote?: ResultNote | null;
		warnings?: { label: string; detail?: string }[];
		errors?: { label: string; detail?: string }[];
		fileResult?: FileResult | null;
		textResult?: string | null;
		textVars?: Record<string, string | number>;
		toolId?: string;
		running?: boolean;
		mask?: PixelImage | null;
		maskOn?: boolean;
		ontogglemask?: () => void;
		oncopy?: () => void;
		ondownloadtxt?: () => void;
		preview?: { canvas: CanvasPreview; image: PixelImage } | null;
	}
	let {
		resultKind = "image",
		result,
		resultNote = null,
		warnings = [],
		errors = [],
		fileResult = null,
		textResult = null,
		textVars = undefined,
		toolId = "",
		running = false,
		mask = null,
		maskOn = false,
		ontogglemask,
		oncopy,
		ondownloadtxt,
		preview = null,
	}: Props = $props();

	const shown = $derived(maskOn && mask ? mask : result);
	const resultUrl = $derived(shown ? cachedDataUrl(shown) : null);
	const resultDims = $derived(
		resultKind === "image" && result
			? `${result.width} × ${result.height}`
			: undefined,
	);

	let parts = $derived(
		resultKind === "files" && fileResult ? fileResult.files.length : undefined,
	);
	// NOTE: All parts share the same size (canvas is padded); show it once.
	let partsDims = $derived(
		resultKind === "files" && fileResult && fileResult.files.length > 0
			? `${fileResult.files[0].image.width} × ${fileResult.files[0].image.height}`
			: undefined,
	);
	const resultSize = $derived(
		resultKind === "files" && fileResult && fileResult.files.length > 0
			? fileResult.files[0].image
			: resultKind === "image"
				? shown
				: null,
	);
</script>

<PreviewTile
	label={t("resultCard.result")}
	viewMode={resultKind}
	loading={running}
	{parts}
	{partsDims}
	dims={resultDims}
	width={resultSize?.width}
	height={resultSize?.height}
	note={resultNote ? t(resultNote.key) : undefined}
	noteTone={resultNote?.tone ?? "warning"}
	{warnings}
	{errors}
>
	{#snippet actions()}
		{#if ontogglemask}
			<ChipButton
				label={t("resultCard.maskToggle")}
				active={maskOn}
				onclick={ontogglemask}
			/>
		{/if}
	{/snippet}
	<div class="canvas" class:checker={resultKind === "image"}>
		{#if resultKind === "text" && textResult}
			<div class="text-result-wrap">
				<SchemaTextResult
					value={textResult}
					kind="text"
					oncopy={oncopy ?? (() => {})}
					ondownload={ondownloadtxt ?? (() => {})}
				/>
			</div>
		{:else if resultKind === "verdict" && textResult}
			<div class="text-result-wrap">
				<SchemaTextResult
					value={textResult}
					kind="verdict"
					vars={textVars}
					{toolId}
					oncopy={oncopy ?? (() => {})}
					ondownload={ondownloadtxt ?? (() => {})}
				/>
			</div>
		{:else if resultKind === "files" &&
			fileResult &&
			fileResult.files.length > 0}
			<PartsGrid files={fileResult.files} />
		{:else if running && preview}
			<PreviewCanvas canvas={preview.canvas} source={preview.image} />
		{:else if resultKind === "image" && resultUrl}
			<img
				data-testid="result-image"
				src={resultUrl}
				alt={t("resultCard.alt")}
			/>
		{:else if running}
			<span aria-hidden="true"></span>
		{:else}
			<span data-testid="empty-state" class="empty"
				>{t("resultCard.noResult")}</span
			>
		{/if}
	</div>
</PreviewTile>

<style>
	.canvas {
		display: flex;
		align-items: center;
		justify-content: center;
		/* NOTE: Nested in PreviewTile.canvas: it carries the border and the
		   height, this box only stretches so the parts grid fills the tile. */
		width: 100%;
		align-self: stretch;
		flex-grow: 1;
		min-height: 0;
		overflow: auto;
		color: var(--color-text-muted);
	}
	.canvas img {
		width: auto;
		max-width: 100%;
		height: auto;
		max-height: 100%;
		object-fit: contain;
		display: block;
	}
	.canvas.checker {
		background:
			repeating-conic-gradient(
				var(--color-checker-main) 0 25%,
				var(--color-checker-alt) 0 50%
			)
			50% / 28px 28px;
	}
	.empty {
		font: var(--font-size-s) var(--font-mono);
	}
	.text-result-wrap {
		width: 100%;
		padding: var(--space-l);
		box-sizing: border-box;
	}
</style>
