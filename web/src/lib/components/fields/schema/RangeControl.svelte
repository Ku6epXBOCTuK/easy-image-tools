<script lang="ts">
	import type { NumberSpec, SliderSpec } from "$lib/registry-schema";
	import Control from "./Control.svelte";
	import NumberRowActions from "./NumberRowActions.svelte";
	import RangeSlider from "./RangeSlider.svelte";

	interface Props {
		label: string;
		value: unknown;
		spec: NumberSpec | SliderSpec;
		onchange?: (value: number) => void;
	}
	let { label, value, spec, onchange }: Props = $props();

	const sp = $derived(spec);
	const min = $derived(sp.min);
	const max = $derived(sp.max);
	const step = $derived(sp.step ?? 1);
	const current = $derived(
		typeof value === "number" && Number.isFinite(value) ? value : sp.default,
	);
</script>

<Control {label}>
	{#snippet trailing()}
		<NumberRowActions
			{label}
			value={current}
			{min}
			{max}
			{step}
			default={sp.default}
			{onchange}
		/>
	{/snippet}
	<RangeSlider {label} value={current} {min} {max} {step} {onchange} />
</Control>
