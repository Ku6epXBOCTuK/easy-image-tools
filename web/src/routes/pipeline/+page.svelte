<!-- NOTE: The whole pipeline surface needs the registry (saved chains resolve
     tool schemas), so the workspace is a lazy chunk (EIT-132): nothing here
     prerenders beyond an empty shell. -->
{#await import("./pipeline-workspace.svelte")}
	<div></div>
{:then { default: PipelineWorkspace }}
	<PipelineWorkspace />
{/await}
