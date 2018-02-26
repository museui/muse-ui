export default {
  name: 'mu-list-item-action',
  functional: true,
  props: {
    avatar: Boolean
  },
  render (h, { data, props, children }) {
    data.staticClass = `mu-item-action ${props.avatar ? 'is-avatar' : ''} ${children && children.length > 1 ? 'is-more' : ''} ${data.staticClass || ''}`;
    return h('div', data, children);
  }
};
