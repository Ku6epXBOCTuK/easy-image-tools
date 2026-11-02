<script lang="ts">
	import { previewSize } from "$lib/core/preview";
	import type { CanvasPreview } from "$lib/registry";
	import { placementAttrs } from "./schema-preview-model";

	interface Props {
		canvas: CanvasPreview;
		source: { width: number; height: number };
		url: string;
	}
	let { canvas, source, url }: Props = $props();

	const box = $derived(placementAttrs(source, canvas));
	const size = $derived(previewSize(canvas.width, canvas.height));
</script>

<svg
	class="preview"
	width={size.width}
	height={size.height}
	viewBox={`0 0 ${canvas.width} ${canvas.height}`}
	aria-hidden="true"
>
	<image href={url} {...box} />
</svg>

<style>
	/* NOTE: Same rule as the result <img>: a pixel size of a thumbnail, capped by
	   the tile. Anything else makes the placeholder a different size than the
	   output it promises. */
	.preview {
		width: auto;
		max-width: 100%;
		height: auto;
		max-height: 100%;
		display: block;
	}
</style>
