"""
Marimba GLB exporter — run from Blender's Text Editor or via:
  blender marimba.blend --background --python export_marimba.py

Exports only visible objects with all modifiers applied.
"""

import bpy, os

OUT = os.path.join(
    os.path.dirname(os.path.abspath(__file__)), "../static/models/marimba.glb"
)
OUT = os.path.normpath(OUT)

# Deselect all, then select only visible mesh objects
bpy.ops.object.select_all(action="DESELECT")
for obj in bpy.context.scene.objects:
    if obj.hide_get() or obj.hide_viewport:
        continue
    if obj.hide_render:
        continue
    obj.select_set(True)

bpy.ops.export_scene.gltf(
    filepath=OUT,
    export_format="GLB",
    use_selection=True,  # only selected (= visible) objects
    export_apply=True,  # apply all modifiers
    export_materials="EXPORT",
    export_texcoords=True,
    export_normals=True,
    export_colors=True,
    export_cameras=False,
    export_lights=False,
)

size_kb = os.path.getsize(OUT) // 1024
print(f"\n✓ Exported to: {OUT}")
print(f"  Size: {size_kb} KB")
