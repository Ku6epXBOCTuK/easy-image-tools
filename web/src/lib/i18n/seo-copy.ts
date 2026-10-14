import type { CategoryHubContent, PageStrings } from "./dict";

// Long-form SEO copy: one JSON file per page (`tools/en/<slug>.json`) and per
// category hub (`category-hubs/en/<id>.json`).
const toolFiles = import.meta.glob<PageStrings>("./tools/en/*.json", {
	eager: true,
	import: "default",
});

const hubFiles = import.meta.glob<CategoryHubContent>(
	"./category-hubs/en/*.json",
	{ eager: true, import: "default" },
);

/** `./tools/en/crop-png.json` -> `crop-png`: the file name is the dict key. */
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
