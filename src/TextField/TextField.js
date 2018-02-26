import input from '../internal/mixins/input';
import Icon from '../Icon';
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
    actionIcon: String,
    actionClick: Function,
    suffix: String
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
      return h('div', {
        staticClass: 'mu-text-field'
      }, [
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
            value: String(this.inputValue)
          },
          on: listeners
        }) : h('input', {
          staticClass: 'mu-text-field-input',
          attrs: {
            ...this.$attrs,
            maxlength: this.maxLength,
            disabled: this.disabled,
            placeholder
          },
          on: listeners
        }),
        this.suffix ? h('span', { staticClass: 'mu-text-field-suffix' }, this.suffix) : undefined,
        this.actionIcon ? h(Icon, {
          staticClass: 'mu-text-field-action',
          props: {
            value: this.actionIcon
          },
          on: {
            click: () => !this.disabled && this.actionClick && this.actionClick()
          }
        }) : undefined
      ]);
    }
  },
  render (h) {
    return this.createInput(h, [
      this.createTextField(h)
    ]);
  }
};
