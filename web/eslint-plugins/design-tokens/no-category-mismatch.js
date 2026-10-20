import {
	COLOR_PROPS,
	COLOR_TOKEN,
	MIXED_PROPS,
	SIZE_PROPS,
	SIZE_TOKEN,
} from "./lists.js";
import { getStyleNodeLoc, getStyleRoot } from "./style-context.js";

const collectVars = (value) =>
	Array.from(value.matchAll(/var\(\s*(--[\w-]+)/g), (m) => m[1]);

export default {
	meta: {
		type: "suggestion",
		docs: {
			description:
				"Ban using a color token in size properties and a size token in color properties; each property must use tokens of its own category.",
			category: "Design tokens",
			recommended: true,
		},
		messages: {
			categoryMismatch:
				"Token '{{token}}' in '{{prop}}' belongs to the {{category}} category; expected a {{expected}} token.",
		},
		schema: [],
	},
	create(context) {
		const root = getStyleRoot(context);
		if (!root) return {};
		const styleNodeLoc = getStyleNodeLoc(context);

		return {
			"Program:exit"(programNode) {
				const report = (node, ruleId, data) => {
					if (!styleNodeLoc) return;
					const loc = styleNodeLoc(node);
					context.report({
						node: programNode,
						loc,
						ruleId,
						messageId: ruleId,
						data,
					});
				};

				root.walkDecls((decl) => {
					const prop = decl.prop ?? "";
					const value = decl.value ?? "";

					// NOTE: Mixed shorthands legitimately take BOTH a size and a
					// color: the browser assigns sub-properties by value type, so
					// the category checks are skipped for them.
					if (MIXED_PROPS.test(prop)) return;

					const isSizeProp = SIZE_PROPS.test(prop);
					const isColorProp = COLOR_PROPS.test(prop);
					if (!isSizeProp && !isColorProp) return;

					for (const token of collectVars(value)) {
						if (isSizeProp && COLOR_TOKEN.test(token)) {
							report(decl, "categoryMismatch", {
								token,
								prop,
								category: "color",
								expected: "size",
							});
						}
						if (isColorProp && SIZE_TOKEN.test(token)) {
							report(decl, "categoryMismatch", {
								token,
								prop,
								category: "size",
								expected: "color",
							});
						}
					}
				});
			},
		};
	},
};
