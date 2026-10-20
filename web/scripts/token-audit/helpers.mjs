// NOTE: Shared plumbing for the design-token audits: reading app.css, scanning
// for var() usages across src, and the color/form predicates the checks use.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import postcss from "postcss";

export const FILE = new URL("../../src/app.css", import.meta.url);
const SRC_DIR = fileURLToPath(new URL("../../src/", import.meta.url));

// NOTE: A var(--x) REFERENCE anywhere in the app (primary argument only).
const USAGE_RE = /var\(\s*(--[\w-]+)/g;

const SCAN_EXTS = new Set([".svelte", ".css", ".ts", ".js", ".mjs"]);

// NOTE: Recursively list source files; no glob dependency needed.
function listFiles(dir) {
	const files = [];
	for (const name of readdirSync(dir)) {
		const full = join(dir, name);
		if (statSync(full).isDirectory()) {
			files.push(...listFiles(full));
		} else if (SCAN_EXTS.has(name.slice(name.lastIndexOf(".")))) {
			files.push(full);
		}
	}
	return files;
}

export function collectUsedTokens() {
	const used = new Set();
	for (const file of listFiles(SRC_DIR)) {
		const content = readFileSync(file, "utf8");
		for (const match of content.matchAll(USAGE_RE)) {
			used.add(match[1]);
		}
	}
	return used;
}

// NOTE: A token is "colorful" when its value is a color literal; those must
// have a dark-mate. Non-color tokens (fonts, radii, durations) are exempt.
const COLOR_RE =
	/#[0-9a-fA-F]{3,8}\b|\b(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklch|oklab|hct|color-mix)\s*\(/i;

export const isColorValue = (value) => COLOR_RE.test(value);

// NOTE: A token is "derived" when its value references var(...); it adapts to
// the theme automatically, so it must NOT have a hardcoded dark twin.
export const isDerived = (value) => value.includes("var(");

export function collectTokens(root, selector) {
	const map = new Map();
	root.walkRules((rule) => {
		if (rule.selector === selector) {
			rule.walkDecls((decl) => {
				if (decl.prop.startsWith("--")) map.set(decl.prop, decl.value);
			});
		}
	});
	return map;
}

export async function parsePreview() {
	const css = await readFile(FILE, "utf8");
	const root = postcss.parse(css);
	return {
		root,
		light: collectTokens(root, ":root"),
		dark: collectTokens(root, '[data-theme="dark"]'),
	};
}
