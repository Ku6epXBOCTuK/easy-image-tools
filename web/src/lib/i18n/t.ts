import { LOCALE_TAGS, type Locale, type PluralForms } from "./dict";
import { getLocale, getMergedDict } from "./locale.svelte";

export function interpolate(
	template: string,
	vars?: Record<string, string | number>,
): string {
	if (!vars) return template;
	return template.replace(/\{(\w+)\}/g, (match, name: string) =>
		name in vars ? String(vars[name]) : match,
	);
}

function lookup(path: string): unknown {
	let node: unknown = getMergedDict();
	for (const part of path.split(".")) {
		if (
			node &&
			typeof node === "object" &&
			part in (node as Record<string, unknown>)
		) {
			node = (node as Record<string, unknown>)[part];
		} else {
			return undefined;
		}
	}
	return node;
}

// NOTE: Translation by dot path like 'header.workspace' or 'errors.ERR_BAD_HEX'.
// Active locale first, then base; if the key is nowhere, the path itself is returned.
export function t(
	path: string,
	vars?: Record<string, string | number>,
): string {
	const node = lookup(path);
	return typeof node === "string" ? interpolate(node, vars) : path;
}

const pluralRules = new Map<Locale, Intl.PluralRules>();

function selectForm(locale: Locale, n: number): Intl.LDMLPluralRule {
	let rules = pluralRules.get(locale);
	if (!rules) {
		rules = new Intl.PluralRules(LOCALE_TAGS[locale]);
		pluralRules.set(locale, rules);
	}
	return rules.select(n);
}

// NOTE: Plural by CLDR category of the active locale; a missing category falls
// back to `other`, and the count goes into the template as `{n}`.
export function tPlural(
	path: string,
	n: number,
	vars?: Record<string, string | number>,
): string {
	const node = lookup(path);
	if (!node || typeof node !== "object") return path;
	const forms = node as PluralForms;
	const byForm = forms as Record<string, string | undefined>;
	const form = byForm[selectForm(getLocale(), n)] ?? forms.other;
	return typeof form === "string" ? interpolate(form, { ...vars, n }) : path;
}
