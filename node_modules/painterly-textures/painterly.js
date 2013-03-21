var path = require('path')
var texturePath = __dirname + '/textures'

module.exports = function(dir) {
  return path.relative(dir, texturePath) + '/'
}
