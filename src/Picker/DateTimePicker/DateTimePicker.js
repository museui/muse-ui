import pickerProps from '../mixins/props';
import color from '../../internal/mixins/color';
import DatePicker from '../DatePicker';
import TimePicker from '../TimePicker';
import DateTimeDisplay from './DateTimeDisplay';
import MonthDayView from '../DatePicker/MonthDayView';
import YearView from '../DatePicker/YearView';
import MonthView from '../DatePicker/MonthView';
import ClockHours from '../TimePicker/Hours';
import ClockMinutes from '../TimePicker/Minutes';
import ListView from '../TimePicker/ListView';
import { Tabs, Tab } from '../../Tabs';
import { FadeTransition } from '../../internal/transitions';
import * as dateUtils from '../DatePicker/dateUtils';

const props = {
  ...DatePicker.props,
  ...TimePicker.props
};

delete props.time;
delete props.type;
delete props.landscape;
export default {
  name: 'mu-date-time-picker',
  provide () {
    return {
      getColorObject: this.getColorObject,
      getDayButtonSlots: this.getDayButtonSlots,
      getMonthButtonSlots: this.getMonthButtonSlots,
      getYearButtonSlots: this.getYearButtonSlots
    };
  },
  mixins: [pickerProps, color],
  props,
  data () {
    return {
      displayDate: this.date,
      view: 'monthDay',
      type: 'date' // date, time
    };
  },
  methods: {
    getDayButtonSlots () {
      return this.$scopedSlots.day;
    },
    getMonthButtonSlots () {
      return this.$scopedSlots.month;
    },
    getYearButtonSlots () {
      return this.$scopedSlots.year;
    },
    getColorObject () {
      return {
        color: this.getColor(this.color),
        colorClass: this.getNormalColorClass(this.color, true),
        bgColorClass: this.getNormalColorClass(this.color)
      };
    },
    getAffix () {
      if (this.format !== 'ampm') return '';
      const hours = this.date.getHours();
      if (hours < 12) {
        return 'am';
      }
      return 'pm';
    },
    handleYearChange (year) {
      const date = dateUtils.cloneAsDate(this.displayDate);
      date.setDate(1);
      date.setFullYear(year);
      this.changeDisplayDate(date);
      this.changeView('monthDay');
    },
    handleMonthChange (date) {
      this.changeDisplayDate(date);
      this.changeView('monthDay');
    },
    handleSelect (date) {
      if (date.getTime() > this.maxDate.getTime()) date = new Date(this.maxDate.getTime());
      if (date.getTime() < this.minDate.getTime()) date = new Date(this.minDate.getTime());
      this.changeDisplayDate(date);
      this.changeTime(date, 'monthDay', false);
      this.changeType('time');
    },
    changeDisplayDate (date) {
      this.displayDate = date;
    },
    changeType (type) {
      this.type = type;
      if (type === 'date' && ['hour', 'minute'].indexOf(this.view) !== -1) {
        this.changeView('monthDay');
      } else if (type === 'time' && ['monthDay', 'month', 'year'].indexOf(this.view) !== -1) {
        this.changeView('hour');
      }
    },
    changeView (view) {
      this.view = view;
      if (['hour', 'minute'].indexOf(view) !== -1 && this.type === 'date') {
        this.changeType('time');
      } else if (['monthDay', 'month', 'year'].indexOf(view) !== -1 && this.type === 'time') {
        this.changeType('date');
      }
    },
    handleSelectAffix (affix) {
      if (affix === this.getAffix()) return;
      const hours = this.date.getHours();
      if (affix === 'am') {
        this.handleChangeHours(hours - 12, affix);
        return;
      }
      this.handleChangeHours(hours + 12, affix);
    },
    handleChangeHours (hours, finished) {
      const time = new Date(this.date);
      let affix;
      if (typeof finished === 'string') {
        affix = finished;
        finished = undefined;
      }
      if (!affix) {
        affix = this.getAffix();
      }
      if (affix === 'pm' && hours < 12) {
        hours += 12;
      }
      time.setHours(hours);
      this.changeTime(time, 'hour', finished);
      if (finished) this.view = 'minute';
    },
    handleChangeMinutes (minutes, finished) {
      const time = new Date(this.date);
      time.setMinutes(minutes);
      this.changeTime(time, 'minute', finished);
    },
    changeTime (time, view, finished) {
      this.$emit('change', time, view, finished);
      this.$emit('update:date', time);
    },
    createDisplay (h) {
      if (this.noDisplay) return;
      return h(DateTimeDisplay, {
        props: {
          affix: this.getAffix(),
          dateTimeFormat: this.dateTimeFormat,
          view: this.view,
          format: this.format,
          viewType: this.viewType,
          color: this.displayColor,
          displayDate: this.displayDate
        },
        on: {
          changeView: this.changeView,
          selectAffix: this.handleSelectAffix
        }
      });
    },
    createClock (h) {
      return h('div', {
        staticClass: 'mu-timepicker-clock'
      }, [
        h('div', { staticClass: 'mu-timepicker-circle' }),
        this.view === 'hour' ? h(ClockHours, {
          props: {
            format: this.format,
            initialHours: this.date.getHours()
          },
          on: {
            change: this.handleChangeHours
          }
        }) : undefined,
        this.view === 'minute' ? h(ClockMinutes, {
          props: {
            initialMinutes: this.date.getMinutes()
          },
          on: {
            change: this.handleChangeMinutes
          }
        }) : undefined
      ]);
    },
    createList (h) {
      return h(ListView, {
        props: {
          format: this.format,
          time: this.date
        },
        on: {
          changeHours: (val) => this.handleChangeHours(val, true),
          changeMinutes: (val) => this.handleChangeMinutes(val, true)
        }
      });
    },
    createTabs (h) {
      return h(Tabs, {
        props: {
          value: this.type,
          color: this.displayColor || this.color,
          fullWidth: true
        },
        on: {
          'update:value': this.changeType
        }
      }, [
        h(Tab, {
          props: {
            value: 'date'
          }
        }, [
          h('svg', {
            staticClass: 'mu-datetime-picker-svg',
            attrs: {
              viewBox: '0 0 24 24'
            }
          }, [
            h('path', {
              attrs: {
                d: 'M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z'
              }
            }),
            h('path', {
              attrs: {
                d: 'M0 0h24v24H0z',
                fill: 'none'
              }
            })
          ])
        ]),
        h(Tab, {
          props: {
            value: 'time'
          }
        }, [
          h('svg', {
            staticClass: 'mu-datetime-picker-svg',
            attrs: {
              viewBox: '0 0 24 24'
            }
          }, [
            h('path', {
              attrs: {
                d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
              }
            }),
            h('path', {
              attrs: {
                d: 'M0 0h24v24H0z',
                fill: 'none'
              }
            }),
            h('path', {
              attrs: {
                d: 'M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z'
              }
            })
          ])
        ])
      ]);
    },
    createContent (h) {
      switch (this.view) {
        case 'monthDay':
          return h(MonthDayView, {
            props: {
              dateTimeFormat: this.dateTimeFormat,
              firstDayOfWeek: this.firstDayOfWeek,
              maxDate: this.maxDate,
              minDate: this.minDate,
              displayDate: this.displayDate,
              selectedDate: this.date,
              shouldDisableDate: this.shouldDisableDate
            },
            on: {
              changeView: this.changeView,
              select: this.handleSelect
            }
          });
        case 'month':
          return h(MonthView, {
            props: {
              dateTimeFormat: this.dateTimeFormat,
              maxDate: this.maxDate,
              minDate: this.minDate,
              displayDate: this.displayDate
            },
            on: {
              changeView: this.changeView,
              change: this.handleMonthChange
            }
          });
        case 'year':
          return h(YearView, {
            props: {
              displayDate: this.displayDate,
              maxDate: this.maxDate,
              minDate: this.minDate
            },
            on: {
              change: this.handleYearChange
            }
          });
      }
      return this.viewType === 'clock' ? this.createClock(h) : this.createList(h);
    }
  },
  render (h) {
    const { color, colorClass } = this.getColorObject();

    return h('div', {
      staticClass: `mu-picker mu-datetime-picker ${colorClass}`,
      style: {
        color
      }
    }, [
      this.createDisplay(h),
      h('div', {
        staticClass: 'mu-picker-container'
      }, [
        this.createTabs(h),
        h(FadeTransition, [this.createContent(h)]),
        this.$slots.default
      ])
    ]);
  },
  watch: {
    date (val) {
      this.displayDate = val;
    }
  }
};
