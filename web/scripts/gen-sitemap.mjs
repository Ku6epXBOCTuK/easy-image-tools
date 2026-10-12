// Writes build/sitemap.xml right after `vite build` (adapter-static already
// emitted the HTML there). The URL set is read back from the build output
// instead of the registry: prerendered pages are exactly the pages that exist,
// and a page whose HTML carries `noindex` is skipped, so the sitemap can never
// drift from what was shipped or advertise a page we ask crawlers to ignore.
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const BUILD_DIR = fileURLToPath(new URL("../build/", import.meta.url));

function siteOrigin() {
	const fromEnv = (process.env.PUBLIC_SITE_ORIGIN ?? "").trim();
	if (fromEnv !== "") return fromEnv.replace(/\/+$/, "");

	// Local builds run without CI env vars; `static/CNAME` is the domain GitHub
	// Pages publishes under, so it is the same truth as the deploy-time env.
	const cnamePath = fileURLToPath(new URL("../static/CNAME", import.meta.url));
	if (!existsSync(cnamePath)) {
		throw new Error(
			"gen-sitemap: no site origin — set PUBLIC_SITE_ORIGIN or add web/static/CNAME",
		);
	}
	const cname = readFileSync(cnamePath, "utf8").trim();
	if (cname === "") {
		throw new Error("gen-sitemap: web/static/CNAME is empty");
	}
	return `https://${cname}`;
}

/** Mirrors the `base` normalization in vite.config.ts. */
const rawBase = (process.env.BASE_PATH ?? "").trim();
const base =
	rawBase === "" || rawBase === "/"
		? ""
		: `/${rawBase.replace(/^\/+/, "").replace(/\/+$/, "")}`;

function* htmlFiles(dir) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) yield* htmlFiles(full);
		else if (entry.name.endsWith(".html")) yield full;
	}
}

/**
 * adapter-static names prerendered pages `<route>.html` (`tools/crop-png.html`)
 * because `trailingSlash` is "never"; the `index.html` form covers a future
 * switch. GitHub Pages serves the flat file at the extension-less URL.
 */
function routePath(file) {
	const rel = relative(BUILD_DIR, file).split(sep).join("/");
	if (rel === "404.html") return null;
	if (rel === "index.html") return "/";
	if (rel.endsWith("/index.html"))
		return `/${rel.slice(0, -"index.html".length)}`;
	return `/${rel.slice(0, -".html".length)}`;
}

function escapeXml(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

if (!existsSync(BUILD_DIR)) {
	throw new Error("gen-sitemap: build/ is missing — run `vite build` first");
}

const origin = siteOrigin();
const locs = [];

for (const file of htmlFiles(BUILD_DIR)) {
	const html = readFileSync(file, "utf8");
	if (/<meta\s+name="robots"\s+content="[^"]*noindex/.test(html)) continue;

	const route = routePath(file);
	if (route === null) continue;

	locs.push(`${origin}${base}${route}`);
}

if (locs.length === 0) {
	throw new Error("gen-sitemap: no indexable pages found in build/");
}

locs.sort();

const xml = [
	'<?xml version="1.0" encoding="UTF-8"?>',
	'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
	...locs.map((loc) => `\t<url><loc>${escapeXml(loc)}</loc></url>`),
	"</urlset>",
	"",
].join("\n");

writeFileSync(join(BUILD_DIR, "sitemap.xml"), xml);
console.log(`sitemap.xml written: ${locs.length} urls (origin ${origin})`);
