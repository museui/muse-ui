import Toolbar from './Toolbar';
import * as dateUtils from './dateUtils';

export default {
  props: {
    dateTimeFormat: Object,
    maxDate: Date,
    minDate: Date,
    displayDate: Date
  },
  data () {
    const displayDate = dateUtils.cloneDate(this.displayDate);
    displayDate.setDate(1);
    return {
      displayDates: [displayDate],
      slideType: 'next'
    };
  },
  methods: {
    changeDisplayDate (date) {
      const oldDate = this.displayDates[0];
      if (date.getFullYear() === oldDate.getFullYear() && date.getMonth() === oldDate.getMonth()) return;
      this.slideType = date.getTime() > oldDate.getTime() ? 'next' : 'prev';
      const displayDate = dateUtils.cloneDate(date);
      displayDate.setDate(1);
      this.displayDates.push(displayDate);
      this.displayDates.splice(0, 1);
    },
    handleChange (val) {
      const displayDate = dateUtils.cloneDate(this.displayDates[0]);
      displayDate.setFullYear(displayDate.getFullYear() + val);
      this.changeDisplayDate(displayDate);
    },
    createMonth (h) {
      return h('div', {
        staticClass: 'mu-datepicker-month'
      }, this.displayDates.map((displayDate, index) => {
        return h('transition', {
          props: {
            name: `mu-datepicker-slide-${this.slideType}`
          },
          key: index
        }, [
          h('div', {
            staticClass: 'mu-datepicker-month-slide',
            key: displayDate.getTime()
          }, [this.createContent(h, displayDate)])
        ]);
      }));
    },
    createContent (h, displayDate) {
      const monthArray = dateUtils.getMonthArray(displayDate);
      return h('div', {
        staticClass: 'mu-datepicker-month-content'
      }, monthArray.map((month, i) => {
        return h('div', {
          staticClass: 'mu-datepicker-month-row',
          key: i
        }, month.map((date) => this.createMonthButton(h, date)));
      }));
    },
    createMonthButton (h, date) {
      const monthText = this.dateTimeFormat.getMonthList()[date.getMonth()];
      const maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
      const minDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
      const disabled = date.getTime() > maxDate.getTime() || date.getTime() < minDate.getTime();
      return h(
        'button',
        {
          staticClass: 'mu-month-button',
          attrs: {
            disabled
          },
          class: {
            selected:
              date.getFullYear() === this.displayDate.getFullYear() &&
              date.getMonth() === this.displayDate.getMonth()
          },
          on: {
            click: () => !disabled && this.$emit('change', date)
          }
        },
        [
          h('div', { staticClass: 'mu-month-button-bg' }),
          h('span', { staticClass: 'mu-month-button-text' }, monthText)
        ]
      );
    }
  },
  render (h) {
    return h(
      'div',
      {
        staticClass: 'mu-datepicker-month-container'
      },
      [
        h(Toolbar, {
          props: {
            slideType: this.slideType,
            type: 'year',
            displayDates: this.displayDates,
            dateTimeFormat: this.dateTimeFormat
          },
          on: {
            click: () => this.$emit('changeView', 'year'),
            change: this.handleChange
          }
        }),
        this.createMonth(h)
      ]
    );
  }
};
