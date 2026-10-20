import { ru } from "../../src/lib/i18n/ru";

// NOTE: RU text is never hardcoded in specs: the title is read from the dictionary.
export function ruPageTitle(slug: string): string {
	const title = ru.pages?.[slug]?.title;
	if (!title) throw new Error(`ru dictionary has no pages.${slug}.title`);
	return title;
}
