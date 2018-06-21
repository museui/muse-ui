import '../../styles/components/input.less';
import Icon from '../../Icon';
import color from './color';
export default {
  inheritAttrs: false,
  mixins: [color],
  model: {
    prop: 'value',
    event: 'input'
  },
  inject: {
    muFormItem: {
      default: ''
    }
  },
  props: {
    icon: String,
    label: String,
    labelFloat: Boolean,
    actionIcon: String,
    actionClick: Function,
    suffix: String,
    prefix: String,
    errorText: String,
    helpText: String,
    fullWidth: Boolean,
    disabled: Boolean,
    solo: Boolean,
    underlineColor: String,
    value: {}
  },
  data () {
    return {
      isFocused: false
    };
  },
  computed: {
    error () {
      return !!this.errorText || (this.muFormItem && this.muFormItem.errorMessage);
    },
    inputClass () {
      return {
        'mu-input__focus': this.isFocused,
        'has-label': this.label,
        'no-empty-state': this.value,
        'has-icon': this.icon,
        'mu-input__error': this.error,
        'multi-line': this.multiLine,
        'disabled': this.disabled,
        'full-width': this.fullWidth,
        'is-solo': this.solo
      };
    },
    float () {
      return this.labelFloat && !this.isFocused && !this.value && this.value !== 0;
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
      return !this.solo && this.label ? h('div', {
        staticClass: 'mu-input-label',
        class: {
          float: this.float
        }
      }, this.label) : undefined;
    },
    createUnderline (h) {
      if (this.solo) return;
      return h('div', [
        h('div', {
          staticClass: 'mu-input-line',
          class: {
            disabled: this.disabled
          }
        }),
        this.disabled ? undefined : h('div', {
          staticClass: [
            'mu-input-focus-line',
            this.getNormalColorClass(this.underlineColor, false, false)
          ].join(' '),
          class: {
            focus: this.isFocused
          },
          style: {
            'background-color': this.getColor(this.underlineColor)
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
        this.maxLength ? h('div', {}, `${this.value ? String(this.value).length : 0} / ${this.maxLength}`) : undefined
      ]);
    },
    createActionIcon (h) {
      return this.actionIcon ? h(Icon, {
        staticClass: 'mu-input-action-icon',
        props: {
          value: this.actionIcon
        },
        on: {
          click: () => !this.disabled && this.actionClick && this.actionClick()
        }
      }) : undefined;
    },
    createInput (h, data, children, defaultAction) {
      data.staticClass = `${data.staticClass || ''} mu-input-content`;
      const isFocus = !this.disabled && !this.errorText && this.isFocused;
      const colorClass = isFocus ? this.getNormalColorClass(this.color, true) : '';
      const color = isFocus ? this.getColor(this.color) : '';
      return h('div', {
        staticClass: `mu-input ${colorClass}`,
        class: this.inputClass,
        style: {
          color
        }
      }, [
        this.createIcon(h),
        this.createLabel(h),
        h('div', data, [
          this.$slots.prepend,
          this.prefix && !this.float ? h('span', { staticClass: 'mu-input-prefix-text' }, this.prefix) : undefined,
          ...children,
          this.suffix && !this.float ? h('span', { staticClass: 'mu-input-suffix-text' }, this.suffix) : undefined,
          defaultAction || this.createActionIcon(h),
          this.$slots.append,
          this.createUnderline(h),
          this.createHelpText(h)
        ])
      ]);
    }
  },
  watch: {
    isFocused (val) {
      if (!this.muFormItem) return;
      val ? this.muFormItem.onFocus() : this.muFormItem.onBlur();
    }
  }
};
