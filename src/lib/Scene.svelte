<script lang="ts">
  import { T } from '@threlte/core';
  import { GLTF, OrbitControls } from '@threlte/extras';
</script>

<!-- Lighting -->
<T.AmbientLight intensity={0.6} />
<T.DirectionalLight position={[5, 8, 3]} intensity={1.4} castShadow />
<T.DirectionalLight position={[-4, 2, -2]} intensity={0.4} color="#a0c4ff" />

<!-- Camera -->
<T.PerspectiveCamera makeDefault fov={45} position={[0, 1.2, 4]}>
  <OrbitControls
    enableDamping
    dampingFactor={0.07}
    minDistance={1.5}
    maxDistance={10}
    maxPolarAngle={Math.PI / 1.8}
    target={[0, 0.5, 0]}
  />
</T.PerspectiveCamera>

<!-- Marimba model — drop marimba.glb into static/models/ after converting from .usdc -->
<GLTF url="/models/marimba.glb" />
