import { CATEGORY_IDS, type CategoryId } from "./categories";
import {
	CATALOG,
	type CatalogEntry,
	type PageMeta,
} from "./registry/catalog.generated";

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

// NOTE: Neighbors for the related block: same category in catalog order, topped
// up from the whole catalog because the `text` category alone holds too few.
export function relatedPages(page: PageMeta, count: number): PageMeta[] {
	const same = (
		PREVIEW_GROUPS.find((g) => g.id === page.category)?.pages ?? []
	).filter((candidate) => candidate.slug !== page.slug);
	if (same.length >= count) return same.slice(0, count);

	const others = CATALOG.filter(
		(candidate) =>
			candidate.slug !== page.slug && candidate.category !== page.category,
	);
	return [...same, ...others].slice(0, count);
}
