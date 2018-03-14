import { props, generatePropsClass } from './utils';

function createColClass (props) {
  const classNames = [];
  if (props.span) classNames.push('col-' + props.span);
  if (props.sm) classNames.push('col-sm-' + props.sm);
  if (props.md) classNames.push('col-md-' + props.md);
  if (props.lg) classNames.push('col-lg-' + props.lg);
  if (props.xl) classNames.push('col-xl-' + props.xl);
  if (props.order) classNames.push('order-' + props.order);
  if (props.offset) classNames.push('offset-' + props.offset);
  return classNames.join(' ');
}

export default {
  name: 'mu-col',
  functional: true,
  props: {
    tag: String,
    alignSelf: props.alignSelf,
    fill: Boolean,
    span: [String, Number], // auto 1-12
    sm: [String, Number], // auto 1-12
    md: [String, Number], // auto 1-12
    lg: [String, Number], // auto 1-12
    xl: [String, Number], // auto 1-12
    order: [String, Number], // first last 0-12
    offset: [String, Number] // 1-11
  },
  render (h, { data, props, children }) {
    const flex = generatePropsClass(props);
    const col = createColClass(props);
    data.staticClass = ['col', col, flex, data.staticClass || ''].join(' ');
    return h(props.tag || 'div', data, children);
  }
};
