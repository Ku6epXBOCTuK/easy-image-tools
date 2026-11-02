import { ToolError } from "./errors";

// NOTE: 8192 px per side: canvas area above 16384^2 is unusable in Blink and
// WebKit (toDataURL returns "data:,"), and one RGBA buffer there is 1 GB.
export const MAX_IMAGE_SIDE = 8192;

export function assertImageSize(width: number, height: number): void {
	if (width > MAX_IMAGE_SIDE || height > MAX_IMAGE_SIDE) {
		throw new ToolError("errors.imageTooLarge", {
			width,
			height,
			max: MAX_IMAGE_SIDE,
		});
	}
}
