import { props, generatePropsClass } from './utils';
export default {
  name: 'mu-flex',
  functional: true,
  props: {
    tag: String,
    inline: Boolean,
    ...props
  },
  render (h, { data, props, children }) {
    const flexClass = generatePropsClass(props);
    data.staticClass = `${props.inline ? 'd-inline-flex' : 'd-flex'} ${flexClass} ${data.staticClass || ''}`;
    return h(props.tag || 'div', data, children);
  }
};
