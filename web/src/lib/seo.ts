/**
 * Public site URL for canonical/OG. From build-time `PUBLIC_SITE_ORIGIN` (set in
 * CI), falling back to the production domain; `$app/paths.base` is relative and
 * won't work here. `docs/plan-seo.md` section 6.
 */
const rawOrigin = import.meta.env.PUBLIC_SITE_ORIGIN;
export const SITE_URL =
	typeof rawOrigin === "string" && rawOrigin.trim() !== ""
		? rawOrigin.trim().replace(/\/+$/, "")
		: "https://easy-image-tools.com";

export function absoluteUrl(path: string): string {
	return `${SITE_URL}${path === "/" ? "" : path}`;
}

type SchemaNode = Record<string, unknown>;

/** Breadcrumb crumb; a crumb without a path is the current page. */
export type Crumb = { name: string; path?: string };

function breadcrumbNode(crumbs: Crumb[]): SchemaNode {
	return {
		"@type": "BreadcrumbList",
		itemListElement: crumbs.map((crumb, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: crumb.name,
			...(crumb.path ? { item: absoluteUrl(crumb.path) } : {}),
		})),
	};
}

/**
 * WebSite + Organization for the home page.
 */
export function siteSchemaLd(brand: string): SchemaNode[] {
	return [
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			name: brand,
			url: absoluteUrl("/"),
		},
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			name: brand,
			url: absoluteUrl("/"),
			logo: absoluteUrl("/favicon.svg"),
		},
	];
}

/**
 * A tool page: what it is, what it costs, and the FAQ it answers. Breadcrumbs
 * ride along because the visible trail already exists. Google caps FAQ rich
 * results for small sites, so the payoff here is LLM parsing.
 */
export function toolSchemaLd(input: {
	title: string;
	description: string;
	path: string;
	faq: { q: string; a: string }[];
	crumbs: Crumb[];
}): SchemaNode[] {
	const nodes: SchemaNode[] = [
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			name: input.title,
			description: input.description,
			url: absoluteUrl(input.path),
			applicationCategory: "MultimediaApplication",
			operatingSystem: "Any",
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "USD",
			},
		},
	];
	if (input.faq.length > 0) {
		nodes.push({
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: input.faq.map((item) => ({
				"@type": "Question",
				name: item.q,
				acceptedAnswer: { "@type": "Answer", text: item.a },
			})),
		});
	}
	nodes.push({
		"@context": "https://schema.org",
		...breadcrumbNode(input.crumbs),
	});
	return nodes;
}

/** Breadcrumbs for a page that has no tool schema of its own. */
export function breadcrumbSchemaLd(crumbs: Crumb[]): SchemaNode {
	return { "@context": "https://schema.org", ...breadcrumbNode(crumbs) };
}
