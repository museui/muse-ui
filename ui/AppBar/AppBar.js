import Paper from '../Paper';
import color from '../internal/mixins/color';
import { getColor } from '../utils';
export default {
  name: 'mu-appbar',
  mixins: [color],
  props: {
    zDepth: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: ''
    }
  },
  render (h) {
    const slots = this.$slots;
    const left = slots.left && slots.left.length > 0 ? h('div', { staticClass: 'left' }, slots.left) : undefined;
    const right = slots.right && slots.right.length > 0 ? h('div', { staticClass: 'right' }, slots.right) : undefined;
    const center = h('div', { staticClass: 'mu-appbar-title' }, slots.default && slots.default.length > 0 ? slots.default : this.title);

    return h(Paper, {
      staticClass: `mu-appbar ${this.getColorClass()}`,
      style: {
        'background-color': getColor(this.color)
      },
      props: {
        zDepth: this.zDepth,
        rounded: false
      }
    }, [left, center, right]);
  }
};
