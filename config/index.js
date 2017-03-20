// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src-docs/main.js')
  },
  template: path.resolve(__dirname, '../src-docs/index.html'),
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../docs'),
    assetsSubDirectory: '',
    assetsPublicPath: '',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}
