import { clamp } from "../core/math";
import type { Position9 } from "../core/textdraw";
import { effectiveMax, pairAxisMax } from "./aspect";
import {
	POSITION9_VALUES,
	type Dimension,
	type PairSpec,
	type SchemaContext,
	type ToolSchema,
} from "./specs";

function resolvePairDefaults(
	spec: PairSpec,
	context?: SchemaContext,
): Record<string, number> {
	const out: Record<string, number> = {};
	for (const axis of spec.axes) {
		const source = axis.defaultFromSource ? context?.source : undefined;
		const raw = source
			? source[axis.defaultFromSource ?? "width"]
			: axis.default;
		out[axis.key] = clamp(raw, axis.min ?? spec.min, axis.max ?? spec.max);
	}
	return out;
}

// NOTE: Defaults from the schema: the single source of default values for the UI.
export function defaultSchemaParams<P>(
	schema: ToolSchema<P>,
	context?: SchemaContext,
): Record<keyof P, unknown> {
	const out = {} as Record<keyof P, unknown>;
	for (const key of Object.keys(schema.fields) as (keyof P)[]) {
		const spec = schema.fields[key].spec;
		if (spec.kind === "pair") {
			out[key] = resolvePairDefaults(spec, context);
		} else if (spec.kind === "color-pair") {
			out[key] = { from: spec.from, to: spec.to };
		} else if (spec.kind === "colors") {
			out[key] = [...spec.default];
		} else if (spec.kind === "font-style") {
			out[key] = {
				font: spec.font,
				size: spec.size,
				bold: spec.bold,
				color: spec.color,
			};
		} else if (spec.kind === "plate") {
			out[key] = {
				enabled: spec.enabled,
				color: spec.color,
				opacity: spec.opacity,
			};
		} else if (spec.kind === "gradient") {
			out[key] = {
				from: spec.from,
				to: spec.to,
				angle: spec.angle,
			};
		} else {
			out[key] = spec.default;
		}
	}
	return out;
}

// NOTE: Recomputes defaults from a new source, preserving user values. Fields in
// touched (edited manually) are not overwritten even with a source default;
// otherwise loading a new file would wipe configured sizes.
export function applySourceDefaults<P>(
	schema: ToolSchema<P>,
	values: Record<string, unknown>,
	context: SchemaContext,
	touched?: ReadonlySet<string>,
): Record<keyof P, unknown> {
	const defaults = defaultSchemaParams(schema, context);
	for (const key of Object.keys(schema.fields) as (keyof P)[]) {
		const spec = schema.fields[key].spec;
		const fromSource =
			spec.kind === "pair" && spec.axes.some((axis) => axis.defaultFromSource);
		if (fromSource && !touched?.has(key as string)) continue;
		if (Object.prototype.hasOwnProperty.call(values, key)) {
			defaults[key] = values[key as string];
		}
	}
	return defaults;
}

