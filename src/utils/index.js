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

export function getWidth (w) {
  let width = String(w)
  if (width && width.indexOf('%') === -1 && width.indexOf('px') === -1) width += 'px'
  return width
}

export function isPc () {
  var uaInfo = navigator.userAgent
  var agents = ['Android', 'iPhone', 'Windows Phone', 'iPad', 'iPod']
  var flag = true
  for (var i = 0; i < agents.length; i++) {
    if (uaInfo.indexOf(agents[i]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

export function retina () {
  // 处理retina屏幕显示效果
  var classNames = []
  let pixelRatio = window.devicePixelRatio || 1
  classNames.push('pixel-ratio-' + Math.floor(pixelRatio))
  if (pixelRatio >= 2) {
    classNames.push('retina')
  }

  let html = document.getElementsByTagName('html')[0]

  classNames.forEach((className) => html.classList.add(className))
}
