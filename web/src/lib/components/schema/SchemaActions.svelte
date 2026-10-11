<script lang="ts">
	import DownloadButton from "$lib/components/ui/DownloadButton.svelte";
	import UploadButton from "$lib/components/ui/UploadButton.svelte";
	import DetailBadge from "$lib/components/ui/DetailBadge.svelte";
	import type { OutputMime } from "$lib/core/io";
	import { outputFormatByMime } from "$lib/output-formats";
	import { t } from "$lib/i18n/t";
	import type { ResultKind } from "$lib/registry";
	import SchemaDownload from "./SchemaDownload.svelte";

	interface Props {
		inputMode: "image" | "text" | "none";
		resultKind?: ResultKind;
		canDownload: boolean;
		running: boolean;
		format?: OutputMime;
		quality?: number;
		limitKb?: number;
		alphaLoss?: boolean;
		// Download-zone feedback: size-limit misses and action failures.
		warnings?: { label: string; detail?: string }[];
		error?: { label: string; detail?: string } | null;
		onupload: (file: File) => void;
		ondownload: () => void;
		onformat?: (mime: OutputMime) => void;
		onquality?: (value: number) => void;
		onlimit?: (kb: number | undefined) => void;
	}
	let {
		inputMode,
		resultKind = "image",
		canDownload,
		running,
		format = "image/png",
		quality = undefined,
		limitKb = undefined,
		alphaLoss = false,
		warnings = [],
		error = null,
		onupload,
		ondownload,
		onformat,
		onquality,
		onlimit,
	}: Props = $props();
</script>

<div class="actions">
	{#if inputMode === "image"}
		<UploadButton label={t("actions.openImage")} onfile={onupload} />
	{/if}
	{#if canDownload && resultKind === "image"}
		<SchemaDownload
			{format}
			{quality}
			{limitKb}
			{running}
			{ondownload}
			onformat={(v) => onformat?.(v)}
			onquality={(v) => onquality?.(v)}
			onlimit={(v) => onlimit?.(v)}
		/>
	{:else if canDownload && resultKind === "files"}
		<DownloadButton
			label={t("actions.downloadFormat", { format: "ZIP" })}
			onclick={ondownload}
			disabled={running}
		/>
	{/if}
	{#each warnings as warning (warning.label + (warning.detail ?? ""))}
		<DetailBadge
			tone="warning"
			label={warning.label}
			detail={warning.detail}
			role="status"
		/>
	{/each}
	{#if error}
		<DetailBadge
			tone="danger"
			label={error.label}
			detail={error.detail}
			role="alert"
		/>
	{/if}
</div>
{#if canDownload && alphaLoss}
	<p class="alpha-warning" role="status">
		{t("actions.alphaLoss", { format: outputFormatByMime(format).label })}
	</p>
{/if}

<style>
	.actions {
		display: flex;
		align-items: center;
		gap: var(--space-l);
		flex-wrap: wrap;
	}
	.alpha-warning {
		margin: var(--space-m) 0 0;
		color: var(--color-warning);
		font: var(--font-size-s) var(--font-mono);
	}
</style>
