<script lang="ts">
	import { t } from "$lib/i18n/t";
	import {
		SIZE_PRESETS,
		type Dimension,
		type DimensionSpec,
	} from "$lib/registry-schema";
	import ChipButton from "$lib/components/ui/ChipButton.svelte";
	import Control from "./Control.svelte";
	import AxisRow from "./AxisRow.svelte";

	interface Props {
		label: string;
		value: unknown;
		spec: DimensionSpec;
		// NOTE: Step input dimensions; the axis cap for maxFromSource fields.
		sourceDims?: Dimension;
		onchange?: (value: Dimension, axis?: "width" | "height" | "both") => void;
	}
	let {
		label,
		value,
		spec,
		sourceDims = undefined,
		onchange,
	}: Props = $props();

	const sp = $derived(spec);
	const maxW = $derived(
		sp.maxFromSource && sourceDims ? sourceDims.width : sp.max,
	);
	const maxH = $derived(
		sp.maxFromSource && sourceDims ? sourceDims.height : sp.max,
	);
	const current = $derived.by(() => {
		const v = value as Partial<Dimension> | undefined;
		return {
			width:
				typeof v?.width === "number" && Number.isFinite(v.width)
					? v.width
					: sp.width,
			height:
				typeof v?.height === "number" && Number.isFinite(v.height)
					? v.height
					: sp.height,
		};
	});

	function setAxis(axis: "width" | "height", n: number) {
		onchange?.({ ...current, [axis]: n }, axis);
	}

	function applyPreset(n: number) {
		// NOTE: A preset is a box request, not an axis edit: the state fits the
		// locked aspect into that box.
		onchange?.({ width: n, height: n }, "both");
	}
</script>

<Control {label} caps>
	<div class="dimension-field">
		<AxisRow
			label={t("ui.width")}
			value={current.width}
			min={sp.min}
			max={maxW}
			default={sp.width}
			onchange={(n) => setAxis("width", n)}
		/>
		<AxisRow
			label={t("ui.height")}
			value={current.height}
			min={sp.min}
			max={maxH}
			default={sp.height}
			onchange={(n) => setAxis("height", n)}
		/>
	</div>
	{#if sp.presets}
		<div class="dimension-presets">
			{#each SIZE_PRESETS as n (n)}
				<ChipButton
					label={`${n}×${n}`}
					active={current.width === n && current.height === n}
					onclick={() => applyPreset(n)}
				/>
			{/each}
		</div>
	{/if}
</Control>

<style>
	.dimension-field {
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
	}
	.dimension-presets {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-s);
		margin-top: var(--space-m);
	}
</style>
