import {
	getStyleNodeLoc,
	getStyleRoot,
} from "../design-tokens/style-context.js";

export default {
	meta: {
		type: "suggestion",
		docs: {
			description:
				"Require comments to be written in English (ASCII whitelist; exceptions via allowChars).",
			category: "Conventions",
			recommended: false,
		},
		schema: [
			{
				type: "object",
				properties: {
					allowChars: {
						type: "array",
						items: { type: "string", minLength: 1, maxLength: 1 },
						uniqueItems: true,
					},
				},
				additionalProperties: false,
			},
		],
		messages: {
			nonAscii:
				"Comment contains non-ASCII text ({{chars}}). Write comments in English; localized user-facing strings belong in lib/i18n dictionaries.",
		},
	},
	create(context) {
		const allowed = new Set(context.options[0]?.allowChars ?? []);

		const check = (text, loc) => {
			const offenders = new Set();
			for (const match of text.matchAll(
				// eslint-disable-next-line no-control-regex -- the printable-ASCII whitelist needs explicit control escapes
				/[^\x09\x0A\x0D\x20-\x7E]/g,
			)) {
				if (!allowed.has(match[0])) offenders.add(match[0]);
			}
			if (offenders.size === 0) return;
			context.report({
				loc,
				messageId: "nonAscii",
				data: {
					chars: [...offenders]
						.map(
							(c) =>
								`'${c}' (U+${c.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")})`,
						)
						.join(", "),
				},
			});
		};

		// NOTE: `<style>` is a postcss AST, not a token stream, so ESLint's
		// comment tokens never include those comments; they come from the shared
		// helper the design-tokens rules use (null outside Svelte components).
		const styleRoot = getStyleRoot(context);
		const styleNodeLoc = getStyleNodeLoc(context);
		const htmlComments = [];

		return {
			// NOTE: svelte-eslint-parser keeps `<!-- -->` template comments out
			// of the token stream (they are AST nodes), so getAllComments()
			// never sees them. Collected during traversal to catch nested ones.
			SvelteHTMLComment(node) {
				htmlComments.push(node);
			},
			"Program:exit"() {
				for (const comment of context.sourceCode.getAllComments()) {
					check(comment.value, comment.loc);
				}
				for (const node of htmlComments) {
					check(node.value, node.loc);
				}
				if (!styleRoot || !styleNodeLoc) return;
				styleRoot.walkComments((comment) => {
					check(comment.text ?? "", styleNodeLoc(comment));
				});
			},
		};
	},
};
