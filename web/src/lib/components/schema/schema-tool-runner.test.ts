import { beforeEach, describe, expect, it, vi } from "vitest";
import { makeImage } from "$lib/core/test-helpers";
import type { PixelImage } from "$lib/core/types";
import { execute } from "$lib/executor";
import type { ToolImageFile, ToolResult } from "$lib/registry";
import { getTool } from "$lib/registry";
import { createSchemaToolRunner } from "./schema-tool-runner.svelte";

vi.mock("$lib/executor", () => ({ execute: vi.fn() }));

const runMock = vi.mocked(execute);

const source: PixelImage = makeImage(2, 2, [
	[255, 0, 0, 255],
	[0, 255, 0, 255],
	[0, 0, 255, 255],
	[255, 255, 255, 255],
]);

const flush = () => new Promise((resolve) => setTimeout(resolve, 0));

function deferred() {
	let resolve!: (value: ToolResult) => void;
	const promise = new Promise<ToolResult>((r) => {
		resolve = r;
	});
	return { promise, resolve };
}

function makeCtx(steps = [{ key: "s1", id: "flip", params: {} }]) {
	const tool = getTool("flip")!;
	return {
		pageSlug: () => "flip-png",
		schema: () => tool.schema,
		steps: () => steps,
		source: () => source,
		sourceFiles: () => [] as ToolImageFile[],
		textSource: () => "",
		format: () => "image/png" as const,
		quality: () => undefined,
		limitKb: () => undefined,
		lastTool: () => tool,
	};
}

describe("schema tool runner: run coalescing", () => {
	beforeEach(() => {
		runMock.mockReset();
	});

	it("runs once while busy and replays the latest request once", async () => {
		const first = deferred();
		runMock.mockReturnValueOnce(first.promise);
		runMock.mockResolvedValue(source);
		const runner = createSchemaToolRunner(makeCtx());

		const a = runner.run();
		const b = runner.run();
		await flush();
		expect(runMock).toHaveBeenCalledTimes(1);
		expect(runner.running).toBe(true);

		first.resolve(source);
		await a;
		await b;
		await flush();
		expect(runMock).toHaveBeenCalledTimes(2);
		expect(runner.result).toBe(source);
		expect(runner.running).toBe(false);
	});

	it("does not replay when nothing was requested while busy", async () => {
		runMock.mockResolvedValue(source);
		const runner = createSchemaToolRunner(makeCtx());

		await runner.run();
		expect(runMock).toHaveBeenCalledTimes(1);
		await flush();
		expect(runMock).toHaveBeenCalledTimes(1);
		expect(runner.running).toBe(false);
	});

	it("drops the queued run on host reset", async () => {
		const first = deferred();
		runMock.mockReturnValueOnce(first.promise);
		runMock.mockResolvedValue(source);
		const runner = createSchemaToolRunner(makeCtx());

		const a = runner.run();
		runner.run();
		runner.resetForHost();
		first.resolve(source);
		await a;
		await flush();
		expect(runMock).toHaveBeenCalledTimes(1);
		expect(runner.running).toBe(false);
		expect(runner.result).toBeNull();
	});
});
