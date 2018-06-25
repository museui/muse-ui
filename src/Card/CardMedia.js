export default {
  name: 'mu-card-media',
  functional: true,
  props: {
    title: String,
    subTitle: String
  },
  render (h, { data, props, children }) {
    const title = props.title || props.subTitle ? h('div', {
      staticClass: 'mu-card-media-title'
    }, [
      h('div', { staticClass: 'mu-card-title' }, props.title),
      h('div', { staticClass: 'mu-card-sub-title' }, props.subTitle)
    ]) : undefined;

    data.staticClass = `${data.staticClass || ''} mu-card-media`;
    return h('div', data, [children, title]);
  }
};
