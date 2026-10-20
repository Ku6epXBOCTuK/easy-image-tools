import dictConsistency from "./dict-consistency.js";
import noHardcodedUserText from "./no-hardcoded-user-text.js";

export default {
	meta: {
		name: "i18n",
		version: "0.1.0",
	},
	rules: {
		"dict-consistency": dictConsistency,
		"no-hardcoded-user-text": noHardcodedUserText,
	},
};
