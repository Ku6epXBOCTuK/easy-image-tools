// NOTE: Metrics must mirror production: the deploy build enables GA via
// PUBLIC_GA_ENABLED, so the build step here sets it too.
import { spawn, spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const DEFAULT_TOP = 10;
const THRESHOLDS = { performance: 90, lcpMs: 2500, cls: 0.1, tbtMs: 200 };
const SERVE_PORT = 4174;

export async function coreRoutes(top = DEFAULT_TOP) {
	const { POPULARITY } = await import("../src/lib/registry/popularity.ts");
	const { CATEGORY_IDS } = await import("../src/lib/categories.ts");
	const tools = Object.entries(POPULARITY)
		.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
		.slice(0, top)
		.map(([slug]) => `/tools/${slug}`);
	return ["/", ...tools, ...CATEGORY_IDS.map((id) => `/categories/${id}`)];
}

function argTop() {
	const index = process.argv.indexOf("--top");
	return index >= 0
		? Number(process.argv[index + 1]) || DEFAULT_TOP
		: DEFAULT_TOP;
}

function isGreen(row) {
	return (
		row.perf >= THRESHOLDS.performance &&
		row.lcp <= THRESHOLDS.lcpMs &&
		row.cls <= THRESHOLDS.cls &&
		row.tbt <= THRESHOLDS.tbtMs
	);
}

function formatRow(row) {
	const verdict = isGreen(row) ? "ok" : "FAIL";
	return [
		row.route.padEnd(34),
		String(row.perf).padStart(3),
		`${Math.round(row.lcp)}ms`.padStart(7),
		row.cls.toFixed(3).padStart(6),
		`${Math.round(row.tbt)}ms`.padStart(7),
		verdict,
	].join(" ");
}

async function waitForHttp(url, timeoutMs) {
	const deadline = Date.now() + timeoutMs;
	while (Date.now() < deadline) {
		const response = await fetch(url).catch(() => null);
		if (response?.ok) return;
		await new Promise((resolve) => setTimeout(resolve, 200));
	}
	throw new Error(`server did not respond: ${url}`);
}

async function runLighthouseOn(port, route, reportDir) {
	const { default: lighthouse } = await import("lighthouse");
	const run = lighthouse.default ?? lighthouse;
	const { lhr, report } = await run(`http://127.0.0.1:${SERVE_PORT}${route}`, {
		port,
		output: ["json", "html"],
		onlyCategories: ["performance"],
		quiet: true,
	});
	if (lhr.runtimeError) {
		throw new Error(`${route}: ${lhr.runtimeError.message}`);
	}
	const name =
		(route === "/" ? "index" : route.slice(1).replaceAll("/", "__")) + ".html";
	writeFileSync(join(reportDir, name), report[1]);
	const numeric = (id) => lhr.audits[id]?.numericValue ?? Number.NaN;
	const score = lhr.categories.performance.score;
	return {
		route,
		perf: score === null ? Number.NaN : Math.round(score * 100),
		lcp: numeric("largest-contentful-paint"),
		cls: numeric("cumulative-layout-shift"),
		tbt: numeric("total-blocking-time"),
	};
}

async function main() {
	const top = argTop();
	const routes = await coreRoutes(top);
	const webRoot = fileURLToPath(new URL("..", import.meta.url));
	const reportDir = join(
		webRoot,
		"cwv-reports",
		new Date().toISOString().replace(/[:.]/g, "-"),
	);
	mkdirSync(reportDir, { recursive: true });

	if (!process.argv.includes("--skip-build")) {
		const build = spawnSync("pnpm build", {
			shell: true,
			stdio: "inherit",
			cwd: webRoot,
			env: { ...process.env, PUBLIC_GA_ENABLED: "true" },
		});
		if (build.status !== 0) {
			process.exitCode = 1;
			return;
		}
	}

	const server = spawn(
		process.execPath,
		[
			fileURLToPath(new URL("./serve-static.mjs", import.meta.url)),
			"--port",
			String(SERVE_PORT),
		],
		{ stdio: ["ignore", "pipe", "pipe"] },
	);
	server.stderr.pipe(process.stderr);

	const { chromium } = await import("playwright");
	const chrome = spawn(chromium.executablePath(), [
		"--headless",
		"--remote-debugging-port=0",
		"about:blank",
	]);
	const debugPort = await new Promise((resolve, reject) => {
		const timer = setTimeout(
			() => reject(new Error("chrome did not expose a debug port")),
			30000,
		);
		chrome.on("exit", () => {
			clearTimeout(timer);
			reject(new Error("chrome exited before exposing a debug port"));
		});
		chrome.stderr.on("data", (chunk) => {
			const match = /DevTools listening on ws:\/\/[\d.]+:(\d+)\//.exec(
				String(chunk),
			);
			if (match) {
				clearTimeout(timer);
				resolve(Number(match[1]));
			}
		});
	});

	const rows = [];
	let failed = 0;
	try {
		await waitForHttp(`http://127.0.0.1:${SERVE_PORT}/`, 30000);
		console.log(
			"route                               perf     LCP    CLS     TBT  verdict",
		);
		for (const route of routes) {
			const row = await runLighthouseOn(debugPort, route, reportDir);
			rows.push(row);
			if (!isGreen(row)) failed += 1;
			console.log(formatRow(row));
		}
	} finally {
		chrome.kill();
		server.kill();
	}

	console.log(`reports: ${reportDir}`);
	console.log(
		`${rows.length - failed}/${rows.length} pages green (thresholds: perf >= ${THRESHOLDS.performance}, LCP <= ${THRESHOLDS.lcpMs}ms, CLS <= ${THRESHOLDS.cls}, TBT <= ${THRESHOLDS.tbtMs}ms)`,
	);
	if (failed > 0) process.exitCode = 1;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
	await main();
}
