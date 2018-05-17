import color from '../internal/mixins/color';

export default {
  name: 'mu-icon',
  functional: true,
  props: {
    value: String,
    left: Boolean,
    right: Boolean,
    size: [Number, String],
    color: String
  },
  render (h, { data, props }) {
    if (!props.value) return null;
    data.style = data.style || {};
    data.style = {
      ...data.style,
      'user-select': 'none',
      'font-size': props.size + 'px',
      'width': props.size + 'px',
      'height': props.size + 'px',
      'color': color.methods.getColor(props.color)
    };
    const isMaterial = props.value.indexOf(':') !== 0;
    const text = isMaterial ? props.value : '';

    data.staticClass = `${data.staticClass || ''} mu-icon ${color.methods.getNormalColorClass(props.color, true)} ${isMaterial ? 'material-icons' : props.value.substring(1)} ${props.left ? 'mu-icon-left' : ''} ${props.right ? 'mu-icon-right' : ''}`;
    return h('i', data, text);
  }
};
