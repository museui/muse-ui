import Circular from '../Progress/Circular';
import { transitionEnd, getScrollEventTarget } from '../utils/dom';
import Drag from '../utils/drag';

const LENGTH = 130; // 下拉最大长度
const INITY = -68; // 初始化Y轴位置

export default {
  name: 'mu-refresh-control',
  props: {
    refreshing: Boolean,
    trigger: {}
  },
  data () {
    return {
      y: 0,
      draging: false,
      state: 'ready'
    };
  },
  computed: {
    refreshStyle () {
      const style = {};
      if (!this.refreshing && this.draging) {
        const translate3d = 'translate3d(0, ' + (this.y + INITY) + 'px, 0) ';
        style['-webkit-transform'] = style['transform'] = translate3d;
      }
      return style;
    },
    circularStyle () {
      const style = {};
      if (!this.refreshing && this.draging) {
        const percentage = this.y / LENGTH;
        const rotate = 'rotate(' + (360 * percentage) + 'deg)';
        const opacity = this.y / Math.abs(INITY);
        style['-webkit-transform'] = style['transform'] = rotate;
        style['opacity'] = opacity;
      }
      return style;
    },
    refreshClass () {
      const classNames = [];
      switch (this.state) {
        case 'ready':
          classNames.push('mu-refresh-control-noshow');
          break;
        case 'dragStart':
          classNames.push('mu-refresh-control-hide');
          break;
        case 'dragAnimate':
          classNames.push('mu-refresh-control-animate');
          classNames.push('mu-refresh-control-hide');
          break;
        case 'refreshAnimate':
          classNames.push('mu-refresh-control-animate');
          classNames.push('mu-refresh-control-noshow');
          break;
      }
      if (this.refreshing) classNames.push('mu-refresh-control-refreshing');
      return classNames;
    }
  },
  mounted () {
    this.bindDrag();
  },
  beforeDestory () {
    this.unbindDrag();
  },
  methods: {
    clearState () {
      this.state = 'ready';
      this.draging = false;
      this.y = 0;
    },
    getScrollTop () {
      const scroller = getScrollEventTarget(this.$el);
      if (scroller === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
      } else {
        return scroller.scrollTop;
      }
    },
    bindDrag () {
      if (!this.trigger) return;
      const drager = this.drager = new Drag(this.trigger);
      this.state = 'ready';
      drager.start(() => {
        if (this.refreshing) return;
        this.state = 'dragStart';
        const scrollTop = this.getScrollTop();
        if (scrollTop === 0) this.draging = true;
      }).drag((pos, event) => {
        const scrollTop = this.getScrollTop();
        if (pos.y < 5 || this.refreshing || scrollTop !== 0) return; // 消除误差
        if (scrollTop === 0 && !this.draging) {
          this.draging = true;
          drager.reset(event);
        }
        this.y = pos.y / 2;
        if (this.y < 0) this.y = 1;
        if (this.y > LENGTH) this.y = LENGTH;
      }).end((pos, event) => {
        if (!pos.y || pos.y < 5) {
          this.clearState();
          return; // 消除误差
        }
        const canRefresh = this.y + INITY > 0 && this.draging;
        this.state = 'dragAnimate';
        if (canRefresh) {
          this.draging = false;
          this.$emit('refresh');
        } else {
          this.y = 0;
          transitionEnd(this.$el, this.clearState.bind(this));
        }
      });

      // fix ios
      this.handlePrevent = event => {
        if (this.draging && this.y > 0) event.preventDefault();
      };
      this.handleTouchEnd = () => true;
      this.trigger.addEventListener('touchmove', this.handlePrevent, { passive: false });
      this.trigger.addEventListener('touchend', this.handleTouchEnd, { passive: false });
    },
    unbindDrag () {
      if (!this.drager) return;
      if (this.handlePrevent) {
        this.trigger.removeEventListener('touchmove', this.handlePrevent);
        this.trigger.removeEventListener('touchend', this.handleTouchEnd);
      }
      this.drager.destory();
      this.drager = null;
    },
    createRefreshIcon (h) {
      return this.refreshing
        ? h(Circular, {
          props: {
            size: 24,
            borderWidth: 2
          }
        })
        : this.draging
          ? h('svg', {
            staticClass: 'mu-refresh-svg-icon',
            style: this.circularStyle,
            attrs: {
              viewBox: '0 0 24 24'
            }
          }, [
            h('path', {
              attrs: {
                d: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
              }
            })
          ]) : undefined;
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-refresh-control',
      style: this.refreshStyle,
      class: this.refreshClass
    }, [
      this.createRefreshIcon(h)
    ]);
  },
  watch: {
    refreshing (val) {
      if (!val) {
        transitionEnd(this.$el, this.clearState.bind(this));
      } else {
        this.state = 'refreshAnimate';
      }
    },
    trigger (trigger, oldTrigger) {
      if (trigger === oldTrigger) return;
      this.unbindDrag();
      this.bindDrag();
    }
  }
};
