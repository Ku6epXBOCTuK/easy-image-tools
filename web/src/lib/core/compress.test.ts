import { describe, expect, it } from "vitest";
import {
	COMPRESSION_LEVELS,
	findMaxColorsWithin,
	findQualityWithin,
	fitWithinBytes,
} from "./compress";
import { createPixelImage, type PixelImage } from "./types";

const img: PixelImage = createPixelImage(4, 4);
const blobOf = (size: number) => new Blob([new Uint8Array(size)]);
const encodeByQuality =
	(sizeOf: (q: number) => number) =>
	async (_img: PixelImage, _mime: string, quality?: number) =>
		blobOf(sizeOf(Math.round((quality ?? 1) * 100)));

describe("COMPRESSION_LEVELS", () => {
	it("presets ordered by descending colors", () => {
		const values = Object.values(COMPRESSION_LEVELS);
		for (let i = 1; i < values.length; i++)
			expect(values[i - 1]).toBeGreaterThan(values[i]);
	});
});

describe("findMaxColorsWithin", () => {
	const sizeOf = (k: number) => 1000 + k * 100; // size grows with k

	it("picks max k fitting the target", async () => {
		// target 5200 -> k<=42 fits -> expect 42 at maxK>=42
		const k = await findMaxColorsWithin(5200, 256, async (kk) => sizeOf(kk));
		expect(k).toBeGreaterThanOrEqual(40);
		expect(sizeOf(k)).toBeLessThanOrEqual(5200);
	});

	it("target unreachable even at minimum - returns 2", async () => {
		const k = await findMaxColorsWithin(50, 256, async (kk) => sizeOf(kk));
		expect(k).toBe(2);
	});

	it("encodeSize null treated as failure", async () => {
		const k = await findMaxColorsWithin(999999, 16, async () => null);
		expect(k).toBe(2);
	});

	it("binary search converges faster than full scan", async () => {
		let calls = 0;
		await findMaxColorsWithin(30000, 256, async (kk) => {
			calls++;
			return sizeOf(kk);
		});
		expect(calls).toBeLessThanOrEqual(12); // log2(254)+probe(2)
	});
});

describe("findQualityWithin", () => {
	const sizeOf = (q: number) => 500 + q * 50; // size grows with quality

	it("picks max quality fitting the target", async () => {
		// target 5000 -> q<=90 fits
		const q = await findQualityWithin(5000, async (qq) => sizeOf(qq));
		expect(q).toBe(90);
		expect(sizeOf(q)).toBeLessThanOrEqual(5000);
	});

	it("everything fits - returns max quality", async () => {
		const q = await findQualityWithin(999999, async (qq) => sizeOf(qq));
		expect(q).toBe(100);
	});

	it("target unreachable even at minimum - returns min", async () => {
		const q = await findQualityWithin(10, async (qq) => sizeOf(qq));
		expect(q).toBe(1);
	});

	it("encodeSize null treated as failure", async () => {
		const q = await findQualityWithin(999999, async () => null);
		expect(q).toBe(1);
	});

	it("binary search converges faster than full scan", async () => {
		let calls = 0;
		await findQualityWithin(3000, async (qq) => {
			calls++;
			return sizeOf(qq);
		});
		expect(calls).toBeLessThanOrEqual(10); // log2(99)+2 probes
	});
});

describe("fitWithinBytes", () => {
	it("bmp ignores the limit and reports the raw size", async () => {
		const r = await fitWithinBytes(img, "image/bmp", 100, undefined, async () =>
			blobOf(5000),
		);
		expect(r.achievedBytes).toBe(5000);
		expect(r.achievedBytes).toBeGreaterThan(100);
	});

	it("returns the initial encode when it already fits", async () => {
		const encode = encodeByQuality(() => 500);
		const r = await fitWithinBytes(img, "image/jpeg", 1000, 0.8, encode);
		expect(r.achievedBytes).toBe(500);
	});

	it("lossy: searches quality until the target fits", async () => {
		const encode = encodeByQuality((q) => 500 + q * 50);
		const r = await fitWithinBytes(img, "image/jpeg", 5000, 1, encode);
		expect(r.achievedBytes).toBeLessThanOrEqual(5000);
	});

	it("lossy: unreachable target reports achievedBytes above the limit", async () => {
		const encode = encodeByQuality((q) => 500 + q * 50);
		const r = await fitWithinBytes(img, "image/webp", 100, 1, encode);
		expect(r.achievedBytes).toBeGreaterThan(100);
	});
});
