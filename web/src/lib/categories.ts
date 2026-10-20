// NOTE: Tool categories: the `CategoryId` type and the catalog display order
// derive from one `as const` object to avoid drift. Human-readable names live
// in the i18n dictionaries (section `categories`, key = CategoryId).
export const CATEGORIES = {
	convert: "convert",
	alpha: "alpha",
	color: "color",
	geometry: "geometry",
	filters: "filters",
	text: "text",
	analyze: "analyze",
	generate: "generate",
} as const;

export type CategoryId = (typeof CATEGORIES)[keyof typeof CATEGORIES];

export const CATEGORY_IDS = Object.keys(CATEGORIES) as CategoryId[];

export function isCategoryId(value: string): value is CategoryId {
	return (CATEGORY_IDS as string[]).includes(value);
}
