// Position a top-layer popover next to its anchor button. The Popover API
// itself does not place the element; CSS anchor positioning is not available
// in every browser, so placement is computed from the anchor rect and kept
// in sync with scroll/resize while the popover stays open.
export function trackPopover(
	popover: HTMLElement,
	anchor: HTMLElement,
	align: "start" | "end" = "end",
): () => void {
	const place = () => {
		const a = anchor.getBoundingClientRect();
		// The UA stylesheet gives popovers inset: 0; without resetting it the
		// over-constrained box (left: 0 vs our right) resolves to left: 0.
		popover.style.inset = "auto";
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
