// SEO coverage report: which registry pages / category hubs still lack the
// locale copy (`pages.<slug>.seo`, `categoryHubs.<id>`) that makes them
// indexable
// Usage: pnpm --dir web check:seo [en|ru]

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = fileURLToPath(new URL("../src/lib/", import.meta.url));

async function loadRegistryPages() {
	const dir = join(ROOT, "registry", "pages");
	const slugs = [];
	for (const file of readdirSync(dir)) {
		if (!file.endsWith(".ts")) continue;
		const mod = await import(pathToFileURL(join(dir, file)).href);
		for (const value of Object.values(mod)) {
			if (Array.isArray(value)) {
				for (const page of value) slugs.push(page.slug);
			}
		}
	}
	return slugs;
}

// Long-form copy, read from the JSON files.
function loadCopy(locale) {
	const pages = {};
	const hubs = {};
	for (const [dir, target] of [
		[join(ROOT, "i18n", "tools", locale), pages],
		[join(ROOT, "i18n", "category-hubs", locale), hubs],
	]) {
		if (!existsSync(dir)) continue;
		for (const file of readdirSync(dir)) {
			if (!file.endsWith(".json")) continue;
			target[file.slice(0, -".json".length)] = JSON.parse(
				readFileSync(join(dir, file), "utf8"),
			);
		}
	}
	return { pages, categoryHubs: hubs };
}

function emptyFields(seo) {
	const gaps = [];
	if (!seo.metaTitle?.trim()) gaps.push("metaTitle");
	if (!seo.metaDescription?.trim()) gaps.push("metaDescription");
	if (!seo.longDescription?.trim()) gaps.push("longDescription");
	if (!seo.howTo?.length) gaps.push("howTo");
	if (!seo.faq?.length) gaps.push("faq");
	return gaps;
}

export function reportSeo(slugs, dict, categoryIds) {
	const pageGaps = [];
	for (const slug of slugs) {
		const entry = dict.pages?.[slug];
		if (!entry) {
			pageGaps.push(`${slug}: no pages.${slug} entry`);
			continue;
		}
		if (!entry.seo) {
			pageGaps.push(`${slug}: no seo block (noindex)`);
			continue;
		}
		const fields = emptyFields(entry.seo);
		if (fields.length > 0) pageGaps.push(`${slug}: seo.${fields.join(", ")}`);
	}

	const hubGaps = [];
	for (const id of categoryIds) {
		const hub = dict.categoryHubs?.[id];
		if (!hub) {
			hubGaps.push(`${id}: no categoryHubs.${id} (noindex)`);
			continue;
		}
		if (!hub.paragraphs?.length) hubGaps.push(`${id}: categoryHubs paragraphs`);
		if (!hub.metaTitle?.trim()) hubGaps.push(`${id}: categoryHubs metaTitle`);
		if (!hub.metaDescription?.trim())
			hubGaps.push(`${id}: categoryHubs metaDescription`);
	}

	return { pageGaps, hubGaps, total: slugs.length };
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
	const filter = (process.argv[2] ?? "").toLowerCase();
	if (filter !== "" && filter !== "en" && filter !== "ru") {
		console.error(`check-seo: unknown locale "${filter}" (expected en or ru)`);
		process.exitCode = 1;
	} else {
		const locales = filter === "" ? ["en", "ru"] : [filter];
		const { CATEGORY_IDS } = await import(
			pathToFileURL(join(ROOT, "categories.ts")).href
		);
		const slugs = await loadRegistryPages();

		for (const locale of locales) {
			const { pageGaps, hubGaps, total } = reportSeo(
				slugs,
				loadCopy(locale),
				CATEGORY_IDS,
			);

			console.log(
				`[${locale}] SEO pages: ${total - pageGaps.length}/${total} filled`,
			);
			if (pageGaps.length > 0) {
				console.log(`  page gaps (${pageGaps.length}):`);
				for (const gap of pageGaps) console.log(`    ${gap}`);
			}

			const hubsFilled = CATEGORY_IDS.length - hubGaps.length;
			console.log(
				`[${locale}] SEO hubs: ${hubsFilled}/${CATEGORY_IDS.length} filled`,
			);
			if (hubGaps.length > 0) {
				console.log(`  hub gaps (${hubGaps.length}):`);
				for (const gap of hubGaps) console.log(`    ${gap}`);
			}

			if (pageGaps.length === 0 && hubGaps.length === 0) {
				console.log(`[${locale}] all SEO copy is filled.`);
			}
			console.log("");
		}
	}
}
