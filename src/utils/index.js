import * as colorsObj from './colors'

const colors = Object.keys(colorsObj)
export const getColor = function (color) {
  if (!color) return ''
  return colors.indexOf(color) !== -1 ? colorsObj[color] : color
}

export function merge (target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i]
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }
  return target
}
