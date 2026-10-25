<script lang="ts">
	import ToolSearchField from "$lib/components/search/ToolSearchField.svelte";
	import ChipButton from "$lib/components/ui/ChipButton.svelte";
	import Icon from "$lib/components/ui/Icon.svelte";
	import { trackPopover } from "$lib/components/ui/popover-position";
	import {
		pageDescription,
		pageTitle,
		pickFeaturedPages,
		searchPagesRanked,
	} from "$lib/i18n/schema-tool-strings";
	import { t } from "$lib/i18n/t";
	import { favPages, isFav, toggleFav } from "$lib/favorites.svelte";
	import { popularityOf } from "$lib/registry/popularity";
	import type { Page } from "$lib/registry";
	import { Plus, Repeat, Star } from "@lucide/svelte";
	import { onMount } from "svelte";

	interface Props {
		label: string;
		iconOnly?: boolean;
		onadd: (toolId: string) => void;
	}
	let { label, iconOnly = false, onadd }: Props = $props();

	// NOTE: chainablePages needs the registry; the lazy load keeps that chunk
	// off the route (EIT-132) and resolves instantly once the page loaded it.
	let pages = $state<Page[] | null>(null);
	onMount(() => {
		void import("$lib/pipeline.svelte").then((mod) => {
			pages = mod.chainablePages();
		});
	});

	let query = $state("");
	let showAll = $state(false);
	const searching = $derived(query.trim().length > 0);
	const favSlugs = $derived(new Set(favPages(pages ?? []).map((p) => p.slug)));
	// NOTE: Mirrors the home page: favorites first (capped), the rest by static
	// popularity; search is ranked and never capped.
	const list = $derived(
		searching
			? searchPagesRanked(pages ?? [], query)
			: showAll
				? [...(pages ?? [])].sort(
						(a, b) => popularityOf(b.slug) - popularityOf(a.slug),
					)
				: pickFeaturedPages(pages ?? [], favSlugs, 6, 2),
	);

	const menuId = $props.id();
	let open = $state(false);
	let btn = $state<HTMLButtonElement | null>(null);
	let menu = $state<HTMLDivElement | null>(null);

	// NOTE: While open, keep the popover placed next to the button (scroll/resize).
	$effect(() => {
		if (!open || !menu || !btn) return;
		return trackPopover(menu, btn, "side");
	});

	function handleToggle(e: ToggleEvent) {
		open = e.newState === "open";
		if (open) {
			query = "";
			showAll = false;
			requestAnimationFrame(() => menu?.querySelector("input")?.focus());
		}
	}

	function choose(page: Page) {
		onadd(page.steps[0].id);
		menu?.hidePopover();
	}

	function toggleFavAt(e: MouseEvent, slug: string) {
		e.stopPropagation();
		toggleFav(slug);
	}

	function activate(e: KeyboardEvent, page: Page) {
		if (e.key !== "Enter" && e.key !== " ") return;
		e.preventDefault();
		choose(page);
	}
</script>

