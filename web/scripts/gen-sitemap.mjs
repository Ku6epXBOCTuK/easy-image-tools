// NOTE: Writes build/sitemap.xml right after `vite build` (adapter-static
// already emitted the HTML there). The URL set is read back from the build
// output and `noindex` pages are skipped, so the sitemap cannot drift.
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { BUILD_DIR, indexablePages, siteOrigin } from "./site-pages.mjs";

function escapeXml(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

const pages = indexablePages();
if (pages.length === 0) {
	throw new Error("gen-sitemap: no indexable pages found in build/");
}

const xml = [
	'<?xml version="1.0" encoding="UTF-8"?>',
	'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
	...pages.map((page) => `\t<url><loc>${escapeXml(page.url)}</loc></url>`),
	"</urlset>",
	"",
].join("\n");

writeFileSync(join(BUILD_DIR, "sitemap.xml"), xml);
console.log(
	`sitemap.xml written: ${pages.length} urls (origin ${siteOrigin()})`,
);
