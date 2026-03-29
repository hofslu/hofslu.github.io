<script lang="ts">
  import { T, useThrelte } from '@threlte/core';
  import { OrbitControls, ContactShadows } from '@threlte/extras';
  import Marimba from './Marimba.svelte';

  const { renderer } = useThrelte();

  // Block non-ctrl wheel events at the canvas before OrbitControls sees them.
  // Ctrl+scroll still reaches OrbitControls for zoom.
  $effect(() => {
    const canvas = renderer?.domElement;
    if (!canvas) return;
    function blockZoom(e: WheelEvent) {
      if (!e.ctrlKey) e.stopImmediatePropagation();
    }
    canvas.addEventListener('wheel', blockZoom, { capture: true, passive: true });
    return () => canvas.removeEventListener('wheel', blockZoom, { capture: true } as EventListenerOptions);
  });
</script>

<!-- Lighting -->
<T.AmbientLight intensity={0.8} />
<T.DirectionalLight position={[6, 10, 4]} intensity={1.6} castShadow />
<T.DirectionalLight position={[-5, 3, -3]} intensity={0.5} color="#b8d4ff" />

<!-- Camera -->
<T.PerspectiveCamera makeDefault fov={42} position={[0, 1.4, 5]}>
  <OrbitControls
    enableDamping
    dampingFactor={0.07}
    minDistance={2}
    maxDistance={12}
    maxPolarAngle={Math.PI / 1.9}
    target={[0, 0.4, 0]}
    autoRotate={false}
    autoRotateSpeed={0.4}
  />
</T.PerspectiveCamera>

<!-- Marimba model with hover detection -->
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
