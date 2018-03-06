import DateDisplay from './DateDisplay';
import Button from '../Button';
import MonthDayView from './MonthDayView';
import YearView from './YearView';
import * as dateUtils from './dateUtils';

export default {
  name: 'mu-date-picker',
  props: {
    dateTimeFormat: {
      type: Object,
      default () {
        return dateUtils.dateTimeFormat;
      }
    },
    autoOk: Boolean,
    okLabel: {
      type: String,
      default: '确定'
    },
    cancelLabel: {
      type: String,
      default: '取消'
    },
    firstDayOfWeek: {
      type: Number,
      default: 1
    },
    initialDate: {
      type: Date,
      default () {
        return new Date();
      }
    },
    maxDate: {
      type: Date,
      default () {
        return dateUtils.addYears(new Date(), 100);
      }
    },
    minDate: {
      type: Date,
      default () {
        return dateUtils.addYears(new Date(), -100);
      }
    },
    mode: {
      type: String,
      default: 'portrait',
      validator (val) {
        return val && ['portrait', 'landscape'].indexOf(val) !== -1
      }
    },
    shouldDisableDate: {
      type: Function
    }
  },
  data () {
    return {
      selectedDate: this.initialDate,
      view: 'monthDay'
    };
  },
  methods: {
    handleYearChange (year) {
      if (this.selectedDate.getFullYear() === year) return;
      const date = dateUtils.cloneAsDate(this.selectedDate);
      date.setFullYear(year);
      this.setSelected(date);
      this.changeView('monthDay');
    },
    handleSelect (date) {
      this.setSelected(date);
      if (this.autoOk) this.handleOk();
    },
    handleCancel () {
      this.$emit('dismiss');
    },
    handleOk () {
      const { selectedDate, maxDate, minDate } = this;
      if (selectedDate.getTime() > maxDate.getTime()) this.selectedDate = new Date(maxDate.getTime());
      if (selectedDate.getTime() < minDate.getTime()) this.selectedDate = new Date(minDate.getTime());
      this.$emit('accept', this.selectedDate);
    },
    setSelected (date) {
      this.selectedDate = date;
    },
    changeView (view) {
      this.view = view;
    }
  },
  render (h) {
    const monthdayView = h(MonthDayView, {
      props: {
        dateTimeFormat: this.dateTimeFormat,
        firstDayOfWeek: this.firstDayOfWeek,
        maxDate: this.maxDate,
        minDate: this.minDate,
        selectedDate: this.selectedDate,
        shouldDisableDate: this.shouldDisableDate
      },
      on: {
        select: this.handleSelect
      }
    });
    const yearView = h(YearView, {
      props: {
        selectedDate: this.selectedDate,
        maxDate: this.maxDate,
        minDate: this.minDate
      },
      on: {
        change: this.handleYearChange
      }
    });
    const actions = !this.autoOk ? h('div', {
      staticClass: 'mu-datepicker-actions'
    }, [
      h(Button, {
        props: {
          flat: true,
          color: 'primary'
        },
        on: {
          click: this.handleCancel
        }
      }, this.cancelLabel),
      h(Button, {
        props: {
          flat: true,
          color: 'primary'
        },
        on: {
          click: this.handleOk
        }
      }, this.okLabel)
    ]) : undefined;
    return h('div', {
      staticClass: 'mu-datepicker',
      class: {
        'mu-datepicker-landspace': this.mode === 'landspace'
      }
    }, [
      h(DateDisplay, {
        props: {
          monthDaySelected: this.view !== 'year',
          selectedDate: this.selectedDate,
          dateTimeFormat: this.dateTimeFormat
        },
        on: {
          changeView: this.changeView
        }
      }),
      h('div', {
        staticClass: 'mu-datepicker-container'
      }, [
        this.view === 'monthDay' ? monthdayView : yearView,
        actions
      ])
    ]);
  },
  watch: {
    initialDate (val) {
      this.selectedDate = val;
    }
  }
};
