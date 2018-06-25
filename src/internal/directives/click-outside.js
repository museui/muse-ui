const clickoutsideContext = '@@clickoutsideContext';

export default {
  name: 'click-outside',
  bind (el, binding, vnode) {
    const documentHandler = function (e) {
      if (!vnode.context || el.contains(e.target)) return;
      if (binding.expression) {
        vnode.context[el[clickoutsideContext].methodName](e);
      } else {
        el[clickoutsideContext].bindingFn(e);
      }
    };
    el[clickoutsideContext] = {
      documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    };
    setTimeout(() => {
      document.addEventListener('click', documentHandler);
    }, 0);
  },

  update (el, binding) {
    el[clickoutsideContext].methodName = binding.expression;
    el[clickoutsideContext].bindingFn = binding.value;
  },

  unbind (el) {
    document.removeEventListener('click', el[clickoutsideContext].documentHandler);
  }
};
