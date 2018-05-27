import DayButton from './DayButton';
import Toolbar from './Toolbar';
import * as dateUtils from './dateUtils';

export default {
  props: {
    dateTimeFormat: Object,
    firstDayOfWeek: {
      type: Number,
      default: 1
    },
    maxDate: Date,
    minDate: Date,
    displayDate: Date,
    selectedDate: Date,
    shouldDisableDate: Function
  },
  data () {
    const displayDate = dateUtils.cloneDate(this.displayDate);
    displayDate.setDate(1);
    return {
      weekTexts: this.dateTimeFormat.getWeekDayArray(this.firstDayOfWeek),
      displayDates: [displayDate],
      slideType: 'next'
    };
  },
  computed: {
    prevMonth () {
      return this.displayDates && dateUtils.monthDiff(this.displayDates[0], this.minDate) > 0;
    },
    nextMonth () {
      return this.displayDates && dateUtils.monthDiff(this.displayDates[0], this.maxDate) < 0;
    }
  },
  methods: {
    equalsDate (date) {
      return dateUtils.isEqualDate(date, this.selectedDate);
    },
    isDisableDate (day) {
      if (day === null) return false;
      let disabled = false;
      if (this.maxDate && this.minDate) disabled = !dateUtils.isBetweenDates(day, this.minDate, this.maxDate);
      if (!disabled && this.shouldDisableDate) disabled = this.shouldDisableDate(day);
      return disabled;
    },
    handleClick (date) {
      if (date) this.$emit('select', date);
    },
    handleChange (val) {
      const displayDate = dateUtils.addMonths(this.displayDates[0], val);
      this.changeDisplayDate(displayDate);
    },
    changeDisplayDate (date) {
      const oldDate = this.displayDates[0];
      if (date.getFullYear() === oldDate.getFullYear() && date.getMonth() === oldDate.getMonth()) return;
      this.slideType = date.getTime() > oldDate.getTime() ? 'next' : 'prev';
      const displayDate = dateUtils.cloneDate(date);
      displayDate.setDate(1);
      this.displayDates.push(displayDate);
      this.displayDates.splice(0, 1);
    },
    createWeek (h) {
      return h('div', {
        staticClass: 'mu-datepicker-week'
      }, this.weekTexts.map((weekText, index) => {
        return h('span', {
          staticClass: 'mu-datepicker-week-day',
          key: index
        }, weekText);
      }));
    },
    createMonthDay (h) {
      return h('div', {
        staticClass: 'mu-datepicker-monthday'
      }, this.displayDates.map((displayDate, index) => {
        return h('transition', {
          props: {
            name: `mu-datepicker-slide-${this.slideType}`
          },
          key: index
        }, [
          h('div', {
            staticClass: 'mu-datepicker-monthday-slide',
            key: displayDate.getTime()
          }, [this.createContent(h, displayDate)])
        ]);
      }));
    },
    createContent (h, displayDate) {
      const weeksArray = dateUtils.getWeekArray(displayDate || new Date(), this.firstDayOfWeek);
      return h('div', {
        staticClass: 'mu-datepicker-monthday-content'
      }, weeksArray.map((week, i) => {
        return h('div', {
          staticClass: 'mu-datepicker-monthday-row',
          key: i
        }, week.map((date, j) => {
          return h(DayButton, {
            props: {
              disabled: this.isDisableDate(date),
              selected: this.equalsDate(date),
              date: date
            },
            on: {
              click: () => this.handleClick(date)
            },
            key: `dayButton${i}${j}`
          });
        }));
      }));
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-datepicker-monthday-container'
    }, [
      h(Toolbar, {
        props: {
          slideType: this.slideType,
          nextMonth: this.nextMonth,
          prevMonth: this.prevMonth,
          displayDates: this.displayDates,
          dateTimeFormat: this.dateTimeFormat
        },
        on: {
          click: () => this.$emit('changeView', 'month'),
          change: this.handleChange
        }
      }),
      this.createWeek(h),
      this.createMonthDay(h)
    ]);
  },
  watch: {
    displayDate (val) {
      this.changeDisplayDate(val);
    }
  }
};
