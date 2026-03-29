<script lang="ts">
  import { noteState } from './notes.svelte.ts';
</script>

<div class="overlay" aria-hidden="true">
  {#each noteState.notes as note (note.id)}
    <span
      class="note"
      style="
        left: {note.x}px;
        top: {note.y}px;
        --drift-x: {note.driftX}px;
        --wobble: {note.wobble}px;
        --rotation: {note.rotation}deg;
        --duration: {note.duration}ms;
      "
    >{note.glyph}</span>
  {/each}
</div>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 100;
    overflow: hidden;
  }

  .note {
    position: absolute;
    font-size: 1.6rem;
    color: #ff6a00;
    text-shadow: 0 0 12px #ff6a00aa, 0 0 24px #ff9f00aa;
    transform-origin: center bottom;
    /* two independent animations: rise+fade  and  x-wobble */
    animation:
      note-rise var(--duration) ease-out forwards,
      note-wobble var(--duration) ease-in-out forwards;
    will-change: transform, opacity;
  }

  @keyframes note-rise {
    0%   { transform: translateY(0px)    rotate(var(--rotation)) scale(0.6); opacity: 0; }
    8%   { opacity: 1; transform: translateY(-20px)  rotate(var(--rotation)) scale(1.1); }
    70%  { opacity: 1; }
    100% { transform: translateY(-220px) rotate(calc(var(--rotation) * 1.4)) scale(0.8); opacity: 0; }
  }

  @keyframes note-wobble {
    0%   { margin-left: 0; }
    20%  { margin-left: var(--wobble); }
    45%  { margin-left: calc(var(--drift-x) * 0.3); }
    65%  { margin-left: calc(var(--drift-x) * 0.6 + var(--wobble) * -0.6); }
    85%  { margin-left: calc(var(--drift-x) * 0.85); }
    100% { margin-left: var(--drift-x); }
  }
</style>
