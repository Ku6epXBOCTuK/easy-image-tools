// Tests for the conventions/comment-format rule
// (web/eslint-plugins/conventions/comment-format.js).
//
// Pure AST check (comment nodes + line counts), standard RuleTester. The
// svelte pass pins the two comment kinds the token stream never sees: template
// `<!-- -->` comments (AST nodes) and CSS in `<style>` (a postcss AST); both
// need a svelte parser to exist at all.
import { RuleTester } from "eslint";
import svelteParser from "svelte-eslint-parser";
import tseslint from "typescript-eslint";
import { describe, it } from "vitest";
import commentFormat from "../conventions/comment-format.js";
import { asRuleModule } from "./helpers.js";

RuleTester.describe = describe;
RuleTester.it = it;

const tester = new RuleTester({
	languageOptions: {
		parser: tseslint.parser,
	},
});

const svelteTester = new RuleTester({
	languageOptions: {
		parser: svelteParser,
		parserOptions: { parser: tseslint.parser },
	},
});

const longBlock = [
	"// one",
	"// two",
	"// three",
	"// four",
	"// five",
	"// six",
	"const x = 1;",
].join("\n");

tester.run("comment-format", asRuleModule(commentFormat), {
	// Density is off (maxRatio: 1) in the block-focused cases: tiny snippets
	// are comment-dominated by construction.
	valid: [
		{
			code: "// why\nconst x = 1;",
			filename: "a.ts",
			options: [{ maxRatio: 1 }],
		},
		{
			code: "// a\n// b\n// c\n// d\n// e\nconst x = 1;",
			filename: "a.ts",
			options: [{ maxRatio: 1 }],
		},
		{
			// Blank line breaks the run: two 3-line blocks, both under the cap.
			code: "// a\n// b\n// c\n\n// d\n// e\n// f\nconst x = 1;",
			filename: "a.ts",
			options: [{ maxRatio: 1 }],
		},
		{
			// Trailing inline comment does not extend the block above it.
			code: "// a\n// b\nconst x = 1; // tail",
			filename: "a.ts",
			options: [{ maxRatio: 1 }],
		},
		{
			// A wider block cap admits the same comment.
			code: longBlock,
			filename: "a.ts",
			options: [{ maxBlockLines: 6, maxRatio: 1 }],
		},
		{
			// Density is skipped below minLines: small files are exempt.
			code: "// a\n// b\nconst x = 1;\nconst y = 2;",
			filename: "a.ts",
			options: [{ maxBlockLines: 5, maxRatio: 0.4, minLines: 10 }],
		},
	],
	invalid: [
		{
			code: longBlock,
			filename: "a.ts",
			options: [{ maxRatio: 1 }],
			errors: [{ messageId: "blockTooLong" }],
		},
		{
			// A single block comment counts its full line span.
			code: "/*\n1\n2\n3\n4\n5\n6\n*/\nconst x = 1;",
			filename: "a.ts",
			options: [{ maxRatio: 1 }],
			errors: [{ messageId: "blockTooLong" }],
		},
		{
			// Density: 2 comment lines against 2 code lines is 50%.
			code: "// a\n// b\nconst x = 1;\nconst y = 2;",
			filename: "a.ts",
			options: [{ maxBlockLines: 5, maxRatio: 0.4 }],
			errors: [{ messageId: "tooDense" }],
		},
		{
			// Both violations in one file produce two reports.
			code: longBlock + "\n// extra",
			filename: "a.ts",
			options: [{ maxBlockLines: 5, maxRatio: 0.5 }],
			errors: [{ messageId: "blockTooLong" }, { messageId: "tooDense" }],
		},
	],
});

