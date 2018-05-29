import input from '../internal/mixins/input';
import Textarea from './Textarea';

export default {
  name: 'mu-text-field',
  mixins: [input],
  props: {
    rows: {
      type: Number,
      default: 1
    },
    rowsMax: {
      type: Number
    },
    multiLine: Boolean,
    maxLength: [String, Number]
  },
  methods: {
    handleInput (e) {
      this.inputValue = e.target.value;
    },
    handleFocus (e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    handleBlur (e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    createTextField (h) {
      const listeners = {
        ...this.$listeners,
        input: this.handleInput,
        focus: this.handleFocus,
        blur: this.handleBlur
      };
      const placeholder = !this.labelFloat ? this.$attrs.placeholder : '';
      return [
        this.multiLine ? h(Textarea, {
          attrs: {
            ...this.$attrs,
            maxlength: this.maxLength,
            placeholder
          },
          props: {
            disabled: this.disabled,
            rows: this.rows,
            rowsMax: this.rowsMax,
            value: String(this.inputValue || '')
          },
          on: listeners
        }) : h('input', {
          staticClass: 'mu-text-field-input',
          attrs: {
            tabindex: 0,
            ...this.$attrs,
            maxlength: this.maxLength,
            disabled: this.disabled,
            value: this.inputValue,
            placeholder
          },
          on: listeners
        })
      ];
    }
  },
  render (h) {
    return this.createInput(h, {
      staticClass: 'mu-text-field'
    }, [
      this.createTextField(h),
      this.$slots.default
    ]);
  }
};
