import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

// The analytics tag ships as a static file (`web/static/ga.js`) so it can be
// gated by PUBLIC_GA_ENABLED at build time; these guards cover the promises of
// docs/plan-seo.md section 0 - cookieless, no ads, and nothing about the image.
const WEB_DIR = fileURLToPath(new URL("../../", import.meta.url));
const GA_PATH = join(WEB_DIR, "static", "ga.js");

function sourceFiles(dir: string): string[] {
	return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) return sourceFiles(full);
		return entry.name.endsWith(".ts") || entry.name.endsWith(".svelte")
			? [full]
			: [];
	});
}

describe("GA tag configuration", () => {
	const ga = readFileSync(GA_PATH, "utf8");

	it("denies analytics and ad storage before the config call", () => {
		for (const key of [
			"analytics_storage",
			"ad_storage",
			"ad_user_data",
			"ad_personalization",
		]) {
			expect(ga, key).toMatch(new RegExp(`${key}:\\s*"denied"`));
		}
		expect(ga.indexOf('gtag("consent"')).toBeLessThan(
			ga.indexOf('gtag("config"'),
		);
	});

	it("keeps remarketing and Google signals off", () => {
		expect(ga).toMatch(/allow_google_signals:\s*false/);
		expect(ga).toMatch(/allow_ad_personalization_signals:\s*false/);
	});

	it("sends nothing but the page view", () => {
		const callers = sourceFiles(join(WEB_DIR, "src"))
			.filter((file) => !file.endsWith(".test.ts"))
			.filter((file) =>
				/gtag\s*\(|dataLayer\.push/.test(readFileSync(file, "utf8")),
			);
		expect(
			callers.map((file) => file.replace(WEB_DIR, "")),
			"gtag is configured in one place only",
		).toEqual([]);
	});
});
