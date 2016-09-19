
export let getOffset = function (el) {
  let box = el.getBoundingClientRect()
  let body = document.body
  let clientTop = el.clientTop || body.clientTop || 0
  let clientLeft = el.clientLeft || body.clientLeft || 0
  let scrollTop = window.pageYOffset || el.scrollTop
  let scrollLeft = window.pageXOffset || el.scrollLeft
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  }
}

export let transitionEnd = function (el, fun) {
  let arr = ['webkitTransitionEnd', 'transitionend']
  let handler = {
    handleEvent (event) {
      arr.map(function (eventName) {
        el.removeEventListener(eventName, handler, false)
      })
      fun.apply(el, arguments)
    }
  }
  arr.map(function (eventName) {
    el.addEventListener(eventName, handler, false)
  })
}
