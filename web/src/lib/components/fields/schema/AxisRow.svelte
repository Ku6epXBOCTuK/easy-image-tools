<script lang="ts">
	import NumberRowActions from "./NumberRowActions.svelte";
	import RangeSlider from "./RangeSlider.svelte";

	interface Props {
		label: string;
		value: number;
		min: number;
		max: number;
		step?: number;
		default: number;
		onchange?: (value: number) => void;
	}
	let {
		label,
		value,
		min,
		max,
		step = 1,
		default: resetTo,
		onchange,
	}: Props = $props();
</script>

<div class="axis">
	<div class="axis-head">
		<span>{label}</span>
		<NumberRowActions
			{label}
			{value}
			{min}
			{max}
			{step}
			default={resetTo}
			{onchange}
		/>
	</div>
	<RangeSlider {label} {value} {min} {max} {step} {onchange} />
</div>

<style>
	.axis {
		display: flex;
		flex-direction: column;
		gap: var(--space-s);
	}
	.axis-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-m);
	}
</style>
