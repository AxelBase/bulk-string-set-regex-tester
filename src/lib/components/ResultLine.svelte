<script lang="ts">
  export let result: any;
  export let index: number;
</script>

<div class="d-flex align-items-start gap-3 py-2 border-bottom">
  <div class="text-end" style="width: 50px; flex-shrink: 0;">
    <small class="text-muted">{index}</small>
  </div>
  <div class="flex-fill">
    {#if result.matches}
      <span class="badge bg-success me-2">Match</span>
    {:else}
      <span class="badge bg-danger me-2">No Match</span>
    {/if}
    <span class="font-monospace small" use:innerHTML={result.highlighted}></span>
  </div>
</div>