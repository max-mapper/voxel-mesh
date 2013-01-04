# voxel-mesh

generate a three.js mesh from voxel data. extracted from some code by @mikolalysenko

- original repo: https://github.com/mikolalysenko/mikolalysenko.github.com/tree/master/MinecraftMeshes2
- blog post: http://0fps.wordpress.com/2012/07/07/meshing-minecraft-part-2/
- webgl demo: http://mikolalysenko.github.com/MinecraftMeshes2/

# installation

load [three.js](http://mrdoob.github.com/three.js/) into your page. this library has been tested with version `r54`

it is recommended that you use browserify to use this module

```
npm install voxel-mesh
npm install browserify -g
browserify -r voxel-mesh > voxel-mesh-browserified.js
```

# usage

```javascript
var Mesh = require('voxel-mesh')
var voxelData = require('voxel').generateExamples()['Hilly Terrain']
var mesh = new Mesh(voxelData)
mesh.createSurfaceMesh()
threeJSScene.add(mesh)
```

## new Mesh(voxelData, scaleFactor, meshingAlgorithm)

`voxelData` is required, `scaleFactor` defaults to `new Three.Vector3(10, 10, 10)` and `meshingAlgorithm` defaults to `greedy` (from the [voxel](http://npmjs.org/voxel) module)

## Mesh.prototype.createSurfaceMesh(material)

returns the generated surface mesh. `material` defaults to `new THREE.MeshNormalMaterial()`. after calling this method your mesh will also have `.surfaceMesh` populated with the new mesh

## Mesh.prototype.createWireMesh(hexColor)

returns the generated wire mesh. `hexColor` defaults to `0xffffff`. after calling this method your mesh will also have `.wireMesh` populated with the new mesh

## Mesh.prototype.addToScene(scene)

convenience method for adding the currently generated meshes (either `surfaceMesh` or `wireMesh`) to a `three.js` scene instance

## Mesh.prototype.setPosition(x, y, z)

convenience method for setting the position of the currently generated meshes (either `surfaceMesh` or `wireMesh`)

# license

MIT