<script lang="ts">
	import { resolve } from "$app/paths";
	import { isCategoryId } from "$lib/categories";
	import ToolCard from "$lib/components/catalog/ToolCard.svelte";
	import EmptyState from "$lib/components/feedback/EmptyState.svelte";
	import JsonLd from "$lib/components/JsonLd.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import {
		categoryHub,
		categoryHubPages,
		categoryHubPath,
		isCategoryHubIndexable,
	} from "$lib/i18n/category-hubs";
	import { pageDescription, pageTitle } from "$lib/i18n/schema-tool-strings";
	import { t } from "$lib/i18n/t";
	import { breadcrumbSchemaLd } from "$lib/seo";
	import { toolIcon } from "$lib/tool-icons";
	import { SlidersHorizontal as ToolIcon } from "@lucide/svelte";

	interface Props {
		data: { category: string };
	}
	let { data }: Props = $props();

	const id = $derived(isCategoryId(data.category) ? data.category : null);
	const hub = $derived(id ? categoryHub(id) : undefined);
	const pages = $derived(id ? categoryHubPages(id) : []);
	const label = $derived(id ? t(`categories.${id}`) : "");
</script>

{#if id}
	<Seo
		title={hub?.metaTitle ?? `${label} tools — ${t("brand")}`}
		description={hub?.metaDescription ??
			t("categoryHub.fallbackDescription", { label })}
		path={categoryHubPath(id)}
	/>
	<JsonLd
		data={breadcrumbSchemaLd([
			{ name: t("toolPage.breadcrumbCatalog"), path: "/list-tools" },
			{ name: label },
		])}
	/>
{/if}
<!-- Same rule as tool pages: indexable exactly when the hub has EN copy. -->
<svelte:head>
	{#if !id}
		<title>{t("brand")} / {t("toolPage.fallbackTitle")}</title>
	{/if}
	<meta
		name="robots"
		content={id && isCategoryHubIndexable(id)
			? "index, follow"
			: "noindex, nofollow"}
	/>
</svelte:head>

{#if !id}
	<div class="hub">
		<EmptyState
			title={t("errors.notFound")}
			description={t("errors.pageUnknown", { slug: data.category })}
			icon={ToolIcon}
		/>
	</div>
{:else}
	<nav class="crumbs" aria-label={t("toolPage.breadcrumbAria")}>
		<a href={resolve("/list-tools")}>{t("toolPage.breadcrumbCatalog")}</a>
		<span aria-hidden="true">/</span>
		<span class="current" aria-current="page">{label}</span>
	</nav>

	<article class="hub">
		<h1>{t("categoryHub.heading", { label })}</h1>
		{#if hub}
			<div class="prose">
				{#each hub.paragraphs as paragraph (paragraph)}
					<p>{paragraph}</p>
				{/each}
			</div>
		{/if}
		<h2>{t("categoryHub.toolsHeading")}</h2>
		<div class="tool-cards">
			{#each pages as page, i (page.slug)}
				<ToolCard
					title={pageTitle(page)}
					slug={page.slug}
					description={pageDescription(page)}
					index={i + 1}
					icon={toolIcon(page.slug)}
				/>
			{/each}
		</div>
	</article>
{/if}

<style>
	.crumbs {
		display: flex;
		align-items: center;
		gap: var(--space-s);
		max-width: var(--size-content-max-wide);
		margin: 0 auto;
		padding: var(--space-xxxl) clamp(var(--space-m), 4vw, var(--space-xxxl)) 0;
		font: var(--font-size-s) var(--font-mono);
		color: var(--color-text-muted);
	}
	.crumbs a {
		color: var(--color-text-muted);
		text-decoration: none;
	}
	.crumbs a:hover {
		color: var(--color-main);
	}
	.current {
		color: var(--color-text);
	}
	.hub {
		max-width: var(--size-content-max-wide);
		margin: 0 auto;
		padding: var(--space-page-top)
			clamp(var(--space-xxl), 4vw, var(--space-page-bottom))
			var(--space-page-bottom);
	}
	h1 {
		margin: 0 0 var(--space-l);
		font-size: var(--font-size-2xl);
		font-weight: 700;
		color: var(--color-text);
	}
	h2 {
		margin: 0 0 var(--space-l);
		font: var(--font-size-s) var(--font-mono);
		letter-spacing: var(--space-text-xl);
		text-transform: uppercase;
		color: var(--color-text);
	}
	.prose {
		max-width: var(--size-content-prose);
		display: flex;
		flex-direction: column;
		gap: var(--space-l);
		margin-bottom: var(--space-xxxl);
	}
	.prose p {
		margin: 0;
		color: var(--color-text);
		font-size: var(--font-size-m);
		line-height: 1.65;
	}
	.tool-cards {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--space-m);
	}
	@media (--bp-tablet) {
		.tool-cards {
			grid-template-columns: 1fr;
		}
	}
</style>
