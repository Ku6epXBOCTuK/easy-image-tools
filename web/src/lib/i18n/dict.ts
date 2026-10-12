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

/**
 * Long-form copy of a tool page (`pages.<slug>.seo`), rendered under the tool
 * UI. EN only for now: EN is the indexable locale, RU gets its copy when the
 * `/ru/` prefix and hreflang land (`docs/plan-seo.md`, section 0).
 */
export type SeoContent = {
	/**
	 * SERP `<title>` (~55-60 chars, no brand prefix: the brand only earns a
	 * query of its own). Falls back to the brand + page title.
	 */
	metaTitle: string;
	/** SERP meta description (~150-160 chars): the claim that wins the click. */
	metaDescription: string;
	/** Direct definition of what the tool does; GEO answers in the first paragraph. */
	longDescription: string;
	/** Manual steps; the array order is the reading order of the `<ol>`. */
	howTo: string[];
	/** FAQ pairs; reused verbatim by the FAQPage JSON-LD (S3a). */
	faq: { q: string; a: string }[];
};

/** Page strings (`pages.<slug>`): title, description, and long-form content. */
export type PageStrings = {
	title?: string;
	description?: string;
	/** Absent on pages whose copy is not written yet. */
	seo?: SeoContent;
};

/** Tool strings (`tools.<id>`): field labels, verdict keys. */
export type ToolStrings = {
	/** Param labels by param id. */
	params?: Record<string, string>;
	/** Select option labels: paramId -> value -> label. */
	options?: Record<string, Record<string, string>>;
	/** Result strings of text tools (analyze): key -> string. */
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

export type Dict = {
	/** Product brand name; identical in every locale, kept here as the single source. */
	brand: string;
	header: HeaderStrings;
	categories: Record<CategoryId | "all", string>;
	home: Record<string, string>;
	catalog: Record<string, string>;
	toolPage: Record<string, string>;
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
	/** Page titles/descriptions; absent in the base locale, EN from the registry is used. */
	pages?: Record<string, PageStrings>;
	tools: Record<string, ToolStrings>;
	/** Result/generation panel actions (Generate, Open image...). */
	actions?: Record<string, string>;
	/** Text input fields of the new UI (placeholder, Try sample...). */
	textSource?: Record<string, string>;
	/** Field labels by key (decision C: label key on the field). */
	fields?: Record<string, string>;
	/** Field group titles by key (decision A). */
	groups?: Record<string, string>;
};
