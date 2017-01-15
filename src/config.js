import {merge} from './utils'
function config (options) {
  if (!options) return
  merge(config, options)
}

merge(config, {
  disableTouchRipple: false,
  disableFocusRipple: false
})

export default config
