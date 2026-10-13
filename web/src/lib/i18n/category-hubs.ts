import type { CategoryId } from "../categories";
import { PREVIEW_GROUPS } from "../catalog";
import type { Page } from "../registry";
import type { CategoryHubContent } from "./dict";
import { en } from "./en";
import { getMergedDict } from "./locale.svelte";

/** Address of the hub page; the only place the category route is spelled. */
export function categoryHubPath(id: CategoryId): string {
	return `/categories/${id}`;
}

/** Tool pages of the category, in catalog order. */
export function categoryHubPages(id: CategoryId): Page[] {
	return PREVIEW_GROUPS.find((group) => group.id === id)?.pages ?? [];
}

/** Long-form hub copy, or undefined while a hub has none. */
export function categoryHub(id: CategoryId): CategoryHubContent | undefined {
	return getMergedDict().categoryHubs?.[id];
}

/**
 * Indexability follows the content, exactly as on tool pages: a hub with EN
 * copy is a landing page, a hub without one is a bare list and must not be
 * indexed. Read from the base dict so a locale switch cannot flip the tag.
 */
export function isCategoryHubIndexable(id: CategoryId): boolean {
	return en.categoryHubs?.[id] !== undefined;
}
