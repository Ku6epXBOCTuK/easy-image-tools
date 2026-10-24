import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const OG_DIR = fileURLToPath(new URL("../../static/og/", import.meta.url));
const COPY_DIR = fileURLToPath(
	new URL("../../src/lib/i18n/tools/en/", import.meta.url),
);

// NOTE: The og cards are committed artifacts of `pnpm --dir web gen:og`; this
// gate fails when a new tool page lands without its card (EIT-74).
describe("og images", () => {
	it("every tool page has a generated card", () => {
		for (const file of readdirSync(COPY_DIR)) {
			if (!file.endsWith(".json")) continue;
			const slug = file.replace(/\.json$/, "");
			expect(existsSync(join(OG_DIR, `${slug}.png`)), slug).toBe(true);
		}
	});

	it("the default card exists", () => {
		expect(existsSync(join(OG_DIR, "default.png"))).toBe(true);
	});
});
