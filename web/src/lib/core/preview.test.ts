import { describe, expect, it } from "vitest";
import { downscaleForPreview, previewSize } from "./preview";
import { makeImage } from "./test-helpers";

function filled(width: number, height: number) {
	const data = new Uint8ClampedArray(width * height * 4);
	for (let i = 3; i < data.length; i += 4) data[i] = 255;
	return { width, height, data };
}

describe("downscaleForPreview", () => {
	it("keeps the aspect ratio and fits the long side", () => {
		const out = downscaleForPreview(filled(4000, 1000), 512);
		expect(out.width).toBe(512);
		expect(out.height).toBe(128);
		expect(out.data).toHaveLength(512 * 128 * 4);
	});

	it("does not touch images that already fit", () => {
		const out = downscaleForPreview(filled(10, 20), 512);
		expect(out.width).toBe(10);
		expect(out.height).toBe(20);
	});

	it("samples instead of averaging, keeping corner pixels", () => {
		const img = makeImage(2, 2, [
			[255, 0, 0, 255],
			[0, 255, 0, 255],
			[0, 0, 255, 255],
			[255, 255, 255, 255],
		]);
		const out = downscaleForPreview(img, 1);
		expect(out.width).toBe(1);
		expect(out.height).toBe(1);
		expect(Array.from(out.data)).toEqual([255, 0, 0, 255]);
	});

	it("keeps at least one pixel per side", () => {
		const out = downscaleForPreview(filled(10000, 3), 512);
		expect(out.width).toBe(512);
		expect(out.height).toBe(1);
	});
});

describe("previewSize", () => {
	it("matches the size of the thumbnail rendered from the same image", () => {
		const img = downscaleForPreview(filled(8192, 8192), 512);
		expect(previewSize(8192, 8192)).toEqual({
			width: img.width,
			height: img.height,
		});
	});

	it("keeps small canvases at their own pixel size", () => {
		expect(previewSize(200, 300)).toEqual({ width: 200, height: 300 });
	});
});
