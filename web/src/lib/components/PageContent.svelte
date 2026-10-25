<script lang="ts">
	import { relatedPages } from "$lib/catalog";
	import ToolCard from "$lib/components/catalog/ToolCard.svelte";
	import {
		pageDescription,
		pageSeo,
		pageTitle,
	} from "$lib/i18n/schema-tool-strings";
	import { t } from "$lib/i18n/t";
	import type { PageMeta } from "$lib/catalog";
	import { toolIcon } from "$lib/tool-icons";

	interface Props {
		page: PageMeta;
	}
	let { page }: Props = $props();

	const seo = $derived(pageSeo(page));
	const related = $derived(relatedPages(page, 6));
</script>

<!-- NOTE: The copy sits below the tool, not above it: the workspace is what
     the visitor came for, the copy is here to rank and to answer questions
     without a scroll. -->
{#if seo}
	<section class="content">
		<p class="long">{seo.longDescription}</p>

		{#if seo.facts.length}
			<ul class="facts">
				{#each seo.facts as fact (fact)}
					<li>{fact}</li>
				{/each}
			</ul>
		{/if}

		<h2>{t("toolPage.howToHeading")}</h2>
		<ol class="steps">
			{#each seo.howTo as step (step)}
				<li>{step}</li>
			{/each}
		</ol>

		<h2>{t("toolPage.faqHeading")}</h2>
		<div class="faq">
			{#each seo.faq as item (item.q)}
				<details>
					<summary>{item.q}</summary>
					<p>{item.a}</p>
				</details>
			{/each}
		</div>

		<!-- NOTE: Internal links: the only way a crawler reaches the neighbours
		     of this page, so the block stays derived from the category, never a
		     hand-picked list. -->
		<h2>{t("toolPage.relatedHeading")}</h2>
		<div class="related">
			{#each related as item (item.slug)}
				<ToolCard
					title={pageTitle(item)}
					slug={item.slug}
					description={pageDescription(item)}
					icon={toolIcon(item.slug)}
				/>
			{/each}
		</div>
	</section>
{/if}

<style>
	.content {
		max-width: var(--size-content-prose);
		margin: 0 auto var(--space-xxl);
		padding: clamp(var(--space-xl), 4vw, var(--space-xxxl))
			clamp(var(--space-m), 4vw, var(--space-xxxl));
		border: var(--size-border) solid var(--color-border);
		background: var(--color-panel);
	}
	.long {
		max-width: var(--size-content-measure);
		margin: 0 0 var(--space-xxl);
		color: var(--color-text);
		font-size: var(--font-size-l);
		line-height: 1.65;
	}
	.facts {
		max-width: var(--size-content-measure);
		margin: 0;
		padding-left: var(--space-xxl);
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
		color: var(--color-text-muted);
		font-size: var(--font-size-m);
		line-height: 1.6;
	}
	h2 {
		margin: var(--space-xxxl) 0 var(--space-l);
		font-size: var(--font-size-xl);
		line-height: 1.2;
		color: var(--color-text);
	}
	.steps {
		max-width: var(--size-content-measure);
		margin: 0;
		padding-left: var(--space-xxl);
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
		color: var(--color-text);
		font-size: var(--font-size-m);
		line-height: 1.6;
	}
	.faq {
		display: flex;
		flex-direction: column;
		border-top: var(--size-border) solid var(--color-border);
	}
	details {
		border-bottom: var(--size-border) solid var(--color-border);
	}
	summary {
		padding: var(--space-l) 0;
		color: var(--color-text);
		font-size: var(--font-size-m);
		font-weight: 600;
		cursor: pointer;
	}
	details p {
		margin: 0 0 var(--space-l);
		max-width: var(--size-content-measure);
		color: var(--color-text-muted);
		font-size: var(--font-size-m);
		line-height: 1.6;
	}
	.related {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--space-l);
	}
	@media (--bp-tablet) {
		.long {
			font-size: var(--font-size-m);
		}
		.related {
			grid-template-columns: 1fr;
		}
	}
</style>
