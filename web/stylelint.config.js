export default {
	extends: ["stylelint-config-standard"],
	ignoreFiles: [
		"**/node_modules/**",
		"**/build/**",
		"**/.svelte-kit/**",
		"**/static/**",
	],
	rules: {
		// NOTE: Every CSS variable must carry a system prefix, so the design
		// vocabulary stays one greppable source of truth. Stylelint tests the
		// pattern WITHOUT the leading "--", so the regex must not start with --.
		"custom-property-pattern": [
			"^(brand-main|brand-alt)$|^(color|space|size|text|radius|bp|font|duration|ease|z)-",
			{
				message:
					'"%s" must be prefixed: --color-*, --space-*, --size-*, --text-*, --radius-*, --bp-*, --font-*, --duration-*, --ease-*, --z-*; brand: only --brand-main/--brand-alt',
			},
		],
		// NOTE: !important is banned: overriding a look must happen through
		// tokens/layers, not by force. Not part of the standard set.
		"declaration-no-important": true,
		// NOTE: The standard config puts "after-custom-property" into `except`,
		// which makes --fix DELETE blank lines between consecutive custom
		// properties, collapsing token groups into one wall. `ignore` keeps them.
		"custom-property-empty-line-before": [
			"always",
			{
				except: ["first-nested"],
				ignore: [
					"after-custom-property",
					"after-comment",
					"inside-single-line-block",
				],
			},
		],
	},
	overrides: [
		{
			files: ["src/**/*.css"],
			rules: {
				// NOTE: Only --brand-main and --brand-alt may set a color directly
				// (hex/rgb/hsl/named); every other color token must be oklch().
				// The key matches ANY custom property except those two.
				"declaration-property-value-disallowed-list": {
					"/^--(?!brand-main$|brand-alt$).*/": [
						"/#[0-9a-fA-F]{3,8}\\b/",
						"/\\b(?:rgb|rgba|hsl|hsla|hwb|lab|lch)(?:\\()/",
						"/^\\s*(red|green|blue|white|black|gray|grey|transparent|navy|teal|cyan|amber)\\s*;?$/",
					],
				},
			},
		},
	],
};
