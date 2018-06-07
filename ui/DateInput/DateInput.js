import TextField from '../TextField';
import { DatePicker, TimePicker, DateTimePicker } from '../Picker';
import Container from './Container';
import dayjs from 'dayjs';
import Button from '../Button/Button';

const DEFAULT_FORMAT = {
  date: 'YYYY-MM-DD',
  time: 'HH:mm',
  year: 'YYYY',
  month: 'YYYY-MM',
  dateTime: 'YYYY-MM-DD HH:mm'
};

const PickerProps = {
  ...TimePicker.props,
  ...DatePicker.props
};

delete PickerProps.date;
delete PickerProps.time;
delete PickerProps.type;
delete PickerProps.format;
export default {
  name: 'mu-date-input',
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
    ...TextField.props,
    ...PickerProps
  },
  data () {
    return {
      open: false,
      date: this.value ? dayjs(this.value).toDate() : undefined
    };
  },
  methods: {
    changeValue () {
      this.closePicker();
      const value = this.valueFormat ? dayjs(this.date).format(this.valueFormat) : this.date;
      this.$emit('change', value);
      this.$emit('input', value);
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
      return this.generateProps(TextField.props);
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
              type: this.type === 'month' ? 'month' : this.type === 'year' ? 'year' : 'date',
              date: this.date
            },
            on: {
              change: this.handleDateChange
            },
            style: {
              width: this.container === 'bottomSheet' ? 'auto' : ''
            }
          }, [this.createActions(h)]);
        case 'dateTime':
          return h(DateTimePicker, {
            props: {
              ...this.generateDatePickerProps(),
              ...this.generateTimePickerProps(),
              format: this.clockType,
              date: this.date
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
    const dateStr = this.value ? dayjs(this.value).format(this.format ? this.format : DEFAULT_FORMAT[this.type]) : '';
    const listeners = this.$listeners;
    delete listeners.input;
    delete listeners.change;
    return h(
      TextField,
      {
        props: {
          ...this.generateTextFieldProps(),
          value: dateStr
        },
        ref: 'text',
        attrs: {
          readonly: true,
          ...this.$attrs
        },
        on: {
          ...listeners,
          click: (e) => {
            this.open = true;
            this.$emit('click', e);
          }
        }
      },
      [
        h(Container, {
          props: {
            container: this.container,
            open: this.open,
            trigger: this.$el ? this.$el.querySelector('.mu-text-field') : undefined
          },
          on: {
            close: this.closePicker
          }
        }, [this.createPicker(h)])
      ]
    );
  },
  watch: {
    value (val) {
      this.date = val ? dayjs(val).toDate() : undefined;
    }
  }
};
