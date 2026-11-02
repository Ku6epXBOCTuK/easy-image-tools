<script lang="ts">
	import type { Offset, OffsetSpec } from "$lib/registry-schema";
	import Control from "./Control.svelte";
	import AxisRow from "./AxisRow.svelte";

	interface Props {
		label: string;
		value: unknown;
		spec: OffsetSpec;
		onchange?: (value: Offset) => void;
	}
	let { label, value, spec, onchange }: Props = $props();

	const sp = $derived(spec);
	const current = $derived.by(() => {
		const v = value as Partial<Offset> | undefined;
		return {
			x: typeof v?.x === "number" && Number.isFinite(v.x) ? v.x : sp.x,
			y: typeof v?.y === "number" && Number.isFinite(v.y) ? v.y : sp.y,
		};
	});

	function setAxis(axis: "x" | "y", n: number) {
		onchange?.({ ...current, [axis]: n });
	}
</script>

<Control {label} caps>
	<div class="offset-field">
		<AxisRow
			label="X"
			value={current.x}
			min={sp.min}
			max={sp.max}
			default={sp.x}
			onchange={(n) => setAxis("x", n)}
		/>
		<AxisRow
			label="Y"
			value={current.y}
			min={sp.min}
			max={sp.max}
			default={sp.y}
			onchange={(n) => setAxis("y", n)}
		/>
	</div>
</Control>

<style>
	.offset-field {
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
	}
</style>
