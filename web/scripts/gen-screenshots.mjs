// NOTE: README screenshots: the home page and the crop tool page in both themes.
// Serves web/build with `vite preview`, so run `pnpm build` first.
import { mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { preview } from "vite";

const OUT = fileURLToPath(new URL("../../docs/", import.meta.url));
const FIXTURE = fileURLToPath(
	new URL(
		"../../tests/fixtures/manual-edge-cases/1920x1080-gradient.png",
		import.meta.url,
	),
);
const PORT = 4173;
const BASE = `http://localhost:${PORT}`;
const VIEWPORT = { width: 1280, height: 800 };
const CROP = [
	["X", "410"],
	["Y", "220"],
	["Width", "760"],
	["Height", "430"],
];

async function settle(page) {
	await page.evaluate("document.fonts.ready");
	await page.waitForTimeout(400);
}

async function shoot(page, name) {
	await page.screenshot({
		path: join(OUT, `screenshot-${name}.png`),
		scale: "css",
	});
}

const server = await preview({ preview: { port: PORT, strictPort: true } });
mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();

for (const theme of ["light", "dark"]) {
	const context = await browser.newContext({
		viewport: VIEWPORT,
		deviceScaleFactor: 2,
		colorScheme: theme,
		locale: "en-US",
	});
	await context.addInitScript(
		(value) => localStorage.setItem("theme", value),
		theme,
	);
	const page = await context.newPage();

	await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
	await settle(page);
	await shoot(page, `home-${theme}`);

	await page.goto(`${BASE}/tools/crop-png`, { waitUntil: "networkidle" });
	await page
		.locator('input[type="file"]')
		.first()
		.setInputFiles({
			name: "gradient.png",
			mimeType: "image/png",
			buffer: readFileSync(FIXTURE),
		});
	await page.waitForTimeout(1200);

	for (const [name, value] of CROP) {
		const input = page.getByRole("spinbutton", { name, exact: true });
		await input.fill(value);
		await input.press("Enter");
	}

	await page.waitForTimeout(1200);
	await page.evaluate(
		"document.activeElement && document.activeElement.blur()",
	);
	await settle(page);
	await shoot(page, `crop-${theme}`);
	await context.close();
}

await browser.close();
await server.httpServer.close();
console.log("screenshots written to docs/");
