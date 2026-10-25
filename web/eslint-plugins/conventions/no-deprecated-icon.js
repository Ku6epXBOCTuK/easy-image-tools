import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const PACKAGE = "@lucide/svelte";
const ALIAS_FILES = ["aliases.d.ts", "prefixed.d.ts", "suffixed.d.ts"];

// NOTE: Lucide marks a rename only in its .d.ts alias table, as
// `@deprecated ... use {@link NewName} instead. */ default as OldName`.
const DEPRECATED_RE =
	/@deprecated[^*]*use \{@link (\w+)\}[^*]*\*\/\s*default as (\w+)/g;

const deprecatedCache = new Map();

function resolveAliasesDir() {
	try {
		const require = createRequire(import.meta.url);
		return join(dirname(require.resolve(PACKAGE)), "aliases");
	} catch {
		return null;
	}
}

// NOTE: An empty table means the package layout changed, not that nothing is
// deprecated; failing here keeps the check from silently passing everything.
export function readDeprecated(aliasesDir) {
	const cached = deprecatedCache.get(aliasesDir);
	if (cached) return cached;

	const deprecated = new Map();
	for (const file of ALIAS_FILES) {
		const path = join(aliasesDir, file);
		if (!existsSync(path)) continue;
		for (const match of readFileSync(path, "utf-8").matchAll(DEPRECATED_RE)) {
			deprecated.set(match[2], match[1]);
		}
	}
	if (deprecated.size === 0) {
		throw new Error(
			`[conventions/no-deprecated-icon] no @deprecated aliases parsed from ${aliasesDir}; the @lucide/svelte .d.ts layout changed`,
		);
	}
	deprecatedCache.set(aliasesDir, deprecated);
	return deprecated;
}

// NOTE: The alias table lists the canonical name without the Lucide/Icon
// affixes, so the replacement keeps the naming style the import already uses.
function replacementFor(deprecatedName, canonicalName) {
	const prefix = deprecatedName.startsWith("Lucide") ? "Lucide" : "";
	const suffix =
		deprecatedName.endsWith("Icon") && !canonicalName.endsWith("Icon")
			? "Icon"
			: "";
	return `${prefix}${canonicalName}${suffix}`;
}

export default {
	meta: {
		type: "problem",
		docs: {
			description:
				"Disallow importing a deprecated @lucide/svelte alias; the replacement named in the package .d.ts is suggested.",
			category: "Conventions",
			recommended: true,
		},
		schema: [
			{
				type: "object",
				properties: {
					aliasesDir: { type: "string", minLength: 1 },
				},
				additionalProperties: false,
			},
		],
		messages: {
			deprecatedIcon:
				"'{{name}}' is a deprecated @lucide/svelte alias; use '{{replacement}}' instead.",
		},
	},
	create(context) {
		const aliasesDir = context.options[0]?.aliasesDir ?? resolveAliasesDir();
		if (!aliasesDir) return {};

		const deprecated = readDeprecated(aliasesDir);

		return {
			ImportDeclaration(node) {
				if (node.source.value !== PACKAGE) return;
				for (const specifier of node.specifiers) {
					if (specifier.type !== "ImportSpecifier") continue;
					const imported =
						specifier.imported.type === "Identifier"
							? specifier.imported.name
							: specifier.imported.value;
					const canonical = deprecated.get(imported);
					if (!canonical) continue;
					context.report({
						node: specifier,
						messageId: "deprecatedIcon",
						data: {
							name: imported,
							replacement: replacementFor(imported, canonical),
						},
					});
				}
			},
		};
	},
};
