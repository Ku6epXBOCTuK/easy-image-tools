// NOTE: Position a top-layer popover next to its anchor button. The Popover API
// itself does not place the element and CSS anchor positioning is unavailable in
// every browser, so placement comes from the anchor rect, kept in sync on scroll.
export function trackPopover(
	popover: HTMLElement,
	anchor: HTMLElement,
	align: "start" | "end" = "end",
): () => void {
	const place = () => {
		const a = anchor.getBoundingClientRect();
		// NOTE: The UA stylesheet gives popovers inset: 0; without resetting it the
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
