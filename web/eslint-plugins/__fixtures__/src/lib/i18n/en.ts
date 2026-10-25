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
	plurals: {
		parts: { one: "{n} part", other: "{n} parts" },
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
