import fs from "node:fs";
import path from "node:path";
import tseslint from "typescript-eslint";

const PLACEHOLDER = /\{(\w+)\}/g;

function parseTs(code, filename) {
	const result = tseslint.parser.parseForESLint(code, {
		filePath: filename,
		ecmaVersion: "latest",
		sourceType: "module",
	});
	return result.ast;
}

function unwrap(node) {
	while (
		node &&
		(node.type === "TSAsExpression" || node.type === "TSSatisfiesExpression")
	) {
		node = node.expression;
	}
	return node;
}

function findDictExport(ast) {
	for (const node of ast.body) {
		if (node.type !== "ExportNamedDeclaration") continue;
		const decl = node.declaration;
		if (!decl || decl.type !== "VariableDeclaration") continue;
		const d = decl.declarations[0];
		if (!d || d.id.type !== "Identifier") continue;
		const init = unwrap(d.init);
		if (init && init.type === "ObjectExpression") {
			return { id: d.id, object: init };
		}
	}
	return null;
}

function findBaseLocale(ast) {
	for (const node of ast.body) {
		if (node.type !== "ExportNamedDeclaration") continue;
		const decl = node.declaration;
		if (!decl || decl.type !== "VariableDeclaration") continue;
		for (const d of decl.declarations) {
			if (d.id.type !== "Identifier" || d.id.name !== "BASE_LOCALE") {
				continue;
			}
			const init = unwrap(d.init);
			if (isStringLiteral(init)) return init.value;
		}
	}
	return null;
}

function findLocalesList(ast) {
	for (const node of ast.body) {
		if (node.type !== "ExportNamedDeclaration") continue;
		const decl = node.declaration;
		if (!decl || decl.type !== "VariableDeclaration") continue;
		for (const d of decl.declarations) {
			if (d.id.type !== "Identifier" || d.id.name !== "LOCALES") continue;
			const init = unwrap(d.init);
			if (init && init.type === "ArrayExpression") {
				return init.elements
					.map((el) => (isStringLiteral(el) ? el.value : null))
					.filter((v) => typeof v === "string");
			}
		}
	}
	return null;
}

// NOTE: The parser emits `Literal` in some ESTree versions and `StringLiteral`
// in others; accept both.
function isStringLiteral(node) {
	if (!node) return false;
	if (node.type === "StringLiteral") return true;
	return node.type === "Literal" && typeof node.value === "string";
}

const OBJECT = "object";
const STRING = "string";
const OPAQUE = "opaque";
const PLURAL = "plural";

const PLURAL_KEYS = new Set(["zero", "one", "two", "few", "many", "other"]);

function entryKind(node) {
	if (node.type === "ObjectExpression") return OBJECT;
	if (isStringLiteral(node)) return STRING;
	if (
		node.type === "TemplateLiteral" &&
		node.expressions.length === 0 &&
		node.quasis.length === 1
	) {
		return STRING;
	}
	return OPAQUE;
}

function entryValue(node) {
	if (isStringLiteral(node)) return node.value;
	if (node.type === "TemplateLiteral") return node.quasis[0].value.cooked;
	return null;
}

function propKey(prop) {
	if (prop.key.type === "Identifier") return prop.key.name;
	if (isStringLiteral(prop.key)) return prop.key.value;
	return null;
}

// NOTE: A plural entry is an object of CLDR categories whose only required form
// is `other`; the form set differs per locale, so it is validated separately.
function pluralForms(node) {
	if (node.type !== "ObjectExpression" || node.properties.length === 0) {
		return null;
	}
	const forms = new Map();
	for (const prop of node.properties) {
		if (prop.type !== "Property" || prop.computed) return null;
		const key = propKey(prop);
		if (key == null || !PLURAL_KEYS.has(key)) return null;
		if (entryKind(prop.value) !== STRING) return null;
		forms.set(key, { node: prop, value: entryValue(prop.value) });
	}
	return forms.has("other") ? forms : null;
}

// NOTE: Intermediate objects are recorded too, so a missing whole section is
// reported once.
function buildKeyMap(objectNode) {
	const map = new Map();
	const stack = [[objectNode, []]];
	while (stack.length > 0) {
		const [obj, prefix] = stack.pop();
		for (const prop of obj.properties) {
			if (prop.type !== "Property" || prop.computed) continue;
			const key = propKey(prop);
			if (key == null) continue;
			const dot = [...prefix, key].join(".");
			const forms = pluralForms(prop.value);
			if (forms) {
				map.set(dot, { node: prop, kind: PLURAL, value: null, forms });
				continue;
			}
			const kind = entryKind(prop.value);
			map.set(dot, {
				node: prop,
				kind,
				value: kind === STRING ? entryValue(prop.value) : null,
			});
			if (kind === OBJECT) stack.push([prop.value, [...prefix, key]]);
		}
	}
	return map;
}

function placeholders(value) {
	const set = new Set();
	for (const m of String(value).matchAll(PLACEHOLDER)) set.add(m[1]);
	return set;
}

