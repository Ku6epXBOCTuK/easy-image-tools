// NOTE: See https://svelte.dev/docs/kit/types#app.d.ts for the App namespace types.
declare global {
	namespace App {}
}

declare module "*.css?raw" {
	const content: string;
	export default content;
}

export {};
