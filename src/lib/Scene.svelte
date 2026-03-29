<script lang="ts">
  import { T, useThrelte, useTask } from '@threlte/core';
  import { ContactShadows } from '@threlte/extras';
  import * as THREE from 'three';
  import Marimba from './Marimba.svelte';
  import { sectionState, CAMERA_POSES } from './sections.svelte.ts';

  const { camera } = useThrelte();

  // Pre-allocated vectors — no GC per frame
  const _tPos  = new THREE.Vector3();
  const _tLook = new THREE.Vector3();
  const _cLook = new THREE.Vector3(0, 0.4, 0);

  useTask(() => {
    const cam = camera.current;
    if (!cam) return;
    const pose = CAMERA_POSES[sectionState.current] ?? CAMERA_POSES[0];
    _tPos.set(...pose.pos);
    _tLook.set(...pose.target);
    cam.position.lerp(_tPos, 0.04);
    _cLook.lerp(_tLook, 0.04);
    cam.lookAt(_cLook);
  });
</script>

<!-- Lighting -->
<T.AmbientLight intensity={0.8} />
<T.DirectionalLight position={[6, 10, 4]} intensity={1.6} castShadow />
<T.DirectionalLight position={[-5, 3, -3]} intensity={0.5} color="#b8d4ff" />

<!-- Camera — initial pose matches CAMERA_POSES[0] -->
<T.PerspectiveCamera makeDefault fov={42} position={[0, 1.4, 5]} />

<!-- Marimba model -->
<Marimba />

<!-- Soft shadow under the model -->
<ContactShadows
  position={[0, -0.01, 0]}
  scale={8}
  blur={2.5}
  far={2}
  opacity={0.45}
  color="#1a1612"
/>
