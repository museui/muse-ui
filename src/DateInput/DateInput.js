import input from '../internal/mixins/input';
import keyboardFocus from '../internal/directives/keyboard-focus';
import { DatePicker, TimePicker, DateTimePicker } from '../Picker';
import PickerMixin from '../Picker/mixins/props';
import Container from './Container';
import dayjs from 'dayjs';
import Button from '../Button/Button';
import keycode from 'keycode';

const DEFAULT_FORMAT = {
  date: 'YYYY-MM-DD',
  time: 'HH:mm',
  year: 'YYYY',
  month: 'YYYY-MM',
  dateTime: 'YYYY-MM-DD HH:mm'
};

const PickerProps = {
  ...TimePicker.props,
  ...DatePicker.props,
  ...PickerMixin.props
};

delete PickerProps.date;
delete PickerProps.time;
delete PickerProps.type;
delete PickerProps.format;

export default {
  name: 'mu-date-input',
  mixins: [{
    ...input
  }],
  directives: {
    keyboardFocus
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    container: {
      type: String,
      default: 'popover', // dialog popover bottomSheet
      validator (val) {
        return val && ['dialog', 'popover', 'bottomSheet'].indexOf(val) !== -1;
      }
    },
    type: {
      type: String,
      default: 'date' // date, time, year, month, dateTime, dateRange
    },
    format: {
      type: String
    },
    rangeSeparator: {
      type: String,
      default: '—'
    },
    actions: Boolean,
    clockType: TimePicker.props.format,
    okLabel: {
      type: String,
      default: '确定'
    },
    cancelLabel: {
      type: String,
      default: '取消'
    },
    value: {},
    valueFormat: String,
    ...PickerProps
  },
  data () {
    return {
      open: false,
      date: this.value ? dayjs(this.value).toDate() : new Date()
    };
  },
  methods: {
    changeValue () {
      this.closePicker();
      const value = this.valueFormat ? dayjs(this.date).format(this.valueFormat) : this.date;
      this.$emit('input', value);
      this.$emit('change', value);
      if (this.muFormItem) this.muFormItem.onBlur();
    },
    focus (e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    blur (e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    closePicker () {
      this.open = false;
    },
    handleDateChange (date) {
      this.date = date;
      if (!this.actions) this.changeValue();
    },
    handleTimeChange (date, mode, finished) {
      this.date = date;
      if (!finished || mode !== 'minute') return;
      if (!this.actions) this.changeValue();
    },
    generateTextFieldProps () {
      return this.generateProps(input.props);
    },
    generatePickerProps () {
      return this.generateProps(PickerMixin.props);
    },
    generateDatePickerProps () {
      return this.generateProps(DatePicker.props);
    },
    generateTimePickerProps () {
      return this.generateProps(TimePicker.props);
    },
    generateProps (props) {
      const obj = {};
      Object.keys(props).forEach(key => {
        obj[key] = this[key];
      });
      return obj;
    },
    createTextField (h) {
      const dateStr = this.value ? dayjs(this.value).format(this.format ? this.format : DEFAULT_FORMAT[this.type]) : '';
      const listeners = {
        ...this.$listeners,
        keydown: (e) => {
          if (keycode(e) === 'tab') {
            this.blur(e);
            this.open = false;
          }
        },
        click: () => (this.open = true),
        focus: this.focus,
        blur: this.blur
      };
      delete listeners.input;
      delete listeners.change;
      const placeholder = !this.labelFloat ? this.$attrs.placeholder : '';
      return [
        h('input', {
          staticClass: 'mu-text-field-input',
          ref: 'input',
          attrs: {
            tabindex: 0,
            ...this.$attrs,
            disabled: this.disabled,
            placeholder,
            readonly: true
          },
          domProps: {
            value: dateStr
          },
          directives: [{
            name: 'keyboard-focus',
            value: () => (this.open = true)
          }],
          on: listeners
        })
      ];
    },
    createActions (h) {
      if (!this.actions) return;
      return h('div', {
        staticClass: `mu-picker-actions`
      }, [
        h(Button, {
          props: {
            flat: true,
            color: 'primary'
          },
          on: {
            click: this.closePicker
          }
        }, this.cancelLabel),
        h(Button, {
          props: {
            flat: true,
            color: 'primary'
          },
          on: {
            click: this.changeValue
          }
        }, this.okLabel)
      ]);
    },
    createPicker (h) {
      switch (this.type) {
        case 'date':
        case 'year':
        case 'month':
          return h(DatePicker, {
            props: {
              ...this.generateDatePickerProps(),
              ...this.generatePickerProps(),
              type: this.type === 'month' ? 'month' : this.type === 'year' ? 'year' : 'date',
              date: this.date
            },
            on: {
              change: this.handleDateChange
            },
            style: {
              width: this.container === 'bottomSheet' ? 'auto' : ''
            },
            scopedSlots: {
              day: this.$scopedSlots.day
            }
          }, [this.createActions(h)]);
        case 'dateTime':
          return h(DateTimePicker, {
            props: {
              ...this.generateDatePickerProps(),
              ...this.generateTimePickerProps(),
              ...this.generatePickerProps(),
              format: this.clockType,
              date: this.date
            },
            scopedSlots: {
              day: this.$scopedSlots.day
            },
            on: {
              change: this.handleTimeChange
            },
            style: {
              width: this.container === 'bottomSheet' ? 'auto' : ''
            }
          }, [this.createActions(h)]);
        case 'time':
          return h(TimePicker, {
            props: {
              ...this.generateTimePickerProps(),
              ...this.generatePickerProps(),
              time: this.date,
              format: this.clockType
            },
            on: {
              change: this.handleTimeChange
            },
            style: {
              width: this.container === 'bottomSheet' ? 'auto' : ''
            }
          }, [this.createActions(h)]);
      }
    }
  },
  render (h) {
    return this.createInput(h, {
      staticClass: 'mu-text-field',
      ref: 'content'
    }, [
      this.createTextField(h),
      this.$slots.default,
      h(Container, {
        props: {
          container: this.container,
          open: this.open,
          trigger: this.$el ? this.$el.querySelector('.mu-text-field') : undefined
        },
        ref: 'popover',
        on: {
          close: this.closePicker
        }
      }, [this.createPicker(h)])
    ]);
  },
  beforeDestroy () {
    this.closePicker();
  },
  watch: {
    value (val) {
      this.date = val ? dayjs(val).toDate() : undefined;
    }
  }
};
