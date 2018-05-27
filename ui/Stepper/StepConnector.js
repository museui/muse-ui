export default {
  name: 'mu-step-connector',
  functional: true,
  render (h, { data, children }) {
    data.staticClass = `mu-step-connector ${data.staticClass || ''}`;
    return h('div', data, [h('span', { staticClass: 'mu-step-connector-line' })]);
  }
};
