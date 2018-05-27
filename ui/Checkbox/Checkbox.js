import select from '../internal/mixins/select';
import Icon from '../Icon';

export default {
  name: 'mu-checkbox',
  mixins: [select('checkbox')],
  props: {
    inputValue: [Boolean, Array]
  },
  computed: {
    checked () {
      if (!this.inputValue) return false;
      const inputValue = this.inputValue;
      const value = this.$attrs.value;
      if (inputValue instanceof Array) return inputValue.indexOf(value) !== -1;
      return inputValue;
    }
  },
  methods: {
    toggle () {
      const inputValue = this.inputValue;
      const value = this.$attrs.value;
      if (!inputValue || typeof inputValue === 'boolean') {
        this.$emit('change', !inputValue);
        return;
      }
      if (this.checked) {
        inputValue.splice(inputValue.indexOf(value), 1);
        this.$emit('change', inputValue);
      } else {
        this.$emit('change', [...inputValue, value]);
      }
    }
  },
  render (h) {
    const defaultSvgUnCheckIcon = h('svg', {
      staticClass: `mu-checkbox-icon-uncheck mu-checkbox-svg-icon`,
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [
      h('path', {
        attrs: {
          d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'
        }
      })
    ]);
    const defaultSvgCheckedIcon = h('svg', {
      staticClass: `mu-checkbox-icon-checked mu-checkbox-svg-icon`,
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [
      h('path', {
        attrs: {
          d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
        }
      })
    ]);
    const view = this.createRipple(h, 'mu-checkbox-icon', [
      this.uncheckIcon ? h(Icon, {
        staticClass: `mu-checkbox-icon-uncheck`,
        props: {
          value: this.uncheckIcon
        }
      }) : defaultSvgUnCheckIcon,
      this.checkedIcon ? h(Icon, {
        staticClass: `mu-checkbox-icon-checked`,
        props: {
          value: this.checkedIcon
        }
      }) : defaultSvgCheckedIcon
    ]);
    return this.createSelect(h, view);
  }
};
