import popup from '../internal/mixins/popup';
import scroll from '../internal/directives/scroll';
import resize from '../internal/directives/resize';
import clickOutSide from '../internal/directives/click-outside';
import { PopoverTransiton } from '../internal/transitions';

const SPACE = 8;
export default {
  name: 'mu-popover',
  mixins: [popup],
  directives: {
    scroll,
    resize,
    'click-outside': clickOutSide
  },
  props: {
    overlay: {
      default: false
    },
    lazy: Boolean,
    cover: Boolean,
    space: {
      type: Number,
      default: 0
    }, // 距离trigger 的间隔, 在cover false的情况下完成
    trigger: {},
    placement: {
      type: String,
      default: 'bottom-start',
      validator (val) {
        return [
          'top', 'top-start', 'top-end',
          'bottom', 'bottom-start', 'bottom-end',
          'left', 'left-start', 'left-end',
          'right', 'right-start', 'right-end'
        ].indexOf(val) !== -1;
      }
    }
  },
  methods: {
    getLeftPosition (width, react) {
      let left = 0;
      const maxLeft = window.innerWidth - SPACE - width;
      const minLeft = SPACE;
      switch (this.placement) {
        case 'left':
        case 'left-start':
        case 'left-end':
          left = react.left - width - this.space;
          if (this.cover) {
            left += react.width;
          } else if (left < minLeft) {
            left = react.left + react.width + this.space;
          };
          break;
        case 'right':
        case 'right-start':
        case 'right-end':
          left = this.cover
            ? react.left
            : react.left + react.width > maxLeft
              ? react.left - width - this.space
              : react.left + react.width + this.space;
          break;
        case 'top':
        case 'bottom':
          left = react.left + react.width / 2 - width / 2;
          break;
        case 'bottom-start':
        case 'top-start':
          left = react.left;
          break;
        case 'bottom-end':
        case 'top-end':
          left = react.left + react.width - width;
          break;
      }
      left = Math.min(maxLeft, left);
      left = Math.max(minLeft, left);
      return left;
    },
    getTopPosition (height, react) {
      let top = 0;
      const maxTop = window.innerHeight - SPACE - height;
      const minTop = SPACE;
      switch (this.placement) {
        case 'top':
        case 'top-start':
        case 'top-end':
          top = react.top - height;
          if (!this.cover) {
            top += this.space;
            if (top < minTop) top = react.top + react.height + this.space;
          } else {
            top += react.height;
          }
          break;
        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
          top = this.cover ? react.top
            : react.top + react.height + this.space > maxTop
              ? react.top - height - this.space
              : react.top + react.height + this.space;
          break;
        case 'left':
        case 'right':
          top = react.top + react.height / 2 - height / 2;
          break;
        case 'left-start':
        case 'right-start':
          top = react.top;
          break;
        case 'left-end':
        case 'right-end':
          top = react.top + react.height - height;
          break;
      }
      top = Math.min(maxTop, top);
      top = Math.max(minTop, top);
      return top;
    },
    setStyle () {
      if (!this.open) return;
      const el = this.$el;
      const triggerEl = this.trigger;
      if (!el || !triggerEl) return;
      const react = triggerEl.getBoundingClientRect();
      if (react.top < -react.height || react.top > window.innerHeight) this.close('overflow');
      el.style.top = this.getTopPosition(el.offsetHeight, react) + 'px';
      el.style.left = this.getLeftPosition(el.offsetWidth, react) + 'px';
    },
    close (reason) {
      if (!this.open) return;
      this.$emit('update:open', false);
      this.$emit('close', reason);
    },
    clickOutSide (e) {
      if (this.trigger && this.trigger.contains(e.target)) return;
      this.close('clickOutSide');
    },
    getTransitionName () {
      if (this.cover) return `transition-${this.placement}`;
      return this.placement.indexOf('top') !== -1 ||
        ['left-end', 'right-end'].indexOf(this.placement) !== -1
        ? 'transition-top' : 'transition-bottom';
    }
  },
  mounted () {
    this.setStyle();
  },
  updated () {
    setTimeout(() => {
      this.setStyle();
    }, 0);
  },
  render (h) {
    const directives = [{
      name: 'resize',
      value: this.setStyle
    }, {
      name: 'scroll',
      value: {
        target: this.trigger,
        callback: this.setStyle
      }
    }, {
      name: 'click-outside',
      value: this.clickOutSide
    }];
    if (!this.lazy) {
      directives.push({
        name: 'show',
        value: this.open
      });
    }

    const transition = this.getTransitionName();
    return h(PopoverTransiton, [
      !this.lazy || this.open ? h('div', {
        staticClass: `mu-popover ${transition}`,
        style: {
          'z-index': this.zIndex
        },
        on: this.$listeners,
        directives
      }, this.$slots.default) : undefined
    ]);
  }
};
