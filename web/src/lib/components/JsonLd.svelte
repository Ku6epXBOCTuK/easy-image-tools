<script lang="ts">
	interface Props {
		data: Record<string, unknown> | Record<string, unknown>[];
	}
	let { data }: Props = $props();

	// NOTE: `<` is escaped so a value can never close the script tag early;
	// U+2028/U+2029 are escaped because they break JS string literals.
	const json = $derived(
		JSON.stringify(data)
			.replace(/</g, "\\u003c")
			.replace(/[\u2028\u2029]/g, (c) =>
				c === "\u2028" ? "\\u2028" : "\\u2029",
			),
	);
</script>

<!-- NOTE: The closing tag is built from two parts: a literal closing script
     tag inside the template would end the block the parser is reading. -->
<!-- eslint-disable-next-line svelte/no-at-html-tags -- json is escaped above, the only markup is this script wrapper -->
{@html `<script type="application/ld+json">${json}</` + "script>"}
