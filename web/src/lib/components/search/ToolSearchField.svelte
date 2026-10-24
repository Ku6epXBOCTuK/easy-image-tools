<script lang="ts">
	import { Search } from "@lucide/svelte";
	import { t } from "$lib/i18n/t";

	// NOTE: The field owns only the input; filtering state and result rendering
	// stay with the consumer, so the same logic feeds different layouts (home
	// hero, catalog toolbar, later the pipeline picker).
	interface Props {
		query: string;
		variant?: "hero" | "compact";
	}
	let { query = $bindable(), variant = "compact" }: Props = $props();
</script>

<label class="tool-search" data-variant={variant}>
	<Search size={variant === "hero" ? 28 : 16} />
	<input
		aria-label={t("search.aria")}
		placeholder={t("search.placeholder")}
		bind:value={query}
	/>
</label>

<style>
	.tool-search {
		display: inline-flex;
		align-items: center;
		gap: var(--space-m);
		padding: var(--space-m) var(--space-l);
		border: var(--size-border) solid var(--color-border);
		border-radius: var(--radius-m);
		background: var(--color-panel);
		color: var(--color-text-muted);
	}
	.tool-search input {
		border: none;
		background: transparent;
		outline: none;
		color: var(--color-text);
		font: var(--font-size-s) var(--font-mono);
		/* NOTE: Grow only inside stretched containers (grid/flex); the toolbar
		   label shrinks to content, so the natural input size wins there. */
		flex: 1 1 auto;
		min-width: 0;
	}
	.tool-search input::placeholder {
		color: var(--color-text-muted);
	}
	.tool-search[data-variant="hero"] {
		display: flex;
		width: 100%;
		padding: var(--space-xxl) var(--space-xxxl);
	}
	.tool-search[data-variant="hero"] input {
		font: var(--font-size-2xl) var(--font-mono);
	}
	.tool-search[data-variant="hero"]:focus-within {
		border-color: var(--color-main);
	}
</style>
