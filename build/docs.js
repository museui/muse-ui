require('./check-versions')()
require('shelljs/global')

process.env.NODE_ENV = 'production'
var fs = require('fs')
var ora = require('ora')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var version = process.env.VERSION || require('../package.json').version
var versions = require('../src-docs/version.json')

var webpackConfig = require('./webpack.docs.conf')

var spinner = ora('building for production...')
spinner.start()

if (versions.indexOf(version) === -1) versions.unshift(version);
fs.writeFileSync('src-docs/version.json', JSON.stringify(versions), 'utf8'); // 写入到json文件中

var assetsPath = config.build.assetsRoot
const resFiles = ['src-docs/version.json', 'src-docs/favicon.ico'] //资源文件
const versionPath = assetsPath + '/' + version
const versionFiles = ['js/', 'css/', 'index.html'].map((path) => {
  return assetsPath + '/' + path
})
rm('-rf', versionFiles)
cp('-R', resFiles, assetsPath)

cp('-R', 'src-docs/assets/images', assetsPath + '/images')

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
  mkdir('-p', versionPath)
  cp('-R', versionFiles, versionPath)
  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})
