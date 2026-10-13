import { describe, expect, it } from "vitest";
import { CATEGORY_IDS } from "../categories";
import { en } from "./en";
import { categoryHubPath, isCategoryHubIndexable } from "./category-hubs";

/**
 * The robots tag on a hub follows the presence of EN copy, so a stub block
 * would index a thin page. Same contract as tool pages
 * (`schema-tool-strings.test.ts`), gate of docs/plan-seo.md S3c.
 */
describe("category hub copy", () => {
	const withCopy = CATEGORY_IDS.filter((id) => en.categoryHubs?.[id]);

	function words(text: string): number {
		return text.split(/\s+/).filter((word) => word.length > 0).length;
	}

	it("every category in the catalog has a hub", () => {
		expect(withCopy).toEqual([...CATEGORY_IDS]);
	});

	it("hub ids are real categories and paths are unique", () => {
		const paths = withCopy.map((id) => categoryHubPath(id));
		expect(new Set(paths).size).toBe(paths.length);
		for (const id of withCopy) {
			expect(categoryHubPath(id)).toBe(`/categories/${id}`);
		}
	});

	it("indexable iff the hub has EN copy", () => {
		for (const id of CATEGORY_IDS) {
			expect(isCategoryHubIndexable(id), id).toBe(
				en.categoryHubs?.[id] !== undefined,
			);
		}
	});

	it.each(withCopy.map((id) => [id]))(
		"%s passes the hub content gate before it can be indexed",
		(id) => {
			const hub = en.categoryHubs?.[id];
			if (!hub) throw new Error(`no hub copy for ${id}`);
			expect(hub.paragraphs.length, `${id} paragraphs`).toBeGreaterThanOrEqual(
				2,
			);
			expect(hub.heading.length, `${id} heading`).toBeGreaterThan(3);
			expect(hub.heading.length, `${id} heading`).toBeLessThan(60);
			expect(hub.metaTitle.length, `${id} metaTitle`).toBeGreaterThan(20);
			expect(hub.metaTitle.length, `${id} metaTitle`).toBeLessThan(70);
			expect(
				hub.metaDescription.length,
				`${id} metaDescription`,
			).toBeGreaterThan(70);
			expect(hub.metaDescription.length, `${id} metaDescription`).toBeLessThan(
				200,
			);
			const total = hub.paragraphs.reduce((n, text) => n + words(text), 0);
			expect(total, `${id} total words`).toBeGreaterThanOrEqual(120);
		},
	);

	it("paragraphs of one hub are not a template copy of another", () => {
		const opening = new Set(
			withCopy.map((id) => words(en.categoryHubs?.[id]?.paragraphs[0] ?? "")),
		);
		expect(opening.size).toBe(withCopy.length);
	});
});
