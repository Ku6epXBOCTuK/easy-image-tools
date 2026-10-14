// Extract the per-page and per-hub copy out of `web/src/lib/i18n/<locale>.ts`:

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const I18N_DIR = fileURLToPath(new URL("../src/lib/i18n/", import.meta.url));

const locale = (process.argv[2] ?? "en").toLowerCase();
if (!/^[a-z]{2}$/.test(locale)) {
	console.error(
		`split-seo: unknown locale "${process.argv[2]}" (expected en or ru)`,
	);
	process.exit(1);
}

const mod = await import(pathToFileURL(join(I18N_DIR, `${locale}.ts`)).href);
const dict = mod[locale];
if (!dict?.pages) {
	console.error(`split-seo: ${locale}.ts has no pages section`);
	process.exit(1);
}

function writeJson(dir, name, value) {
	if (!/^[\w.-]+$/.test(name)) {
		console.error(`split-seo: skip "${name}" - not a safe file name`);
		return false;
	}
	mkdirSync(dir, { recursive: true });
	writeFileSync(
		join(dir, `${name}.json`),
		`${JSON.stringify(value, null, "\t")}\n`,
	);
	return true;
}

const toolsDir = join(I18N_DIR, "tools", locale);
const withSeo = [];
const withoutSeo = [];
for (const [slug, page] of Object.entries(dict.pages)) {
	if (!page?.seo) {
		withoutSeo.push(slug);
		continue;
	}
	const payload = {};
	if (page.title !== undefined) payload.title = page.title;
	payload.seo = page.seo;
	if (writeJson(toolsDir, slug, payload)) withSeo.push(slug);
}

console.log(`[${locale}] wrote ${withSeo.length} files into ${toolsDir}`);
if (withoutSeo.length > 0) {
	console.log(
		`[${locale}] no seo block (${withoutSeo.length}): ${withoutSeo.join(", ")}`,
	);
}

const hubs = dict.categoryHubs ?? {};
const hubIds = Object.keys(hubs);
const hubsDir = join(I18N_DIR, "category-hubs", locale);
const hubsWritten = [];
for (const id of hubIds) {
	if (writeJson(hubsDir, id, hubs[id])) hubsWritten.push(id);
}

console.log(`[${locale}] wrote ${hubsWritten.length} files into ${hubsDir}`);
if (hubIds.length === 0) console.log(`[${locale}] no categoryHubs section`);
