import type { CategoryHubContent, PageStrings, SiteSeo } from "./dict";

// NOTE: Long-form SEO copy: one JSON file per page (`tools/en/<slug>.json`), per
// category hub (`category-hubs/en/<id>.json`) and per fixed site page
// (`site/en/<id>.json`).
const toolFiles = import.meta.glob<PageStrings>("./tools/en/*.json", {
	eager: true,
	import: "default",
});

const hubFiles = import.meta.glob<CategoryHubContent>(
	"./category-hubs/en/*.json",
	{ eager: true, import: "default" },
);

const siteFiles = import.meta.glob<SiteSeo>("./site/en/*.json", {
	eager: true,
	import: "default",
});

// NOTE: Fixed site pages that carry their own SERP copy (`site/en/<id>.json`):
// the home catalog, the full catalog route and the saved-pipelines page.
export const SITE_PAGE_IDS = ["home", "list-tools", "chains"] as const;

export type SitePageId = (typeof SITE_PAGE_IDS)[number];

// NOTE: `./tools/en/crop-png.json` -> `crop-png`: the file name is the dict key.
function keyOf(path: string): string {
	const name = path.slice(path.lastIndexOf("/") + 1);
	return name.replace(/\.json$/, "");
}

export const EN_TOOL_COPY: Record<string, PageStrings> = Object.fromEntries(
	Object.entries(toolFiles).map(([path, copy]) => [keyOf(path), copy]),
);

export const EN_HUB_COPY: Record<string, CategoryHubContent> =
	Object.fromEntries(
		Object.entries(hubFiles).map(([path, copy]) => [keyOf(path), copy]),
	);

export const EN_SITE_COPY: Record<string, SiteSeo> = Object.fromEntries(
	Object.entries(siteFiles).map(([path, copy]) => [keyOf(path), copy]),
);
