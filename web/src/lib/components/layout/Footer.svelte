<script lang="ts">
	import { version } from "../../../../package.json";
	import { resolve } from "$app/paths";
	import { PREVIEW_GROUPS } from "$lib/catalog";
	import { t } from "$lib/i18n/t";

	const versionLabel = `v${version}`;
</script>

<footer class="preview-footer">
	<div class="footer-hubs">
		<h2>{t("footer.hubsHeading")}</h2>
		<nav aria-label={t("footer.hubsAria")}>
			{#each PREVIEW_GROUPS as group (group.id)}
				<a href={resolve("/categories/[category]", { category: group.id })}>
					{t(`categories.${group.id}`)}
				</a>
			{/each}
		</nav>
	</div>
	<div class="footer-bar">
		<span>{t("brand")} <b class="version">{versionLabel}</b></span>
		<span>© 2026</span>
	</div>
</footer>

<style>
	.preview-footer {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		padding: var(--space-xl);
		background: var(--color-background);
		border-top: var(--size-border) solid var(--color-border);
		font: var(--font-size-s) var(--font-mono);
		color: var(--color-text-muted);
	}
	.footer-hubs {
		display: flex;
		flex-direction: column;
		gap: var(--space-l);
	}
	.footer-hubs h2 {
		margin: 0;
		font: var(--font-size-xs) var(--font-mono);
		letter-spacing: var(--space-text-xl);
		text-transform: uppercase;
		color: var(--color-text-muted);
	}
	.footer-hubs nav {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-l) var(--space-xxl);
	}
	.footer-hubs a {
		color: var(--color-text);
		text-decoration: none;
	}
	.footer-hubs a:hover {
		color: var(--color-main);
	}
	.footer-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: var(--space-l);
		border-top: var(--size-border) solid var(--color-border);
	}
	.footer-bar span {
		display: flex;
		align-items: center;
		gap: var(--space-m);
	}
	.preview-footer .version {
		font-weight: normal;
		color: var(--color-text-accent);
	}
</style>
