<script lang="ts">
  import { Canvas } from '@threlte/core';
  import Scene from '$lib/Scene.svelte';
  import NoteParticles from '$lib/NoteParticles.svelte';
</script>

<svelte:head>
  <title>wiedenmann.art</title>
  <meta name="description" content="Musician & Artist" />
</svelte:head>

<main>
  <header>
    <h1>wiedenmann<span>.art</span></h1>
    <p>musician &amp; artist</p>
  </header>

  <div class="canvas-wrapper">
    <Canvas>
      <Scene />
    </Canvas>
  </div>

  <NoteParticles />
</main>

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
    overflow: hidden;
  }

  main {
    width: 100dvw;
    height: 100dvh;
    position: relative;
  }

  header {
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 10;
    pointer-events: none;
  }

  h1 {
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 400;
    letter-spacing: 0.08em;
    color: #f0ede8;
  }

  h1 span {
    color: #8b7355;
  }

  p {
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #6b6560;
    margin-top: 0.4rem;
  }

  .canvas-wrapper {
    width: 100%;
    height: 100%;
  }
</style>
