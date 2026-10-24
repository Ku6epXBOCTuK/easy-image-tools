import { describe, expect, it } from "vitest";
import { PAGES } from ".";
import { POPULARITY, popularityOf } from "./popularity";

// NOTE: The compile-time Record<PageSlug, number> already forces every registry
// slug to exist; these tests keep the guarantee visible at runtime and pin the
// scale, so retuning cannot smuggle out-of-range values in.
describe("POPULARITY (static popularity map)", () => {
	it("covers every registry page exactly", () => {
		expect(Object.keys(POPULARITY).sort()).toEqual(
			PAGES.map((page) => page.slug).sort(),
		);
	});

	it("values stay on the 0-100 scale", () => {
		for (const value of Object.values(POPULARITY)) {
			expect(value).toBeGreaterThanOrEqual(0);
			expect(value).toBeLessThanOrEqual(100);
		}
	});

	it("popularityOf defaults to 0 for unknown slugs", () => {
		expect(popularityOf("no-such-slug")).toBe(0);
	});
});
