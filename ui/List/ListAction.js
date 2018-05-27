export default {
  name: 'mu-list-item-action',
  functional: true,
  render (h, { data, props, children }) {
    data.staticClass = `mu-item-action ${children && children.length > 1 ? 'is-more' : ''} ${data.staticClass || ''}`;
    return h('div', data, children);
  }
};
