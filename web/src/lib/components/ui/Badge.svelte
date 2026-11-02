<script lang="ts">
	import { Check } from "@lucide/svelte";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	const ToneVariantDefine = {
		DEFAULT: "default",
		ACCENT: "accent",
		SUCCESS: "success",
		WARNING: "warning",
		DANGER: "danger",
		INFO: "info",
	} as const;
	type ToneVariant = (typeof ToneVariantDefine)[keyof typeof ToneVariantDefine];

	const BadgeVariantDefine = {
		DEFAULT: "default",
		OUTLINE: "outline",
		CLEAR: "clear",
		TINT: "tint",
	} as const;
	type BadgeVariant =
		(typeof BadgeVariantDefine)[keyof typeof BadgeVariantDefine];

	const BadgeSizeDefine = {
		S: "s",
		M: "m",
	} as const;
	type BadgeSize = (typeof BadgeSizeDefine)[keyof typeof BadgeSizeDefine];

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		tone?: ToneVariant;
		variant?: BadgeVariant;
		size?: BadgeSize;
		check?: boolean;
		label?: string;
		children?: Snippet;
	}

	let {
		tone = ToneVariantDefine.DEFAULT,
		variant = BadgeVariantDefine.DEFAULT,
		size = BadgeSizeDefine.S,
		check = false,
		label = "",
		children,
		...rest
	}: Props = $props();
</script>

<span
	class="badge badge-tone--{tone} badge-variant--{variant} badge-size--{size}"
	{...rest}
>
	{#if check}
		<Check size={12} />
	{/if}
	{#if children}
		{@render children()}
	{:else}
		{label}
	{/if}
</span>

<style>
	.badge {
		display: flex;
		align-items: center;
		gap: var(--space-s);
		line-height: 1;
		font-family: var(--font-mono);
		font-size: var(--font-size-s);
		font-weight: bold;
		border-width: var(--size-border-thick);
		padding: var(--space-s) var(--space-m);
	}

	.badge-tone--default {
		--color-badge-main: var(--color-main);
		--color-badge-ink: var(--color-main-ink);
		--color-badge-surface: var(--color-main-surface);
	}
	.badge-tone--accent {
		--color-badge-main: var(--color-accent);
		--color-badge-ink: var(--color-accent-ink);
		--color-badge-surface: var(--color-accent-surface);
	}
	.badge-tone--success {
		--color-badge-main: var(--color-success);
		--color-badge-ink: var(--color-success-ink);
		--color-badge-surface: var(--color-success-surface);
	}
	.badge-tone--danger {
		--color-badge-main: var(--color-danger);
		--color-badge-ink: var(--color-danger-ink);
		--color-badge-surface: var(--color-danger-surface);
	}
	.badge-tone--warning {
		--color-badge-main: var(--color-warning);
		--color-badge-ink: var(--color-warning-ink);
		--color-badge-surface: var(--color-warning-surface);
	}
	.badge-tone--info {
		--color-badge-main: var(--color-info);
		--color-badge-ink: var(--color-info-ink);
		--color-badge-surface: var(--color-info-surface);
	}

	.badge-variant--default {
		background-color: var(--color-badge-main);
		border-color: var(--color-badge-main);
		color: var(--color-background);
	}

	.badge-variant--outline {
		background-color: transparent;
		border-color: var(--color-badge-main);
		color: var(--color-badge-ink);
	}

	.badge-variant--clear {
		background-color: transparent;
		border-color: transparent;
		color: var(--color-badge-ink);
	}

	.badge-variant--tint {
		background-color: var(--color-badge-surface);
		border-style: solid;
		border-color: var(--color-badge-main);
		border-radius: var(--radius-m);
		color: var(--color-badge-ink);
	}

	.badge-size--m {
		gap: var(--space-l);
		padding: var(--space-m) var(--space-xl);
		font-size: var(--font-size-m);
	}
</style>
