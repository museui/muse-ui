var _ = require('lodash')
var mdName = process.env.NODE_ENV !== 'test' ? process.argv[2] || ( process.env.NODE_ENV === 'production' ? 'prod' : 'docs') : 'docs'
var md = require('./' + mdName)

module.exports = _.assign({}, md.global, process.env.NODE_ENV === 'production' ? md.build : md.dev)
