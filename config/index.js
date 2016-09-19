var _ = require('lodash')
var mdName = process.argv[2] || ( process.env.NODE_ENV === 'production' ? 'prod' : 'mobile')
var md = require('./' + mdName)

module.exports = _.assign({}, md.global, process.env.NODE_ENV === 'production' ? md.build : md.dev)
