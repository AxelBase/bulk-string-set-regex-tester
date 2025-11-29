<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let flags: string = 'g';

  const allFlags = [
    { flag: 'g', name: 'Global', desc: 'Match all occurrences' },
    { flag: 'i', name: 'Ignore Case', desc: 'Case-insensitive' },
    { flag: 'm', name: 'Multiline', desc: '^ and $ match start/end of lines' },
    { flag: 's', name: 'DotAll', desc: '. matches newline characters' },
    { flag: 'u', name: 'Unicode', desc: 'Enable full Unicode support' },
    { flag: 'y', name: 'Sticky', desc: 'Matches only at exact position' }
  ];

  const dispatch = createEventDispatcher();

  function toggleFlag(flag: string) {
    const set = new Set(flags.split(''));
    if (set.has(flag)) set.delete(flag);
    else set.add(flag);
    flags = Array.from(set).join('');
    dispatch('update', { flags });
  }
</script>

<div class="mb-4">
  <p class="form-label fw-bold mb-3" id="flags-label">Flags</p>
  <div class="d-flex flex-wrap gap-3" role="group" aria-labelledby="flags-label">
    {#each allFlags as f}
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id="flag-{f.flag}"
          checked={flags.includes(f.flag)}
          on:change={() => toggleFlag(f.flag)}
        >
        <label class="form-check-label" for="flag-{f.flag}" title={f.desc}>
          <code>{f.flag}</code> {f.name}
        </label>
      </div>
    {/each}
  </div>
</div>