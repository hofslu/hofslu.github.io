<script lang="ts">
  import type { Section } from './sections.svelte.ts';

  let { section, active }: { section: Section; active: boolean } = $props();
</script>

<!-- Slide in from the appropriate side when active -->
<div class="card {section.cardSide}" class:active>
  <p class="sub">{section.sub}</p>
  <h2>{section.title}</h2>
  <p class="body">{section.body}</p>
</div>

<style>
  .card {
    position: fixed;
    top: 50%;
    /* 'translate' is a separate CSS property so it won't clash with our
       slide 'transform'. Both apply independently. */
    translate: 0 -50%;
    width: min(400px, 36vw);
    background: rgba(14, 14, 15, 0.80);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(139, 115, 85, 0.22);
    border-radius: 3px;
    padding: 2.4rem 2.8rem;
    pointer-events: none;
    z-index: 20;
    /* default — off-screen & invisible */
    opacity: 0;
    transition:
      opacity 0.65s ease,
      transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Right card: enters from the right edge */
  .card.right {
    right: 6vw;
    transform: translateX(72px);
  }
  .card.right.active {
    transform: translateX(0);
    opacity: 1;
  }

  /* Left card: enters from the left edge */
  .card.left {
    left: 6vw;
    transform: translateX(-72px);
  }
  .card.left.active {
    transform: translateX(0);
    opacity: 1;
  }

  .sub {
    font-size: 0.7rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: #8b7355;
    margin-bottom: 0.65rem;
  }

  h2 {
    font-size: clamp(1.5rem, 2.4vw, 2.2rem);
    font-weight: 400;
    color: #f0ede8;
    letter-spacing: 0.04em;
    margin-bottom: 1.1rem;
  }

  .body {
    font-size: 0.9rem;
    line-height: 1.8;
    color: #9b9490;
  }
</style>