// NOTE: Validation/normalization of values against the schema.
// Successor of `sanitizeParams`.
export function sanitizeSchemaParams<P>(
	schema: ToolSchema<P>,
	values: Record<string, unknown>,
	context?: SchemaContext,
): Record<keyof P, unknown> {
	const out = {} as Record<keyof P, unknown>;
	for (const key of Object.keys(schema.fields) as (keyof P)[]) {
		const spec = schema.fields[key].spec;
		const raw = values[key as string];
		switch (spec.kind) {
			case "number":
			case "slider": {
				const n =
					typeof raw === "number" && Number.isFinite(raw) ? raw : spec.default;
				const max =
					spec.kind === "number"
						? effectiveMax(spec, context?.source)
						: spec.max;
				out[key] = clamp(n, spec.min, max);
				break;
			}
			case "select":
			case "segmented":
				out[key] =
					typeof raw === "string" && spec.options.some((o) => o.value === raw)
						? raw
						: spec.default;
				break;
			case "checkbox":
				out[key] = typeof raw === "boolean" ? raw : spec.default;
				break;
			case "color":
				out[key] =
					typeof raw === "string" && /^#[0-9a-f]{6}$/i.test(raw)
						? raw
						: spec.default;
				break;
			case "text":
				out[key] = typeof raw === "string" ? raw : spec.default;
				break;
			case "pair": {
				const r =
					typeof raw === "object" && raw !== null
						? (raw as Record<string, unknown>)
						: undefined;
				const defaults = resolvePairDefaults(spec, context);
				const picked: Record<string, number> = {};
				let allZero = true;
				for (const axis of spec.axes) {
					const v = r?.[axis.key];
					const n =
						typeof v === "number" && Number.isFinite(v)
							? v
							: defaults[axis.key];
					picked[axis.key] = n;
					if (n !== 0) allZero = false;
				}
				// NOTE: A zeroed pair means "unset": source defaults fill it instead.
				const fromSource =
					allZero &&
					context?.source &&
					spec.axes.some((axis) => axis.defaultFromSource)
						? defaults
						: picked;
				const result: Record<string, number> = {};
				for (const axis of spec.axes) {
					result[axis.key] = clamp(
						fromSource[axis.key],
						axis.min ?? spec.min,
						pairAxisMax(spec, axis, context?.source),
					);
				}
				out[key] = result;
				break;
			}
			case "color-pair": {
				const r =
					typeof raw === "object" &&
					raw !== null &&
					"from" in raw &&
					"to" in raw
						? (raw as Record<string, unknown>)
						: undefined;
				const from =
					typeof r?.from === "string" && /^#[0-9a-f]{6}$/i.test(r.from)
						? r.from
						: spec.from;
				const to =
					typeof r?.to === "string" && /^#[0-9a-f]{6}$/i.test(r.to)
						? r.to
						: spec.to;
				out[key] = { from, to };
				break;
			}
			case "colors": {
				const r =
					Array.isArray(raw) &&
					raw.every((c) => typeof c === "string" && /^#[0-9a-f]{6}$/i.test(c))
						? (raw as string[])
						: undefined;
				out[key] = r && r.length > 0 ? [...r] : [...spec.default];
				break;
			}
			case "position9":
				out[key] =
					typeof raw === "string" &&
					(POSITION9_VALUES as readonly string[]).includes(raw)
						? (raw as Position9)
						: spec.default;
				break;
			case "font-style": {
				const r =
					typeof raw === "object" &&
					raw !== null &&
					"font" in raw &&
					"size" in raw &&
					"bold" in raw &&
					"color" in raw
						? (raw as Record<string, unknown>)
						: undefined;
				out[key] = {
					font:
						r?.font === "sans" || r?.font === "serif" || r?.font === "mono"
							? r.font
							: spec.font,
					size:
						typeof r?.size === "number" && Number.isFinite(r.size)
							? clamp(r.size, spec.min, spec.max)
							: spec.size,
					bold: typeof r?.bold === "boolean" ? r.bold : spec.bold,
					color:
						typeof r?.color === "string" && /^#[0-9a-f]{6}$/i.test(r.color)
							? r.color
							: spec.color,
				};
				break;
			}
			case "plate": {
				const r =
					typeof raw === "object" &&
					raw !== null &&
					"enabled" in raw &&
					"color" in raw &&
					"opacity" in raw
						? (raw as Record<string, unknown>)
						: undefined;
				out[key] = {
					enabled: typeof r?.enabled === "boolean" ? r.enabled : spec.enabled,
					color:
						typeof r?.color === "string" && /^#[0-9a-f]{6}$/i.test(r.color)
							? r.color
							: spec.color,
					opacity:
						typeof r?.opacity === "number" && Number.isFinite(r.opacity)
							? clamp(r.opacity, 0, 100)
							: spec.opacity,
				};
				break;
			}
			case "gradient": {
				const r =
					typeof raw === "object" &&
					raw !== null &&
					"from" in raw &&
					"to" in raw &&
					"angle" in raw
						? (raw as Record<string, unknown>)
						: undefined;
				out[key] = {
					from:
						typeof r?.from === "string" && /^#[0-9a-f]{6}$/i.test(r.from)
							? r.from
							: spec.from,
					to:
						typeof r?.to === "string" && /^#[0-9a-f]{6}$/i.test(r.to)
							? r.to
							: spec.to,
					angle:
						typeof r?.angle === "number" && Number.isFinite(r.angle)
							? clamp(r.angle, 0, 360)
							: spec.angle,
				};
				break;
			}
		}
	}
	return out;
}
