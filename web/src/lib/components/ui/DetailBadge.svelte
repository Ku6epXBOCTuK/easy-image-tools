<script lang="ts">
	import { t } from "$lib/i18n/t";
	import Badge from "./Badge.svelte";
	import { trackPopover } from "./popover-position";

	interface Props {
		tone: "warning" | "danger";
		label: string;
		detail?: string;
		role?: "alert" | "status";
	}
	let { tone, label, detail = undefined, role = "status" }: Props = $props();

	const id = $props.id();
	let open = $state(false);
	let btn = $state<HTMLButtonElement | null>(null);
	let popover = $state<HTMLSpanElement | null>(null);

	// While open, keep the popover placed next to the "?" button.
	$effect(() => {
		if (!open || !popover || !btn) return;
		return trackPopover(popover, btn, "start");
	});
</script>

<span class="detail-badge">
	<Badge {tone} {label} {role} />
	{#if detail}
		<button
			bind:this={btn}
			type="button"
			class="more"
			aria-label={t("ui.detailsAria")}
			aria-expanded={open}
			aria-controls={id}
			popovertarget={id}
		>
			?
		</button>
		<span
			bind:this={popover}
			{id}
			class="popover"
			role="tooltip"
			popover="auto"
			ontoggle={(e) => (open = e.newState === "open")}
		>
			{detail}
		</span>
	{/if}
</span>

<style>
	.detail-badge {
		display: inline-flex;
		align-items: center;
		gap: var(--space-s);
	}
	.more {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		/* Mini target size at 24px: tap without missing. */
		width: calc(var(--space-xxxl) * 0.66);
		height: calc(var(--space-xxxl) * 0.66);
		padding: 0;
		border: var(--size-border) solid var(--color-border);
		border-radius: var(--radius-s);
		background: var(--color-panel);
		color: var(--color-text-muted);
		font: var(--font-size-s) var(--font-mono);
		font-weight: bold;
		line-height: 1;
		cursor: pointer;
	}
	.more:hover,
	.more:focus-visible {
		color: var(--color-text);
		border-color: var(--color-main);
	}
	/* The native popover lives in the top layer: light dismiss, Escape and
	   stacking above everything come for free. Positioning is trackPopover:
	   anchor() is not supported in every browser. */
	.popover {
		position: fixed;
		margin: 0;
		translate: 0 var(--space-s);
		width: max-content;
		max-width: min(
			calc(var(--space-xxxl) * 12),
			calc(100vw - 2 * var(--space-xl))
		);
		padding: var(--space-m) var(--space-l);
		border: var(--size-border-thick) solid var(--color-text-muted);
		border-radius: var(--radius-m);
		background: var(--color-background);
		color: var(--color-text);
		font: var(--font-size-s) var(--font-mono);
		font-weight: normal;
		text-align: left;
		text-transform: none;
		white-space: normal;
		overflow-wrap: anywhere;
	}
</style>
