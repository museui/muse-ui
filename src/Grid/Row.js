import { props, generatePropsClass } from './utils';

export default {
  name: 'mu-row',
  functional: true,
  props: {
    ...props,
    tag: String,
    gutter: Boolean
  },
  render (h, { data, props, children }) {
    const gutter = !props.gutter ? 'no-gutters' : '';
    const flex = generatePropsClass(props);

    data.staticClass = ['row', gutter, flex, data.staticClass || ''].join(' ');
    return h(props.tag || 'div', data, children);
  }
};
