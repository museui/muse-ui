import TextField from '../TextField';
import DatePicker from '../DatePicker';
import Container from './Container';
import TimePicker from '../TimePicker';
import * as dateUtils from '../DatePicker/dateUtils';
import Button from '../Button/Button';

const DEFAULT_FORMAT = {
  date: 'yyyy-MM-dd',
  time: 'hh:mm',
  year: 'yyyy',
  month: 'yyyy-MM',
  dateTime: 'yyyy-MM-dd hh:mm'
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
    value: {
      type: Date
    },
    ...TextField.props,
    ...PickerProps
  },
  data () {
    return {
      open: false,
      date: this.value,
      view: this.type === 'time' ? 'time' : this.type === 'dateRange' ? 'dateRange' : 'date'
    };
  },
  methods: {
    changeValue () {
      this.closePicker();
      this.$emit('change', this.date);
      this.$emit('input', this.date);
    },
    closePicker () {
      this.open = false;
      this.view = this.type === 'time' ? 'time' : this.type === 'dateRange' ? 'dateRange' : 'date';
    },
    handleDateChange (date) {
      this.date = date;
      if (this.type === 'dateTime') {
        this.view = 'time';
        return;
      }

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
    createActions (h, name) {
      if (!this.actions) return;
      return h('div', {
        staticClass: `mu-${name}-actions`
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
      return h(Container, {
        props: {
          container: this.container,
          open: this.open,
          trigger: this.$el
        },
        on: {
          close: this.closePicker
        }
      }, [
        this.view === 'time'
          ? h(TimePicker, {
            props: {
              ...this.generateTimePickerProps(),
              time: this.date,
              noDisplay: false,
              format: this.clockType
            },
            on: {
              change: this.handleTimeChange
            },
            style: {
              width: this.container === 'bottomSheet' ? 'auto' : ''
            }
          }, [this.createActions(h, 'timepicker')])
          : h(DatePicker, {
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
          }, [this.createActions(h, 'datepicker')])
      ]);
    }
  },
  render (h) {
    const dateStr = this.value ? dateUtils.dateToStr(this.value, this.format ? this.format : DEFAULT_FORMAT[this.type]) : '';
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
      [this.createPicker(h)]
    );
  },
  watch: {
    value (val) {
      this.date = val;
    }
  }
};
