<script lang="ts">
  import ResultLine from './ResultLine.svelte';

  export let results: any[] = [];
</script>

<div class="border rounded p-3" style="max-height: 600px; overflow-y: auto;">
  {#if results.length === 0}
    <p class="text-muted text-center my-5">
      Enter a regex pattern and strings to see results
    </p>
  {:else}
    {#each results as result, i}
      <ResultLine {result} index={i + 1} />
    {/each}
  {/if}
</div>