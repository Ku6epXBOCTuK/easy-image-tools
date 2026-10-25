import type { CategoryId } from "../categories";

export const LOCALES = ["ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const BASE_LOCALE: Locale = "en";

export const LOCALE_TAGS: Record<Locale, string> = {
	ru: "ru-RU",
	en: "en-US",
};

export function isLocale(value: unknown): value is Locale {
	return (
		typeof value === "string" && (LOCALES as readonly string[]).includes(value)
	);
}

// NOTE: Long-form page copy. EN only until the `/ru/` prefix lands (docs/plan-seo.md).
export type SeoContent = {
	metaTitle: string;
	metaDescription: string;
	longDescription: string;
	facts: string[];
	howTo: string[];
	faq: { q: string; a: string }[];
};

// NOTE: Page strings (`pages.<slug>`); `seo` absent while the copy is unwritten.
export type PageStrings = {
	title?: string;
	description?: string;
	seo?: SeoContent;
};

// NOTE: Hub copy (`categoryHubs.<id>`); EN only, same locale rule as `SeoContent`.
export type CategoryHubContent = {
	heading: string;
	metaTitle: string;
	metaDescription: string;
	paragraphs: string[];
};

// NOTE: SERP copy for a fixed site page (`site.<id>`: home, catalog, pipelines).
// EN only, same locale rule as `SeoContent`.
export type SiteSeo = {
	metaTitle: string;
	metaDescription: string;
};

// NOTE: Tool strings (`tools.<id>`): field labels, verdict keys.
export type ToolStrings = {
	params?: Record<string, string>;
	options?: Record<string, Record<string, string>>;
	results?: Record<string, string>;
};

export type HeaderStrings = {
	workspace: string;
	catalog: string;
	sectionsAria: string;
	footerNote: string;
	home: string;
	uiKit: string;
	chains: string;
	pipeline: string;
};

export type FooterStrings = {
	hubsHeading: string;
	hubsAria: string;
};

export type Dict = {
	// NOTE: Brand name; identical in every locale, kept here as the single source.
	brand: string;
	header: HeaderStrings;
	footer: FooterStrings;
	categories: Record<CategoryId | "all", string>;
	home: Record<string, string>;
	catalog: Record<string, string>;
	toolPage: Record<string, string>;
	categoryHub: Record<string, string>;
	chain: Record<string, string>;
	savedChains: Record<string, string>;
	sourceCard: Record<string, string>;
	resultCard: Record<string, string>;
	paramsCard: Record<string, string>;
	textInput: Record<string, string>;
	textResult: Record<string, string>;
	download: Record<string, string>;
	infoPanel: Record<string, string>;
	dropZone: Record<string, string>;
	search: Record<string, string>;
	ui: Record<string, string>;
	errors: Record<string, string>;
	// NOTE: Absent in the base locale, EN from the registry is used.
	pages?: Record<string, PageStrings>;
	categoryHubs?: Record<string, CategoryHubContent>;
	// NOTE: Fixed site pages (`site/home.json`, ...); EN only.
	site?: Record<string, SiteSeo>;
	tools: Record<string, ToolStrings>;
	actions?: Record<string, string>;
	textSource?: Record<string, string>;
	fields?: Record<string, string>;
	groups?: Record<string, string>;
};
