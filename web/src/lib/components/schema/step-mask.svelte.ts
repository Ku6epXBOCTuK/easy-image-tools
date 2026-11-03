import type { PixelImage } from "$lib/core/types";
import type { ChainStep } from "$lib/pipeline.svelte";
import { getTool } from "$lib/registry";
import { sanitizeSchemaParams } from "$lib/registry-schema";
import { SvelteSet } from "svelte/reactivity";
import { toolSchemaOf } from "./schema-tool-state.svelte";

export interface StepMasksCtx {
	steps: () => ChainStep[];
	source: () => PixelImage | null;
	stepResults: () => (PixelImage | null)[];
}

interface MaskCacheEntry {
	id: string;
	params: Record<string, unknown>;
	input: PixelImage;
	mask: PixelImage | null;
}

// NOTE: Memo of computed masks by step key: a run rebuilds stepResults but keeps
// the reused prefix images, so identity of params and input decides a stale mask.
export function createMaskMemo() {
	const cache = new Map<string, MaskCacheEntry>();
	return {
		resolve(
			key: string,
			id: string,
			params: Record<string, unknown>,
			input: PixelImage,
			compute: () => PixelImage | null,
		): PixelImage | null {
			const cached = cache.get(key);
			if (
				cached &&
				cached.id === id &&
				cached.params === params &&
				cached.input === input
			) {
				return cached.mask;
			}
			const mask = compute();
			cache.set(key, { id, params, input, mask });
			return mask;
		},
		retain(keys: Set<string>) {
			for (const key of cache.keys()) {
				if (!keys.has(key)) cache.delete(key);
			}
		},
	};
}

// NOTE: Per-step mask preview of SchemaToolView: the toggle lives on every step
// result tile (keyed by step.key), the mask never enters the chain itself.
export function createStepMasks(ctx: StepMasksCtx) {
	const onKeys = new SvelteSet<string>();
	const cache = createMaskMemo();
	// NOTE: Recomputed on the main thread per toggled step from that step's input;
	// cache keeps a mask until the step tool, params or input identity changes.
	const results = $derived.by(() => {
		const next: Record<string, PixelImage | null> = {};
		const steps = ctx.steps();
		const stepResults = ctx.stepResults();
		const alive = new Set<string>();
		steps.forEach((step, i) => {
			alive.add(step.key);
			if (!onKeys.has(step.key)) return;
			const stepTool = getTool(step.id);
			if (!stepTool?.runMask) return;
			const runMask = stepTool.runMask;
			const input = i === 0 ? ctx.source() : stepResults[i - 1];
			if (!input) return;
			next[step.key] = cache.resolve(
				step.key,
				step.id,
				step.params,
				input,
				() => {
					// NOTE: Same contract as executor.ts: params are sanitized against the
					// schema with the step input as the source context.
					const stepSchema = toolSchemaOf(step);
					const params = stepSchema
						? sanitizeSchemaParams(stepSchema, step.params, { source: input })
						: step.params;
					try {
						return runMask({ params, source: input });
					} catch {
						return null;
					}
				},
			);
		});
		cache.retain(alive);
		return next;
	});
	return {
		get maskable() {
			return ctx.steps().map((s) => !!getTool(s.id)?.runMask);
		},
		get maskOn() {
			return ctx.steps().map((s) => onKeys.has(s.key));
		},
		get masks() {
			return ctx.steps().map((s) => results[s.key] ?? null);
		},
		toggleByIndex: (i: number) => {
			const step = ctx.steps()[i];
			if (!step) return;
			if (onKeys.has(step.key)) onKeys.delete(step.key);
			else onKeys.add(step.key);
		},
		clear: () => onKeys.clear(),
	};
}
