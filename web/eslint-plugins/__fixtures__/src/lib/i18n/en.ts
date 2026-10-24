import type { Dict } from "./dict";

export const en: Dict = {
	header: {
		workspace: "Workspace",
		catalog: "Catalog",
	},
	home: {
		hero: "Hello {name}!",
		restoreLast: "Restore {title}",
	},
	errors: {
		sourceRequired: "Source image required",
	},
	// NOTE: Base locale: page texts are taken from the EN strings of the registry.
	pages: {},
	tools: {
		addBorder: {
			results: {
				done: "Border {what}",
			},
		},
	},
};
