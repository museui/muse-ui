// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var ora = require('ora')
var webpack = require('webpack')
var config = require('../config')
var mdName = process.argv[2] || 'prod'
var webpackConfig =  require('./webpack.' + (mdName === 'prod' ? 'prod' : 'docs' ) )

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

// var assetsPath = config.assetsPath
// rm('-rf', assetsPath)
// mkdir('-p', assetsPath)
// cp('-R', 'static/', assetsPath) // copy 未见

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
})
