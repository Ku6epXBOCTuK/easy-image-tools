export const COLOR_PROPS =
	/^(color|background|background-color|background-image|border|border-color|border-top|border-right|border-bottom|border-left|outline|outline-color|box-shadow|text-shadow|fill|stroke|fill-color|stroke-color|stop-color|flood-color|lighting-color|column-rule|column-rule-color|text-decoration|text-decoration-color|caret-color|accent-color|border-top-color|border-right-color|border-bottom-color|border-left-color)$/;

// NOTE: z-index is excluded here: it is an integer, not a length (own rule).
export const SIZE_PROPS =
	/^(width|height|min-width|max-width|min-height|max-height|padding|padding-top|padding-right|padding-bottom|padding-left|margin|margin-top|margin-right|margin-bottom|margin-left|gap|column-gap|row-gap|top|right|bottom|left|inset|font|font-size|letter-spacing|word-spacing|line-height|border-radius|border-top-left-radius|border-top-right-radius|border-bottom-left-radius|border-bottom-right-radius|border-width|border-top-width|border-right-width|border-bottom-width|border-left-width|flex-basis|background-size|background-position|border-spacing|grid-template-columns|grid-template-rows)$/;

// NOTE: Shorthands taking BOTH a color and a size: the browser assigns
// sub-properties by value type, so no positional category check. Their
// longhands are covered by SIZE_PROPS / COLOR_PROPS individually.
export const MIXED_PROPS =
	/^(border|border-top|border-right|border-bottom|border-left|outline|text-decoration|column-rule)$/;

export const DURATION_PROPS =
	/^(transition|transition-duration|transition-delay|animation|animation-duration|animation-delay)$/;

export const COLOR_LITERAL =
	/#[0-9a-fA-F]{3,8}\b|\b(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklch|oklab)\s*\(|(?:^|\s|,|\()(?:white|black|red|green|blue|yellow|orange|purple|pink|gray|grey|silver|lime|teal|cyan|navy|maroon|olive|aqua|fuchsia|gold|indigo|violet|magenta|grey)\b/gi;

export const FORBIDDEN_SIZE_TOKEN = /\d+(?:\.\d+)?(?:px|rem|em)\b/g;

export const FORBIDDEN_DURATION_TOKEN = /\d+(?:\.\d+)?(?:ms|s)\b/g;

export const COLOR_TOKEN = /^--(?:color|brand)-/;
export const SIZE_TOKEN = /^--(?:space|size|text|radius|bp|z)-/;
export const DURATION_TOKEN = /^--(?:duration|ease|motion)-/;
