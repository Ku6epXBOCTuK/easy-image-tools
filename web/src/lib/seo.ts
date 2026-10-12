/**
 * Public site URL for canonical/OG. From build-time `PUBLIC_SITE_ORIGIN` (set in
 * CI), falling back to the production domain; `$app/paths.base` is relative and
 * won't work here. `docs/plan-seo.md` section 6.
 */
const rawOrigin = import.meta.env.PUBLIC_SITE_ORIGIN;
export const SITE_URL =
	typeof rawOrigin === "string" && rawOrigin.trim() !== ""
		? rawOrigin.trim().replace(/\/+$/, "")
		: "https://easy-image-tools.com";
