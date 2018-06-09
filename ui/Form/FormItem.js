import Form from './Form';
import Icon from '../Icon';
import { getWidth } from '../utils';
import { SlideTopTransition } from '../internal/transitions';

export default {
  name: 'mu-form-item',
  inject: ['muForm'],
  provide () {
    return {
      muFormItem: this
    };
  },
  props: {
    label: String,
    labelFloat: Boolean,
    icon: String,
    prop: String,
    labelWidth: Form.props.labelWidth,
    rules: Array,
    helpText: String,
    errorText: String,
    labelPosition: String
  },
  data () {
    return {
      focus: false,
      errorMessage: this.errorText
    };
  },
  mounted () {
    this.setHelpLeft();
    this.muForm.addItem(this);
  },
  updated () {
    setTimeout(() => this.setHelpLeft(), 0);
  },
  beforeDestroy () {
    this.muForm.removeItem(this);
  },
  methods: {
    validate () {
      if (!this.rules || this.rules.length === 0) return;
      for (let i = 0; i < this.rules.length; i++) {
        const rule = this.rules[i];
        if (!rule.validate(this.muForm.model[this.prop], this.muForm.model)) {
          this.errorMessage = rule.message;
          return false;
        }
      }
      this.errorMessage = '';
      return true;
    },
    onFocus () {
      this.focus = true;
    },
    onBlur () {
      this.focus = false;
      if (this.muForm.autoValidate) this.validate();
    },
    createIcon (h) {
      if (!this.icon) return;
      return h(Icon, {
        staticClass: 'mu-form-item-icon',
        props: {
          value: this.icon
        }
      });
    },
    createContent (h) {
      return h('div', {
        staticClass: 'mu-form-item-content',
        ref: 'content'
      }, this.$slots.default);
    },
    createLabel (h) {
      const labelWidth = getWidth(this.labelWidth || this.muForm.labelWidth);
      const value = this.muForm.model[this.prop];
      return h('div', {
        staticClass: 'mu-form-item-label',
        class: {
          'is-float': this.labelFloat && !this.focus && !value && value !== 0
        },
        style: {
          width: labelWidth
        }
      }, this.$slots.label || this.label);
    },
    createHelpText (h) {
      if (!this.helpText && !this.errorMessage) return;
      return h('div', {
        staticClass: 'mu-form-item-help',
        ref: 'help'
      }, this.errorMessage || this.helpText);
    },
    setHelpLeft () {
      if (!this.$refs.help || !this.$refs.content) return;
      this.$refs.help.style.left = this.$refs.content.offsetLeft + 'px';
    }
  },
  render (h) {
    const labelPosition = this.labelPosition || this.muForm.labelPosition;
    return h('div', {
      staticClass: 'mu-form-item',
      class: {
        'mu-form-item__float-label': this.labelFloat,
        'mu-form-item__label-left': labelPosition === 'left',
        'mu-form-item__label-right': labelPosition === 'right',
        'mu-form-item__has-icon': !!this.icon && labelPosition === 'top',
        'mu-form-item__has-label': !!this.label || (this.$slots.label && this.$slots.label.length > 0),
        'mu-form-item__focus': this.focus,
        'mu-form-item__error': !!this.errorMessage
      }
    }, [
      this.createLabel(h),
      labelPosition === 'top' ? this.createIcon(h) : undefined,
      h(SlideTopTransition, {}, [this.createHelpText(h)]),
      this.createContent(h)
    ]);
  },
  watch: {
    errorText (val) {
      this.errorMessage = val;
    }
  }
};
