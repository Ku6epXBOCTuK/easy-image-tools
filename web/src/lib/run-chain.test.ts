import { describe, expect, it, vi } from "vitest";
import { makeImage } from "./core/test-helpers";
import type { PixelImage } from "./core/types";
import type { ExecuteContext } from "./executor";
import { getTool, type Tool, type ToolImageFile } from "./registry";
import {
	ChainStepError,
	chainResumeIndex,
	glueName,
	runChain,
	uniqueName,
} from "./run-chain";

const realExecute = (tool: Tool, ctx: ExecuteContext) =>
	Promise.resolve(tool.run(ctx as never));

function named(name: string, image: PixelImage): ToolImageFile {
	return { name, image };
}

const img4x2 = makeImage(4, 2, new Array(8).fill([100, 100, 100, 255]));
const img2x2 = makeImage(2, 2, new Array(4).fill([200, 50, 0, 255]));

describe("runChain", () => {
	it("single image through an image step returns a plain image", async () => {
		const r = await runChain(
			[{ id: "grayscale", params: {} }],
			[named("photo.png", img2x2)],
			undefined,
			realExecute,
		);
		expect("data" in (r.out as PixelImage)).toBe(true);
		expect(r.stepResults[0]?.width).toBe(2);
		expect(r.warnings).toEqual([]);
	});

	it("split mid-chain fans out: next step applies to every part", async () => {
		const r = await runChain(
			[
				{
					id: "split-into-parts",
					params: { mode: "grid", columns: 2, rows: 1 },
				},
				{ id: "grayscale", params: {} },
			],
			[named("img.png", img4x2)],
			undefined,
			realExecute,
		);
		const files = (r.out as { files: ToolImageFile[] }).files;
		expect(files).toHaveLength(2);
		expect(files.map((f) => f.name)).toEqual([
			"img-part-1-1.png",
			"img-part-1-2.png",
		]);
		expect(r.stepFileSets.map((s) => s.length)).toEqual([2, 2]);
		// NOTE: grayscale is deterministic: part pixels are gray both in R and B
		const px = files[0].image.data;
		expect(px[0]).toBe(px[2]);
	});

	it("batch input: one image step over many files yields a named set", async () => {
		const r = await runChain(
			[{ id: "grayscale", params: {} }],
			[named("a.png", img2x2), named("b.png", img2x2)],
			undefined,
			realExecute,
		);
		const files = (r.out as { files: ToolImageFile[] }).files;
		expect(files.map((f) => f.name)).toEqual(["a.png", "b.png"]);
		expect(r.stepResults[0]).toBe(files[0].image);
	});

	it("partial failure: the step continues, warning reports the count", async () => {
		const flaky = (tool: Tool, ctx: ExecuteContext) => {
			if (ctx.source?.data[0] === 200) return Promise.reject(new Error("bad"));
			return realExecute(tool, ctx);
		};
		const r = await runChain(
			[{ id: "grayscale", params: {} }],
			[named("ok.png", img4x2), named("bad.png", img2x2)],
			undefined,
			flaky,
		);
		// NOTE: a single survivor degrades to a plain image result
		expect("data" in (r.out as PixelImage)).toBe(true);
		expect(r.warnings).toEqual([{ kind: "partial", step: 1, ok: 1, total: 2 }]);
	});

	it("total failure: ChainStepError with the step index", async () => {
		const failing = () => Promise.reject(new Error("nope"));
		await expect(
			runChain(
				[{ id: "grayscale", params: {} }],
				[named("a.png", img2x2)],
				undefined,
				failing,
			),
		).rejects.toSatisfy(
			(e) => e instanceof ChainStepError && e.stepIndex === 0,
		);
	});

	it("analyze step over a batch sees only the first file", async () => {
		const r = await runChain(
			[{ id: "is-transparent", params: {} }],
			[named("a.png", img2x2), named("b.png", img2x2)],
			undefined,
			realExecute,
		);
		expect(r.warnings).toEqual([{ kind: "firstOnly", step: 1, total: 2 }]);
		expect(r.out).toBe("transparentNo");
	});
});

