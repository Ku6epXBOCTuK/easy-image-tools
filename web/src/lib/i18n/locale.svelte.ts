import { BASE_LOCALE, isLocale, type Dict, type Locale } from "./dict";
import { en } from "./en";
import { safeSetItem, storage } from "../storage";

const STORAGE_KEY = "locale";

// NOTE: ru ships as a lazy chunk (EIT-132): en is the always-present base,
// ru loads on demand - locale switch, a saved ru choice, or ru search input.
let ruDict = $state<Dict | null>(null);
let ruLoading: Promise<void> | null = null;

let locale = $state<Locale>(BASE_LOCALE);
let lastRequested: Locale | null = null;

export function ensureLocaleLoaded(target: Locale): Promise<void> {
	if (target === BASE_LOCALE || ruDict) return Promise.resolve();
	ruLoading ??= import("./ru").then((mod) => {
		ruDict = mod.ru;
	});
	return ruLoading;
}

export function getLocale(): Locale {
	return locale;
}

export function getDict(): Dict {
	return locale === "ru" ? (ruDict ?? en) : en;
}

export function getRuDict(): Dict | undefined {
	return ruDict ?? undefined;
}

// NOTE: Dictionary of the active locale; missing values fall back to the base
// locale. Until a lazy ru chunk arrives the base is served as-is.
export function getMergedDict(): Dict {
	if (locale !== "ru" || !ruDict) return en;
	return new Proxy(en, {
		get(_target, section: string) {
			const a = (ruDict as unknown as Record<string, unknown>)[section];
			const b = (en as unknown as Record<string, unknown>)[section];
			if (a && b && typeof a === "object" && typeof b === "object") {
				return { ...(b as object), ...(a as object) };
			}
			return a ?? b;
		},
	}) as Dict;
}

// NOTE: The last requested locale wins: a slow ru load must not override a
// newer choice. Once ru is loaded, switching is synchronous again.
export function setLocale(next: Locale): void {
	lastRequested = next;
	if (next !== BASE_LOCALE && !ruDict) {
		void ensureLocaleLoaded(next).then(() => {
			if (lastRequested === next) applyLocale(next);
		});
		return;
	}
	applyLocale(next);
}

// NOTE: Reads the saved choice and syncs the lang attribute. Called on the client.
export function initLocale(): void {
	if (typeof window === "undefined") return;
	const saved = storage()?.getItem(STORAGE_KEY);
	if (isLocale(saved)) {
		lastRequested = saved;
		locale = saved;
		void ensureLocaleLoaded(saved);
	}
	syncLangAttr();
}

function applyLocale(next: Locale): void {
	locale = next;
	safeSetItem(STORAGE_KEY, next);
	syncLangAttr();
}

function syncLangAttr(): void {
	if (typeof document !== "undefined") {
		document.documentElement.lang = locale;
	}
}
