<script lang="ts">
	import { previewDataUrl } from "$lib/core/preview";
	import type { PixelImage } from "$lib/core/types";
	import type { CanvasPreview } from "$lib/registry";

	interface Props {
		canvas: CanvasPreview;
		source: PixelImage;
	}
	let { canvas, source }: Props = $props();

	const url = $derived(previewDataUrl(source));
	const frame = $derived({
		ratio: `${canvas.width} / ${canvas.height}`,
		left: `${(canvas.left / canvas.width) * 100}%`,
		top: `${(canvas.top / canvas.height) * 100}%`,
		width: `${(source.width / canvas.width) * 100}%`,
		height: `${(source.height / canvas.height) * 100}%`,
		rotate:
			canvas.angle === undefined ? undefined : `rotate(${canvas.angle}deg)`,
	});
</script>

<div class="canvas" style:aspect-ratio={frame.ratio}>
	<img
		src={url}
		alt=""
		style:left={frame.left}
		style:top={frame.top}
		style:width={frame.width}
		style:height={frame.height}
		style:transform={frame.rotate}
	/>
</div>

<style>
	.canvas {
		position: relative;
		width: 100%;
		max-height: 60vh;
		overflow: hidden;
		background:
			repeating-conic-gradient(
				var(--color-checker-main) 0 25%,
				var(--color-checker-alt) 0 50%
			)
			50% / 28px 28px;
	}
	.canvas img {
		position: absolute;
		display: block;
	}
</style>
