import { describe, expect, it } from "vitest";
import { createStep } from "../../pipeline.svelte";
import type { PixelImage } from "../../core/types";
import { createSchemaToolState } from "./schema-tool-state.svelte";

const source = { width: 832, height: 1232 } as PixelImage;

function resizeState() {
	const state = createSchemaToolState({
		source: () => source,
		stepDims: () => [],
		clearResults: () => {},
	});
	const step = createStep("resize");
	if (!step) throw new Error("resize tool is missing");
	state.steps = [step];
	return state;
}

function size(state: ReturnType<typeof resizeState>) {
	return state.steps[0].params.size as { width: number; height: number };
}

describe("schema-tool-state: aspect lock", () => {
	it("fits a quick preset into its box instead of keeping the square", () => {
		const state = resizeState();
		state.setStepValue(0, "size", { width: 256, height: 256 }, { box: true });
		expect(size(state)).toEqual({ width: 173, height: 256 });
	});

	it("fits the current size when the lock is re-enabled", () => {
		const state = resizeState();
		state.setStepValue(0, "keepAspect", false);
		state.setStepValue(0, "size", { width: 256, height: 256 }, { box: true });
		expect(size(state)).toEqual({ width: 256, height: 256 });
		state.setStepValue(0, "keepAspect", true);
		expect(size(state)).toEqual({ width: 173, height: 256 });
	});

	it("derives the other side from the edited axis", () => {
		const state = resizeState();
		state.setStepValue(
			0,
			"size",
			{ width: 400, height: 1232 },
			{ axis: "width" },
		);
		expect(size(state)).toEqual({ width: 400, height: 592 });
	});
});
