<script lang="ts">
	import { PREVIEW_TOTAL } from "$lib/catalog";
	import ToolCard from "$lib/components/catalog/ToolCard.svelte";
	import EmptyState from "$lib/components/feedback/EmptyState.svelte";
	import JsonLd from "$lib/components/JsonLd.svelte";
	import ToolSearchField from "$lib/components/search/ToolSearchField.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import { favPages } from "$lib/favorites.svelte";
	import {
		pageDescription,
		pageTitle,
		pickFeaturedPages,
		searchPagesRanked,
		siteSeo,
	} from "$lib/i18n/schema-tool-strings";
	import { t } from "$lib/i18n/t";
	import { PAGES } from "$lib/registry";
	import { siteSchemaLd } from "$lib/seo";
	import { toolIcon } from "$lib/tool-icons";
	import { Search } from "@lucide/svelte";

	let query = $state("");

	// NOTE: The home surface sells the search, not the catalog: exactly a handful
	// of cards in every state - the full listing lives in /list-tools.
	const TOP_MATCHES = 6;

	// NOTE: Favorites are a resume hint, not the showcase: at most two, so the
	// remaining slots stay with the best general tools.
	const MAX_FAVORITES = 2;

	const searching = $derived(query.trim().length > 0);

	const favSlugs = $derived(new Set(favPages(PAGES).map((p) => p.slug)));

	// NOTE: With an empty query favorites cap the first slots and general tools
	// fill the rest; while searching, favorites compete through the ranking.
	const results = $derived(
		searching
			? searchPagesRanked(PAGES, query).slice(0, TOP_MATCHES)
			: pickFeaturedPages(PAGES, favSlugs, TOP_MATCHES, MAX_FAVORITES),
	);
</script>

<Seo
	title={siteSeo("home")?.metaTitle ?? t("home.defaultTitle")}
	description={siteSeo("home")?.metaDescription ?? t("home.heroLead")}
	path="/"
/>
<JsonLd data={siteSchemaLd(t("brand"))} />

<div class="home-page">
	<header class="home-hero">
		<output
			class="home-total"
			aria-label={`${PREVIEW_TOTAL} ${t("catalog.toolsAvailable")}`}
		>
			<b>{PREVIEW_TOTAL}</b>
			<span>{t("catalog.toolsAvailable")}</span>
		</output>
		<h1>{t("home.heroTitle")}</h1>
		<p>{t("home.heroLead")}</p>
		<div class="home-search">
			<ToolSearchField bind:query variant="hero" />
		</div>
		<p class="home-hint">{t("search.hint")}</p>
	</header>

	<div class="home-results">
		{#if results.length > 0}
			<div class="home-grid">
				{#each results as page, i (page.slug)}
					<ToolCard
						title={pageTitle(page)}
						slug={page.slug}
						description={pageDescription(page)}
						index={i + 1}
						icon={toolIcon(page.slug)}
						size="feature"
					/>
				{/each}
			</div>
		{:else if searching}
			<EmptyState icon={Search} title={t("search.nothingFound")} />
		{/if}
	</div>

	<footer class="home-footer">{t("header.footerNote")}</footer>
</div>

<style>
	.home-page {
		padding: var(--space-page-top)
			clamp(var(--space-xxl), 4vw, var(--space-page-bottom))
			var(--space-page-bottom);
		display: flex;
		flex-direction: column;
	}
	.home-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-l);
		padding-top: var(--space-xxl);
	}
	.home-total {
		display: inline-flex;
		align-items: baseline;
		gap: var(--space-m);
		font: var(--font-size-xs) var(--font-mono);
		letter-spacing: var(--space-text-l);
		text-transform: uppercase;
		color: var(--color-text-muted);
	}
	.home-total b {
		font: 700 var(--font-size-s) var(--font-mono);
		color: var(--color-text);
	}
	.home-hero h1 {
		margin: 0;
		font-size: var(--font-size-2xl);
		font-weight: 700;
		color: var(--color-text);
	}
	.home-hero > p {
		margin: 0;
		max-width: 56ch;
		color: var(--color-text-muted);
		font-size: var(--font-size-m);
	}
	.home-search {
		width: 100%;
		max-width: var(--size-content-measure);
		margin-top: var(--space-m);
	}
	.home-hint {
		margin: 0;
		font: var(--font-size-xs) var(--font-mono);
		letter-spacing: var(--space-text-l);
		color: var(--color-text-muted);
	}
	.home-results {
		display: grid;
		gap: var(--space-page-top);
		margin-top: var(--space-page-top);
		width: 100%;
		max-width: var(--size-content-prose);
		margin-inline: auto;
	}
	.home-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-m);
	}
	@media (--bp-mobile) {
		.home-grid {
			grid-template-columns: 1fr;
		}
	}
	.home-footer {
		display: flex;
		gap: var(--space-xxl);
		flex-wrap: wrap;
		margin-top: auto;
		padding-top: var(--space-page-top);
		border-top: var(--size-border) solid var(--color-border);
		font: var(--font-size-xs) var(--font-mono);
		letter-spacing: var(--space-text-l);
		color: var(--color-text-muted);
	}
</style>
