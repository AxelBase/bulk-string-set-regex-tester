<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let lines: string[] = [];

  const dispatch = createEventDispatcher();

  function handleInput(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    const text = target.value;
    lines = text
      .split('\n')
      .map(l => l.replace(/\r$/, '').trimEnd()); // keep trailing spaces if intentional
    dispatch('update', { lines });
  }
</script>

<div class="mb-4">
  <label for="strings" class="form-label fw-bold">
    Input Strings (one per line)
  </label>
  <textarea
    id="strings"
    class="form-control font-monospace"
    rows="12"
    placeholder="example@example.com
user123@gmail.com
invalid-email
https://github.com"
    spellcheck={false}
    on:input={handleInput}
  ></textarea>
  <div class="form-text">
    {lines.length} line{lines.length !== 1 ? 's' : ''} loaded
  </div>
</div>