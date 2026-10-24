import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { ru } from "../../src/lib/i18n/ru";

const EN_COPY_DIR = fileURLToPath(
	new URL("../../src/lib/i18n/tools/en", import.meta.url),
);

// NOTE: Locale text is never hardcoded in specs. ru comes from the dictionary;
// en reads the per-tool JSON copy directly - importing en.ts would pull
// seo-copy.ts, whose import.meta.glob does not exist under Playwright.
export function ruPageTitle(slug: string): string {
	const title = ru.pages?.[slug]?.title;
	if (!title) throw new Error(`ru dictionary has no pages.${slug}.title`);
	return title;
}

export function enPageTitle(slug: string): string {
	const copy = JSON.parse(
		readFileSync(join(EN_COPY_DIR, `${slug}.json`), "utf8"),
	) as { title?: string };
	if (!copy.title) throw new Error(`en copy has no title for ${slug}`);
	return copy.title;
}
