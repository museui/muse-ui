import select from '../internal/mixins/select';
import Icon from '../Icon';
import { isNull } from '../utils';
export default {
  name: 'mu-radio',
  mixins: [select('radio')],
  props: {
    inputValue: {}
  },
  computed: {
    checked () {
      const inputValue = this.inputValue;
      const value = this.$attrs.value;
      if (isNull(inputValue)) return false;
      return inputValue === value;
    }
  },
  methods: {
    toggle () {
      this.$emit('change', this.$attrs.value);
    }
  },
  render (h) {
    const defaultSvgUnCheckIcon = h('svg', {
      staticClass: 'mu-radio-icon-uncheck mu-radio-svg-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [
      h('path', {
        attrs: {
          d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
        }
      })
    ]);
    const defaultSvgCheckedIcon = h('svg', {
      staticClass: 'mu-radio-icon-checked mu-radio-svg-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [
      h('path', {
        attrs: {
          d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
        }
      })
    ]);
    const view = this.createRipple(h, 'mu-radio-icon', [
      this.uncheckIcon ? h(Icon, {
        staticClass: 'mu-radio-icon-uncheck',
        props: {
          value: this.uncheckIcon
        }
      }) : defaultSvgUnCheckIcon,
      this.checkedIcon ? h(Icon, {
        staticClass: 'mu-radio-icon-checked',
        props: {
          value: this.checkedIcon
        }
      }) : defaultSvgCheckedIcon
    ]);
    return this.createSelect(h, view);
  }
};
