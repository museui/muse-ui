import {isPc} from '../utils'

const tapContext = '@@tapContext'

function touchstart (e, self) {
  var touches = e.touches[0]
  var tapObj = self.tapObj
  tapObj.pageX = touches.pageX
  tapObj.pageY = touches.pageY
  tapObj.clientX = touches.clientX
  tapObj.clientY = touches.clientY
  self.time = +new Date()
}

function touchend (e, self) {
  var touches = e.changedTouches[0]
  var tapObj = self.tapObj
  self.time = +new Date() - self.time
  tapObj.distanceX = tapObj.pageX - touches.pageX
  tapObj.distanceY = tapObj.pageY - touches.pageY
  if (!isTap(self)) return
  setTimeout(function () {
    self[tapContext].documentHandler(e)
  }, 150)
}

function isTap (self) {
  if (self.disabled) return false
  var tapObj = self.tapObj
  return self.time < 150 && Math.abs(tapObj.distanceX) < 2 && Math.abs(tapObj.distanceY) < 2
}
export default {
  bind (el, binding, vnode) {
    const documentHandler = function (e) {
      if (!binding.value && !binding.expression && el.href && !binding.modifiers.prevent) {
        window.location = el.href
        return
      }
      if (!vnode.context) return
      if (binding.expression) {
        vnode.context[el[tapContext].methodName](e)
      } else {
        el[tapContext].bindingFn(e)
      }
    }
    el[tapContext] = {
      documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    }

    if (isPc()) {
      el.addEventListener('click', function (e) {
        documentHandler(e)
      })
    } else {
      el.addEventListener('touchstart', function (e) {
        if (binding.modifiers.stop) e.stopPropagation()
        if (binding.modifiers.prevent) e.preventDefault()
        touchstart(e, el)
      }, false)
      el.addEventListener('touchend', function (e) {
        Object.defineProperties(e, { // 重写currentTarget对象 与jq相同
          'currentTarget': {
            value: el,
            writable: true,
            enumerable: true,
            configurable: true
          }
        })
        e.preventDefault()
        return touchend(e, el)
      }, false)
    }
  },

  update (el, binding) {
    el[tapContext].methodName = binding.expression
    el[tapContext].bindingFn = binding.value
  },

  unbind (el) {
    document.removeEventListener('click', el[tapContext].documentHandler)
  }
}
