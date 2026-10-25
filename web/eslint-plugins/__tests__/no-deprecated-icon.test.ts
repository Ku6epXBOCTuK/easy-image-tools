import path from "node:path";
import { RuleTester } from "eslint";
import tseslint from "typescript-eslint";
import { describe, expect, it } from "vitest";
import noDeprecatedIcon, {
	readDeprecated,
} from "../conventions/no-deprecated-icon.js";
import { FIXTURES_DIR, asRuleModule } from "./helpers.js";

const options = [{ aliasesDir: path.join(FIXTURES_DIR, "lucide") }];

RuleTester.describe = describe;
RuleTester.it = it;

const tester = new RuleTester({
	languageOptions: {
		parser: tseslint.parser,
	},
});

tester.run("no-deprecated-icon", asRuleModule(noDeprecatedIcon), {
	valid: [
		{ code: 'import { FilePlusCorner } from "@lucide/svelte";', options },
		{
			code: 'import { FilePlusCorner as Create } from "@lucide/svelte";',
			options,
		},
		{ code: 'import { Grid3x3 } from "@lucide/svelte";', options },
		{ code: 'import * as icons from "@lucide/svelte";', options },
		{ code: 'import { FilePlus2 } from "other-icons";', options },
	],
	invalid: [
		{
			code: 'import { FilePlus2 } from "@lucide/svelte";',
			options,
			errors: [
				{
					messageId: "deprecatedIcon",
					data: { name: "FilePlus2", replacement: "FilePlusCorner" },
				},
			],
		},
		{
			code: 'import { FilePlus2 as Create } from "@lucide/svelte";',
			options,
			errors: [
				{
					messageId: "deprecatedIcon",
					data: { name: "FilePlus2", replacement: "FilePlusCorner" },
				},
			],
		},
		{
			code: 'import { Grid3X3 } from "@lucide/svelte";',
			options,
			errors: [
				{
					messageId: "deprecatedIcon",
					data: { name: "Grid3X3", replacement: "Grid3x3" },
				},
			],
		},
		{
			code: 'import { LucideFilePlus2 } from "@lucide/svelte";',
			options,
			errors: [
				{
					messageId: "deprecatedIcon",
					data: {
						name: "LucideFilePlus2",
						replacement: "LucideFilePlusCorner",
					},
				},
			],
		},
	],
});

describe("readDeprecated", () => {
	it("fails loudly when the alias table cannot be parsed", () => {
		expect(() =>
			readDeprecated(path.join(FIXTURES_DIR, "lucide", "missing")),
		).toThrow(/no @deprecated aliases parsed/);
	});

	it("maps deprecated aliases to their canonical name", () => {
		const deprecated = readDeprecated(path.join(FIXTURES_DIR, "lucide"));
		expect(deprecated.get("FilePlus2")).toBe("FilePlusCorner");
		expect(deprecated.has("FilePlusCorner")).toBe(false);
	});
});
