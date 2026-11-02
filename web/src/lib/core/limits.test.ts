import { describe, expect, it } from "vitest";
import { ToolError } from "./errors";
import { assertImageSize, MAX_IMAGE_SIDE } from "./limits";
import { createPixelImage } from "./types";

describe("assertImageSize", () => {
	it("accepts sides up to the limit", () => {
		expect(() => assertImageSize(1, 1)).not.toThrow();
		expect(() => assertImageSize(MAX_IMAGE_SIDE, MAX_IMAGE_SIDE)).not.toThrow();
	});

	it("rejects a side over the limit with a translated error", () => {
		let error: unknown;
		try {
			assertImageSize(MAX_IMAGE_SIDE + 1, 10);
		} catch (e) {
			error = e;
		}
		expect(error).toBeInstanceOf(ToolError);
		expect(error).toMatchObject({
			key: "errors.imageTooLarge",
			vars: { width: MAX_IMAGE_SIDE + 1, height: 10, max: MAX_IMAGE_SIDE },
		});
	});

	it("guards createPixelImage before allocating", () => {
		expect(() => createPixelImage(10, MAX_IMAGE_SIDE + 1)).toThrow(ToolError);
	});
});
