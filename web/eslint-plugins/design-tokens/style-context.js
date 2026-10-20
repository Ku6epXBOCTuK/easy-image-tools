// NOTE: The <style> block of a Svelte component is a postcss AST (via
// svelte-eslint-parser); all design-token rules share this plumbing.

export function getStyleRoot(context) {
	const parserServices = context.sourceCode?.parserServices;
	if (!parserServices || typeof parserServices.getStyleContext !== "function") {
		return null;
	}
	const styleContext = parserServices.getStyleContext();
	return styleContext?.status === "success" ? styleContext.sourceAst : null;
}

export function getStyleNodeLoc(context) {
	return context.sourceCode?.parserServices?.styleNodeLoc ?? null;
}