function formatSet(set) {
	return `{${[...set].sort().join(", ")}}`;
}

function kindLabel(kind) {
	if (kind === PLURAL) return "plural object";
	if (kind === OBJECT) return "object";
	return "string";
}

const pluralCategoryCache = new Map();

// NOTE: Required forms come from CLDR for the locale itself (en: one/other,
// ru: one/few/many/other), so locales never have to mirror each other's sets.
function pluralCategories(locale) {
	let categories = pluralCategoryCache.get(locale);
	if (!categories) {
		categories = new Set(
			new Intl.PluralRules(locale).resolvedOptions().pluralCategories,
		);
		pluralCategoryCache.set(locale, categories);
	}
	return categories;
}

function reportPlaceholderGap(context, node, key, locale, value, canonical) {
	if (!canonical) return;
	const active = placeholders(value);
	if (
		active.size === canonical.size &&
		[...active].every((p) => canonical.has(p))
	) {
		return;
	}
	context.report({
		node,
		messageId: "placeholderMismatch",
		data: {
			key,
			locale,
			active: formatSet(active),
			expected: formatSet(canonical),
		},
	});
}

function matchesPattern(key, pattern) {
	const keyParts = key.split(".");
	const patternParts = pattern.split(".");
	return (
		keyParts.length >= patternParts.length &&
		patternParts.every(
			(part, index) => part === "*" || part === keyParts[index],
		)
	);
}

function* ancestorPaths(key) {
	let i = key.lastIndexOf(".");
	while (i !== -1) {
		yield key.slice(0, i);
		i = key.lastIndexOf(".", i - 1);
	}
}

function addLeaf(leaves, key, locale, set) {
	if (!leaves.has(key)) leaves.set(key, []);
	leaves.get(key).push({ locale, set });
}

// NOTE: Canonical placeholder set per key: the set shared by the most locales;
// on a tie the base locale wins before LOCALES order.
function canonicalSetsOf(leaves, baseLocale) {
	const result = new Map();
	for (const [key, entries] of leaves) {
		const counts = new Map();
		for (const { set } of entries) {
			const sig = [...set].sort().join("\u0000");
			counts.set(sig, (counts.get(sig) || 0) + 1);
		}
		let bestCount = 0;
		let bestLocale = null;
		for (const { locale, set } of entries) {
			const sig = [...set].sort().join("\u0000");
			const count = counts.get(sig);
			if (
				count > bestCount ||
				(count === bestCount &&
					locale === baseLocale &&
					bestLocale !== baseLocale)
			) {
				bestCount = count;
				bestLocale = locale;
				result.set(key, set);
			}
		}
	}
	return result;
}

// NOTE: Sibling dicts are read once per directory and cached for the whole
// lint run (mirrors how no-undefined-in-svelte caches the token dictionary).
const dirCache = new Map();

function loadDir(dir) {
	if (!dirCache.has(dir)) dirCache.set(dir, readDir(dir));
	return dirCache.get(dir);
}

function readDir(dir) {
	const dictPath = path.join(dir, "dict.ts");
	if (!fs.existsSync(dictPath)) return null;
	const ast = parseTs(fs.readFileSync(dictPath, "utf8"), dictPath);
	const locales = findLocalesList(ast);
	const baseLocale = findBaseLocale(ast);
	if (!locales || locales.length === 0) return null;

	const dicts = [];
	for (const locale of locales) {
		const file = path.join(dir, `${locale}.ts`);
		if (!fs.existsSync(file)) {
			// NOTE: Declared in LOCALES but not yet translated; treated as an empty
			// dict so every key it lacks reports `missing key ... in <locale>`.
			dicts.push({ locale, map: new Map() });
			continue;
		}
		const dictAst = parseTs(fs.readFileSync(file, "utf8"), file);
		const dictExport = findDictExport(dictAst);
		if (!dictExport) continue;
		dicts.push({ locale, map: buildKeyMap(dictExport.object) });
	}

	// NOTE: Union of every key across all locales (intermediate paths
	// included), so a file can report exactly what it is missing.
	const unionPaths = new Set();
	// NOTE: Non-empty leaves per key: locales contribute to the canonical
	// placeholder set voting (empty values are broken on their own). Plural
	// forms vote per `key.form`, so `{n}` parity is checked per form.
	const stringLeaves = new Map();
	const pluralLeaves = new Map();
	for (const d of dicts) {
		for (const [key, entry] of d.map) {
			unionPaths.add(key);
			if (entry.kind === STRING && (entry.value ?? "").trim() !== "") {
				addLeaf(stringLeaves, key, d.locale, placeholders(entry.value));
			}
			if (entry.kind === PLURAL) {
				for (const [form, leaf] of entry.forms) {
					if ((leaf.value ?? "").trim() === "") continue;
					addLeaf(
						pluralLeaves,
						`${key}.${form}`,
						d.locale,
						placeholders(leaf.value),
					);
				}
			}
		}
	}

	return {
		locales,
		baseLocale,
		dicts,
		unionPaths,
		canonicalSets: canonicalSetsOf(stringLeaves, baseLocale),
		pluralCanonicalSets: canonicalSetsOf(pluralLeaves, baseLocale),
	};
}

