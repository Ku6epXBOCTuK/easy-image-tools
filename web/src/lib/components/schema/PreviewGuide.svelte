<script lang="ts">
	import type { ToolGuide } from "$lib/registry";

	interface Props {
		guide: ToolGuide;
		source: { width: number; height: number };
	}
	let { guide, source }: Props = $props();

	const box = $derived({
		left: `${(guide.x / source.width) * 100}%`,
		top: `${(guide.y / source.height) * 100}%`,
		width: `${(guide.width / source.width) * 100}%`,
		height: `${(guide.height / source.height) * 100}%`,
	});
</script>

<span
	class="guide"
	aria-hidden="true"
	style:left={box.left}
	style:top={box.top}
	style:width={box.width}
	style:height={box.height}
></span>

<style>
	.guide {
		position: absolute;
		border: var(--size-border-thick) solid var(--color-main);
		box-shadow: 0 0 0 100vmax var(--color-scrim);
		pointer-events: none;
	}
</style>
