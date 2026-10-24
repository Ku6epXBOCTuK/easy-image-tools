import { afterEach, describe, expect, it } from "vitest";
import { PAGES } from "../registry";
import type { Page } from "../registry";
import { setLocale } from "./locale.svelte";
import { en } from "./en";
import { ru } from "./ru";
import {
	searchPages,
	searchPagesRanked,
	verdictText,
	isPageIndexable,
} from "./schema-tool-strings";

const YO = "\u0451";
const YE = "\u0435";

afterEach(() => {
	setLocale("ru");
});

const slugs = (pages: { slug: string }[]) => pages.map((page) => page.slug);

describe("searchPages (cross-locale catalog search)", () => {
	it("empty query returns the whole catalog", () => {
		expect(searchPages(PAGES, "")).toHaveLength(PAGES.length);
		expect(searchPages(PAGES, "   ")).toHaveLength(PAGES.length);
	});

	it("finds the ru title while the locale is en", () => {
		setLocale("en");
		// NOTE: Query derived from the ru title
		const cropQuery = (ru.pages?.["crop-png"]?.title ?? "")
			.toLowerCase()
			.slice(0, 5);
		expect(slugs(searchPages(PAGES, cropQuery))).toContain("crop-png");
		// NOTE: Two middle words of the ru title (verb, X, Y, PNG)
		const trimQuery = (ru.pages?.["trim-empty-space-png"]?.title ?? "")
			.toLowerCase()
			.split(" ")
			.slice(1, 3)
			.join(" ");
		expect(slugs(searchPages(PAGES, trimQuery))).toContain(
			"trim-empty-space-png",
		);
	});

	it("finds the en title while the locale is ru", () => {
		expect(slugs(searchPages(PAGES, "resize"))).toContain("resize-png");
		expect(slugs(searchPages(PAGES, "round corners"))).toContain(
			"round-corners-png",
		);
	});

	it("finds by slug (address text)", () => {
		expect(slugs(searchPages(PAGES, "crop png"))).toContain("crop-png");
	});

	it("yo and ye spellings are one query", () => {
		// NOTE: Query with U+0451 derived from the ru grayscale title, then folded to U+0435
		const qYo = (ru.pages?.["grayscale-png"]?.title ?? "")
			.split(" ")[0]
			.slice(0, 5);
		expect(qYo).toContain(YO);
		const qYe = qYo.replaceAll(YO, YE);
		expect(slugs(searchPages(PAGES, qYo))).toEqual(
			slugs(searchPages(PAGES, qYe)),
		);
	});

	it("no match returns an empty list", () => {
		expect(searchPages(PAGES, "zzz qqq")).toEqual([]);
	});
});

describe("searchPagesRanked (search-first ranking)", () => {
	// NOTE: Slugs are not in the dictionaries, so titles fall back to the registry
	// fields of the fixture itself.
	const fixture: Page[] = [
		{
			slug: "fixture-alpha",
			title: "Resize PNG",
			description: "first fixture",
			category: "geometry",
			steps: [{ id: "fixture-alpha" }],
		},
		{
			slug: "fixture-beta",
			title: "Image Resize Helper",
			description: "second fixture",
			category: "geometry",
			steps: [{ id: "fixture-beta" }],
		},
		{
			slug: "fixture-gamma",
			title: "Unrelated",
			description: "resize things",
			category: "geometry",
			steps: [{ id: "fixture-gamma" }],
		},
	];

	it("empty query keeps the input order", () => {
		expect(slugs(searchPagesRanked(fixture, ""))).toEqual([
			"fixture-alpha",
			"fixture-beta",
			"fixture-gamma",
		]);
	});

	it("ranks title prefix above infix above description", () => {
		expect(slugs(searchPagesRanked(fixture, "resize"))).toEqual([
			"fixture-alpha",
			"fixture-beta",
			"fixture-gamma",
		]);
	});

	it("keeps description-only matches and drops non-matching entries", () => {
		expect(slugs(searchPagesRanked(fixture, "unrelated"))).toEqual([
			"fixture-gamma",
		]);
		expect(searchPagesRanked(fixture, "zzz qqq")).toEqual([]);
	});

	it("equal scores keep the catalog order", () => {
		const tied: Page[] = fixture.map((page) => ({
			...page,
			title: "Same Title",
			description: "same words",
		}));
		expect(slugs(searchPagesRanked(tied, "same"))).toEqual([
			"fixture-alpha",
			"fixture-beta",
			"fixture-gamma",
		]);
	});
});

