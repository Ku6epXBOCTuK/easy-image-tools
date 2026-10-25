import { readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { CATEGORY_IDS } from "../categories";
import { PAGES } from "../registry";
import { en } from "./en";
import { SITE_PAGE_IDS } from "./seo-copy";

const I18N_DIR = fileURLToPath(new URL("./", import.meta.url));

function jsonNames(dir: string): string[] {
	return readdirSync(join(I18N_DIR, dir))
		.filter((name) => name.endsWith(".json"))
		.map((name) => name.slice(0, -".json".length))
		.sort();
}

function words(text: string): number {
	return text.split(/\s+/).filter((word) => word.length > 0).length;
}

const TOOL_FILES = jsonNames("tools/en");
const HUB_FILES = jsonNames("category-hubs/en");
const SITE_FILES = jsonNames("site/en");

describe("seo copy files", () => {
	it("every file is indexed in the dict (the glob picked it up)", () => {
		const pages = Object.keys(en.pages ?? {});
		const hubs = Object.keys(en.categoryHubs ?? {});
		const site = Object.keys(en.site ?? {});
		expect(
			TOOL_FILES.filter((slug) => !pages.includes(slug)),
			"copy file not reachable through en.pages",
		).toEqual([]);
		expect(
			HUB_FILES.filter((id) => !hubs.includes(id)),
			"hub copy file not reachable through en.categoryHubs",
		).toEqual([]);
		expect(
			SITE_FILES.filter((id) => !site.includes(id)),
			"site copy file not reachable through en.site",
		).toEqual([]);
	});

	it("the site files are exactly the known fixed pages", () => {
		expect(SITE_FILES).toEqual([...SITE_PAGE_IDS].sort());
	});

	it("every tool copy file points at a real page", () => {
		const slugs = new Set<string>(PAGES.map((page) => page.slug));
		const bogus = TOOL_FILES.filter((slug) => !slugs.has(slug));
		expect(bogus, `no such page: ${bogus.join(", ")}`).toEqual([]);
	});

	it("every hub copy file points at a real category", () => {
		const categories = new Set<string>(CATEGORY_IDS as readonly string[]);
		const bogus = HUB_FILES.filter((id) => !categories.has(id));
		expect(bogus, `no such category: ${bogus.join(", ")}`).toEqual([]);
	});

	it("the dict index has no key without a file behind it", () => {
		const files = new Set<string>(TOOL_FILES);
		const orphan = Object.keys(en.pages ?? {}).filter((key) => !files.has(key));
		expect(orphan, `no copy file for: ${orphan.join(", ")}`).toEqual([]);
	});
});

describe("seo copy content", () => {
	// NOTE: The robots tag follows the presence of the `seo` block, so a stub block
	// would index a thin page. Same gates as schema-tool-strings.test.ts, kept
	// here so the layer is self-sufficient (docs/plan-seo.md, S2a).
	it.each(TOOL_FILES)("%s has a full seo block", (slug) => {
		const seo = en.pages?.[slug]?.seo;
		expect(seo, `${slug}: no seo block`).toBeDefined();
		if (!seo) return;
		expect(seo.metaTitle.length, `${slug} metaTitle`).toBeGreaterThan(20);
		expect(
			seo.metaDescription.length,
			`${slug} metaDescription`,
		).toBeGreaterThan(70);
		expect(
			seo.longDescription.length,
			`${slug} longDescription`,
		).toBeGreaterThan(200);
		expect(seo.howTo.length, `${slug} howTo`).toBeGreaterThanOrEqual(3);
		expect(seo.faq.length, `${slug} faq`).toBeGreaterThanOrEqual(3);
		expect(seo.facts.length, `${slug} facts count`).toBeGreaterThanOrEqual(3);
		expect(seo.facts.length, `${slug} facts count`).toBeLessThanOrEqual(6);
		for (const [index, fact] of seo.facts.entries()) {
			expect(fact.length, `${slug} fact ${index}`).toBeGreaterThanOrEqual(15);
		}
	});

	it.each(HUB_FILES)("hub %s has landing-page copy", (id) => {
		const hub = en.categoryHubs?.[id];
		expect(hub, `${id}: no hub copy`).toBeDefined();
		if (!hub) return;
		expect(hub.heading.length, `${id} heading`).toBeGreaterThan(3);
		expect(hub.metaTitle.length, `${id} metaTitle`).toBeGreaterThan(20);
		expect(hub.paragraphs.length, `${id} paragraphs`).toBeGreaterThanOrEqual(2);
		const total = hub.paragraphs.reduce((n, text) => n + words(text), 0);
		expect(total, `${id} total words`).toBeGreaterThanOrEqual(120);
	});

	it.each(SITE_PAGE_IDS)("site %s has SERP copy", (id) => {
		const copy = en.site?.[id];
		expect(copy, `${id}: no site copy`).toBeDefined();
		if (!copy) return;
		expect(copy.metaTitle.length, `${id} metaTitle`).toBeGreaterThan(20);
		expect(
			copy.metaDescription.length,
			`${id} metaDescription`,
		).toBeGreaterThan(70);
	});
});
