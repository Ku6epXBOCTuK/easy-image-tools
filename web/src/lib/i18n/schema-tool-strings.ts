import type { Page } from "$lib/registry";
import { PAGES } from "../registry";
import type { ChainWarning } from "$lib/run-chain";
import type { Field } from "$lib/registry-schema";
import type { SeoContent, SiteSeo } from "./dict";
import { getMergedDict } from "./locale.svelte";
import { normalizeForSearch, scoreDoc, type SearchDoc } from "./matching";
import { ru } from "./ru";
import { en } from "./en";
import type { SitePageId } from "./seo-copy";
import { interpolate, t } from "./t";

function labelOf(id: string): string {
	return id
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.replace(/[_-]+/g, " ")
		.replace(/\b\w/g, (c) => c.toUpperCase());
}

export function pageTitle(page: Page): string {
	return getMergedDict().pages?.[page.slug]?.title ?? page.title;
}

export function pageDescription(page: Page): string {
	return getMergedDict().pages?.[page.slug]?.description ?? page.description;
}

// NOTE: Long-form page copy, or undefined while a page has none.
export function pageSeo(page: Page): SeoContent | undefined {
	return getMergedDict().pages?.[page.slug]?.seo;
}

// NOTE: SERP copy of a fixed site page (home, catalog, pipelines), or undefined.
export function siteSeo(id: SitePageId): SiteSeo | undefined {
	return getMergedDict().site?.[id];
}

// NOTE: Indexability follows the content: having EN copy is the only signal, so no
// hand-maintained list can drift. Read from the base dict so that switching to
// RU (no `seo` block there yet) cannot flip the robots tag.
export function isPageIndexable(page: Page): boolean {
	return en.pages?.[page.slug]?.seo !== undefined;
}

// NOTE: SERP `<title>`; the brand prefix is only a fallback for pages without copy.
export function pageMetaTitle(page: Page): string {
	const brand = t("brand");
	return (
		getMergedDict().pages?.[page.slug]?.seo?.metaTitle ??
		`${brand} / ${pageTitle(page)}`
	);
}

// NOTE: SERP meta description; falls back to the registry description.
export function pageMetaDescription(page: Page): string {
	return (
		getMergedDict().pages?.[page.slug]?.seo?.metaDescription ??
		pageDescription(page)
	);
}

// NOTE: Step title for chain UIs: the owning page title, else the raw tool id.
export function chainStepTitle(toolId: string): string {
	const owner = PAGES.find((p) => p.steps[0].id === toolId);
	return owner ? pageTitle(owner) : toolId;
}

export function fieldLabel(field: Field<unknown>, id: string): string {
	const key = (field.spec as { label?: string }).label;
	if (key) {
		const translated = t(key);
		if (translated !== key) return translated;
	}
	return labelOf(id);
}

export function groupLabel(title: string): string {
	return t(title);
}

// NOTE: Select option label: dict `tools[id].options[fieldId][value]`, fallback
// is the schema label.
export function optionLabel(
	toolId: string,
	fieldId: string,
	value: string,
	fallback: string,
): string {
	return getMergedDict().tools[toolId]?.options?.[fieldId]?.[value] ?? fallback;
}

export function verdictText(
	toolId: string,
	key: string,
	vars?: Record<string, string | number>,
): string {
	return interpolate(
		getMergedDict().tools[toolId]?.results?.[key] ?? key,
		vars,
	);
}

export function verdictTone(key: string): "success" | "danger" | "info" {
	if (/[Yy]es$|[Tt]rue$/.test(key)) return "success";
	if (/[Nn]o$|[Ff]alse$/.test(key)) return "danger";
	return "info";
}

// NOTE: Short label for a warning badge; detail holds the full message (popover).
export interface WarningNotice {
	label: string;
	detail: string;
}

// NOTE: Human-readable badge + popover text for a chain run/source warning.
export function chainWarningNotice(w: ChainWarning): WarningNotice {
	switch (w.kind) {
		case "partial":
			return {
				label: t("chain.warnPartialShort"),
				detail: t("chain.warnPartial", { n: w.step, ok: w.ok, total: w.total }),
			};
		case "firstOnly":
			return {
				label: t("chain.warnFirstOnlyShort"),
				detail: t("chain.warnFirstOnly", { n: w.step, total: w.total }),
			};
		case "sourceSkip":
			return {
				label: t("chain.warnSourceSkipShort"),
				detail: t("chain.warnSourceSkip", {
					skipped: w.skipped,
					total: w.total,
				}),
			};
		case "sizeLimitMiss":
			return {
				label: t("chain.warnSizeLimitMissShort"),
				detail: t("chain.warnSizeLimitMiss", {
					limit: w.limitKb,
					actual: w.actualKb,
				}),
			};
	}
}

function dedupe(values: string[]): string[] {
	return [...new Set(values.filter((v) => v.length > 0))];
}

export function pageSearchDoc(page: Page): SearchDoc {
	const active = getMergedDict().pages?.[page.slug];
	return {
		id: page.slug,
		titles: dedupe([
			active?.title ?? "",
			ru.pages?.[page.slug]?.title ?? "",
			page.title,
		]),
		descriptions: dedupe([
			active?.description ?? "",
			ru.pages?.[page.slug]?.description ?? "",
			page.description,
		]),
	};
}

// NOTE: Cross-language catalog search: scores via `scoreDoc` over `pageSearchDoc`
// (titles/descriptions of all locales). Catalog order is preserved,
// non-matching entries are dropped.
export function searchPages(pages: readonly Page[], query: string): Page[] {
	const q = normalizeForSearch(query.trim());
	if (q.length === 0) return [...pages];
	return pages.filter((page) => scoreDoc(pageSearchDoc(page), q) !== null);
}

// NOTE: Same scoring as `searchPages`, but the best match comes first (title
// prefix above infix above description); equal scores keep catalog order. For
// search-first surfaces where there is no catalog order to preserve.
export function searchPagesRanked(
	pages: readonly Page[],
	query: string,
): Page[] {
	const q = normalizeForSearch(query.trim());
	if (q.length === 0) return [...pages];
	const scored: { page: Page; index: number; score: number }[] = [];
	pages.forEach((page, index) => {
		const score = scoreDoc(pageSearchDoc(page), q);
		if (score !== null) scored.push({ page, index, score });
	});
	return scored
		.sort((a, b) => b.score - a.score || a.index - b.index)
		.map((entry) => entry.page);
}
