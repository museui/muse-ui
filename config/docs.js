var path = require('path')
module.exports = {
  global: {
    entry: {
      app: path.resolve(__dirname, '../src-docs/main.js')
    },
    assetsRoot: path.resolve(__dirname, '../docs'),
    index: path.resolve(__dirname, '../src-docs/index.html'),
  },
  build: {
    env: '"production"',
    assetsSubDirectory: '',
    assetsPublicPath: '',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: '"development"',
    port: 3000,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}
