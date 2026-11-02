import { clamp } from "../core/math";
import type { Dimension, DimensionSpec, NumberSpec, ToolSchema } from "./specs";

// NOTE: Field cap: from source dimensions under maxFromSource, else static.
export function effectiveMax(spec: NumberSpec, source?: Dimension): number {
	if (spec.maxFromSource && source) {
		return source[spec.maxFromSource] - (spec.maxMinus ?? 0);
	}
	return spec.max;
}

export function dimensionAxisMax(
	spec: DimensionSpec,
	axis: "width" | "height",
	source?: Dimension,
): number {
	return spec.maxFromSource && source ? source[axis] : spec.max;
}

// NOTE: Clamps maxFromSource fields to the current cap (source changed).
export function clampSourceAwareMaxes<P>(
	schema: ToolSchema<P>,
	params: Record<string, unknown>,
	source?: Dimension,
): Record<string, unknown> {
	if (!source) return params;
	let changed = false;
	const out = { ...params };
	for (const key of Object.keys(schema.fields) as (keyof P)[]) {
		const spec = schema.fields[key].spec;
		if (spec.kind === "number" && spec.maxFromSource) {
			const v = out[key as string];
			if (typeof v !== "number" || !Number.isFinite(v)) continue;
			const clamped = clamp(v, spec.min, effectiveMax(spec, source));
			if (clamped !== v) {
				out[key as string] = clamped;
				changed = true;
			}
		} else if (spec.kind === "dimension" && spec.maxFromSource) {
			const v = out[key as string] as Partial<Dimension> | undefined;
			if (typeof v?.width !== "number" || typeof v?.height !== "number") {
				continue;
			}
			const width = clamp(
				v.width,
				spec.min ?? -Infinity,
				dimensionAxisMax(spec, "width", source),
			);
			const height = clamp(
				v.height,
				spec.min ?? -Infinity,
				dimensionAxisMax(spec, "height", source),
			);
			if (width !== v.width || height !== v.height) {
				out[key as string] = { width, height };
				changed = true;
			}
		}
	}
	return changed ? out : params;
}

// NOTE: Recompute under lockAspect: the leading axis (last user edit) is kept,
// the other is fitted to the source aspect.
export function withAspectLock(
	next: Dimension,
	leading: "width" | "height",
	aspect: number,
): Dimension {
	if (leading === "width") {
		return { ...next, height: Math.max(1, Math.round(next.width / aspect)) };
	}
	return { ...next, width: Math.max(1, Math.round(next.height * aspect)) };
}

// NOTE: Both axes known under lock: fit them into that box, so the fields show
// exactly what the tool prints instead of a size the tool silently shrinks.
export function fitAspectBox(box: Dimension, aspect: number): Dimension {
	if (!(box.width > 0) || !(box.height > 0)) return box;
	const width = Math.max(1, Math.round(box.width));
	const height = Math.max(1, Math.round(box.height));
	return width / height >= aspect
		? { width: Math.max(1, Math.round(height * aspect)), height }
		: { width, height: Math.max(1, Math.round(width / aspect)) };
}
