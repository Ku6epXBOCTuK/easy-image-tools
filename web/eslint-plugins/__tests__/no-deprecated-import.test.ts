import { cpSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { RuleTester } from "eslint";
import tseslint from "typescript-eslint";
import { afterAll, beforeAll, describe, it } from "vitest";
import noDeprecatedImport from "../conventions/no-deprecated-import.js";
import { FIXTURES_DIR, asRuleModule } from "./helpers.js";

// NOTE: The rule resolves a bare specifier with `ts.resolveModuleName`, which
// only looks in node_modules, so the fake package is materialized in a temp
// dir instead of being committed under an ignored node_modules path.
const fixtureRoot = mkdtempSync(
	path.join(os.tmpdir(), "eit-deprecated-import-"),
);
const filename = path.join(fixtureRoot, "src", "lib", "icons.ts");

beforeAll(() => {
	cpSync(
		path.join(FIXTURES_DIR, "packages", "fake-icons"),
		path.join(fixtureRoot, "node_modules", "fake-icons"),
		{ recursive: true },
	);
	mkdirSync(path.dirname(filename), { recursive: true });
	writeFileSync(filename, "");
});

afterAll(() => {
	rmSync(fixtureRoot, { recursive: true, force: true });
});

RuleTester.describe = describe;
RuleTester.it = it;

const tester = new RuleTester({
	languageOptions: {
		parser: tseslint.parser,
	},
});

tester.run("no-deprecated-import", asRuleModule(noDeprecatedImport), {
	valid: [
		{ code: 'import { createNew } from "fake-icons";', filename },
		{
			code: 'import { CURRENT_CONSTANT as CONSTANT } from "fake-icons";',
			filename,
		},
		{ code: 'import { createOld } from "./local-module";', filename },
		{ code: 'import * as icons from "fake-icons";', filename },
		{ code: 'import "fake-icons";', filename },
	],
	invalid: [
		{
			code: 'import { createOld } from "fake-icons";',
			filename,
			errors: [
				{
					messageId: "deprecatedImportReplace",
					data: {
						name: "createOld",
						module: "fake-icons",
						replacement: "createNew",
					},
				},
			],
		},
		{
			code: 'import { LEGACY_CONSTANT } from "fake-icons";',
			filename,
			errors: [
				{
					messageId: "deprecatedImport",
					data: { name: "LEGACY_CONSTANT", module: "fake-icons" },
				},
			],
		},
		{
			code: 'import { createAncient } from "fake-icons";',
			filename,
			errors: [
				{
					messageId: "deprecatedImportReplace",
					data: {
						name: "createAncient",
						module: "fake-icons",
						replacement: "createNew",
					},
				},
			],
		},
		{
			code: 'import { LEGACY_WITH_URL } from "fake-icons";',
			filename,
			errors: [
				{
					messageId: "deprecatedImport",
					data: { name: "LEGACY_WITH_URL", module: "fake-icons" },
				},
			],
		},
		{
			code: 'import { createOld as build } from "fake-icons";',
			filename,
			errors: [
				{
					messageId: "deprecatedImportReplace",
					data: {
						name: "createOld",
						module: "fake-icons",
						replacement: "createNew",
					},
				},
			],
		},
	],
});
