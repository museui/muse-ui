var path = require('path')
module.exports = {
  global: {
    entry: {
      app: path.resolve(__dirname, '../src/index.js')
    },
    assetsRoot: path.resolve(__dirname, '../dist')
  },
  build: {
    env: '"production"',
    assetsSubDirectory: '',
    assetsPublicPath: '',
    productionSourceMap: false
  }
}
