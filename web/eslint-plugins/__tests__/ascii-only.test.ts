// NOTE: The scoping to test files lives in eslint.config.js, so the filenames
// here are arbitrary.
import { RuleTester } from "eslint";
import tseslint from "typescript-eslint";
import { describe, it } from "vitest";
import asciiOnly from "../conventions/ascii-only.js";
import { asRuleModule } from "./helpers.js";

RuleTester.describe = describe;
RuleTester.it = it;

const tester = new RuleTester({
	languageOptions: {
		parser: tseslint.parser,
	},
});

tester.run("ascii-only", asRuleModule(asciiOnly), {
	valid: [
		{ code: "const x = 1;", filename: "a.test.ts" },
		{
			code: "describe('resize pipeline', () => {});",
			filename: "a.test.ts",
		},
		{
			code: "expect(label).toBe('512×512');",
			filename: "a.test.ts",
			options: [{ allowChars: ["×"] }],
		},
	],
	invalid: [
		{
			code: "it('ресайзит картинку', () => {});",
			filename: "a.test.ts",
			errors: [{ messageId: "nonAscii" }],
		},
		{
			code: "// arrow → here\nconst x = 1;",
			filename: "a.test.ts",
			errors: [{ messageId: "nonAscii" }],
		},
		{
			code: "it('a — b … c', () => {});",
			filename: "a.test.ts",
			errors: [{ messageId: "nonAscii" }],
		},
		{
			code: "// über\n// café\nconst x = 1;",
			filename: "a.test.ts",
			errors: [{ messageId: "nonAscii" }, { messageId: "nonAscii" }],
		},
		{
			code: "expect(s).toBe('512×512 → done');",
			filename: "a.test.ts",
			options: [{ allowChars: ["×"] }],
			errors: [{ messageId: "nonAscii" }],
		},
		{
			code: "const s = '\x0B';",
			filename: "a.test.ts",
			errors: [{ messageId: "nonAscii" }],
		},
		{
			code: "const s = '\x7F';",
			filename: "a.test.ts",
			errors: [{ messageId: "nonAscii" }],
		},
	],
});
