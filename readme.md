# voxel-mesh

generate a three.js mesh from voxel data. extracted from some code by @mikolalysenko

- original repo: https://github.com/mikolalysenko/mikolalysenko.github.com/tree/master/MinecraftMeshes2
- blog post: http://0fps.wordpress.com/2012/07/07/meshing-minecraft-part-2/
- webgl demo: http://mikolalysenko.github.com/MinecraftMeshes2/

# installation

load [three.js](http://mrdoob.github.com/three.js/) into your page. this library has been tested with version `r54`

use `voxel-mesh-browserified.js`

or to build yourself:
```
npm install voxel-mesh
npm install browserify -g
browserify -r voxel-mesh > voxel-mesh-browserified.js
```

# usage

```javascript
var Mesh = require('voxel-mesh')

# license

MIT