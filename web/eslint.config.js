import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import svelteParser from "svelte-eslint-parser";
import tseslint from "typescript-eslint";
import conventionsPlugin from "./eslint-plugins/conventions/index.js";
import i18nPlugin from "./eslint-plugins/i18n/index.js";
import designTokens from "./eslint-plugins/index.js";

const productionCode = ["**/src/lib/components/**", "**/src/routes/**"];

// NOTE: Tooling files are .mjs/.js only, so they get the base JS recommended
// set but not the TS/svelte ones.
const toolingFiles = [
	"**/eslint-plugins/**/*.js",
	"**/scripts/**/*.mjs",
	"*.config.js",
];

const jsRecommended = Array.isArray(js.configs.recommended)
	? js.configs.recommended
	: [js.configs.recommended];
const svelteRecommended = Array.isArray(svelte.configs["flat/recommended"])
	? svelte.configs["flat/recommended"]
	: [svelte.configs["flat/recommended"]];
// NOTE: Svelte recommended applies to production .svelte only: the parser
// would otherwise swallow plain .ts files in the same folders (+page.ts).
const productionSvelte = [
	"**/src/lib/components/**/*.svelte",
	"**/src/routes/**/*.svelte",
];

export default tseslint.config(
	{
		ignores: [
			"**/node_modules/**",
			"**/build/**",
			"**/.svelte-kit/**",
			"**/dist/**",
			"**/static/**",
		],
	},
	{
		files: ["**/*.ts", "**/*.svelte.ts", "**/*.svelte.js", "**/*.svelte"],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				projectService: {
					allowDefaultProject: [
						"vitest.config.ts",
						"eslint.config.js",
						"playwright.config.ts",
						// NOTE: e2e has its own tsconfig; lint-rule tests and
						// fixtures live outside src/, so typed parsing resolves them
						// via the default project (tseslint bans `**` globs here).
						"eslint-plugins/__tests__/design-tokens.test.ts",
						"eslint-plugins/__tests__/interface-props.test.ts",
						"eslint-plugins/__tests__/no-string-union-alias.test.ts",
						"eslint-plugins/__tests__/helpers.ts",
						"eslint-plugins/__tests__/dict-consistency.test.ts",
						"eslint-plugins/__tests__/no-hardcoded-user-text.test.ts",
						"eslint-plugins/__tests__/ascii-only.test.ts",
						"eslint-plugins/__fixtures__/src/lib/i18n/dict.ts",
						"eslint-plugins/__fixtures__/src/lib/i18n/en.ts",
						"eslint-plugins/__fixtures__/src/lib/i18n/ru.ts",
						"eslint-plugins/__fixtures__/src/lib/i18n/de.ts",
						"eslint-plugins/__fixtures__/src/lib/core/errors.ts",
						"eslint-plugins/__fixtures__/src/lib/i18n/t.ts",
						"eslint-plugins/__fixtures__/src/lib/theme.svelte.ts",
						"eslint-plugins/__fixtures__/src/lib/components/CheckerCanvas.svelte",
						"eslint-plugins/__fixtures__/src/lib/components/ui/Button.svelte",
						"eslint-plugins/__fixtures__/src/routes/+page.svelte",
					],
					maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 40,
				},
				extraFileExtensions: [".svelte"],
			},
		},
		plugins: {
			"@typescript-eslint": tseslint.plugin,
		},
		rules: {
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{ prefer: "type-imports", fixStyle: "separate-type-imports" },
			],
		},
	},
	{
		files: ["**/*.ts", "**/*.svelte.ts", "**/*.svelte.js"],
		languageOptions: {
			parser: tseslint.parser,
		},
	},
	{
		files: ["**/*.svelte"],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tseslint.parser,
			},
		},
		plugins: {
			"design-tokens": designTokens,
		},
	},
	{
		files: productionSvelte,
		plugins: {
			"design-tokens": designTokens,
		},
		rules: {
			"design-tokens/no-hardcoded-in-svelte": "error",
			"design-tokens/no-category-mismatch": "error",
			"design-tokens/no-token-definition-in-svelte": "error",
			"design-tokens/no-undefined-in-svelte": "error",
		},
	},
	{
		files: productionSvelte,
		plugins: {
			conventions: conventionsPlugin,
		},
		rules: {
			"conventions/interface-props": "error",
		},
	},
	{
		files: productionCode,
		plugins: {
			conventions: conventionsPlugin,
		},
		rules: {
			"conventions/no-string-union-alias": "error",
		},
	},
	// NOTE: The rule reports warnings; `lint:all` runs with --max-warnings=0,
	// so a new warning blocks the gate. The locale list comes from dict.ts.
	{
		files: ["**/src/lib/i18n/*.ts"],
		plugins: {
			i18n: i18nPlugin,
		},
		rules: {
			"i18n/dict-consistency": [
				"warn",
				{
					baseLocaleFallback: ["pages.*.title", "pages.*.description"],
					ignoreMissingPatterns: [
						"tools.*.params",
						"pages.*.seo",
						"categoryHubs",
						"site",
					],
				},
			],
		},
	},
	{
		// NOTE: A hardcoded string silently ships English to the RU locale, so
		// production routes (+page.svelte included) are checked too.
		files: productionSvelte,
		plugins: {
			i18n: i18nPlugin,
		},
		rules: {
			"i18n/no-hardcoded-user-text": "warn",
		},
	},
	{
		// NOTE: /kit is a showcase with intentionally Latin labels; a separate
		// config object is needed because negative globs do not narrow scope.
		files: ["**/src/routes/kit/**/*.svelte"],
		rules: {
			"i18n/no-hardcoded-user-text": "off",
		},
	},
	// NOTE: Tests are ASCII English: typography and non-English prose in
	// describe/it hurt grep-ability and hide hardcoded localized strings.
	{
		files: ["**/*.test.ts", "**/*.spec.ts", "**/e2e/**/*.ts"],
		plugins: {
			conventions: conventionsPlugin,
		},
		rules: {
			// NOTE: U+00D7 is intentional: the pipeline emits sizes with it and
			// tests must assert that exact output.
			"conventions/ascii-only": ["error", { allowChars: ["×"] }],
		},
	},
	{
		// NOTE: Lint-rule fixtures are intentional stubs (non-ASCII strings are
		// input cases); the convention does not apply.
		files: [
			"**/eslint-plugins/__fixtures__/**",
			"**/eslint-plugins/__tests__/**",
		],
		rules: {
			"conventions/ascii-only": "off",
		},
	},
	{
		files: productionCode,
		rules: {
			"max-lines-per-function": [
				"warn",
				{ max: 100, skipBlankLines: true, skipComments: true },
			],
		},
	},
	{
		files: toolingFiles,
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.node,
			},
		},
	},
	...[
		...jsRecommended.map((cfg) => ({
			...cfg,
			files: productionCode,
		})),
		...jsRecommended.map((cfg) => ({
			...cfg,
			files: toolingFiles,
		})),
		...tseslint.configs.recommended.map((cfg) => ({
			...cfg,
			files: productionCode,
		})),
		...svelteRecommended.map((cfg) => ({
			...cfg,
			files: productionSvelte,
		})),
	],

	// NOTE: Svelte 5 props are destructured via `let` (docs convention and
	// AGENTS.md), so prefer-const is a false positive on them.
	{
		files: ["**/*.svelte"],
		rules: {
			"prefer-const": "off",
		},
	},
	// NOTE: prettier goes last to silence formatting rules from the recommended sets.
	prettier,
);