svelteTester.run("comment-format (svelte)", asRuleModule(commentFormat), {
	valid: [
		{
			code: "<!-- why -->\n<main>Hello</main>",
			filename: "Component.svelte",
			options: [{ maxRatio: 1 }],
		},
		{
			// A template comment at the cap is fine, same as in a .ts file.
			code: "<!--\na\nb\nc\n-->\n<main>Hello</main>",
			filename: "Component.svelte",
			options: [{ maxRatio: 1 }],
		},
		{
			// Script and template comments are separate blocks, not one run.
			code: '<!-- why -->\n<main>Hello</main>\n<script lang="ts">\n// why\n</script>',
			filename: "Component.svelte",
			options: [{ maxRatio: 1 }],
		},
		{
			// A CSS comment at the cap is fine, same as a script comment.
			code: "<style>\n/*\na\nb\nc\n*/\n.x {\n\tcolor: red;\n}\n</style>",
			filename: "Component.svelte",
			options: [{ maxRatio: 1 }],
		},
		{
			// Script and <style> comments live in different ASTs: no run across,
			// so 2 + 5 lines pass where a merged block of 7 would not.
			code: '<script lang="ts">\n// one\n// two\n</script>\n<style>\n/*\na\nb\nc\n*/\n.x {\n\tcolor: red;\n}\n</style>',
			filename: "Component.svelte",
			options: [{ maxRatio: 1 }],
		},
	],
	invalid: [
		{
			// The template comment the ts pass could never see, over the cap.
			code: "<!--\na\nb\nc\nd\n-->\n<main>Hello</main>",
			filename: "Component.svelte",
			options: [{ maxRatio: 1 }],
			errors: [{ messageId: "blockTooLong" }],
		},
		{
			// <style> is a postcss AST, so its comments are invisible to
			// getAllComments(); the loc must still point at the real line.
			code: "<style>\n/*\na\nb\nc\nd\n*/\n.x {\n\tcolor: red;\n}\n</style>",
			filename: "Component.svelte",
			options: [{ maxRatio: 1 }],
			errors: [{ messageId: "blockTooLong", line: 2 }],
		},
		{
			// A comment nested in markup is collected too (not Program.body).
			code: "<div>\n\t<!--\n\ta\n\tb\n\tc\n\td\n\t-->\n</div>",
			filename: "Component.svelte",
			options: [{ maxRatio: 1 }],
			errors: [{ messageId: "blockTooLong" }],
		},
		{
			// Template comment lines count toward density: 2 of 4 non-blank.
			code: "<!-- a -->\n<!-- b -->\n<p>x</p>\n<p>y</p>",
			filename: "Component.svelte",
			options: [{ maxBlockLines: 5, maxRatio: 0.4 }],
			errors: [{ messageId: "tooDense" }],
		},
		{
			// Script and template comments share one density budget.
			code: '<!-- a -->\n<script lang="ts">\n// b\n</script>\n<p>c</p>',
			filename: "Component.svelte",
			options: [{ maxBlockLines: 5, maxRatio: 0.3 }],
			errors: [{ messageId: "tooDense" }],
		},
		{
			// CSS lines count toward density too: 2 of 8 non-blank. Consecutive
			// CSS comments stay separate blocks (each one line, under the cap).
			code: "<p>x</p>\n<style>\n/* a */\n/* b */\n.x {\n\tcolor: red;\n}\n</style>",
			filename: "Component.svelte",
			options: [{ maxBlockLines: 5, maxRatio: 0.2 }],
			errors: [{ messageId: "tooDense" }],
		},
		{
			// All three kinds over the cap: one report per block, by position.
			code: "<!--\na\nb\nc\nd\ne\n-->\n<style>\n/*\nx\ny\nz\nw\nv\n*/\n.x {\n\tcolor: red;\n}\n</style>",
			filename: "Component.svelte",
			options: [{ maxRatio: 1 }],
			errors: [
				{ messageId: "blockTooLong", line: 1 },
				{ messageId: "blockTooLong", line: 9 },
			],
		},
		{
			// Both violations in one file produce two reports.
			code: "<!--\na\nb\nc\nd\n-->\n<p>x</p>",
			filename: "Component.svelte",
			options: [{ maxBlockLines: 5, maxRatio: 0.5 }],
			errors: [{ messageId: "blockTooLong" }, { messageId: "tooDense" }],
		},
	],
});
