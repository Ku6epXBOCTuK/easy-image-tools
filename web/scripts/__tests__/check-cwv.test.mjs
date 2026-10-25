import { describe, expect, it } from "vitest";
import { DEFAULT_TOP, coreRoutes } from "../check-cwv.mjs";
import { CATEGORY_IDS } from "../../src/lib/categories.ts";
import { POPULARITY } from "../../src/lib/registry/popularity.ts";

const toSlug = (route) => route.slice("/tools/".length);
const byPopularity = (a, b) =>
	POPULARITY[toSlug(b)] - POPULARITY[toSlug(a)] || a.localeCompare(b);

describe("coreRoutes", () => {
	it("puts home first, then top tools by popularity, then category hubs", async () => {
		const routes = await coreRoutes(3);
		const tools = routes.filter((route) => route.startsWith("/tools/"));
		const hubs = routes.filter((route) => route.startsWith("/categories/"));

		expect(routes[0]).toBe("/");
		expect(tools).toHaveLength(3);
		expect(hubs).toEqual(CATEGORY_IDS.map((id) => `/categories/${id}`));
		expect([...tools].sort(byPopularity)).toEqual(tools);
	});

	it("defaults to DEFAULT_TOP tools", async () => {
		const routes = await coreRoutes();
		expect(routes.filter((route) => route.startsWith("/tools/"))).toHaveLength(
			DEFAULT_TOP,
		);
	});

	it("returns unique routes", async () => {
		const routes = await coreRoutes();
		expect(new Set(routes).size).toBe(routes.length);
	});
});
