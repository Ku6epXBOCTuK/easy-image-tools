<script lang="ts">
	interface Props {
		value: number;
		min: number;
		max: number;
		step?: number;
		label: string;
		onchange?: (value: number) => void;
	}
	let { value, min, max, step = 1, label, onchange }: Props = $props();

	function handle(e: Event) {
		const n = (e.target as HTMLInputElement).valueAsNumber;
		if (Number.isFinite(n)) onchange?.(n);
	}
</script>

<input
	class="range-slider"
	aria-label={label}
	type="range"
	{min}
	{max}
	{step}
	{value}
	oninput={handle}
/>

<style>
	.range-slider {
		width: 100%;
		accent-color: var(--color-main);
		color: var(--color-text);
	}
</style>
