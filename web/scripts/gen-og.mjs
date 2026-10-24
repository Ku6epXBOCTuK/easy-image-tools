// NOTE: Generates static/og/default.png plus one 1200x630 card per registry
// page. Registry titles load like in check-seo.mjs: Node 24 strips erasable
// TS, so pages/*.ts import directly from this plain script.
import { mkdirSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright";

const W = 1200;
const H = 630;
const LIB = fileURLToPath(new URL("../src/lib/", import.meta.url));
const FAVICON = readFileSync(
	fileURLToPath(new URL("../static/favicon.svg", import.meta.url)),
	"utf8",
);
const FAVICON_IMG = `<img style="width:240px;height:240px;" src="data:image/svg+xml;base64,${Buffer.from(FAVICON).toString("base64")}">`;

async function loadPages() {
	const dir = join(LIB, "registry", "pages");
	const pages = [];
	for (const file of readdirSync(dir)) {
		if (!file.endsWith(".ts")) continue;
		const mod = await import(pathToFileURL(join(dir, file)).href);
		for (const value of Object.values(mod)) {
			if (Array.isArray(value)) pages.push(...value);
		}
	}
	return pages;
}

const esc = (text) =>
	text
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll('"', "&quot;");

function shell(inner) {
	return `<!doctype html><html><body style="margin:0">
	<div style="
		width:${W}px;height:${H}px;box-sizing:border-box;
		background:#272827;
		background-image:linear-gradient(#373a37 1px, transparent 1px),linear-gradient(90deg,#373a37 1px, transparent 1px);
		background-size:40px 40px;
		display:flex;align-items:center;justify-content:space-between;
		padding:80px;font-family:ui-monospace,'Cascadia Mono',Consolas,monospace;
		border:3px solid #009a5a;
	">
		${inner}
		<div style="
			flex:none;color:#86efac;width:300px;height:300px;border:3px solid #009a5a;
			background:#3c3e3c;display:flex;align-items:center;justify-content:center;
		">${FAVICON_IMG}</div>
	</div>
</body></html>`;
}

const defaultCard = shell(`
	<div>
		<div style="
			width:72px;height:72px;background:#86efac;color:#052e16;
			display:flex;align-items:center;justify-content:center;
			font-size:34px;font-weight:700;margin-bottom:32px;
		">EIT</div>
		<div style="color:#c3eccd;font-size:56px;font-weight:700;letter-spacing:-1px;">easy-image-tools</div>
		<div style="color:#92b39a;font-size:28px;margin-top:24px;">Image utilities right in your browser</div>
		<div style="color:#009a5a;font-size:22px;margin-top:16px;">Convert · Crop · Resize — locally, no uploads</div>
	</div>
`);

const toolCard = (title) =>
	shell(`
	<div style="min-width:0;">
		<div style="color:#92b39a;font-size:30px;letter-spacing:1px;">easy-image-tools</div>
		<div style="
			color:#c3eccd;font-size:72px;font-weight:700;letter-spacing:-1px;
			line-height:1.15;margin-top:24px;max-width:660px;overflow-wrap:break-word;
		">${esc(title)}</div>
		<div style="color:#009a5a;font-size:24px;margin-top:28px;">Image utilities right in your browser</div>
	</div>
`);

const outPath = (name) =>
	new URL(`../static/og/${name}`, import.meta.url).pathname.replace(
		/^\/([A-Za-z]:)/,
		"$1",
	);

mkdirSync(new URL("../static/og/", import.meta.url), { recursive: true });

const pages = await loadPages();
const browser = await chromium.launch();
try {
	const page = await browser.newPage({ viewport: { width: W, height: H } });
	await page.setContent(defaultCard);
	await page.screenshot({ path: outPath("default.png") });
	for (const { slug, title } of pages) {
		await page.setContent(toolCard(title));
		await page.screenshot({ path: outPath(`${slug}.png`) });
	}
	console.log(`og cards written: default + ${pages.length} pages (${W}x${H})`);
} finally {
	await browser.close();
}
