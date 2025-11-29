<script lang="ts">
  import { copyToClipboard, getLines } from '$lib/utils/clipboard';
  import { createEventDispatcher } from 'svelte';

  export let results: any[] = [];
  export let invert: boolean = false;

  const dispatch = createEventDispatcher();

  async function copyMatching() {
    const text = getLines(results, true);
    const success = await copyToClipboard(text);
    if (success) alert('Copied matching lines to clipboard!');
  }

  async function copyNonMatching() {
    const text = getLines(results, false);
    const success = await copyToClipboard(text);
    if (success) alert('Copied non-matching lines to clipboard!');
  }

  function toggleInvert() {
    dispatch('toggleInvert');
  }
</script>

<div class="d-flex flex-wrap gap-2 mb-4">
  <button class="btn btn-success" on:click={copyMatching} disabled={!results.some(r => r.matches)}>
    Copy Matching ({results.filter(r => r.matches).length})
  </button>
  <button class="btn btn-warning" on:click={copyNonMatching} disabled={!results.some(r => !r.matches)}>
    Copy Non-Matching ({results.filter(r => !r.matches).length})
  </button>
  <div class="ms-auto">
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        id="invert"
        bind:checked={invert}
        on:change={toggleInvert}
      >
      <label class="form-check-label" for="invert">
        Invert Results (show only non-matches)
      </label>
    </div>
  </div>
</div>