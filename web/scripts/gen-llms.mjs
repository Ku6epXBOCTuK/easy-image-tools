// NOTE: Writes build/llms.txt right after `vite build`: a plain-text manifest
// for LLM crawlers (llmstxt.org). Same read model as the sitemap
// (site-pages.mjs), so it cannot advertise a `noindex` or absent page.
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { BUILD_DIR, indexablePages, siteOrigin } from "./site-pages.mjs";

function attr(html, pattern) {
	const match = pattern.exec(html);
	return match ? match[1] : undefined;
}

function decodeEntities(text) {
	return text
		.replaceAll("&lt;", "<")
		.replaceAll("&gt;", ">")
		.replaceAll("&quot;", '"')
		.replaceAll("&#39;", "'")
		.replaceAll("&amp;", "&");
}

// NOTE: The site title is the home page `<title>` with the brand suffix stripped.
function siteTitle(pages) {
	const home = pages.find((page) => page.route === "/");
	const title = home && attr(home.html, /<title>([^<]*)<\/title>/);
	if (!title) throw new Error("gen-llms: no home page in build/");
	return decodeEntities(title)
		.split(/\s+[—–|-]\s+/)[0]
		.trim();
}

// NOTE: The summary is the catalog meta description (it names every tool
// group), with the home page as the fallback.
function siteSummary(pages) {
	const source =
		pages.find((page) => page.route === "/list-tools") ??
		pages.find((page) => page.route === "/");
	const description =
		(source &&
			attr(source.html, /<meta\s+name="description"\s+content="([^"]*)"/)) ??
		"";
	if (description === "") {
		throw new Error("gen-llms: no meta description in build/");
	}
	const [first] = description.split(/(?<=\.)\s+/);
	return decodeEntities(first ?? description);
}

function stripTags(text) {
	return decodeEntities(text.replace(/<[^>]+>/g, " "))
		.replace(/\s+/g, " ")
		.trim();
}

// NOTE: Cut to whole sentences: the first paragraph of the page copy (a direct
// definition, which is what an LLM quotes), meta description as the fallback.
function summaryText(fragment) {
	const text = stripTags(fragment);
	if (text === "") return undefined;
	const [first] = text.split(/(?<=\.)\s+/);
	return first ?? text;
}

function summary(html) {
	const paragraph = attr(html, /<p class="long[^"]*">([\s\S]*?)<\/p>/);
	return (
		summaryText(
			paragraph ??
				attr(html, /<meta\s+name="description"\s+content="([^"]*)"/) ??
				"",
		) ?? undefined
	);
}

function nameOf(html, route) {
	const heading = stripTags(attr(html, /<h1[^>]*>([\s\S]*?)<\/h1>/) ?? "");
	if (heading !== "") return heading;
	const title = stripTags(attr(html, /<title>([^<]*)<\/title>/) ?? "");
	if (title !== "") return title;
	return route.split("/").pop().replaceAll("-", " ");
}

function categoryOf(html) {
	const list = attr(
		html,
		/"@type":"BreadcrumbList","itemListElement":(\[.*?\])\}/,
	);
	if (!list) return undefined;
	const crumbs = JSON.parse(list);
	const category = crumbs.find((crumb) => crumb.position === 2);
	return category && { name: category.name, url: category.item };
}

// NOTE: Hub pages open with a prose paragraph; the tool pages use `.long`.
function hubSummary(html) {
	const prose = attr(
		html,
		/<div class="prose[^"]*">[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/,
	);
	return prose && summaryText(prose);
}

function isTool(route) {
	return route.startsWith("/tools/");
}

function isHub(route) {
	return route.startsWith("/categories/");
}

export function renderLlmsTxt(pages) {
	const tools = pages.filter((page) => isTool(page.route));
	if (tools.length === 0) {
		throw new Error("gen-llms: no indexable tool pages found in build/");
	}

	const groups = new Map();
	for (const page of tools) {
		const about = summary(page.html);
		if (!about) continue;
		const category = categoryOf(page.html);
		const key = category?.name ?? "";
		const group = groups.get(key) ?? { url: category?.url, tools: [] };
		group.tools.push({
			name: nameOf(page.html, page.route),
			url: page.url,
			summary: about,
		});
		groups.set(key, group);
	}

	const lines = [`# ${siteTitle(pages)}`, "", `> ${siteSummary(pages)}`, ""];

	for (const [name, group] of groups) {
		lines.push(`## ${name}`, "");
		if (group.url) lines.push(`Hub: ${group.url}`, "");
		for (const tool of group.tools) {
			lines.push(`- [${tool.name}](${tool.url}): ${tool.summary}`);
		}
		lines.push("");
	}

	const hubs = pages.filter((page) => isHub(page.route));
	if (hubs.length > 0) {
		lines.push("## Categories", "");
		for (const hub of hubs) {
			const name = nameOf(hub.html, hub.route);
			const about = hubSummary(hub.html);
			lines.push(`- [${name}](${hub.url})${about ? `: ${about}` : ""}`);
		}
		lines.push("");
	}

	return lines.join("\n");
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
	const pages = indexablePages();
	writeFileSync(join(BUILD_DIR, "llms.txt"), renderLlmsTxt(pages));
	console.log(
		`llms.txt written: ${pages.filter((page) => isTool(page.route)).length} tools (origin ${siteOrigin()})`,
	);
}
