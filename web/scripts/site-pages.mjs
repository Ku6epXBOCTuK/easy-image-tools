// Shared read model over the build output: what is deployed and what may be
// advertised. Both `gen-sitemap.mjs` and `gen-llms.mjs` take the URL set from
// here, so the two artifacts can never disagree about what ships.
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

export const BUILD_DIR = fileURLToPath(new URL("../build/", import.meta.url));

export function siteOrigin() {
	const fromEnv = (process.env.PUBLIC_SITE_ORIGIN ?? "").trim();
	if (fromEnv !== "") return fromEnv.replace(/\/+$/, "");

	// Local builds run without CI env vars; `static/CNAME` is the domain GitHub
	// Pages publishes under, so it is the same truth as the deploy-time env.
	const cnamePath = fileURLToPath(new URL("../static/CNAME", import.meta.url));
	if (!existsSync(cnamePath)) {
		throw new Error(
			"site-pages: no site origin — set PUBLIC_SITE_ORIGIN or add web/static/CNAME",
		);
	}
	const cname = readFileSync(cnamePath, "utf8").trim();
	if (cname === "") {
		throw new Error("site-pages: web/static/CNAME is empty");
	}
	return `https://${cname}`;
}

/** Mirrors the `base` normalization in vite.config.ts. */
export function siteBase() {
	const rawBase = (process.env.BASE_PATH ?? "").trim();
	return rawBase === "" || rawBase === "/"
		? ""
		: `/${rawBase.replace(/^\/+/, "").replace(/\/+$/, "")}`;
}

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

/**
 * Prerendered pages that may be advertised: a page whose HTML carries
 * `noindex` is skipped, so no artifact can list a page we ask crawlers to
 * ignore.
 */
export function indexablePages() {
	if (!existsSync(BUILD_DIR)) {
		throw new Error("site-pages: build/ is missing — run `vite build` first");
	}
	const origin = siteOrigin();
	const base = siteBase();
	const pages = [];

	for (const file of htmlFiles(BUILD_DIR)) {
		const html = readFileSync(file, "utf8");
		if (/<meta\s+name="robots"\s+content="[^"]*noindex/.test(html)) continue;

		const route = routePath(file);
		if (route === null) continue;

		pages.push({ route, url: `${origin}${base}${route}`, html });
	}

	pages.sort((a, b) => (a.url < b.url ? -1 : 1));
	return pages;
}
