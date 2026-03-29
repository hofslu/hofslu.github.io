<script lang="ts">
  import { T, useThrelte, useTask } from '@threlte/core';
  import { useGltf } from '@threlte/extras';
  import * as THREE from 'three';
  import { spawnNote } from './notes.svelte.ts';
  import { marimbaState, KEY_NAMES } from './marimba.svelte.ts';
  import { playMarimbaNote } from './audio.ts';

  // Three.js GLTFLoader strips '.' from node names (plate.C2 → plateC2).
  // Build a map from the stripped name → chromatic index once at module init.
  const KEY_NAME_MAP = new Map(KEY_NAMES.map((k, i) => [k.replace('.', ''), i]));

  const EMISSIVE_HOVER  = new THREE.Color('#8b7355');  // matches .art in header
  const EMISSIVE_HIT    = new THREE.Color('#c4a97d');  // .art gold hit burst (bright)
  const EMISSIVE_OFF    = new THREE.Color('#000000');

  const { camera, renderer } = useThrelte();
  const gltfStore = useGltf('/models/marimba.glb');

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(-9999, -9999);

  // Per-mesh state
  type KeyState = {
    mesh: THREE.Mesh;
    noteIdx: number;  // chromatic index from KEY_NAMES (0 = C2 … 60 = C7)
    hit: number;      // 0–1, decays each frame after click
  };
  let keys: KeyState[] = [];
  // Fast index lookup: noteIdx → KeyState
  let keyByIdx = new Map<number, KeyState>();

  function hitState(state: KeyState) {
    state.hit = 1.0;
    if (state.noteIdx >= 0) playMarimbaNote(state.noteIdx);
    if (renderer && camera.current) {
      const pos = new THREE.Vector3();
      state.mesh.getWorldPosition(pos);
      pos.project(camera.current);
      const canvas = renderer.domElement;
      const rect = canvas.getBoundingClientRect();
      const sx = rect.left + (pos.x *  0.5 + 0.5) * rect.width;
      const sy = rect.top  + (pos.y * -0.5 + 0.5) * rect.height;
      spawnNote(sx, sy);
    }
  }

  // useGltf returns a Promise — use .then() to populate keys once loaded.
  // Name-based lookup (KEY_NAMES.indexOf) doesn't need world transforms,
  // so running inside .then() is fine.
  $effect(() => {
    gltfStore.then((gltf) => {
      keys = [];
      keyByIdx = new Map();
      gltf.scene.traverse((obj) => {
        if (!(obj instanceof THREE.Mesh)) return;
        const noteIdx = KEY_NAME_MAP.get(obj.name) ?? -1;
        if (noteIdx === -1) return;  // not a playable bar

        // Clone material so each key is independently coloured
        const rawMat = Array.isArray(obj.material) ? obj.material[0] : obj.material;
        const mat = (rawMat as THREE.MeshStandardMaterial).clone();
        mat.emissive = EMISSIVE_OFF.clone();
        mat.emissiveIntensity = 1;
        obj.material = mat;
        obj.scale.setScalar(1.0);

        const state: KeyState = { mesh: obj as THREE.Mesh, noteIdx, hit: 0 };
        keys.push(state);
        keyByIdx.set(noteIdx, state);
      });

      // Register direct trigger — index comes straight from KEY_NAMES, no sorting needed
      marimbaState.triggerByIndex = (idx: number) => {
        const state = keyByIdx.get(idx);
        if (state) hitState(state);
      };

    });
  });

  function onMouseMove(e: MouseEvent) {
    const el = renderer?.domElement;
    const rect = el
      ? el.getBoundingClientRect()
      : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function onClick() {
    if (!keys.length || !camera.current || !renderer) return;
    raycaster.setFromCamera(mouse, camera.current);
    const hits = raycaster.intersectObjects(keys.map(k => k.mesh), false);
    if (!hits.length) return;

    const state = keys.find(k => k.mesh === hits[0].object);
    if (state) hitState(state);
  }

  const _emissive = new THREE.Color();

  useTask((_delta) => {
    if (!keys.length || !camera.current) return;

    // Drain name-based pending queue (fallback path)
    if (marimbaState.pending.length) {
      for (const name of marimbaState.pending) {
        const idx = KEY_NAMES.indexOf(name);
        const state = idx !== -1 ? keyByIdx.get(idx) : undefined;
        if (state) hitState(state);
      }
      marimbaState.pending.length = 0;
    }

    raycaster.setFromCamera(mouse, camera.current);
    const hits = raycaster.intersectObjects(keys.map(k => k.mesh), false);
    const hoveredMesh = hits.length ? hits[0].object : null;
    let anyHovered = false;

    for (const state of keys) {
      const { mesh } = state;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      const isHovered = mesh === hoveredMesh;
      if (isHovered) anyHovered = true;

      // Scale
      const scaleTarget = isHovered ? 1.1 : 1.0;
      mesh.scale.setScalar(mesh.scale.x + (scaleTarget - mesh.scale.x) * 0.18);

      // Emissive: hit orange decays first, then hover red underneath
      state.hit = Math.max(0, state.hit - 0.035);  // decay speed

      if (state.hit > 0) {
        _emissive.copy(EMISSIVE_HIT).multiplyScalar(state.hit);
      } else if (isHovered) {
        _emissive.copy(EMISSIVE_HOVER);
      } else {
        _emissive.copy(EMISSIVE_OFF);
      }

      mat.emissive.lerp(_emissive, 0.2);
    }

    if (renderer) {
      renderer.domElement.style.cursor = anyHovered ? 'pointer' : 'default';
    }
  });
</script>

<svelte:window onmousemove={onMouseMove} onclick={onClick} />

{#await gltfStore then { scene }}
  <T is={scene} />
{/await}

