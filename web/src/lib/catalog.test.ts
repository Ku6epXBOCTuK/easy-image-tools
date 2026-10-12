import { describe, expect, it } from "vitest";
import { PREVIEW_GROUPS, PREVIEW_TOTAL, relatedPages } from "./catalog";
import { PAGES } from "./registry";

describe("preview catalog", () => {
	it("groups every page exactly once", () => {
		expect(PREVIEW_GROUPS.flatMap((group) => group.pages)).toHaveLength(
			PAGES.length,
		);
		expect(PREVIEW_TOTAL).toBe(PAGES.length);
	});
});

describe("relatedPages", () => {
	it("returns same-category pages first, without the page itself", () => {
		for (const page of PAGES) {
			const related = relatedPages(page, 4);
			expect(related.every((r) => r.slug !== page.slug)).toBe(true);
			const firstOtherCategory = related.findIndex(
				(r) => r.category !== page.category,
			);
			expect(
				related
					.slice(0, firstOtherCategory < 0 ? undefined : firstOtherCategory)
					.every((r) => r.category === page.category),
				`${page.slug}: category neighbors must come first`,
			).toBe(true);
		}
	});

	it("respects the requested count", () => {
		for (const page of PAGES) {
			expect(relatedPages(page, 3).length).toBeLessThanOrEqual(3);
		}
	});

	it("is deterministic (same input, same neighbors)", () => {
		for (const page of PAGES) {
			expect(relatedPages(page, 4)).toEqual(relatedPages(page, 4));
		}
	});

	it("gives enough neighbors for the related block", () => {
		const short = PAGES.filter((page) => relatedPages(page, 6).length < 3);
		expect(
			short.map((page) => page.slug),
			"pages with fewer than 3 related tools",
		).toEqual([]);
	});
});
