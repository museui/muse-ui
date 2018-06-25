import select from '../internal/mixins/select';

export default {
  name: 'mu-switch',
  mixins: [select('switch')],
  props: {
    inputValue: Boolean
  },
  computed: {
    checked () {
      return this.inputValue;
    }
  },
  methods: {
    toggle () {
      this.$emit('change', !this.inputValue);
    }
  },
  render (h) {
    const view = h('div', {
      staticClass: 'mu-switch-container'
    }, [
      h('div', { staticClass: 'mu-switch-track' }),
      this.createRipple(h, 'mu-switch-thumb')
    ]);

    return this.createSelect(h, view);
  }
};
