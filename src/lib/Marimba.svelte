<script lang="ts">
  import { T, useThrelte, useTask } from '@threlte/core';
  import { useGltf } from '@threlte/extras';
  import * as THREE from 'three';

  const NON_KEYS = new Set(['stage', 'ground']);

  const EMISSIVE_HOVER  = new THREE.Color('#8b7355');  // matches .art in header
  const EMISSIVE_HIT    = new THREE.Color('#ff6a00');  // orange hit burst
  const EMISSIVE_OFF    = new THREE.Color('#000000');

  const { camera, renderer } = useThrelte();
  const gltfStore = useGltf('/models/marimba.glb');

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(-9999, -9999);

  // Per-mesh state
  type KeyState = {
    mesh: THREE.Mesh;
    hit: number;      // 0–1, decays each frame after click
  };
  let keys: KeyState[] = [];

  $effect(() => {
    gltfStore.then((gltf) => {
      keys = [];
      gltf.scene.traverse((obj) => {
        if (!(obj instanceof THREE.Mesh) || NON_KEYS.has(obj.name)) return;

        // Clone material so each key is independently coloured
        const mat = (obj.material as THREE.MeshStandardMaterial).clone();
        mat.emissive = EMISSIVE_OFF.clone();
        mat.emissiveIntensity = 1;
        obj.material = mat;
        obj.scale.setScalar(1.0);

        keys.push({ mesh: obj as THREE.Mesh, hit: 0 });
      });
    });
  });

  function onMouseMove(e: MouseEvent) {
    const el = renderer.current?.domElement;
    const rect = el
      ? el.getBoundingClientRect()
      : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function onClick() {
    if (!keys.length || !camera.current) return;
    raycaster.setFromCamera(mouse, camera.current);
    const hits = raycaster.intersectObjects(keys.map(k => k.mesh), false);
    if (!hits.length) return;
    const state = keys.find(k => k.mesh === hits[0].object);
    if (state) state.hit = 1.0;
  }

  const _emissive = new THREE.Color();

  useTask((_delta) => {
    if (!keys.length || !camera.current) return;

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

    if (renderer.current) {
      renderer.current.domElement.style.cursor = anyHovered ? 'pointer' : 'default';
    }
  });
</script>

<svelte:window onmousemove={onMouseMove} onclick={onClick} />

{#await gltfStore then { scene }}
  <T is={scene} />
{/await}

