var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var packageJson = require('../package.json')
var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.env

  var banner =
    '/*!\n' +
    ' * Muse UI v' + packageJson.version + ' (https://github.com/myronliu347/vue-carbon)\n' +
    ' * (c) ' + new Date().getFullYear() + ' Myron Liu \n' +
    ' * Released under the MIT License.\n' +
    ' */';

delete baseWebpackConfig.entry
var webpackConfig = merge(baseWebpackConfig, {
  entry: {
    'muse-ui': './src/index.js'
  },
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.productionSourceMap, extract: true })
  },
  banner: banner,
  devtool: false,
  output: {
    path: config.assetsRoot,
    filename: utils.assetsPath('[name].js'),
    library: 'MuseUI',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs2: 'vue',
      amd: 'vue',
      commonjs: 'vue'
    }
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.productionSourceMap,
      extract: true
    })
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // extract css into its own file
    new ExtractTextPlugin(utils.assetsPath('[name].css')),
  ]
})

module.exports = webpackConfig
