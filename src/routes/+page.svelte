<script lang="ts">
  import { Canvas } from '@threlte/core';
  import Scene from '$lib/Scene.svelte';
  import NoteParticles from '$lib/NoteParticles.svelte';
  import Score from '$lib/Score.svelte';
  import ScrollScore from '$lib/ScrollScore.svelte';
  import SectionCard from '$lib/SectionCard.svelte';
  import { sectionState, SECTIONS } from '$lib/sections.svelte.ts';

  // Track current section from scroll position
  function onScroll() {
    const idx = Math.round(window.scrollY / window.innerHeight);
    sectionState.current = Math.max(0, Math.min(idx, SECTIONS.length - 1));
  }

  function scrollToSection(i: number) {
    window.scrollTo({ top: i * window.innerHeight, behavior: 'smooth' });
  }
</script>

<svelte:window onscroll={onScroll} />

<svelte:head>
  <title>wiedenmann.art</title>
  <meta name="description" content="Musician & Artist" />
</svelte:head>

<!-- Fixed full-screen 3D canvas (behind everything) -->
<div class="canvas-wrapper">
  <Canvas>
    <Scene />
  </Canvas>
</div>

<!-- Note particles above canvas -->
<NoteParticles />

<!-- Hero Score removed from global — now lives inside Recordings section -->
<!-- Section phrases (plays on scroll) -->
<ScrollScore />

<!-- Hero header — fades when you leave section 0 -->
<header class:dim={sectionState.current > 0}>
  <h1>wiedenmann<span>.art</span></h1>
  <p>musician &amp; artist</p>
  <button class="scroll-hint" onclick={() => scrollToSection(1)} aria-label="scroll down">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 4v14M5 12l6 6 6-6" stroke="#8b7355" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</header>

<!-- Content cards (position fixed, slide in/out) -->
{#each SECTIONS.slice(1) as section, i}
  <SectionCard {section} active={sectionState.current === i + 1} />
{/each}

<!-- Scroll-snap invisible pages (body scrolls, canvas stays fixed) -->
<div class="snap-pages">
  {#each SECTIONS as _, i}
    <div class="snap-page"></div>
  {/each}
</div>

<!-- Score player — only shown on Recordings section -->
<div class="score-reveal" class:visible={sectionState.current === 2}>
  <Score />
</div>
<nav class="dots">
  {#each SECTIONS as _, i}
    <button
      class="dot"
      class:active={sectionState.current === i}
      onclick={() => scrollToSection(i)}
      aria-label={`Go to section ${i + 1}`}
    ></button>
  {/each}
</nav>

<style>
  :global(*, *::before, *::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    background: #0e0e0f;
    color: #f0ede8;
    font-family: 'Georgia', serif;
    /* scroll-snap lives on body */
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    scroll-behavior: auto; /* smooth only via JS calls */
    height: 100dvh;
  }

  /* ── Fixed 3D canvas ───────────────────────────────────── */
  .canvas-wrapper {
    position: fixed;
    inset: 0;
    z-index: 0;
    /* Canvas itself captures no pointer events;
       Marimba.svelte listens on svelte:window instead */
    pointer-events: none;
  }

  /* Re-enable pointer events on the canvas so Three.js raycasting works
     via renderer.domElement rect — Marimba reads clientX/clientY from window */
  :global(.canvas-wrapper canvas) {
    pointer-events: auto;
  }

  /* ── Scroll-snap ghost pages ───────────────────────────── */
  .snap-pages {
    position: relative;
    z-index: 5;
    pointer-events: none;
  }

  .snap-page {
    height: 100dvh;
    scroll-snap-align: start;
  }

  /* ── Hero header ───────────────────────────────────────── */
  header {
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 15;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  header.dim {
    opacity: 0;
    transform: translateX(-50%) translateY(-12px);
    pointer-events: none;
  }

  h1 {
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 400;
    letter-spacing: 0.08em;
    color: #f0ede8;
  }

  h1 span { color: #8b7355; }

  p {
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #6b6560;
  }

  .scroll-hint {
    margin-top: 0.8rem;
    background: none;
    border: none;
    cursor: pointer;
    pointer-events: auto;
    opacity: 0.6;
    transition: opacity 0.2s;
  }
  .scroll-hint:hover { opacity: 1; }

  /* ── Score reveal (Recordings only) ────────────────────────────── */
  .score-reveal {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 18;
    opacity: 0;
    transform: translateY(20px);
    pointer-events: none;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .score-reveal.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  /* ── Navigation dots ───────────────────────────────────── */
  .dots {
    position: fixed;
    right: 1.6rem;
    top: 50%;
    translate: 0 -50%;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    z-index: 25;
  }

  .dot {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: grid;
    place-items: center;
    transition: transform 0.3s ease;
  }

  .dot::after {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4a4540;
    transition: background 0.3s ease, transform 0.3s ease;
  }

  .dot.active::after {
    background: #8b7355;
    transform: scale(1.5);
  }
</style>
