import { CATEGORY_IDS } from "$lib/categories";

export const prerender = true;

export function entries() {
	return CATEGORY_IDS.map((category) => ({ category }));
}

export function load({ params }: { params: { category: string } }) {
	return { category: params.category };
}
