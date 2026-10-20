// NOTE: String literals are ignored by construction (they are not comments).
// .svelte gets its own pass: template `<!-- -->` comments are AST nodes
// (SvelteHTMLComment), not comment tokens, so they need a svelte parser.
import { RuleTester } from "eslint";
import svelteParser from "svelte-eslint-parser";
import tseslint from "typescript-eslint";
import { describe, it } from "vitest";
import commentsEnglish from "../conventions/comments-english.js";
import { asRuleModule, svelteComponent } from "./helpers.js";

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

tester.run("comments-english", asRuleModule(commentsEnglish), {
	valid: [
		{ code: "// resize the canvas\nconst x = 1;", filename: "a.ts" },
		{ code: "/* multi\nline */\nconst x = 1;", filename: "a.ts" },
		{
			// NOTE: Localized strings are dictionary content, not comments.
			code: "const title = 'Пример';",
			filename: "a.ts",
		},
		{
			code: "// size 512×512\nconst x = 1;",
			filename: "a.ts",
			options: [{ allowChars: ["×"] }],
		},
		{
			// NOTE: A tab inside a comment is legitimate whitespace.
			code: "//\tnote\nconst x = 1;",
			filename: "a.ts",
		},
	],
	invalid: [
		{
			code: "// ресайз холста\nconst x = 1;",
			filename: "a.ts",
			errors: [{ messageId: "nonAscii" }],
		},
		{
			// NOTE: The whitelist catches scripts beyond Cyrillic too.
			code: "// 调整画布大小\nconst x = 1;",
			filename: "a.ts",
			errors: [{ messageId: "nonAscii" }],
		},
		{
			code: "// تغيير حجم اللوحة\nconst x = 1;",
			filename: "a.ts",
			errors: [{ messageId: "nonAscii" }],
		},
		{
			// NOTE: Typography in an otherwise English comment is still non-ASCII.
			code: "// resize — then crop\nconst x = 1;",
			filename: "a.ts",
			errors: [{ messageId: "nonAscii" }],
		},
		{
			code: "/* много\nстрочный */\nconst x = 1;",
			filename: "a.ts",
			errors: [{ messageId: "nonAscii" }],
		},
		{
			code: "const x = 1; // хвостовой комментарий",
			filename: "a.ts",
			errors: [{ messageId: "nonAscii" }],
		},
		{
			// NOTE: One report per offending comment, not per file.
			code: "// раз\n// два\nconst x = 1;",
			filename: "a.ts",
			errors: [{ messageId: "nonAscii" }, { messageId: "nonAscii" }],
		},
		{
			// NOTE: allowChars does not whitelist other glyphs in the same comment.
			code: "// 512×512 → done\nconst x = 1;",
			filename: "a.ts",
			options: [{ allowChars: ["×"] }],
			errors: [{ messageId: "nonAscii" }],
		},
		{
			// NOTE: Control characters (here: vertical tab) are not printable ASCII.
			code: "// \x0B note\nconst x = 1;",
			filename: "a.ts",
			errors: [{ messageId: "nonAscii" }],
		},
	],
});

// NOTE: Svelte components: both comment kinds are in scope. `<script>`
// comments come in as ordinary comment tokens; template `<!-- -->` comments
// only exist as SvelteHTMLComment nodes, which the ts pass cannot reach.
svelteTester.run("comments-english (svelte)", asRuleModule(commentsEnglish), {
	valid: [
		{
			code: "<!-- resize the canvas -->\n<main>Hello</main>",
			filename: "Component.svelte",
		},
		{
			code: svelteComponent("// resize the canvas"),
			filename: "Component.svelte",
		},
		{
			code: '<!-- svelte-ignore a11y_missing_attribute -->\n<main lang="en">Hello</main>',
			filename: "Component.svelte",
		},
		{
			// NOTE: allowChars applies to template comments too.
			code: "<!-- size 512×512 -->\n<main>Hello</main>",
			filename: "Component.svelte",
			options: [{ allowChars: ["×"] }],
		},
		{
			// NOTE: CSS comments in <style> are checked as well, ASCII passes.
			code: '<div class="x">hi</div>\n<style>\n/* keep the row height stable */\n.x {\n\tcolor: red;\n}\n</style>',
			filename: "Component.svelte",
		},
	],
	invalid: [
		{
			// NOTE: The template comment the ts pass could never see.
			code: "<!-- русский комментарий -->\n<main>Hello</main>",
			filename: "Component.svelte",
			errors: [{ messageId: "nonAscii" }],
		},
		{
			// NOTE: <style> is a postcss AST, so its comments are invisible to
			// getAllComments(); the loc must still point at the real line.
			code: '<div class="x">hi</div>\n<style>\n/* русский комментарий в стилях */\n.x {\n\tcolor: red;\n}\n</style>',
			filename: "Component.svelte",
			errors: [{ messageId: "nonAscii", line: 3 }],
		},
		{
			// NOTE: All three comment kinds in one component, reported by position.
			code: '<!-- раз -->\n<style>\n/* два */\n.x {\n\tcolor: red;\n}\n</style>\n<script lang="ts">\n// три\n</script>',
			filename: "Component.svelte",
			errors: [
				{ messageId: "nonAscii", line: 1 },
				{ messageId: "nonAscii", line: 3 },
				{ messageId: "nonAscii", line: 9 },
			],
		},
		{
			code: svelteComponent("// ресайз холста"),
			filename: "Component.svelte",
			errors: [{ messageId: "nonAscii" }],
		},
		{
			// NOTE: One report per comment, script and template alike.
			code: '<!-- раз -->\n<main>два</main>\n<script lang="ts">\n// три\n</script>',
			filename: "Component.svelte",
			errors: [{ messageId: "nonAscii" }, { messageId: "nonAscii" }],
		},
		{
			// NOTE: allowChars does not whitelist other glyphs in the same comment.
			code: "<!-- 512×512 → done -->\n<main>Hello</main>",
			filename: "Component.svelte",
			options: [{ allowChars: ["×"] }],
			errors: [{ messageId: "nonAscii" }],
		},
	],
});
