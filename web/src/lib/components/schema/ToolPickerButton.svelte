<script lang="ts">
	import Icon from "$lib/components/ui/Icon.svelte";
	import { trackPopover } from "$lib/components/ui/popover-position";
	import { pageTitle } from "$lib/i18n/schema-tool-strings";
	import { chainablePages } from "$lib/pipeline.svelte";
	import type { Page } from "$lib/registry";
	import { Plus, Repeat } from "@lucide/svelte";

	interface Props {
		label: string;
		iconOnly?: boolean;
		onadd: (toolId: string) => void;
	}
	let { label, iconOnly = false, onadd }: Props = $props();

	const pages = chainablePages();

	const menuId = $props.id();
	let open = $state(false);
	let btn = $state<HTMLButtonElement | null>(null);
	let menu = $state<HTMLDivElement | null>(null);

	// While open, keep the popover placed next to the button (scroll/resize).
	$effect(() => {
		if (!open || !menu || !btn) return;
		return trackPopover(menu, btn, "end");
	});

	function choose(page: Page) {
		onadd(page.steps[0].id);
		menu?.hidePopover();
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
		role="menu"
		popover="auto"
		ontoggle={(e) => (open = e.newState === "open")}
	>
		{#each pages as page (page.slug)}
			<button
				type="button"
				class="item"
				role="menuitem"
				onclick={() => choose(page)}
			>
				{pageTitle(page)}
			</button>
		{/each}
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
		/* Native popover: top layer + light dismiss + Escape out of the box;
		   positioning is trackPopover (anchor() is not supported everywhere). */
		position: fixed;
		margin: 0;
		translate: 0 var(--space-s);
		min-width: calc(var(--space-xxxl) * 8);
		max-height: calc(var(--space-xxxl) * 8);
		overflow-y: auto;
		gap: var(--space-s);
		padding: var(--space-m);
		border: var(--size-border) solid var(--color-border);
		border-radius: var(--radius-m);
		background: var(--color-panel);
	}
	/* display applies only while open: the author display overrides the
	   UA rule [popover]:not(:popover-open) { display: none }. */
	.menu:popover-open {
		display: grid;
	}
	.item {
		padding: var(--space-m) var(--space-l);
		border: var(--size-border) solid transparent;
		border-radius: var(--radius-s);
		background: transparent;
		color: var(--color-text-muted);
		font: var(--font-size-s) var(--font-mono);
		text-align: left;
		cursor: pointer;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.item:hover {
		color: var(--color-text);
		border-color: var(--color-border);
	}
</style>
