import Vue from 'vue';
import Popover from '../Popover';
import { getFirstComponentChild } from '../utils';

export default {
  name: 'mu-menu',
  props: {
    popoverClass: [String, Object, Array],
    anchorOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'top',
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
    },
    open: Boolean,
    openOnHover: Boolean
  },
  data () {
    return {
      active: this.open,
      trigger: null
    };
  },
  beforeCreate () {
    if (this.$isServer) return;

    this.popoverVM = new Vue({
      data: { node: '' },
      render (h) {
        return this.node;
      }
    }).$mount();
  },
  mounted () {
    this.trigger = this.$el;
  },
  methods: {
    addEventHandle (old, fn) {
      if (!old) {
        return fn;
      } else if (Array.isArray(old)) {
        return old.indexOf(fn) > -1 ? old : old.concat(fn);
      } else {
        return old === fn ? old : [old, fn];
      }
    },
    show () {
      if (this.timer) clearTimeout(this.timer);
      this.active = true;
      this.$emit('open');
    },
    hide () {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.active = false;
        this.$emit('close');
      }, 200);
    },
    close (reason) {
      this.active = false;
      this.$emit('close');
    }
  },
  watch: {
    active (val) {
      this.$emit('update:open', val);
    },
    open (val) {
      this.active = val;
    }
  },
  render (h) {
    this.popoverVM.node = h(Popover, {
      class: this.popoverClass,
      style: {
        'min-width': this.trigger ? this.trigger.offsetWidth + 'px' : ''
      },
      props: {
        anchorOrigin: this.anchorOrigin,
        targetOrigin: this.targetOrigin,
        open: this.active,
        trigger: this.trigger
      },
      on: {
        close: this.close
      },
      nativeOn: {
        mouseenter: () => this.openOnHover && this.show(),
        mouseleave: () => this.openOnHover && this.hide()
      }
    }, this.$slots.content);

    const vnode = getFirstComponentChild(this.$slots.default);
    if (!vnode) return vnode;

    const on = vnode.data.on = vnode.data.on || {};
    const nativeOn = vnode.data.nativeOn = vnode.data.nativeOn || {};
    if (this.openOnHover) {
      nativeOn.mouseenter = on.mouseenter = this.addEventHandle(on.mouseenter, this.show);
      nativeOn.mouseleave = on.mouseleave = this.addEventHandle(on.mouseleave, this.hide);
    } else {
      nativeOn.click = on.click = this.addEventHandle(on.click, () => this.show());
    }

    return vnode;
  }
};
