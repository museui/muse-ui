export default {
  name: 'mu-container',
  functional: true,
  props: {
    fluid: Boolean
  },
  render (h, { data, props, children }) {
    data.staticClass = `${data.staticClass || ''} ${props.fluid ? 'container-fluid' : 'container'}`;
    return h('div', data, children);
  }
};
