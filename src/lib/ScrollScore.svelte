<script lang="ts">
  import { sectionState } from './sections.svelte.ts';
  import { PHRASES } from './phrases.ts';
  import { playKeyByIndex } from './marimba.svelte.ts';

  let timers: ReturnType<typeof setTimeout>[] = [];

  $effect(() => {
    const s = sectionState.current;
    // Cancel any still-pending beats from the previous phrase
    timers.forEach(clearTimeout);
    timers = [];

    if (s === 0) return; // hero — no phrase
    const phrase = PHRASES[s - 1];
    if (!phrase) return;

    timers = phrase.map(({ ms, idx }) =>
      setTimeout(() => playKeyByIndex(idx), ms)
    );
  });
</script>
