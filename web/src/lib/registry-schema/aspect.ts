import { clamp } from "../core/math";
import type {
	Dimension,
	NumberSpec,
	PairAxisSpec,
	PairSpec,
	ToolSchema,
} from "./specs";

// NOTE: Field cap: from source dimensions under maxFromSource, else static.
export function effectiveMax(spec: NumberSpec, source?: Dimension): number {
	if (spec.maxFromSource && source) {
		return source[spec.maxFromSource] - (spec.maxMinus ?? 0);
	}
	return spec.max;
}

export function pairAxisMax(
	spec: PairSpec,
	axis: PairAxisSpec,
	source?: Dimension,
): number {
	if (axis.maxFromSource && source) {
		return source[axis.maxFromSource] - (axis.maxMinus ?? 0);
	}
	return axis.max ?? spec.max;
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
		} else if (spec.kind === "pair") {
			const v = out[key as string] as Record<string, unknown> | undefined;
			if (typeof v !== "object" || v === null) continue;
			const next = { ...v };
			let touched = false;
			for (const axis of spec.axes) {
				const n = next[axis.key];
				if (typeof n !== "number" || !Number.isFinite(n)) continue;
				const clamped = clamp(
					n,
					axis.min ?? spec.min,
					pairAxisMax(spec, axis, source),
				);
				if (clamped !== n) {
					next[axis.key] = clamped;
					touched = true;
				}
			}
			if (touched) {
				out[key as string] = next;
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