export default {
	meta: {
		type: "suggestion",
		docs: {
			description:
				"Check cross-locale consistency of the i18n dicts in lib/i18n (warn-only).",
			category: "Best Practices",
		},
		schema: [
			{
				type: "object",
				properties: {
					allowPaths: {
						type: "array",
						items: { type: "string" },
					},
					baseLocaleFallback: {
						type: "array",
						items: { type: "string" },
					},
					ignoreMissingPatterns: {
						type: "array",
						items: { type: "string" },
					},
				},
				additionalProperties: false,
			},
		],
		messages: {
			missingKey: 'missing key "{{key}}" in {{locale}}',
			emptyValue: 'empty value "{{key}}" in {{locale}}',
			placeholderMismatch:
				'placeholder mismatch for "{{key}}" in {{locale}}: {{active}} vs expected {{expected}}',
			pluralFormMissing:
				'missing plural form "{{form}}" for "{{key}}" in {{locale}}',
			kindMismatch:
				'kind mismatch for "{{key}}" in {{locale}}: {{active}}, but {{expected}}',
		},
	},
	create(context) {
		const options = context.options[0] || {};
		const allowPaths = new Set(options.allowPaths || []);
		const baseLocaleFallback = options.baseLocaleFallback || [];
		const ignoreMissingPatterns = options.ignoreMissingPatterns || [];

		const filename = path.resolve(
			context.filename || context.physicalFilename || "",
		);
		const locale = path.basename(filename, path.extname(filename));
		const dirInfo = loadDir(path.dirname(filename));
		if (!dirInfo || !dirInfo.locales.includes(locale)) return {};

		const dictExport = findDictExport(context.sourceCode.ast);
		if (!dictExport) return {};

		const own = buildKeyMap(dictExport.object);
		const isMissingAllowed = (key) => {
			if (allowPaths.has(key)) return true;
			if (
				ignoreMissingPatterns.some((pattern) => matchesPattern(key, pattern))
			) {
				return true;
			}
			return (
				locale === dirInfo.baseLocale &&
				baseLocaleFallback.some((pattern) => matchesPattern(key, pattern))
			);
		};

		const missing = [...dirInfo.unionPaths].filter((key) => !own.has(key));
		const requiredMissing = missing.filter((key) => {
			if (isMissingAllowed(key)) return false;
			const descendants = missing.filter((candidate) =>
				candidate.startsWith(`${key}.`),
			);
			return (
				descendants.length === 0 ||
				descendants.some((candidate) => !isMissingAllowed(candidate))
			);
		});
		const requiredSet = new Set(requiredMissing);
		const topMissing = requiredMissing.filter(
			(key) =>
				![...ancestorPaths(key)].some((ancestor) => requiredSet.has(ancestor)),
		);
		for (const key of topMissing) {
			context.report({
				node: dictExport.id,
				messageId: "missingKey",
				data: { key, locale },
			});
		}

		const baseMap = dirInfo.dicts.find(
			(d) => d.locale === dirInfo.baseLocale,
		)?.map;
		const expectedKind = (key) => {
			if (locale !== dirInfo.baseLocale) return baseMap?.get(key)?.kind;
			return dirInfo.dicts.find((d) => d.locale !== locale)?.map.get(key)?.kind;
		};

		for (const [key, entry] of own) {
			if (allowPaths.has(key)) continue;

			if (entry.kind === PLURAL) {
				for (const form of pluralCategories(locale)) {
					if (entry.forms.has(form)) continue;
					context.report({
						node: entry.node,
						messageId: "pluralFormMissing",
						data: { key, locale, form },
					});
				}
				for (const [form, leaf] of entry.forms) {
					if ((leaf.value ?? "").trim() === "") {
						context.report({
							node: leaf.node,
							messageId: "emptyValue",
							data: { key: `${key}.${form}`, locale },
						});
						continue;
					}
					reportPlaceholderGap(
						context,
						leaf.node,
						`${key}.${form}`,
						locale,
						leaf.value,
						dirInfo.pluralCanonicalSets.get(`${key}.${form}`),
					);
				}
			} else if (entry.kind === STRING) {
				if ((entry.value ?? "").trim() === "") {
					context.report({
						node: entry.node,
						messageId: "emptyValue",
						data: { key, locale },
					});
					continue;
				}
				reportPlaceholderGap(
					context,
					entry.node,
					key,
					locale,
					entry.value,
					dirInfo.canonicalSets.get(key),
				);
			}

			const other = expectedKind(key);
			if (
				other &&
				other !== entry.kind &&
				(other === PLURAL || entry.kind === PLURAL)
			) {
				context.report({
					node: entry.node,
					messageId: "kindMismatch",
					data: {
						key,
						locale,
						active: kindLabel(entry.kind),
						expected: kindLabel(other),
					},
				});
			}
		}

		return {};
	},
};
