import '../../styles/components/input.less';
import Icon from '../../Icon';
export default {
  inheritAttrs: false,
  props: {
    icon: String,
    label: String,
    labelFloat: Boolean,
    underlineShow: {
      type: Boolean,
      default: true
    },
    multiLine: Boolean,
    maxLength: [String, Number],
    errorText: String,
    helpText: String,
    fullWidth: Boolean,
    disabled: Boolean,
    value: {}
  },
  data () {
    return {
      isFocused: false,
      inputValue: this.value
    };
  },
  computed: {
    inputClass () {
      return {
        'focus-state': this.isFocused,
        'has-label': this.label,
        'no-empty-state': this.inputValue,
        'has-icon': this.icon,
        'error': this.errorText,
        'multi-line': this.multiLine,
        'disabled': this.disabled,
        'full-width': this.fullWidth
      };
    },
    float () {
      return this.labelFloat && !this.isFocused && !this.inputValue && this.inputValue !== 0;
    }
  },
  methods: {
    createIcon (h) {
      if (!this.icon) return;
      return h(Icon, {
        staticClass: 'mu-input-icon',
        props: {
          value: this.icon
        }
      });
    },
    createLabel (h) {
      return this.label ? h('div', {
        staticClass: 'mu-input-label',
        class: {
          float: this.float
        }
      }, this.label) : undefined;
    },
    createUnderline (h) {
      if (!this.underlineShow) return;
      return h('div', [
        h('div', {
          staticClass: 'mu-input-line',
          class: {
            disabled: this.disabled
          }
        }),
        this.disabled ? undefined : h('div', {
          staticClass: 'mu-input-focus-line',
          class: {
            error: this.errorText,
            focus: this.isFocused
          }
        })
      ]);
    },
    createHelpText (h) {
      if (!this.errorText && !this.helpText && !this.maxLength) return;
      return h('div', {
        staticClass: 'mu-input-help'
      }, [
        h('div', {}, (this.errorText ? this.errorText : this.helpText) || ''),
        this.maxLength ? h('div', {}, `${this.inputValue ? String(this.inputValue).length : 0} / ${this.maxLength}`) : undefined
      ]);
    },
    createInput (h, children) {
      return h('div', {
        staticClass: 'mu-input',
        class: this.inputClass
      }, [
        this.createIcon(h),
        h('div', {
          staticClass: 'mu-input-content',
          ref: 'content'
        }, [
          this.createLabel(h),
          ...children,
          this.createUnderline(h),
          this.createHelpText(h)
        ])
      ]);
    }
  },
  watch: {
    value (val) {
      this.inputValue = val;
    },
    inputValue (val) {
      this.$emit('input', val);
    }
  }
};
