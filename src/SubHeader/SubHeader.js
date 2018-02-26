export default {
  name: 'mu-sub-header',
  functional: true,
  props: {
    inset: Boolean
  },
  render (h, { data, props, children }) {
    data.staticClass = `${data.staticClass || ''} mu-sub-header ${props.inset ? 'inset' : ''}`;
    return h('div', data, children);
  }
};
