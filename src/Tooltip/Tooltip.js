import Vue from 'vue';
import TooltipContent from './TooltipContent';
import { getFirstComponentChild } from '../utils';

export default {
  name: 'mu-tooltip',
  props: {
    content: String,
    placement: TooltipContent.props.placement,
    open: Boolean,
    tooltipClass: [String, Object, Array]
  },
  data () {
    return {
      active: this.open,
      trigger: null
    };
  },
  beforeCreate () {
    if (this.$isServer) return;

    this.tooltipVM = new Vue({
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
    },
    hide () {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.active = false;
      }, 200);
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
    const content = (this.$slots.content && this.$slots.content.length > 0 ? this.$slots.content : this.content) || '';
    if (this.tooltipVM) {
      this.tooltipVM.node = h(TooltipContent, {
        class: this.tooltipClass,
        props: {
          placement: this.placement,
          open: this.active,
          trigger: this.trigger
        },
        nativeOn: {
          mouseenter: () => this.show(),
          mouseleave: () => this.hide()
        }
      }, content);
    }

    const vnode = getFirstComponentChild(this.$slots.default);
    if (!vnode) return vnode;
    vnode.data = vnode.data || {};
    const on = vnode.data.on = vnode.data.on || {};
    const nativeOn = vnode.data.nativeOn = vnode.data.nativeOn || {};
    nativeOn.mouseenter = on.mouseenter = this.addEventHandle(on.mouseenter, this.show);
    nativeOn.mouseleave = on.mouseleave = this.addEventHandle(on.mouseleave, this.hide);
    return vnode;
  }
};
