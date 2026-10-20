<script lang="ts">
	import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
	import EmptyState from "$lib/components/feedback/EmptyState.svelte";
	import JsonLd from "$lib/components/JsonLd.svelte";
	import PageContent from "$lib/components/PageContent.svelte";
	import SchemaToolView from "$lib/components/schema/SchemaToolView.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import { categoryHubPath } from "$lib/i18n/category-hubs";
	import {
		isPageIndexable,
		pageMetaDescription,
		pageMetaTitle,
		pageSeo,
		pageTitle,
	} from "$lib/i18n/schema-tool-strings";
	import { t } from "$lib/i18n/t";
	import { toolSchemaLd } from "$lib/seo";
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
	<JsonLd
		data={toolSchemaLd({
			title: pageTitle(page),
			description: pageMetaDescription(page),
			path: `/tools/${page.slug}`,
			faq: pageSeo(page)?.faq ?? [],
			crumbs: [
				{ name: t("toolPage.breadcrumbCatalog"), path: "/list-tools" },
				{
					name: t(`categories.${page.category}`),
					path: categoryHubPath(page.category),
				},
				{ name: pageTitle(page) },
			],
		})}
	/>
{/if}
<!-- NOTE: Indexable exactly when the page has EN copy; the list is derived, so
     a page is never indexed with a stub and never missed when copy lands. -->
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
	<Breadcrumbs {page} />
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
