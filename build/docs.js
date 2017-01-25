// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var fs = require('fs')
var path = require('path')
var ora = require('ora')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig =  require('./webpack.docs.js')
var version = process.env.VERSION || require('../package.json').version
var versions = require('../src-docs/version.json')
var spinner = ora('building for production...')
spinner.start()

if (versions.indexOf(version) === -1) versions.unshift(version);
fs.writeFileSync('src-docs/version.json', JSON.stringify(versions), 'utf8'); // 写入到json文件中

var assetsPath = config.assetsRoot
const resFiles = ['src-docs/version.json', 'src-docs/favicon.ico'] //资源文件
const versionPath = assetsPath + '/' + version
const versionFiles = ['img/', 'js/', 'index.html', '*.css', 'favicon.ico'].map((path) => {
  return assetsPath + '/' + path
})
rm('-rf', versionFiles)
cp('-R', resFiles, assetsPath)
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
