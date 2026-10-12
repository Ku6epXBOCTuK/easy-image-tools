<script lang="ts">
	import { resolve } from "$app/paths";
	import { pageTitle } from "$lib/i18n/schema-tool-strings";
	import { t } from "$lib/i18n/t";
	import type { Page } from "$lib/registry";
	import { ChevronRight } from "@lucide/svelte";

	interface Props {
		page: Page;
	}
	let { page }: Props = $props();

	const categoryLabel = $derived(t(`categories.${page.category}`));
	const title = $derived(pageTitle(page));
</script>

<!-- Middle crumb is plain text: a category has no address of its own until the
     category hubs land (docs/plan-seo.md S3c), then it becomes a link here. -->
<nav class="crumbs" aria-label={t("toolPage.breadcrumbAria")}>
	<a href={resolve("/list-tools")}>{t("toolPage.breadcrumbCatalog")}</a>
	<ChevronRight size={13} aria-hidden="true" />
	<span>{categoryLabel}</span>
	<ChevronRight size={13} aria-hidden="true" />
	<span class="current" aria-current="page">{title}</span>
</nav>

<style>
	.crumbs {
		display: flex;
		align-items: center;
		gap: var(--space-s);
		flex-wrap: wrap;
		max-width: var(--size-content-max-wide);
		padding: var(--space-xxxl) clamp(var(--space-m), 4vw, var(--space-xxxl)) 0;
		font: var(--font-size-s) var(--font-mono);
		color: var(--color-text-muted);
	}
	a {
		color: var(--color-text-muted);
		text-decoration: none;
	}
	a:hover {
		color: var(--color-main);
	}
	.current {
		color: var(--color-text);
	}
</style>