<div class="tool-picker">
	<button
		bind:this={btn}
		type="button"
		class={iconOnly ? "icon-btn" : "add-btn"}
		aria-haspopup="menu"
		aria-expanded={open}
		aria-controls={menuId}
		aria-label={iconOnly ? label : undefined}
		popovertarget={menuId}
	>
		{#if iconOnly}
			<Icon icon={Repeat} size={14} />
		{:else}
			<Icon icon={Plus} size={14} />
			<span>{label}</span>
		{/if}
	</button>
	<div
		bind:this={menu}
		id={menuId}
		class="menu"
		popover="auto"
		ontoggle={handleToggle}
	>
		<ToolSearchField bind:query />
		{#if !searching}
			<div class="list-toolbar">
				<ChipButton
					label={t("search.showAll")}
					active={showAll}
					onclick={() => (showAll = !showAll)}
				/>
			</div>
		{/if}
		{#if list.length > 0}
			<div class="items" role="menu">
				{#each list as page (page.slug)}
					<div
						class="item"
						role="menuitem"
						tabindex="0"
						aria-label={pageTitle(page)}
						onclick={() => choose(page)}
						onkeydown={(e) => activate(e, page)}
					>
						<div class="item-head">
							<strong>{pageTitle(page)}</strong>
							<button
								type="button"
								class="fav"
								aria-pressed={isFav(page.slug)}
								aria-label={isFav(page.slug)
									? t("ui.removeFav")
									: t("ui.addFav")}
								onclick={(e) => toggleFavAt(e, page.slug)}
							>
								<Star
									size={13}
									fill={isFav(page.slug) ? "currentColor" : "none"}
								/>
							</button>
						</div>
						<span class="item-desc">{pageDescription(page)}</span>
					</div>
				{/each}
			</div>
		{:else}
			<p class="empty">{t("search.nothingFound")}</p>
		{/if}
	</div>
</div>

<style>
	.tool-picker {
		display: inline-flex;
	}
	.add-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-m);
		padding: var(--space-m) var(--space-l);
		border: var(--size-border) solid var(--color-main);
		border-radius: var(--radius-m);
		background: var(--color-main);
		color: var(--color-background);
		font: 600 var(--font-size-s) var(--font-mono);
		cursor: pointer;
	}
	.add-btn:hover {
		filter: brightness(1.1);
	}
	.icon-btn {
		display: inline-flex;
		align-items: center;
		padding: var(--space-s);
		border: var(--size-border) solid transparent;
		border-radius: var(--radius-m);
		background: none;
		color: var(--color-text-muted);
		cursor: pointer;
	}
	.icon-btn:hover {
		color: var(--color-text);
	}
	.menu {
		/* NOTE: Native popover: top layer + light dismiss + Escape out of the box;
		   positioning is trackPopover("side") - right of the anchor, clamped into
		   the viewport. */
		position: fixed;
		margin: 0;
		min-width: calc(var(--size-card-min) * 2);
		max-width: calc(var(--size-card-min) * 3);
		padding: var(--space-m);
		border: var(--size-border) solid var(--color-border);
		border-radius: var(--radius-m);
		background: var(--color-panel);
	}
	/* NOTE: display applies only while open: the author display overrides the
	   UA rule [popover]:not(:popover-open) { display: none }. */
	.menu:popover-open {
		display: grid;
		gap: var(--space-m);
	}
	.list-toolbar {
		display: flex;
		justify-content: flex-start;
	}
	.items {
		display: grid;
		gap: var(--space-s);
		max-height: calc(var(--space-xxxl) * 10);
		overflow-y: auto;
		scrollbar-width: thin;
		scrollbar-color: var(--color-border) transparent;
	}
	.empty {
		margin: 0;
		padding: var(--space-m) var(--space-l);
		color: var(--color-text-muted);
		font: var(--font-size-s) var(--font-mono);
	}
	.item {
		padding: var(--space-m) var(--space-l);
		border: var(--size-border) solid transparent;
		border-radius: var(--radius-m);
		background: transparent;
		color: var(--color-text);
		font: var(--font-size-s) var(--font-mono);
		line-height: 1.5;
		text-align: left;
		cursor: pointer;
	}
	.item:hover {
		border-color: var(--color-border);
	}
	.item:hover strong {
		color: var(--color-main);
	}
	.item-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-m);
	}
	.item-head strong {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font: 600 var(--font-size-s) var(--font-mono);
		color: var(--color-text);
	}
	.fav {
		display: grid;
		place-items: center;
		flex: none;
		padding: var(--space-s);
		border: none;
		background: none;
		color: var(--color-text-muted);
		cursor: pointer;
	}
	.fav:hover,
	.fav[aria-pressed="true"] {
		color: var(--color-warning);
	}
	.item-desc {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin-top: var(--space-s);
		color: var(--color-text-muted);
		font: var(--font-size-xs) var(--font-mono);
		line-height: 1.5;
	}
</style>
