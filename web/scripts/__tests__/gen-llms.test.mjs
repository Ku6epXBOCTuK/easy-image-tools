import { describe, expect, it } from "vitest";
import { renderLlmsTxt } from "../gen-llms.mjs";

const ORIGIN = "https://example.test";

function page(route, html) {
	return { route, url: `${ORIGIN}${route}`, html };
}

function toolPage(route, { title, crumb, paragraph, description }) {
	return page(
		route,
		`<title>t</title><meta name="description" content="${description}"/>
		 <h1>${title}</h1>
		 <script>{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"All tools","item":"${ORIGIN}/list-tools"},{"@type":"ListItem","position":2,"name":"${crumb}","item":"${ORIGIN}/categories/${crumb.toLowerCase()}"}]}</script>
		 <p class="long svelte-x">${paragraph}</p>`,
	);
}

const PAGES = [
	page("/", "<title>easy-image-tools — PNG utilities</title>"),
	page(
		"/list-tools",
		'<meta name="description" content="Full catalog of PNG utilities. Second sentence."/>',
	),
	toolPage("/tools/crop-png", {
		title: "Crop PNG online",
		crumb: "Geometry",
		paragraph: "Crop PNG cuts a rectangle. It runs locally.",
		description: "Crop a PNG in your browser.",
	}),
	toolPage("/tools/flip-png", {
		title: "Flip PNG",
		crumb: "Geometry",
		paragraph: "Flipping mirrors an image. Second sentence dropped.",
		description: "Flip a PNG.",
	}),
	page(
		"/categories/geometry",
		'<h1>Crop, resize and rotate tools</h1><div class="prose svelte-x"><p>Geometry tools change the shape. More text.</p></div>',
	),
];

describe("renderLlmsTxt", () => {
	const text = renderLlmsTxt(PAGES);

	it("starts with the site title and one-line summary", () => {
		const [title, , summary] = text.split("\n");
		expect(title).toBe("# easy-image-tools");
		expect(summary).toBe("> Full catalog of PNG utilities.");
	});

	it("groups tools under the category of the breadcrumb", () => {
		expect(text).toContain("## Geometry");
		expect(text).toContain(`Hub: ${ORIGIN}/categories/geometry`);
		expect(text).not.toContain("## Other");
	});

	it("quotes the first paragraph, cut to whole sentences", () => {
		expect(text).toContain(
			`- [Crop PNG online](${ORIGIN}/tools/crop-png): Crop PNG cuts a rectangle.`,
		);
		expect(text).toContain(`- [Flip PNG](${ORIGIN}/tools/flip-png)`);
		expect(text).not.toContain("Second sentence dropped.");
	});

	it("lists the hubs with their own summary", () => {
		expect(text).toContain("## Categories");
		expect(text).toContain(
			`- [Crop, resize and rotate tools](${ORIGIN}/categories/geometry): Geometry tools change the shape.`,
		);
	});

	it("falls back to the meta description and the slug without a heading", () => {
		expect(
			renderLlmsTxt([
				page(
					"/",
					'<title>brand — x</title><meta name="description" content="Site summary."/>',
				),
				page(
					"/tools/make-it-nice",
					'<meta name="description" content="Does a thing."/>',
				),
			]),
		).toContain(
			"- [make it nice](https://example.test/tools/make-it-nice): Does a thing.",
		);
	});

	it("refuses to emit a manifest without tool pages", () => {
		expect(() => renderLlmsTxt([page("/", "<title>brand</title>")])).toThrow(
			/no indexable tool pages/,
		);
	});
});
