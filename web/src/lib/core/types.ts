import { assertImageSize } from "./limits";

export type PixelImage = {
	width: number;
	height: number;
	data: Uint8ClampedArray<ArrayBuffer>;
};

export function createPixelImage(width: number, height: number): PixelImage {
	assertImageSize(width, height);
	return {
		width,
		height,
		data: new Uint8ClampedArray(width * height * 4),
	};
}

export function clonePixelImage(img: PixelImage): PixelImage {
	return { width: img.width, height: img.height, data: img.data.slice() };
}
