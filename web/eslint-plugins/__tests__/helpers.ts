// NOTE: RuleTester (eslint) is used for pure string cases; the Linter API plus
// fixtures is needed when a rule reads real files, such as no-undefined-in-svelte,
// which reads <cwd>/src/app.css for the token dictionary.
import { Linter } from "eslint";
import type { Rule } from "eslint";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));

export const FIXTURES_DIR = path.resolve(HERE, "../__fixtures__");
export const FIXTURES_SRC = path.join(FIXTURES_DIR, "src");

export type FlatConfig = Parameters<Linter["verify"]>[1];

// NOTE: The code is linted as if it were the fixture file `relFile` under
// __fixtures__/src.
export function verifyInFixtures(
	config: FlatConfig,
	code: string,
	relFile: string,
) {
	const linter = new Linter({ configType: "flat", cwd: FIXTURES_DIR });
	return linter.verify(code, config, path.join(FIXTURES_SRC, relFile));
}

// NOTE: The wrapped component runs in runes mode.
export function svelteComponent(script: string): string {
	return `<main>Hello</main>\n\n<script lang="ts">\n${script}\n</script>\n`;
}

// NOTE: The plugin rule files are plain JS, so TypeScript infers a widened
// shape (`meta.type: string`) that `RuleTester.run` rejects; the shape is
// structurally correct at runtime, so only the tests cast.
export function asRuleModule(rule: unknown): Rule.RuleModule {
	return rule as Rule.RuleModule;
}
