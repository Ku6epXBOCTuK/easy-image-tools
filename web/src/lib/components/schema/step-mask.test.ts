import { describe, expect, it, vi } from "vitest";
import { createPixelImage } from "../../core/types";
import { createMaskMemo } from "./step-mask.svelte";

const params = { radius: 4 };
const input = createPixelImage(2, 2);
const mask = createPixelImage(2, 2);

describe("createMaskMemo", () => {
	it("reuses a mask while the tool, params and input stay the same", () => {
		const memo = createMaskMemo();
		const compute = vi.fn(() => mask);
		memo.resolve("step-a", "round-corners", params, input, compute);
		const second = memo.resolve(
			"step-a",
			"round-corners",
			params,
			input,
			compute,
		);
		expect(compute).toHaveBeenCalledTimes(1);
		expect(second).toBe(mask);
	});

	it("recomputes when params, input or the step tool change", () => {
		const memo = createMaskMemo();
		const compute = vi.fn(() => mask);
		memo.resolve("step-a", "round-corners", params, input, compute);
		memo.resolve("step-a", "round-corners", { radius: 8 }, input, compute);
		memo.resolve(
			"step-a",
			"round-corners",
			{ radius: 8 },
			createPixelImage(2, 2),
			compute,
		);
		memo.resolve("step-a", "invert-alpha", { radius: 8 }, input, compute);
		expect(compute).toHaveBeenCalledTimes(4);
	});

	it("keeps one entry per step and drops the removed ones", () => {
		const memo = createMaskMemo();
		const first = vi.fn(() => mask);
		const second = vi.fn(() => mask);
		memo.resolve("step-a", "round-corners", params, input, first);
		memo.resolve("step-b", "round-corners", params, input, second);
		memo.retain(new Set(["step-a"]));
		memo.resolve("step-b", "round-corners", params, input, second);
		memo.resolve("step-a", "round-corners", params, input, first);
		expect(first).toHaveBeenCalledTimes(1);
		expect(second).toHaveBeenCalledTimes(2);
	});
});
