import asciiOnly from "./ascii-only.js";
import interfaceProps from "./interface-props.js";
import noStringUnionAlias from "./no-string-union-alias.js";

export default {
	meta: {
		name: "conventions",
		version: "0.1.0",
	},
	rules: {
		"ascii-only": asciiOnly,
		"interface-props": interfaceProps,
		"no-string-union-alias": noStringUnionAlias,
	},
};
