// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var ora = require('ora')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig =  require('./webpack.docs.js')
var version = require('../package.json').version

var spinner = ora('building for production...')
spinner.start()

var assetsPath = config.assetsRoot
rm('-rf', assetsPath)
mkdir('-p', assetsPath)

const resFiles = ['src-docs/version.json', 'src-docs/favicon.ico'] //资源文件
cp('-R', resFiles, assetsPath)
const versionPath = assetsPath + '/' + version
const versionFiles = ['img/', 'js/', 'index.html', '*.css', 'favicon.ico'].map((path) => {
  return assetsPath + '/' + path
})

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
  mkdir('-p', versionPath)
  cp('-R', versionFiles, versionPath)
})
