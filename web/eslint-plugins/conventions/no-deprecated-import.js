import { dirname } from "node:path";
import ts from "typescript";

// NOTE: Bundler resolution matches what Vite/SvelteKit does, so the resolved
// .d.ts is the same one the editor reads.
const COMPILER_OPTIONS = {
	moduleResolution: ts.ModuleResolutionKind.Bundler,
	module: ts.ModuleKind.ESNext,
	target: ts.ScriptTarget.ESNext,
	skipLibCheck: true,
	allowJs: false,
};

const resolutionCache = new Map();
const deprecationsCache = new Map();

function isExternal(specifier) {
	return (
		typeof specifier === "string" &&
		!specifier.startsWith(".") &&
		!specifier.startsWith("/") &&
		!specifier.startsWith("node:")
	);
}

function resolveSpecifier(containingFile, specifier) {
	const key = `${dirname(containingFile)}|${specifier}`;
	if (resolutionCache.has(key)) return resolutionCache.get(key);

	const resolved =
		ts.resolveModuleName(specifier, containingFile, COMPILER_OPTIONS, ts.sys)
			.resolvedModule?.resolvedFileName ?? null;
	resolutionCache.set(key, resolved);
	return resolved;
}

function tagText(tag) {
	if (typeof tag.text === "string") return tag.text;
	return (tag.text ?? []).map((part) => part.text).join("");
}

// NOTE: TS keeps `{@link X}` as a link part, so the replacement is the name
// after it; a tag without the link means "deprecated, see docs".
function replacementOf(tag) {
	const match = /\{@link\s+([A-Za-z_$][\w$]*)/.exec(tagText(tag));
	return match ? match[1] : null;
}

function deprecationsOf(resolvedFile) {
	if (deprecationsCache.has(resolvedFile)) {
		return deprecationsCache.get(resolvedFile);
	}

	const program = ts.createProgram([resolvedFile], COMPILER_OPTIONS);
	const checker = program.getTypeChecker();
	const source = program.getSourceFile(resolvedFile);
	const moduleSymbol = source ? checker.getSymbolAtLocation(source) : undefined;

	const deprecations = new Map();
	if (moduleSymbol) {
		for (const symbol of checker.getExportsOfModule(moduleSymbol)) {
			const tag = symbol
				.getJsDocTags(checker)
				.find((entry) => entry.name === "deprecated");
			if (tag) deprecations.set(symbol.getName(), replacementOf(tag));
		}
	}

	deprecationsCache.set(resolvedFile, deprecations);
	return deprecations;
}

export default {
	meta: {
		type: "problem",
		docs: {
			description:
				"Disallow importing an export marked @deprecated in the installed package types; the name after {@link ...} is suggested.",
			category: "Conventions",
			recommended: true,
		},
		schema: [],
		messages: {
			deprecatedImport: "'{{name}}' from '{{module}}' is deprecated.",
			deprecatedImportReplace:
				"'{{name}}' from '{{module}}' is deprecated; use '{{replacement}}' instead.",
		},
	},
	create(context) {
		return {
			ImportDeclaration(node) {
				const from = node.source.value;
				if (!isExternal(from)) return;

				let deprecations = null;
				for (const specifier of node.specifiers) {
					if (specifier.type === "ImportNamespaceSpecifier") continue;
					const imported =
						specifier.type === "ImportDefaultSpecifier"
							? "default"
							: specifier.imported.type === "Identifier"
								? specifier.imported.name
								: specifier.imported.value;

					if (!deprecations) {
						const resolved = resolveSpecifier(context.filename, from);
						// NOTE: Source-local modules are linted as files themselves;
						// only package types carry a meaningful @deprecated table.
						if (!resolved || !resolved.includes("node_modules")) return;
						deprecations = deprecationsOf(resolved);
					}

					if (!deprecations.has(imported)) continue;
					const replacement = deprecations.get(imported);
					context.report({
						node: specifier,
						messageId: replacement
							? "deprecatedImportReplace"
							: "deprecatedImport",
						data: {
							name: imported,
							module: from,
							replacement,
						},
					});
				}
			},
		};
	},
};
