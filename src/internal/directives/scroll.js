import { getScrollEventTarget } from '../../utils/dom';

function bindScroll (el, binding) {
  const callback = typeof binding.value === 'function'
    ? binding.value
    : binding.value.callback;
  const options = binding.value.options || { passive: true };
  let target = binding.value.target || window;
  if (target === 'undefined') return;
  if (target instanceof Element) {
    target = getScrollEventTarget(target);
  } else if (target !== window) {
    target = document.querySelector(target);
  }

  const handleScroll = function (e) {
    callback(target, e);
  };
  if (el._onScroll && target !== el._onScroll.target) unbind(el, binding);

  target.addEventListener('scroll', handleScroll, options);

  el._onScroll = {
    callback: handleScroll,
    options,
    target
  };
}

function unbind (el, binding) {
  const { callback, options, target } = el._onScroll;
  if (!target) return;
  target.removeEventListener('scroll', callback, options);
}
export default {
  name: 'scroll',
  inserted: bindScroll,
  update: bindScroll,
  unbind: unbind
};
