import { RuleTester } from "eslint";
import svelteParser from "svelte-eslint-parser";
import tseslint from "typescript-eslint";
import { describe, it } from "vitest";
import interfaceProps from "../conventions/interface-props.js";
import { asRuleModule, svelteComponent } from "./helpers.js";

RuleTester.describe = describe;
RuleTester.it = it;

const ruleTester = new RuleTester({
	languageOptions: {
		parser: svelteParser,
		parserOptions: { parser: tseslint.parser },
	},
});

const frame = (script: string) => ({
	code: svelteComponent(script),
	filename: "Component.svelte",
});

ruleTester.run("interface-props", asRuleModule(interfaceProps), {
	valid: [
		{ code: "<main>Hello</main>", filename: "Component.svelte" },
		frame("let x = 1;"),
		// NOTE: $state / $derived calls are unrelated, not props.
		frame("const s = $state(0);"),
		frame("const doubled = $derived(s * 2);"),
		frame(
			"interface Props { label: string }\nlet { label }: Props = $props();",
		),
		frame(
			"interface Props { label: string }\nlet { label = 'x' }: Props = $props();",
		),
		frame(
			"interface Props { value: string }\nlet { value = $bindable() }: Props = $props();",
		),
		// NOTE: An interface declared after the destructuring is still fine.
		frame(
			"let { label }: Props = $props();\ninterface Props { label: string }",
		),
		frame(
			"interface Props { id: string; rest?: unknown }\nlet { id, ...rest }: Props = $props();",
		),
		frame(
			"import type { Snippet } from 'svelte';\n" +
				"interface Props { children?: Snippet }\n" +
				"let { children }: Props = $props();",
		),
	],
	invalid: [
		{
			// NOTE: Untyped destructuring with a local interface is autofixable.
			...frame("interface Props { label: string }\nlet { label } = $props();"),
			output: svelteComponent(
				"interface Props { label: string }\nlet { label }: Props = $props();",
			),
			errors: [{ messageId: "untypedDestructure" }],
		},
		{
			// NOTE: Untyped destructuring without an interface is reported, not fixed.
			...frame("let { label } = $props();"),
			errors: [{ messageId: "untypedDestructure" }],
		},
		{
			// NOTE: Binding the whole props object instead of destructuring.
			...frame("let props = $props();"),
			errors: [{ messageId: "noDestructure" }],
		},
		{
			// NOTE: An inline generic is banned outright.
			...frame("const props = $props<{ a: string }>();"),
			errors: [{ messageId: "inlineGeneric" }],
		},
		{
			// NOTE: A different type name than the local interface Props.
			...frame(
				"interface Props { a: string }\nlet { a }: StageProps = $props();",
			),
			errors: [{ messageId: "notNamedProps" }],
		},
		{
			// NOTE: An inline object props type instead of interface Props.
			...frame("let { a }: { a: string } = $props();"),
			errors: [{ messageId: "inlineObjectType" }],
		},
		{
			// NOTE: A reference to Props without any local declaration.
			...frame("let { a }: Props = $props();"),
			errors: [{ messageId: "missingInterface" }],
		},
	],
});
