<script lang="ts">
	import { t } from "$lib/i18n/t";
	import { Minus, Plus, RotateCcw } from "@lucide/svelte";
	import IconButton from "$lib/components/ui/IconButton.svelte";
	import NumberInput from "./NumberInput.svelte";

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

	const atMin = $derived(value <= min);
	const atMax = $derived(value >= max);
	const atDefault = $derived(value === resetTo);

	function stepBy(dir: 1 | -1) {
		onchange?.(Math.min(max, Math.max(min, value + dir * step)));
	}
</script>

<span class="row-actions">
	<IconButton
		icon={Minus}
		label={`${t("ui.decrease")} ${label}`}
		variant="clear"
		size="s"
		disabled={atMin}
		onclick={() => stepBy(-1)}
	/>
	<NumberInput {label} {value} {min} {max} {step} fixed {onchange} />
	<IconButton
		icon={Plus}
		label={`${t("ui.increase")} ${label}`}
		variant="clear"
		size="s"
		disabled={atMax}
		onclick={() => stepBy(1)}
	/>
	<IconButton
		icon={RotateCcw}
		label={`${t("ui.reset")} ${label}`}
		variant="clear"
		size="s"
		disabled={atDefault}
		onclick={() => onchange?.(resetTo)}
	/>
</span>

<style>
	.row-actions {
		display: inline-flex;
		align-items: center;
		gap: var(--space-s);
	}
</style>
