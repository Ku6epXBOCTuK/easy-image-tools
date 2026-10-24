<script lang="ts">
	import { t } from "$lib/i18n/t";
	import { SITE_URL } from "$lib/seo";

	interface Props {
		title: string;
		description: string;
		// NOTE: Page path from the router root ("/", "/list-tools", "/tools/...").
		path: string;
	}
	let { title, description, path }: Props = $props();

	const url = $derived(`${SITE_URL}${path}`);
	// NOTE: og:image must be absolute, but at prerender both `resolve()` and
	// `assets` emit page-relative paths ("." / ".."), correct only for HTML
	// references - so like canonical it is SITE_URL + literal path.
	const image = $derived(
		`${SITE_URL}/og/${
			path.startsWith("/tools/")
				? `${path.slice("/tools/".length)}.png`
				: "default.png"
		}`,
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={t("brand")} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={title} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
