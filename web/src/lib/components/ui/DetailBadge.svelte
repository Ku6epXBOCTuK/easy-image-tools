<script lang="ts">
	import { t } from "$lib/i18n/t";
	import Popover from "@ku6epxboctuk/ui-kit/components/Popover";
	import Badge from "./Badge.svelte";

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
			onclick={() => (open = !open)}
		>
			?
		</button>
	{/if}
</span>
{#if detail}
	<Popover
		{open}
		anchor={btn}
		placement="start"
		{id}
		role="tooltip"
		maxWidth="min(calc(var(--space-xxxl) * 12), calc(100vw - 2 * var(--space-xl)))"
		onclose={() => (open = false)}
	>
		{detail}
	</Popover>
{/if}

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
		/* NOTE: Mini target size at 24px: tap without missing. */
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
</style>
