import popup from '../internal/mixins/popup';
import resize from '../internal/directives/resize';
import scroll from '../internal/directives/scroll';

const SPACE = 8;
export default {
  name: 'mu-tooltip-content',
  mixins: [popup],
  directives: {
    resize,
    scroll
  },
  props: {
    overlay: {
      default: false
    },
    escPressClose: {
      default: false
    },
    placement: {
      type: String,
      default: 'bottom',
      validator (val) {
        return [
          'top', 'top-start', 'top-end',
          'bottom', 'bottom-start', 'bottom-end',
          'left', 'left-start', 'left-end',
          'right', 'right-start', 'right-end'
        ].indexOf(val) !== -1;
      }
    },
    trigger: {}
  },
  mounted () {
    this.setStyle();
  },
  updated () {
    setTimeout(() => this.setStyle(), 0);
  },
  methods: {
    getLeftPosition (width, react) {
      switch (this.placement) {
        case 'left':
        case 'left-start':
        case 'left-end':
          return react.left - width - SPACE;
        case 'right':
        case 'right-start':
        case 'right-end':
          return react.left + react.width + SPACE;
        case 'top':
        case 'bottom':
          return react.left + react.width / 2 - width / 2;
        case 'bottom-start':
        case 'top-start':
          return react.left;
        case 'bottom-end':
        case 'top-end':
          return react.left + react.width - width;
      }
    },
    getTopPosition (height, react) {
      switch (this.placement) {
        case 'top':
        case 'top-start':
        case 'top-end':
          return react.top - height - SPACE;
        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
          return react.top + react.height + SPACE;
        case 'left':
        case 'right':
          return react.top + react.height / 2 - height / 2;
        case 'left-start':
        case 'right-start':
          return react.top;
        case 'left-end':
        case 'right-end':
          return react.top + react.height - height;
      }
    },
    setStyle () {
      if (!this.open) return;
      const el = this.$el;
      const triggerEl = this.trigger;
      if (!el || !triggerEl) return;
      const elReact = el.getBoundingClientRect();
      const react = triggerEl.getBoundingClientRect();
      el.style.top = this.getTopPosition(elReact.height, react) + 'px';
      el.style.left = this.getLeftPosition(elReact.width, react) + 'px';
    }
  },
  render (h) {
    return h('transition', {
      props: {
        name: 'mu-tooltip-' + this.placement.split('-')[0]
      }
    }, [
      this.open ? h('div', {
        staticClass: 'mu-tooltip',
        style: {
          'z-index': this.zIndex
        },
        directives: [{
          name: 'resize',
          value: this.setStyle
        }, {
          name: 'scroll',
          value: this.setStyle
        }]
      }, this.$slots.default) : undefined
    ]);
  }
};
