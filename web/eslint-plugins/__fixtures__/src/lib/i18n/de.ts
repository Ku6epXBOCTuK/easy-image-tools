import type { Dict } from "./dict";

export const de: Dict = {
	header: {
		workspace: "Arbeitsbereich",
		catalog: "Katalog",
	},
	home: {
		hero: "Hallo {name}!",
		restoreLast: "{title} wiederherstellen",
	},
	errors: {
		sourceRequired: "Quelle erforderlich",
	},
	plurals: {
		parts: { one: "{n} Teil", other: "{n} Teile" },
	},
	pages: {
		addBorder: {
			title: "Rahmen hinzufügen",
			description: "Zeichnet einen {kind}-Rahmen.",
		},
	},
	tools: {
		addBorder: {
			results: {
				done: "Rahmen {what}",
			},
		},
	},
};
