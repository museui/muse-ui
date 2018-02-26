import '../styles/components/expand-transition.less';
export default {
  name: 'mu-expand-transition',
  methods: {
    beforeEnter (el) {
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.style.height = '0';
    },
    enter (el) {
      el.dataset.oldOverflow = el.style.overflow;
      el.style.display = 'block';
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      } else {
        el.style.height = '';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }
      el.style.overflow = 'hidden';
    },
    afterEnter (el) {
      el.style.display = '';
      // uc浏览器上设置height会闪屏
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    },
    beforeLeave (el) {
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;

      el.style.display = 'block';
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
      }
      el.style.overflow = 'hidden';
    },
    leave (el) {
      if (el.scrollHeight !== 0) {
        setTimeout(() => {
          el.style.height = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        });
      }
    },
    afterLeave (el) {
      el.style.display = 'none';
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
  },
  render (h) {
    return h('transition', {
      props: {
        name: 'mu-expand'
      },
      on: {
        'before-enter': this.beforeEnter,
        enter: this.enter,
        'after-enter': this.afterEnter,
        'before-leave': this.beforeLeave,
        leave: this.leave,
        'after-leave': this.afterLeave
      }
    }, this.$slots.default);
  }
};
