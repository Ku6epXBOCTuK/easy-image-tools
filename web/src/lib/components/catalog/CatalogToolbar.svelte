<script lang="ts">
	import { Funnel } from "@lucide/svelte";
	import ChipButton from "$lib/components/ui/ChipButton.svelte";
	import ToolSearchField from "$lib/components/search/ToolSearchField.svelte";
	import { t } from "$lib/i18n/t";

	interface Props {
		query: string;
		category: string;
	}
	let { query = $bindable(), category = $bindable() }: Props = $props();

	const FILTERS = [
		{ value: "all", label: t("categories.all") },
		{ value: "convert", label: t("categories.convert") },
		{ value: "alpha", label: t("categories.alpha") },
		{ value: "color", label: t("categories.color") },
		{ value: "geometry", label: t("categories.geometry") },
		{ value: "filters", label: t("categories.filters") },
		{ value: "text", label: t("categories.text") },
		{ value: "analyze", label: t("categories.analyze") },
		{ value: "generate", label: t("categories.generate") },
	];
</script>

<div class="catalog-toolbar">
	<ToolSearchField bind:query />
	<div class="catalog-filters">
		<Funnel size={15} />
		{#each FILTERS as f (f.value)}
			<ChipButton
				label={f.label}
				active={category === f.value}
				onclick={() => (category = f.value)}
			/>
		{/each}
	</div>
</div>

<style>
	.catalog-toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-xl);
		flex-wrap: wrap;
		padding: var(--space-xl) 0;
	}
	.catalog-filters {
		display: inline-flex;
		align-items: center;
		gap: var(--space-s);
		flex-wrap: wrap;
		color: var(--color-text-muted);
	}
</style>
