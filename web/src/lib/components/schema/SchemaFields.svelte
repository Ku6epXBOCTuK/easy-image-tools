<script lang="ts">
	import type {
		CheckboxSpec,
		ColorListSpec,
		ColorPairSpec,
		ColorSpec,
		Dimension,
		FieldSpec,
		FieldSpecKind,
		FontStyleSpec,
		GradientSpec,
		NumberSpec,
		PairEdit,
		PairSpec,
		PlateSpec,
		Position9Spec,
		SegmentedSpec,
		SelectSpec,
		SliderSpec,
		TextSpec,
		ToolSchema,
	} from "$lib/registry-schema";
	import { effectiveMax, visibleLayoutGroups } from "$lib/registry-schema";
	import { fieldLabel, groupLabel } from "$lib/i18n/schema-tool-strings";
	import { t } from "$lib/i18n/t";
	import { RotateCcw } from "@lucide/svelte";
	import type { Component } from "svelte";
	import Button from "$lib/components/ui/Button.svelte";
	import PairField from "$lib/components/fields/schema/PairField.svelte";
	import CheckboxControl from "$lib/components/fields/schema/CheckboxControl.svelte";
	import ColorControl from "$lib/components/fields/schema/ColorControl.svelte";
	import ColorPairControl from "$lib/components/fields/schema/ColorPairControl.svelte";
	import ColorsControl from "$lib/components/fields/schema/ColorsControl.svelte";
	import RangeControl from "$lib/components/fields/schema/RangeControl.svelte";
	import SelectControl from "$lib/components/fields/schema/SelectControl.svelte";
	import SegmentedControl from "$lib/components/fields/schema/SegmentedControl.svelte";
	import TextControl from "$lib/components/fields/schema/TextControl.svelte";
	import PositionControl from "$lib/components/fields/schema/PositionControl.svelte";
	import FontStyleControl from "$lib/components/fields/schema/FontStyleControl.svelte";
	import PlateControl from "$lib/components/fields/schema/PlateControl.svelte";
	import GradientControl from "$lib/components/fields/schema/GradientControl.svelte";

	interface FieldControlProps {
		label: string;
		value: unknown;
		spec: FieldSpec;
		toolId: string;
		fieldId: string;
		sourceDims?: Dimension;
		onchange?: (value: unknown, edit?: PairEdit) => void;
	}

	// NOTE: The kind key of FIELDS guarantees the spec subtype at runtime (fieldSpecs
	// map in registry-schema); the cast lives once here, so each control
	// declares its exact spec type instead of casting internally.
	type ControlFor<S extends FieldSpec> = Component<
		Omit<FieldControlProps, "spec"> & { spec: S }
	>;
	function controlFor<S extends FieldSpec>(
		c: ControlFor<S>,
	): Component<FieldControlProps> {
		return c as unknown as Component<FieldControlProps>;
	}

	const FIELDS: Record<FieldSpecKind, Component<FieldControlProps>> = {
		number: controlFor<NumberSpec | SliderSpec>(RangeControl),
		slider: controlFor<NumberSpec | SliderSpec>(RangeControl),
		color: controlFor<ColorSpec>(ColorControl),
		"color-pair": controlFor<ColorPairSpec>(ColorPairControl),
		colors: controlFor<ColorListSpec>(ColorsControl),
		select: controlFor<SelectSpec>(SelectControl),
		segmented: controlFor<SegmentedSpec>(SegmentedControl),
		checkbox: controlFor<CheckboxSpec>(CheckboxControl),
		text: controlFor<TextSpec>(TextControl),
		pair: controlFor<PairSpec>(PairField),
		position9: controlFor<Position9Spec>(PositionControl),
		"font-style": controlFor<FontStyleSpec>(FontStyleControl),
		plate: controlFor<PlateSpec>(PlateControl),
		gradient: controlFor<GradientSpec>(GradientControl),
	};

	interface Props {
		schema: ToolSchema<Record<string, unknown>>;
		values: Record<string, unknown>;
		toolId: string;
		// NOTE: Step input dimensions; the cap for maxFromSource fields (crop, etc.).
		sourceDims?: Dimension;
		onchange: (id: string, value: unknown, edit?: PairEdit) => void;
		onreset: () => void;
	}
	let {
		schema,
		values,
		toolId,
		sourceDims = undefined,
		onchange,
		onreset,
	}: Props = $props();

	const layoutGroups = $derived(visibleLayoutGroups(schema, values));
	const isEmpty = $derived(Object.keys(schema.fields).length === 0);

	function effectiveSpec(spec: FieldSpec): FieldSpec {
		if (sourceDims && spec.kind === "number" && spec.maxFromSource) {
			return { ...spec, max: effectiveMax(spec, sourceDims) };
		}
		return spec;
	}
</script>

{#if isEmpty}
	<p class="no-params">{t("paramsCard.noParams")}</p>
{:else}
	{#each layoutGroups as group (group.key)}
		<div class="group">
			{#if group.title}
				<span class="group-title">{groupLabel(group.title)}</span>
			{/if}
			<div
				class="group-fields"
				style:grid-template-columns={group.cols > 1
					? `repeat(${group.cols}, minmax(0, 1fr))`
					: undefined}
			>
				{#each group.fields as id (id)}
					{@const spec = schema.fields[id].spec}
					{@const Control = FIELDS[spec.kind]}
					<Control
						label={fieldLabel(schema.fields[id], id)}
						value={values[id]}
						spec={effectiveSpec(spec)}
						{toolId}
						fieldId={id}
						{sourceDims}
						onchange={(v, edit) => onchange(id, v, edit)}
					/>
				{/each}
			</div>
		</div>
	{/each}

	<div class="panel-foot">
		<Button
			icon={RotateCcw}
			label={t("ui.reset")}
			variant="clear"
			size="s"
			onclick={onreset}
		/>
	</div>
{/if}

<style>
	.group {
		margin-top: var(--space-l);
	}
	.group:first-child {
		margin-top: 0;
	}
	.group-title {
		display: block;
		margin-bottom: var(--space-s);
		color: var(--color-text-muted);
		font: var(--font-size-s) var(--font-mono);
		letter-spacing: var(--space-text-l);
		text-transform: uppercase;
	}
	.no-params {
		margin: 0;
		color: var(--color-text-muted);
		font: var(--font-size-s) var(--font-mono);
	}
	.group-fields {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: var(--space-l);
	}
	.panel-foot {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-m);
		margin-top: var(--space-xl);
		padding-top: var(--space-l);
		border-top: var(--size-border) solid var(--color-border);
	}
</style>
