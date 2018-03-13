export default {
  name: 'mu-col',
  functional: true,
  props: {
    width: {
      type: String,
      default: '100'
    },
    tablet: String,
    desktop: String
  },
  render (h, { data, props, children }) {
    const classNames = [`col-${props.width}`];
    if (props.tablet) classNames.push(`tablet-${props.tablet}`);
    if (props.desktop) classNames.push(`desktop-${props.desktop}`);
    data.staticClass = `col ${data.staticClass || ''} ${classNames.join('')}`;
    return h('div', data, children);
  }
};
