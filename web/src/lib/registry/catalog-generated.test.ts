import { describe, expect, it } from "vitest";
import { CATALOG } from "./catalog.generated";
import { PAGES } from "./index";

describe("catalog.generated", () => {
	it("mirrors PAGES one-to-one in the same order", () => {
		expect(CATALOG).toHaveLength(PAGES.length);
	});

	it("carries the page meta plus the first step id", () => {
		PAGES.forEach((page, index) => {
			const meta = CATALOG[index];
			expect(meta.slug).toBe(page.slug);
			expect(meta.title).toBe(page.title);
			expect(meta.description).toBe(page.description);
			expect(meta.category).toBe(page.category);
			expect(meta.firstStepId).toBe(page.steps[0].id);
		});
	});
});
