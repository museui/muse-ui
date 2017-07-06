import * as colorsObj from './colors'

const colors = Object.keys(colorsObj)
export const getColor = function (color) {
  if (!color) return ''
  return colors.indexOf(color) !== -1 ? colorsObj[color] : color
}

export function isNotNull (val) {
  return val !== undefined && val !== null
}

export function isNull (val) {
  return val === undefined || val === null
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
  var uaInfo = typeof navigator !== 'undefined' ? navigator.userAgent : ''
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
  if (isPc()) return
  var classNames = []
  let pixelRatio = typeof window !== undefined && window.devicePixelRatio || 1
  classNames.push('pixel-ratio-' + Math.floor(pixelRatio))
  if (pixelRatio >= 2) {
    classNames.push('retina')
  }

  let html = document.getElementsByTagName('html')[0]

  classNames.forEach((className) => html.classList.add(className))
}

/**
 * 将 String, Object, Array 转成 Array
 */
export function convertClass (classes) {
  let newClasses = []
  if (!classes) return newClasses
  if (classes instanceof Array) {
    newClasses = newClasses.concat(classes)
  } else if (classes instanceof Object) {
    for (const name in classes) {
      if (classes[name]) newClasses.push(name)
    }
  } else {
    newClasses = newClasses.concat(classes.split(' '))
  }
  return newClasses
}
