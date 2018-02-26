export default {
  name: 'mu-divider',
  functional: true,
  props: {
    inset: Boolean,
    shallowInset: Boolean
  },
  render (h, { data, props }) {
    data.staticClass = `${data.staticClass || ''} mu-divider ${props.inset ? 'inset' : ''} ${props.shallowInset ? 'shallow-inset' : ''}`;

    return h('hr', data);
  }
};
