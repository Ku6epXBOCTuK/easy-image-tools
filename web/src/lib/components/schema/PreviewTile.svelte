<script lang="ts">
	import type { InputMode, ResultKind } from "$lib/registry";
	import { RefreshCw } from "@lucide/svelte";
	import { t } from "$lib/i18n/t";
	import Badge from "$lib/components/ui/Badge.svelte";
	import DetailBadge from "$lib/components/ui/DetailBadge.svelte";
	import type { Snippet } from "svelte";

	interface Props {
		label: string;
		viewMode: InputMode | ResultKind;
		children: Snippet;
		loading?: boolean;
		parts?: number;
		partsDims?: string;
		dims?: string;
		note?: string;
		noteTone?: "warning" | "info";
		// Runtime warnings (chain/source/download events): shown as badges next
		// to the derived result note, full message in the "?" popover.
		warnings?: { label: string; detail?: string }[];
		// Runtime errors: danger badges; the full message lives in the
		// DetailBadge popover behind the "?" button.
		errors?: { label: string; detail?: string }[];
		actions?: Snippet;
	}
	let {
		label,
		viewMode: mode,
		children,
		loading = false,
		parts = undefined,
		partsDims = undefined,
		dims = undefined,
		note = undefined,
		noteTone = "warning",
		warnings = [],
		errors = [],
		actions = undefined,
	}: Props = $props();
</script>

<figure class="tile">
	<figcaption>
		<span class="tile-label">
			<span
				>{label}{#if parts !== undefined}<span class="dims"
						>: {parts}
						{t("resultCard.parts")}{#if partsDims}
							· {partsDims}{/if}</span
					>{:else if dims}<span class="dims">: {dims}</span>{/if}</span
			>
			{#if loading}
				<RefreshCw class="rotating" size="12" />
			{/if}
		</span>
		<span class="tile-note">
			{#if actions}
				{@render actions()}
			{/if}
			{#if note}
				<Badge tone={noteTone} label={note} />
			{/if}
			{#each errors as error (error.label + (error.detail ?? ""))}
				<DetailBadge
					tone="danger"
					label={error.label}
					detail={error.detail}
					role="alert"
				/>
			{/each}
			{#each warnings as warning (warning.label + (warning.detail ?? ""))}
				<DetailBadge
					tone="warning"
					label={warning.label}
					detail={warning.detail}
					role="status"
				/>
			{/each}
		</span>
	</figcaption>
	<div class="canvas" class:checker={mode === "image"}>
		{@render children()}
	</div>
</figure>

<style>
	.tile figcaption {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-m);
		/* Reserve for the badge: the row does not jump when the note appears. */
		min-height: var(--space-xxl);
		margin-bottom: var(--space-m);
		font: var(--font-size-s) var(--font-mono);
		text-transform: uppercase;
		color: var(--color-text-muted);
		& :global(.rotating) {
			animation: rotate var(--duration-l) linear infinite;
		}
	}
	.tile-label {
		display: inline-flex;
		align-items: center;
		gap: var(--space-m);
	}
	/* Slot for result notes: warning badges. */
	.tile-note {
		display: inline-flex;
		align-items: center;
		gap: var(--space-m);
	}
	.dims {
		color: var(--color-main);
	}
	.canvas {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: var(--size-tile-canvas-min);
		border: var(--size-border) solid var(--color-border);
		border-radius: var(--radius-s);
		overflow: hidden;
		background: var(--color-background-muted);
		color: var(--color-text-muted);
	}
	.canvas :global(img) {
		width: auto;
		max-width: 100%;
		height: auto;
		max-height: 60vh;
		object-fit: contain;
		display: block;
	}
	.canvas.checker {
		background: repeating-conic-gradient(
				var(--color-checker-main) 0 25%,
				var(--color-checker-alt) 0 50%
			)
			50% / 28px 28px;
	}
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
