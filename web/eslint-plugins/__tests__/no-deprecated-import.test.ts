import path from "node:path";
import { RuleTester } from "eslint";
import tseslint from "typescript-eslint";
import { describe, it } from "vitest";
import noDeprecatedImport from "../conventions/no-deprecated-import.js";
import { FIXTURES_DIR, asRuleModule } from "./helpers.js";

const filename = path.join(FIXTURES_DIR, "src", "lib", "icons.ts");

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
