<script lang="ts">
	import { resolve } from "$app/paths";
	import type { Snippet } from "svelte";
	import type { CategoryId } from "$lib/categories";
	import { t } from "$lib/i18n/t";

	interface Props {
		label: string;
		count: number;
		/** Category of the group; the heading becomes a link to its hub page. */
		category?: CategoryId;
		children: Snippet;
	}
	let { label, count, category, children }: Props = $props();

	const href = $derived(
		category ? resolve("/categories/[category]", { category }) : undefined,
	);
</script>

<section class="catalog-group">
	<div class="group-title">
		{#if href}
			<h2><a {href}>{label}</a></h2>
		{:else}
			<h2>{label}</h2>
		{/if}
		<i>{count.toString().padStart(2, "0")} <!-- --> {t("catalog.toolsCount")}</i
		>
	</div>
	<div class="tool-cards">
		{@render children()}
	</div>
</section>

<style>
	.catalog-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}
	.group-title {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--space-xl);
		padding-bottom: var(--space-m);
		border-bottom: var(--size-border) solid var(--color-border);
	}
	.group-title h2 {
		margin: 0;
		font: var(--font-size-s) var(--font-mono);
		letter-spacing: var(--space-text-xl);
		text-transform: uppercase;
		color: var(--color-text);
	}
	.group-title h2 a {
		color: inherit;
		text-decoration: none;
	}
	.group-title h2 a:hover {
		color: var(--color-main);
	}
	.group-title i {
		font: var(--font-size-s) var(--font-mono);
		font-style: normal;
		letter-spacing: var(--space-text-l);
		color: var(--color-text-muted);
	}
	.tool-cards {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-m);
	}
</style>
