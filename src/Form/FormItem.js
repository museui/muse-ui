import Form from './Form';
import Icon from '../Icon';
import { getWidth, isPromise, isObject } from '../utils';
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
      if (!this.rules || this.rules.length === 0) return true;
      const promises = [];
      const promiseMessages = [];
      for (let i = 0; i < this.rules.length; i++) {
        const rule = this.rules[i];
        const result = rule.validate(this.muForm.getValue(this.prop), this.muForm.model);
        if (isPromise(result)) {
          promises.push(result);
          promiseMessages.push(rule.message);
          continue;
        }
        if (!this.validateResult(result, rule.message)) return false;
      }

      // promise 处理
      if (promises.length > 0 && typeof Promise !== 'undefined') {
        return Promise.all(promises).then((results) => {
          for (let i = 0; i < results.length; i++) {
            const valid = this.validateResult(results[i], promiseMessages[i]);
            if (!valid) return Promise.reject(false);
          }
          this.errorMessage = '';
          return true;
        });
      }

      this.errorMessage = '';
      return true;
    },
    validateResult (result, message) {
      switch (true) {
        case isObject(result) && !result.valid:
          this.errorMessage = result.message || message;
          return false;
        case !result:
          this.errorMessage = message;
          return false;
      }
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
      const value = this.muForm.model && this.prop && this.muForm.model[this.prop];
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
    },
    rules () {
      if (this.errorMessage) this.validate();
    }
  }
};
