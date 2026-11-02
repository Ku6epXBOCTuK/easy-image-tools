<script lang="ts">
	import ChipButton from "$lib/components/ui/ChipButton.svelte";
	import { t } from "$lib/i18n/t";
	import {
		type Dimension,
		fitsPresetBox,
		type PairEdit,
		type PairSpec,
		pairAxisMax,
		SIZE_PRESETS,
	} from "$lib/registry-schema";
	import AxisRow from "./AxisRow.svelte";
	import Control from "./Control.svelte";

	interface Props {
		label: string;
		value: unknown;
		spec: PairSpec;
		// NOTE: Step input dimensions; the axis cap for maxFromSource axes.
		sourceDims?: Dimension;
		onchange?: (value: Record<string, number>, edit?: PairEdit) => void;
	}
	let {
		label,
		value,
		spec,
		sourceDims = undefined,
		onchange,
	}: Props = $props();

	const current = $derived.by(() => {
		const v = value as Record<string, unknown> | undefined;
		const out: Record<string, number> = {};
		for (const axis of spec.axes) {
			const n = v?.[axis.key];
			out[axis.key] =
				typeof n === "number" && Number.isFinite(n) ? n : axis.default;
		}
		return out;
	});

	const firstKey = $derived(spec.axes[0]?.key ?? "");
	const secondKey = $derived(spec.axes[1]?.key ?? "");

	function setAxis(key: string, n: number) {
		onchange?.({ ...current, [key]: n }, { axis: key });
	}

	function applyPreset(n: number) {
		// NOTE: A preset is a box request, not an axis edit: the state fits the
		// locked aspect into that box.
		onchange?.({ [firstKey]: n, [secondKey]: n }, { box: true });
	}

	// NOTE: The chip is active when the size sits in its box, not only when both
	// axes equal n: a fitted preset touches the box on its longer side.
	function isActivePreset(n: number) {
		return fitsPresetBox(
			{ width: current[firstKey], height: current[secondKey] },
			n,
		);
	}
</script>

<Control {label}>
	<div class="pair-field">
		{#each spec.axes as axis (axis.key)}
			<AxisRow
				label={t(axis.label)}
				value={current[axis.key]}
				min={axis.min ?? spec.min}
				max={pairAxisMax(spec, axis, sourceDims)}
				step={axis.step}
				default={axis.default}
				onchange={(n) => setAxis(axis.key, n)}
			/>
		{/each}
	</div>
	{#if spec.presets}
		<div class="pair-presets">
			{#each SIZE_PRESETS as n (n)}
				<ChipButton
					label={`${n}×${n}`}
					active={isActivePreset(n)}
					onclick={() => applyPreset(n)}
				/>
			{/each}
		</div>
	{/if}
</Control>

<style>
	.pair-field {
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
	}
	.pair-presets {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-s);
		margin-top: var(--space-m);
	}
</style>
