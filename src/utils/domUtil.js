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
  let arr = ['msTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd', 'webkitTransitionEnd', 'transitionend']
  let handler = {
    handleEvent (event) {
      arr.forEach(function (eventName) {
        el.removeEventListener(eventName, handler, false)
      })
      fun.apply(el, arguments)
    }
  }
  arr.forEach(function (eventName) {
    el.addEventListener(eventName, handler, false)
  })
}

/* istanbul ignore next */
export const on = (function() {
  return function(element, event, handler) {
    if (element && event && handler) {
      element.attachEvent('on' + event, handler);
    }
  };
})();

/* istanbul ignore next */
export const off = (function() {
  return function(element, event, handler) {
    if (element && event) {
      element.detachEvent('on' + event, handler);
    }
  };
})();

/* istanbul ignore next */
export const once = function(el, event, fn) {
  var listener = function() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};