describe("SEO copy and indexability", () => {
	const withCopy = PAGES.filter((page) => en.pages?.[page.slug]?.seo);

	function words(text: string): number {
		return text.split(/\s+/).filter((word) => word.length > 0).length;
	}

	// NOTE: Copy is no longer partial: every registry page has a `seo` block, so the
	// guard here is only that the list is not empty (the `it.each` below must
	// not run on nothing). Content gates live in `seo-copy.test.ts`.
	it("the suite is not vacuous (a page with copy exists)", () => {
		expect(withCopy.length).toBeGreaterThan(0);
		expect(withCopy.length).toBeLessThanOrEqual(PAGES.length);
	});

	it("indexable iff the page has EN copy", () => {
		for (const page of PAGES) {
			expect(isPageIndexable(page), page.slug).toBe(
				en.pages?.[page.slug]?.seo !== undefined,
			);
		}
	});

	it("indexable pages keep the tag under a locale switch", () => {
		setLocale("ru");
		for (const page of withCopy) {
			expect(isPageIndexable(page), page.slug).toBe(true);
		}
	});

	// NOTE: The robots tag follows the presence of the `seo` block, so a stub block
	// would index a thin page. These are the gates of docs/plan-seo.md S2.
	it.each(withCopy.map((page) => [page.slug]))(
		"%s passes the content gate before it can be indexed",
		(slug) => {
			const seo = en.pages?.[slug]?.seo;
			if (!seo) throw new Error(`no copy for ${slug}`);
			expect(
				seo.longDescription.length,
				`${slug} longDescription`,
			).toBeGreaterThan(200);
			expect(seo.howTo.length, `${slug} howTo`).toBeGreaterThanOrEqual(3);
			expect(seo.faq.length, `${slug} faq`).toBeGreaterThanOrEqual(3);
			expect(seo.metaTitle.length, `${slug} metaTitle`).toBeGreaterThan(20);
			expect(seo.metaTitle.length, `${slug} metaTitle`).toBeLessThan(70);
			expect(
				seo.metaDescription.length,
				`${slug} metaDescription`,
			).toBeGreaterThan(70);
			expect(
				seo.metaDescription.length,
				`${slug} metaDescription`,
			).toBeLessThan(200);
			const total =
				words(seo.longDescription) +
				seo.howTo.reduce((n, step) => n + words(step), 0) +
				seo.faq.reduce((n, item) => n + words(item.q) + words(item.a), 0);
			expect(total, `${slug} total words`).toBeGreaterThanOrEqual(250);
		},
	);

	it("copy slugs point at real pages", () => {
		const known = new Set(slugs(PAGES));
		for (const slug of Object.keys(en.pages ?? {})) {
			if (en.pages?.[slug]?.seo) expect(known, slug).toContain(slug);
		}
	});
});

describe("verdictText (verdict with vars)", () => {
	it("interpolates {vars} in both locales", () => {
		setLocale("ru");
		expect(verdictText("file-size", "line", { kb: "12.3" })).toBe(
			(ru.tools["file-size"]?.results?.line ?? "").replace("{kb}", "12.3"),
		);
		setLocale("en");
		expect(verdictText("file-size", "line", { kb: "12.3" })).toBe(
			(en.tools["file-size"]?.results?.line ?? "").replace("{kb}", "12.3"),
		);
	});

	it("returns the key as-is when it is missing from the dictionary", () => {
		expect(verdictText("file-size", "no-such-key")).toBe("no-such-key");
	});

	it.each([
		["verify-png", "verifyYes"],
		["is-transparent", "transparentNo"],
		["orientation", "orientationLandscape"],
	])("translates verdict %s/%s in both locales", (toolId, key) => {
		const ruText = ru.tools[toolId]?.results?.[key];
		const enText = en.tools[toolId]?.results?.[key];
		expect(ruText, `${toolId}/${key} @ru dict`).toBeTruthy();
		expect(enText, `${toolId}/${key} @en dict`).toBeTruthy();
		expect(ruText).not.toBe(enText);
		setLocale("ru");
		expect(verdictText(toolId, key)).toBe(ruText);
		setLocale("en");
		expect(verdictText(toolId, key)).toBe(enText);
	});
});
