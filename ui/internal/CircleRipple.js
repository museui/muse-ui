import '../styles/components/circle-ripple.less';

export default {
  props: {
    mergeStyle: {
      type: Object,
      default () {
        return {};
      }
    },
    color: {
      type: String,
      default: ''
    },
    opacity: {
      type: Number
    }
  },
  computed: {
    styles () {
      return {
        color: this.color,
        opacity: this.opacity,
        ...this.mergeStyle
      };
    }
  },
  render (h) {
    return h('transition', {
      props: {
        name: 'mu-ripple'
      }
    }, [
      h('div', {
        class: 'mu-circle-ripple',
        style: this.styles
      })
    ]);
  }
};
