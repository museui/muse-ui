import { convertClass } from '../utils';

export default {
  name: 'mu-paper',
  functional: true,
  props: {
    circle: Boolean,
    rounded: {
      type: Boolean,
      default: true
    },
    zDepth: {
      type: Number,
      default: 0,
      validator (val) {
        return val >= 0 && val < 25;
      }
    }
  },
  render (h, { data, props, children }) {
    const classObj = {
      'mu-paper-circle': props.circle,
      'mu-paper-round': props.rounded,
      ['mu-elevation-' + props.zDepth]: !!props.zDepth
    };
    data.staticClass = `mu-paper ${data.staticClass || ''} ${convertClass(classObj).join(' ')}`;
    return h('div', data, children);
  }
};
