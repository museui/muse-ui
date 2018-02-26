import '../styles/components/focus-ripple.less';

export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    opacity: {
      type: Number
    }
  },
  computed: {
    style () {
      return {
        color: this.color,
        opacity: this.opacity
      };
    }
  },
  methods: {
    setRippleSize () {
      const el = this.$refs.innerCircle;
      const height = el.offsetHeight;
      const width = el.offsetWidth;
      const size = Math.max(height, width);

      let oldTop = 0;

      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
        oldTop = parseInt(el.style.top);
      }

      el.style.height = `${size}px`;
      el.style.top = `${(height / 2) - (size / 2) + oldTop}px`;
    }
  },
  mounted () {
    this.setRippleSize();
  },
  updated () {
    this.setRippleSize();
  },
  render (h) {
    return h('div', {
      class: 'mu-focus-ripple-wrapper'
    }, [h('div', {
      ref: 'innerCircle',
      style: this.style,
      class: 'mu-focus-ripple'
    })]);
  }
};
