import { CATALOG } from "$lib/catalog";

export const prerender = true;

export function entries() {
	return CATALOG.map((page) => ({ slug: page.slug }));
}

export function load({ params }: { params: { slug: string } }) {
	return { slug: params.slug };
}
