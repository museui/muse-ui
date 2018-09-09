import Paper from '../Paper';
import PopupManager from '../internal/mixins/popup/manager';
import { getZIndex } from '../internal/mixins/popup/utils';
import { getWidth } from '../utils';

const transitionEvents = ['msTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd', 'webkitTransitionEnd', 'transitionend'];
export default {
  name: 'mu-drawer',
  props: {
    right: Boolean,
    open: Boolean,
    docked: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    width: [Number, String],
    zDepth: {
      type: Number,
      default: 16
    }
  },
  data () {
    return {
      overlayZIndex: getZIndex(),
      zIndex: getZIndex()
    };
  },
  computed: {
    drawerStyle () {
      return {
        width: getWidth(this.width),
        'z-index': this.docked ? '' : this.zIndex
      };
    },
    overlay () {
      return !this.docked;
    }
  },
  mounted () {
    if (this.open && !this.docked) PopupManager.open(this);
    this.bindTransition();
  },
  methods: {
    overlayClick () {
      this.close('overlay');
    },
    escPress (e) {
      if (this.docked) return;
      this.close('esc');
    },
    close (reason) {
      this.$emit('update:open', false);
      this.$emit('close', reason);
    },
    bindTransition () {
      this.handleTransition = (e) => {
        if (e.propertyName !== 'transform') return;
        this.$emit(this.open ? 'show' : 'hide');
      };
      transitionEvents.forEach((eventName) => {
        this.$el.addEventListener(eventName, this.handleTransition);
      });
    },
    unBindTransition () {
      if (!this.handleTransition) return;
      transitionEvents.forEach((eventName) => {
        this.$el.removeEventListener(eventName, this.handleTransition);
      });
    },
    resetZIndex () {
      this.overlayZIndex = getZIndex();
      this.zIndex = getZIndex();
    }
  },
  beforeDestroy () {
    PopupManager.close(this);
    this.unBindTransition();
  },
  watch: {
    open (val) {
      if (val && !this.docked) {
        PopupManager.open(this);
      } else {
        PopupManager.close(this);
      }
    },
    docked (val, oldVal) {
      if (val && !oldVal) {
        PopupManager.close(this);
      }
    }
  },
  render (h) {
    return h(Paper, {
      class: {
        'mu-drawer': true,
        'is-open': this.open,
        'is-right': this.right
      },
      style: this.drawerStyle,
      props: {
        zDepth: this.zDepth
      }
    }, this.$slots.default);
  }
};
