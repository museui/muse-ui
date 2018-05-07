export default {
  name: 'mu-card-title',
  functional: true,
  props: {
    title: String,
    subTitle: String
  },
  render (h, { data, props }) {
    data.staticClass = `${data.staticClass || ''} mu-card-title-container`;
    return h('div', data, [
      h('div', { staticClass: 'mu-card-title' }, props.title),
      h('div', { staticClass: 'mu-card-sub-title' }, props.subTitle)
    ]);
  }
};
