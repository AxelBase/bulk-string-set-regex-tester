<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let pattern: string = '';
  export let error: string | null = null;

  const dispatch = createEventDispatcher();

  function handleInput(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    pattern = target.value;
    dispatch('update', { pattern });
  }
</script>

<div class="mb-3">
  <label for="pattern" class="form-label fw-bold">Regex Pattern</label>
  <textarea
    id="pattern"
    class="form-control {error ? 'is-invalid' : ''}"
    rows="3"
    bind:value={pattern}
    on:input={handleInput}
    placeholder="e.g. ^[a-z]+@\w+\.com$"
    spellcheck={false}
  ></textarea>
  {#if error}
    <div class="invalid-feedback">
      {error}
    </div>
  {/if}
  <div class="form-text">
    Use standard JavaScript regex syntax. Empty pattern matches everything.
  </div>
</div>