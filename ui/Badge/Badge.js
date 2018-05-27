import { convertClass } from '../utils';
import color from '../internal/mixins/color';

export default {
  name: 'mu-badge',
  mixins: [color],
  props: {
    content: {
      type: String,
      default: ''
    },
    circle: Boolean,
    badgeClass: [String, Object, Array]
  },
  render (h) {
    const slots = this.$slots;
    const isFloat = slots.default && slots.default.length > 0;
    const badge = h('em', {
      staticClass: `mu-badge ${convertClass(this.badgeClass).join(' ')} ${this.getColorClass()}`,
      style: {
        'background-color': this.getColor(this.color)
      },
      class: {
        'mu-badge-circle': this.circle,
        'mu-badge-float': isFloat
      }
    }, slots.content && slots.content.length > 0 ? slots.content : this.content);

    return h('div', {
      staticClass: 'mu-badge-container',
      on: this.$listeners
    }, [slots.default, badge]);
  }
};
