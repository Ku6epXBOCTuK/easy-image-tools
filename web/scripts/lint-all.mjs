import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdirSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const WEB_DIR = fileURLToPath(new URL("../", import.meta.url));
const node = process.execPath;

// NOTE: Every lint layer in one command, run in parallel. Each step runs even if
// another fails; the exit code is nonzero if any did. Children inherit our
// stdout FD directly (no pipes), so `> out.txt` catches every byte.
const colorFlag = process.stdout.isTTY ? [] : ["--no-color"];

const bins = {
	eslint: fileURLToPath(
		new URL("../node_modules/eslint/bin/eslint.js", import.meta.url),
	),
	stylelint: fileURLToPath(
		new URL("../node_modules/stylelint/bin/stylelint.mjs", import.meta.url),
	),
	checkTokens: fileURLToPath(new URL("check-tokens.mjs", import.meta.url)),
};

const listFiles = (dir) =>
	readdirSync(dir, { recursive: true, withFileTypes: true })
		.filter((entry) => entry.isFile())
		.map((entry) => join(entry.parentPath, entry.name))
		.sort();

// NOTE: ESLint drops the cache when a config value changes but not when a local
// rule's code does, so the cache directory is keyed by the rule sources.
const cacheKey = () => {
	const hash = createHash("sha256");
	for (const file of [
		join(WEB_DIR, "eslint.config.js"),
		...listFiles(join(WEB_DIR, "eslint-plugins")),
	]) {
		hash.update(file.slice(WEB_DIR.length));
		hash.update(readFileSync(file));
	}
	return hash.digest("hex").slice(0, 12);
};

const eslintCache = () => {
	const root = join(WEB_DIR, "node_modules", ".cache", "eslint");
	const key = cacheKey();
	const dir = join(root, key);
	mkdirSync(dir, { recursive: true });
	for (const entry of readdirSync(root, { withFileTypes: true })) {
		if (entry.name !== key)
			rmSync(join(root, entry.name), { force: true, recursive: true });
	}
	return dir;
};

const stylelintCache = () => {
	const dir = join(WEB_DIR, "node_modules", ".cache", "stylelint");
	mkdirSync(dir, { recursive: true });
	return join(dir, ".stylelintcache");
};

const deprecatedImports = process.env.EIT_DEPRECATED_IMPORTS === "1";

const steps = [
	{
		name: `ESLint (svelte) + design-tokens rules${deprecatedImports ? " + deprecated-import" : " (deprecated-import off)"}`,
		args: [
			bins.eslint,
			...colorFlag,
			"--cache",
			"--cache-location",
			eslintCache(),
			"--max-warnings=0",
			".",
		],
	},
	{
		name: "Stylelint (css) — design-token style",
		args: [
			bins.stylelint,
			...colorFlag,
			"--cache",
			"--cache-location",
			stylelintCache(),
			"./src/**/*.css",
		],
	},
	{
		name: "Token audit (parity + colors + unused)",
		args: [bins.checkTokens],
	},
];

const run = (step, index) => {
	console.log(`\n[${index + 1}/${steps.length}] ${step.name}`);
	return new Promise((resolve) => {
		const child = spawn(node, step.args, {
			cwd: WEB_DIR,
			stdio: ["ignore", 1, 1],
		});
		child.on("close", (code) => resolve(code ?? 1));
	});
};

const codes = await Promise.all(steps.map(run));
const failed = codes.some((code) => code !== 0);

console.log(
	failed
		? "\nlint-all: FAILED — fix the reported problems and re-run."
		: "\nlint-all: all checks passed.",
);
process.exit(failed ? 1 : 0);
