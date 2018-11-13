import Vue from 'vue';
import popup from '../internal/mixins/popup';
import { SlideTopTransition, SlideBottomTransition } from '../internal/transitions';
import color from '../internal/mixins/color';

export default {
  name: 'mu-snackbar',
  mixins: [popup, color],
  props: {
    overlay: {
      default: false
    },
    escPressClose: {
      default: false
    },
    textColor: String,
    message: String,
    position: {
      type: String,
      default: 'bottom',
      validator (val) {
        return ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'].indexOf(val) !== -1;
      }
    },
    drawer: {
      type: Boolean,
      default: false
    }
  },
  render (h) {
    const message = h('div', {
      staticClass: 'mu-snackbar-message'
    }, this.$slots.default && this.$slots.default.length > 0 ? this.$slots.default : this.message);
    const action = this.$slots.action ? h('div', {
      staticClass: 'mu-snackbar-action'
    }, this.$slots.action) : undefined;

    const snackbar = h(this.position.indexOf('top') !== -1 ? SlideTopTransition : SlideBottomTransition, [
      this.open ? h('div', {
        staticClass: `mu-snackbar ${this.getColorClass()} ${this.getTextColorClass()}`,
        style: {
          'z-index': this.zIndex,
          'background-color': this.getColor(this.color),
          'color': this.getColor(this.textColor)
        },
        class: {
          ['mu-snackbar-' + this.position]: !!this.position && !this.drawer
        },
        on: this.$listeners
      }, [message, action]) : undefined
    ]);

    if (!this.drawer) return snackbar;

    this.insertDrawer(this.position, new Vue({
      render () {
        return snackbar;
      }
    }).$mount().$el);
    return null;
  },
  methods: {
    insertDrawer (position, snackbar) {
      const instanceClassName = `mu-snackbar-drawer-${position}`;
      if (document.getElementsByClassName(instanceClassName).length === 0) {
        const instance = document.createElement('div');
        instance.setAttribute('class', `mu-snackbar-drawer ${instanceClassName} mu-snackbar-${position}`);
        document.body.appendChild(instance);
      }
      const Drawer = document.getElementsByClassName(instanceClassName)[0];
      Drawer.style.zIndex = this.zIndex;
      Drawer.appendChild(snackbar);
    }
  }
};
