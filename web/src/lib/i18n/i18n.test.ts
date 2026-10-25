import { beforeEach, describe, expect, it, vi } from "vitest";
import {
	ensureLocaleLoaded,
	getLocale,
	initLocale,
	setLocale,
} from "./locale.svelte";
import { interpolate, t, tPlural } from "./t";
import { en } from "./en";
import { ru } from "./ru";

type Store = Record<string, string>;

function stubStorage(): { store: Store } {
	const store: Store = {};
	vi.stubGlobal("localStorage", {
		getItem: (k: string) => (k in store ? store[k] : null),
		setItem: (k: string, v: string) => {
			store[k] = v;
		},
	});
	vi.stubGlobal("window", {});
	return { store };
}

beforeEach(async () => {
	await ensureLocaleLoaded("ru");
	setLocale("ru");
	delete (en.home as Record<string, string>).onlyEnKey;
	vi.unstubAllGlobals();
});

describe("t", () => {
	it("returns the string by dot path of the active locale", () => {
		expect(t("header.workspace")).toBe(ru.header.workspace);
		setLocale("en");
		expect(t("header.catalog")).toBe(en.header.catalog);
	});

	it("falls back to the English base when the active locale lacks the key", () => {
		(en.home as Record<string, string>).onlyEnKey = "Only English string";
		setLocale("ru");
		expect(t("home.onlyEnKey")).toBe("Only English string");
	});

	it("translates errors with vars in the active locale", () => {
		setLocale("ru");
		expect(t("errors.pixelCountMismatch", { count: 33, width: 32 })).toContain(
			"33",
		);
		setLocale("en");
		expect(t("errors.pixelCountMismatch", { count: 33, width: 32 })).toContain(
			"33",
		);
	});

	it("unknown path returns the path itself", () => {
		expect(t("no.such.key")).toBe("no.such.key");
	});
});

describe("interpolate", () => {
	it("substitutes variables into the template", () => {
		expect(interpolate("Step {n} of {total}", { n: 2, total: 5 })).toBe(
			"Step 2 of 5",
		);
	});

	it("leaves a placeholder without a variable as-is", () => {
		expect(interpolate("Hello, {name}!", {})).toBe("Hello, {name}!");
	});

	it("without variables returns the string unchanged", () => {
		expect(interpolate("Plain text")).toBe("Plain text");
	});
});

describe("tPlural", () => {
	it("selects the CLDR form of the active locale", () => {
		setLocale("ru");
		expect(tPlural("plurals.parts", 1)).toBe(
			"1 \u0447\u0430\u0441\u0442\u044c",
		);
		expect(tPlural("plurals.parts", 2)).toBe(
			"2 \u0447\u0430\u0441\u0442\u0438",
		);
		expect(tPlural("plurals.parts", 5)).toBe(
			"5 \u0447\u0430\u0441\u0442\u0435\u0439",
		);
		expect(tPlural("plurals.parts", 1.5)).toBe(
			"1.5 \u0447\u0430\u0441\u0442\u0438",
		);
		setLocale("en");
		expect(tPlural("plurals.parts", 1)).toBe("1 part");
		expect(tPlural("plurals.parts", 3)).toBe("3 parts");
	});

	it("takes the other form where the locale has no distinct one", () => {
		setLocale("en");
		expect(tPlural("plurals.parts", 0)).toBe("0 parts");
		expect(tPlural("plurals.parts", 21)).toBe("21 parts");
		expect(tPlural("plurals.parts", 22)).toBe("22 parts");
	});

	it("puts the count into the template instead of gluing it", () => {
		setLocale("en");
		expect(tPlural("plurals.files", 2, { n: 99 })).toBe("2 files");
	});

	it("returns the path for an unknown or non-plural key", () => {
		expect(tPlural("no.such.key", 1)).toBe("no.such.key");
		expect(tPlural("header.workspace", 1)).toBe("header.workspace");
	});
});

describe("locale persistence", () => {
	it("initLocale reads the saved choice", () => {
		const { store } = stubStorage();
		store["locale"] = "en";
		initLocale();
		expect(getLocale()).toBe("en");
	});

	it("initLocale ignores garbage in the storage", () => {
		const { store } = stubStorage();
		store["locale"] = "fr";
		initLocale();
		expect(getLocale()).toBe("ru");
	});

	it("setLocale saves the choice to localStorage", () => {
		const { store } = stubStorage();
		initLocale();
		setLocale("en");
		expect(store["locale"]).toBe("en");
		expect(getLocale()).toBe("en");
	});
});
