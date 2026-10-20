import { CATEGORY_IDS, type CategoryId } from "./categories";
import { PAGES, type Page } from "./registry";

export type PreviewGroup = {
	id: CategoryId;
	pages: Page[];
};

export const PREVIEW_GROUPS: PreviewGroup[] = CATEGORY_IDS.map((category) => ({
	id: category,
	pages: PAGES.filter((page) => page.category === category),
})).filter((group) => group.pages.length > 0);

export const PREVIEW_TOTAL = PAGES.length;

// NOTE: Neighbors for the related block: same category in catalog order, topped
// up from the whole catalog because the `text` category alone holds too few.
export function relatedPages(page: Page, count: number): Page[] {
	const same = (
		PREVIEW_GROUPS.find((g) => g.id === page.category)?.pages ?? []
	).filter((candidate) => candidate.slug !== page.slug);
	if (same.length >= count) return same.slice(0, count);

	const others = PAGES.filter(
		(candidate) =>
			candidate.slug !== page.slug && candidate.category !== page.category,
	);
	return [...same, ...others].slice(0, count);
}
