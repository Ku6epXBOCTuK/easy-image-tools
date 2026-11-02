import { toDataUrl } from "./io";
import type { PixelImage } from "./types";

// NOTE: 512 px covers the largest preview tile at 2x DPR, so a bigger thumbnail
// buys no visible detail.
export const PREVIEW_MAX_SIDE = 512;

const previewCache = new WeakMap<PixelImage, string>();

export function downscaleForPreview(
	img: PixelImage,
	maxSide: number,
): PixelImage {
	const long = Math.max(img.width, img.height);
	if (long <= maxSide) return img;
	const scale = maxSide / long;
	const width = Math.max(1, Math.round(img.width * scale));
	const height = Math.max(1, Math.round(img.height * scale));
	const data = new Uint8ClampedArray(width * height * 4);
	for (let y = 0; y < height; y++) {
		const sy = Math.min(img.height - 1, Math.floor((y * img.height) / height));
		const rowFrom = sy * img.width;
		for (let x = 0; x < width; x++) {
			const sx = Math.min(img.width - 1, Math.floor((x * img.width) / width));
			const from = (rowFrom + sx) * 4;
			const to = (y * width + x) * 4;
			data[to] = img.data[from];
			data[to + 1] = img.data[from + 1];
			data[to + 2] = img.data[from + 2];
			data[to + 3] = img.data[from + 3];
		}
	}
	return { width, height, data };
}

// NOTE: Encoding a full-size result costs hundreds of MB and seconds at 8192 px
// (canvas + ImageData + base64 + the decoded <img> bitmap), while tiles render a
// few hundred pixels. Previews therefore come from a downscale, never the source.
export function previewDataUrl(img: PixelImage): string {
	let url = previewCache.get(img);
	if (url === undefined) {
		url = toDataUrl(downscaleForPreview(img, PREVIEW_MAX_SIDE));
		previewCache.set(img, url);
	}
	return url;
}