describe("runChain: incremental rerun", () => {
	const resize = (width: number, height: number) => ({
		id: "resize",
		params: { size: { width, height }, keepAspect: false },
	});

	it("changes to the last step rerun only that step", async () => {
		const calls = vi.fn(realExecute);
		const source = [named("a.png", img4x2)];
		const steps = [{ id: "grayscale", params: {} }, resize(4, 2)];
		const first = await runChain(steps, source, undefined, calls);
		expect(calls).toHaveBeenCalledTimes(2);

		calls.mockClear();
		const next = [steps[0], resize(2, 1)];
		expect(chainResumeIndex(next, source, undefined, first)).toBe(1);
		const second = await runChain(next, source, undefined, calls, first);
		expect(calls.mock.calls.map(([tool]) => tool.id)).toEqual(["resize"]);
		expect(second.stepResults[0]).toBe(first.stepResults[0]);
		expect(second.stepDims[1]).toEqual({ width: 2, height: 1 });
	});

	it("a middle change reruns that step and the tail", async () => {
		const calls = vi.fn(realExecute);
		const source = [named("a.png", img4x2)];
		const steps = [
			resize(4, 2),
			{ id: "grayscale", params: {} },
			{ id: "flip", params: {} },
		];
		const first = await runChain(steps, source, undefined, calls);

		calls.mockClear();
		await runChain(
			[resize(2, 2), ...steps.slice(1)],
			source,
			undefined,
			calls,
			first,
		);
		expect(calls.mock.calls.map(([tool]) => tool.id)).toEqual([
			"resize",
			"grayscale",
			"flip",
		]);
	});

	it("a new source invalidates the whole cache", async () => {
		const calls = vi.fn(realExecute);
		const steps = [
			{ id: "grayscale", params: {} },
			{ id: "flip", params: {} },
		];
		const first = await runChain(
			steps,
			[named("a.png", img4x2)],
			undefined,
			calls,
		);

		calls.mockClear();
		const nextSource = [named("a.png", img2x2)];
		expect(chainResumeIndex(steps, nextSource, undefined, first)).toBe(0);
		await runChain(steps, nextSource, undefined, calls, first);
		expect(calls).toHaveBeenCalledTimes(2);
	});

	it("a changed text source invalidates the whole cache", async () => {
		const calls = vi.fn(realExecute);
		const steps = [{ id: "grayscale", params: {} }];
		const source = [named("a.png", img4x2)];
		const first = await runChain(steps, source, "one", calls);

		calls.mockClear();
		await runChain(steps, source, "two", calls, first);
		expect(calls).toHaveBeenCalledTimes(1);
	});

	it("appending a step runs only the new step", async () => {
		const calls = vi.fn(realExecute);
		const source = [named("a.png", img4x2)];
		const first = await runChain(
			[{ id: "grayscale", params: {} }],
			source,
			undefined,
			calls,
		);

		calls.mockClear();
		const second = await runChain(
			[
				{ id: "grayscale", params: {} },
				{ id: "flip", params: {} },
			],
			source,
			undefined,
			calls,
			first,
		);
		expect(calls.mock.calls.map(([tool]) => tool.id)).toEqual(["flip"]);
		expect(second.stepResults[0]).toBe(first.stepResults[0]);
	});

	it("removing the last step reuses the rest and returns the earlier output", async () => {
		const calls = vi.fn(realExecute);
		const source = [named("a.png", img4x2)];
		const first = await runChain(
			[
				{ id: "grayscale", params: {} },
				{ id: "flip", params: {} },
			],
			source,
			undefined,
			calls,
		);

		calls.mockClear();
		const trimmed = [{ id: "grayscale", params: {} }];
		expect(chainResumeIndex(trimmed, source, undefined, first)).toBe(
			trimmed.length,
		);
		const second = await runChain(trimmed, source, undefined, calls, first);
		expect(calls).not.toHaveBeenCalled();
		expect(second.out).toBe(first.stepResults[0]);
	});

	it("keeps warnings of reused steps", async () => {
		const flaky = (tool: Tool, ctx: ExecuteContext) =>
			ctx.source?.data[0] === 200
				? Promise.reject(new Error("bad"))
				: realExecute(tool, ctx);
		const source = [named("ok.png", img4x2), named("bad.png", img2x2)];
		const first = await runChain(
			[{ id: "grayscale", params: {} }, resize(4, 4)],
			source,
			undefined,
			flaky,
		);
		expect(first.warnings).toEqual([
			{ kind: "partial", step: 1, ok: 1, total: 2 },
		]);

		const second = await runChain(
			[{ id: "grayscale", params: {} }, resize(2, 2)],
			source,
			undefined,
			flaky,
			first,
		);
		expect(second.warnings).toEqual([
			{ kind: "partial", step: 1, ok: 1, total: 2 },
		]);
	});

	it("never reuses an impure step", async () => {
		const calls = vi.fn(() => Promise.resolve(img2x2));
		const steps = [{ id: "date-stamp", params: {} }];
		const source = [named("a.png", img4x2)];
		const first = await runChain(steps, source, undefined, calls);

		await runChain(steps, source, undefined, calls, first);
		expect(calls).toHaveBeenCalledTimes(2);
	});
});

describe("glueName", () => {
	it("strips the parent extension, keeps the part name", () => {
		expect(glueName("photo.jpeg", "part-1-1.png")).toBe("photo-part-1-1.png");
	});
});

describe("uniqueName", () => {
	it("keeps the first, suffixes duplicates", () => {
		const used = new Set<string>();
		const a = uniqueName("image.png", used);
		used.add(a);
		const b = uniqueName("image.png", used);
		used.add(b);
		const c = uniqueName("image.png", used);
		expect([a, b, c]).toEqual(["image.png", "image-2.png", "image-3.png"]);
	});
});
