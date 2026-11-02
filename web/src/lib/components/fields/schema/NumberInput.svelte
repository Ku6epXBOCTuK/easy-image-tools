<script lang="ts">
	interface Props {
		value: number;
		min: number;
		max: number;
		step?: number;
		label: string;
		fixed?: boolean;
		onchange?: (value: number) => void;
	}
	let {
		value,
		min,
		max,
		step = 1,
		label,
		fixed = false,
		onchange,
	}: Props = $props();

	function handle(e: Event) {
		const n = (e.target as HTMLInputElement).valueAsNumber;
		if (Number.isFinite(n)) onchange?.(n);
	}
</script>

<input
	class="number-input"
	class:fixed
	aria-label={label}
	type="number"
	{min}
	{max}
	{step}
	{value}
	oninput={handle}
/>

<style>
	.number-input {
		width: 100%;
		padding: var(--space-m) var(--space-l);
		background: var(--color-background);
		border: var(--size-border) solid var(--color-border);
		border-radius: var(--radius-s);
		color: var(--color-text);
		font: var(--font-size-m) var(--font-mono);
		text-align: center;
		appearance: textfield;
	}

	.number-input.fixed {
		width: calc(var(--space-xxxl) * 3);
	}

	.number-input::-webkit-outer-spin-button,
	.number-input::-webkit-inner-spin-button {
		appearance: none;
		margin: 0;
	}
</style>
