<script lang="ts">
	import { previewDataUrl } from "$lib/core/preview";
	import type { ToolImageFile } from "$lib/registry";

	interface Props {
		files: ToolImageFile[];
	}
	let { files }: Props = $props();

	const parts = $derived(
		files.map((file) => ({ name: file.name, url: previewDataUrl(file.image) })),
	);
</script>

<div class="parts-wrap">
	<div class="parts-grid">
		{#each parts as part (part.name)}
			<figure class="part">
				<div class="part-frame">
					<img src={part.url} alt={part.name} loading="lazy" />
				</div>
				<figcaption>{part.name}</figcaption>
			</figure>
		{/each}
	</div>
</div>

<style>
	/* NOTE: Own scrollbox: usable inside any tile without extra canvas classes. */
	.parts-wrap {
		width: 100%;
		max-height: 60vh;
		overflow: auto;
		align-self: flex-start;
	}
	.parts-grid {
		display: grid;
		grid-template-columns: repeat(
				auto-fill,
				minmax(var(--size-parts-grid-min), 1fr)
			);
		gap: var(--space-m);
		width: 100%;
		padding: var(--space-l);
		box-sizing: border-box;
		align-content: start;
		align-items: start;
	}
	.part {
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-s);
	}
	/* NOTE: Square cell: file proportions stay inside one grid, so a 1x4000
		 strip cannot stretch the row. */
	.part-frame {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		aspect-ratio: 1;
		box-sizing: border-box;
		overflow: hidden;
		border: var(--size-border) solid var(--color-border);
		border-radius: var(--radius-s);
		background:
			repeating-conic-gradient(
				var(--color-checker-main) 0 25%,
				var(--color-checker-alt) 0 50%
			)
			50% / 16px 16px;
	}
	.part img {
		width: auto;
		height: auto;
		max-width: 100%;
		max-height: 100%;
		display: block;
		object-fit: contain;
		object-position: center;
	}
	.part figcaption {
		font: var(--font-size-s) var(--font-mono);
		color: var(--color-text-muted);
		text-align: center;
		overflow-wrap: anywhere;
	}
</style>
