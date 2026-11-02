import { describe, expect, it } from "vitest";
import {
	hasPreviewResult,
	type SchemaPreviewModelInput,
	tileAspect,
} from "./schema-preview-model";

const image = { width: 2, height: 3, data: new Uint8ClampedArray(24) };

function input(over: Partial<SchemaPreviewModelInput> = {}) {
	return {
		inputMode: "image",
		resultKind: "image",
		result: null,
		fileResult: null,
		textResult: null,
		...over,
	} satisfies SchemaPreviewModelInput;
}

describe("hasPreviewResult", () => {
	it("image: result only when image present", () => {
		expect(hasPreviewResult(input({ result: image }))).toBe(true);
		expect(hasPreviewResult(input())).toBe(false);
	});

	it("files: result only for non-empty set", () => {
		const fileResult = { files: [{ name: "part.png", image }] };
		expect(hasPreviewResult(input({ resultKind: "files", fileResult }))).toBe(
			true,
		);
		expect(
			hasPreviewResult(
				input({ resultKind: "files", fileResult: { files: [] } }),
			),
		).toBe(false);
	});

	it.each(["text", "verdict"] as const)(
		"%s: result depends on text presence",
		(resultKind) => {
			expect(hasPreviewResult(input({ resultKind, textResult: "done" }))).toBe(
				true,
			);
			expect(hasPreviewResult(input({ resultKind }))).toBe(false);
		},
	);
});

describe("tileAspect", () => {
	it.each([
		[1, 1000],
		[1000, 1],
		[1, 1],
		[4000, 1000],
		[500, 1500],
	])("clamps %ix%i into the 16:9 to 9:16 window", (width, height) => {
		expect(tileAspect(width, height)).toBeCloseTo(
			Math.min(16 / 9, Math.max(9 / 16, width / height)),
		);
	});

	it("keeps the exact window edges and a proportion just inside them", () => {
		expect(tileAspect(1600, 900)).toBeCloseTo(16 / 9);
		expect(tileAspect(900, 1600)).toBeCloseTo(9 / 16);
		expect(tileAspect(177, 100)).toBeCloseTo(1.77);
		expect(tileAspect(56, 100)).toBeCloseTo(0.56);
	});

	it("has no aspect without both sides", () => {
		expect(tileAspect(undefined, 1000)).toBeUndefined();
		expect(tileAspect(1000, undefined)).toBeUndefined();
		expect(tileAspect(0, 1000)).toBeUndefined();
		expect(tileAspect(1000, 0)).toBeUndefined();
	});
});
