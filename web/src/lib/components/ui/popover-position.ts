// NOTE: Position a top-layer popover next to its anchor button. The Popover API
// itself does not place the element and CSS anchor positioning is unavailable in
// every browser, so placement comes from the anchor rect, kept in sync on scroll.
export function trackPopover(
	popover: HTMLElement,
	anchor: HTMLElement,
	align: "start" | "end" | "side" = "end",
): () => void {
	const place = () => {
		const a = anchor.getBoundingClientRect();
		// NOTE: The UA stylesheet gives popovers inset: 0; without resetting it the
		// over-constrained box (left: 0 vs our right) resolves to left: 0. Both
		// offsets are cleared first: side placement switches between them.
		popover.style.inset = "auto";
		popover.style.left = "";
		popover.style.right = "";
		if (align === "side") {
			const gap = 4;
			const w = popover.offsetWidth;
			const h = popover.offsetHeight;
			// NOTE: Right of the anchor when it fits, otherwise to its left; the
			// clamp keeps the box inside the viewport in both axes, so a popover
			// near the bottom or right edge never leaves the page.
			const rawLeft =
				a.right + gap + w <= window.innerWidth
					? a.right + gap
					: a.left - w - gap;
			popover.style.left = `${Math.max(gap, Math.min(rawLeft, window.innerWidth - w - gap))}px`;
			popover.style.top = `${Math.max(gap, Math.min(a.top, window.innerHeight - h - gap))}px`;
			return;
		}
		popover.style.top = `${a.bottom}px`;
		if (align === "end" || a.left + popover.offsetWidth > window.innerWidth) {
			popover.style.right = `${window.innerWidth - a.right}px`;
		} else {
			popover.style.left = `${a.left}px`;
		}
	};
	place();
	window.addEventListener("scroll", place, true);
	window.addEventListener("resize", place);
	return () => {
		window.removeEventListener("scroll", place, true);
		window.removeEventListener("resize", place);
	};
}
