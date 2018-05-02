import popup from '../internal/mixins/popup';
import scroll from '../internal/directives/scroll';
import resize from '../internal/directives/resize';
import clickOutSide from '../internal/directives/click-outside';
import { PopoverTransiton } from '../internal/transitions';

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
    trigger: {},
    autoPosition: {
      type: Boolean,
      default: true
    },
    anchorOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'bottom',
          horizontal: 'left'
        };
      }
    },
    targetOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'top',
          horizontal: 'left'
        };
      }
    }
  },
  methods: {
    getAnchorPosition (el) {
      const rect = el.getBoundingClientRect();
      const a = {
        top: rect.top,
        left: rect.left,
        width: el.width,
        height: el.height
      };

      a.right = rect.right || a.left + a.width;
      a.bottom = rect.bottom || a.top + a.height;
      a.middle = a.left + ((a.right - a.left) / 2);
      a.center = a.top + ((a.bottom - a.top) / 2);

      return a;
    },
    getTargetPosition (targetEl) {
      return {
        top: 0,
        center: targetEl.offsetHeight / 2,
        bottom: targetEl.offsetHeight,
        left: 0,
        middle: targetEl.offsetWidth / 2,
        right: targetEl.offsetWidth
      };
    },
    getElInfo (el) {
      const box = el.getBoundingClientRect();
      return {
        left: box.left,
        top: box.top,
        width: el.offsetWidth,
        height: el.offsetHeight
      };
    },
    setStyle () {
      if (!this.open || !this.trigger) return;
      const { targetOrigin, anchorOrigin } = this;
      const el = this.$el;
      const anchor = this.getAnchorPosition(this.trigger);
      let target = this.getTargetPosition(el);
      let targetPosition = {
        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
      };
      if (anchor.top < 0 || anchor.top > window.innerHeight ||
          anchor.left < 0 || anchor.left > window.innerWidth) {
        this.close('overflow');
        return;
      };
      if (this.autoPosition) {
        target = this.getTargetPosition(el); // update as height may have changed
        targetPosition = this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
      }
      el.style.left = `${Math.max(0, targetPosition.left)}px`;
      el.style.top = `${Math.max(0, targetPosition.top)}px`;
    },
    getOverlapMode (anchor, target, median) {
      if ([anchor, target].indexOf(median) >= 0) return 'auto';
      if (anchor === target) return 'inclusive';
      return 'exclusive';
    },

    getPositions (anchor, target) {
      const a = { ...anchor };
      const t = { ...target };

      const positions = {
        x: ['left', 'right'].filter((p) => p !== t.horizontal),
        y: ['top', 'bottom'].filter((p) => p !== t.vertical)
      };

      const overlap = {
        x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
        y: this.getOverlapMode(a.vertical, t.vertical, 'center')
      };

      positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
      positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');

      if (overlap.y !== 'auto') {
        a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
        if (overlap.y === 'inclusive') {
          t.vertical = t.vertical;
        }
      }

      if (overlap.x !== 'auto') {
        a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
        if (overlap.y === 'inclusive') {
          t.horizontal = t.horizontal;
        }
      }

      return {
        positions: positions,
        anchorPos: a
      };
    },

    applyAutoPositionIfNeeded (anchor, target, targetOrigin, anchorOrigin, targetPosition) {
      const { positions, anchorPos } = this.getPositions(anchorOrigin, targetOrigin);

      if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
        let newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
        if (newTop + target.bottom <= window.innerHeight) {
          targetPosition.top = Math.max(0, newTop);
        } else {
          newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
          if (newTop + target.bottom <= window.innerHeight) targetPosition.top = Math.max(0, newTop);
        }
      }
      if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
        let newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
        if (newLeft + target.right <= window.innerWidth) {
          targetPosition.left = Math.max(0, newLeft);
        } else {
          newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
          if (newLeft + target.right <= window.innerWidth) targetPosition.left = Math.max(0, newLeft);
        }
      }
      return targetPosition;
    },
    close (reason) {
      if (!this.open) return;
      this.$emit('update:open', false);
      this.$emit('close', reason);
    },
    clickOutSide (e) {
      if (this.trigger && this.trigger.contains(e.target)) return;
      this.close('clickOutSide');
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
    return h(PopoverTransiton, [
      h('div', {
        staticClass: 'mu-popover',
        style: {
          'z-index': this.zIndex
        },
        on: this.$listeners,
        directives: [{
          name: 'show',
          value: this.open
        }, {
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
        }]
      }, this.$slots.default)
    ]);
  }
};
