export default {
  name: 'mu-row',
  functional: true,
  props: {
    gutter: Boolean
  },
  render (h, { data, props, children }) {
    data.staticClass = `row ${data.staticClass || ''} ${props.gutter ? 'no-gutter' : ''}`;
    return h('div', data, children);
  }
};
