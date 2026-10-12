<script lang="ts">
	import EmptyState from "$lib/components/feedback/EmptyState.svelte";
	import PageContent from "$lib/components/PageContent.svelte";
	import SchemaToolView from "$lib/components/schema/SchemaToolView.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import {
		isPageIndexable,
		pageMetaDescription,
		pageMetaTitle,
	} from "$lib/i18n/schema-tool-strings";
	import { t } from "$lib/i18n/t";
	import { getPageBySlug, getTool } from "$lib/registry";
	import { SlidersHorizontal as ToolIcon } from "@lucide/svelte";

	interface Props {
		data: { slug: string };
	}
	let { data }: Props = $props();

	const page = $derived(getPageBySlug(data.slug));
	const tool = $derived(page ? getTool(page.steps[0].id) : undefined);
</script>

{#if page}
	<Seo
		title={pageMetaTitle(page)}
		description={pageMetaDescription(page)}
		path={`/tools/${page.slug}`}
	/>
{/if}
<!-- Indexable exactly when the page has EN copy: no hand-maintained list, so a
     page cannot be indexed with a stub and cannot be forgotten when copy lands. -->
<svelte:head>
	{#if !page}
		<title>{t("brand")} / {t("toolPage.fallbackTitle")}</title>
	{/if}
	<meta
		name="robots"
		content={page && isPageIndexable(page)
			? "index, follow"
			: "noindex, nofollow"}
	/>
</svelte:head>

{#if !page || !tool}
	<div class="notfound">
		<EmptyState
			title={t("errors.notFound")}
			description={t("errors.pageUnknown", { slug: data.slug })}
			icon={ToolIcon}
		/>
	</div>
{:else}
	<SchemaToolView {page} {tool} />
	<PageContent {page} />
{/if}

<style>
	.notfound {
		max-width: var(--size-content-max-wide);
		margin: 0 auto;
		padding: var(--space-page-top)
			clamp(var(--space-xxl), 4vw, var(--space-page-bottom))
			var(--space-page-bottom);
	}
</style>
