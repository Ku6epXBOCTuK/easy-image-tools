import { CATEGORY_IDS, type CategoryId } from "./categories";
import {
	CATALOG,
	type CatalogEntry,
	type PageMeta,
} from "./registry/catalog.generated";
import { popularityOf } from "./registry/popularity";

export { CATALOG };
export type { CatalogEntry, PageMeta };

export type PreviewGroup = {
	id: CategoryId;
	pages: PageMeta[];
};

export const PREVIEW_GROUPS: PreviewGroup[] = CATEGORY_IDS.map((category) => ({
	id: category,
	pages: CATALOG.filter((page) => page.category === category),
})).filter((group) => group.pages.length > 0);

export const PREVIEW_TOTAL = CATALOG.length;

export function getMetaBySlug(slug: string): PageMeta | undefined {
	return CATALOG.find((page) => page.slug === slug);
}

const CATALOG_ORDER = new Map(
	CATALOG.map((entry, index) => [entry.slug, index]),
);

// NOTE: Neighbors for the related block: popular pages first, same category
// ahead of the rest, because the `text` category alone holds too few. Ties keep
// catalog order (EIT-71 over the EIT-130 popularity map).
export function relatedPages(page: PageMeta, count: number): PageMeta[] {
	const ranked = (candidates: readonly PageMeta[]) =>
		candidates
			.map((candidate) => ({
				candidate,
				index: CATALOG_ORDER.get(candidate.slug) ?? 0,
			}))
			.sort(
				(a, b) =>
					popularityOf(b.candidate.slug) - popularityOf(a.candidate.slug) ||
					a.index - b.index,
			)
			.map((entry) => entry.candidate);

	const same = ranked(
		(PREVIEW_GROUPS.find((g) => g.id === page.category)?.pages ?? []).filter(
			(candidate) => candidate.slug !== page.slug,
		),
	);
	if (same.length >= count) return same.slice(0, count);

	const others = ranked(
		CATALOG.filter(
			(candidate) =>
				candidate.slug !== page.slug && candidate.category !== page.category,
		),
	);
	return [...same, ...others].slice(0, count);
}
