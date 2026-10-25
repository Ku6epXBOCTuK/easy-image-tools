import type { Dict } from "./dict";

export const ru: Dict = {
	header: {
		workspace: "Рабочая область",
		catalog: "Каталог",
	},
	home: {
		hero: "Привет, {name}!",
		restoreLast: "Вернуть {title}",
	},
	errors: {
		sourceRequired: "Нужен исходник",
	},
	plurals: {
		parts: {
			one: "{n} часть",
			few: "{n} части",
			many: "{n} частей",
			other: "{n} части",
		},
	},
	pages: {
		addBorder: {
			title: "Добавить рамку",
			description: "Рисует рамку {kind}.",
		},
	},
	tools: {
		addBorder: {
			results: {
				done: "Рамка {what}",
			},
		},
	},
};
