export default {
  props: {
    dateTimeFormat: Object,
    monthDaySelected: {
      type: Boolean,
      default: true
    },
    selectedDate: Date
  },
  data () {
    return {
      displayDates: [this.selectedDate],
      slideType: 'next'
    };
  },
  methods: {
    replaceSelected (date) {
      const oldDate = this.displayDates[0];
      this.slideType = date.getTime() > oldDate.getTime() ? 'next' : 'prev';
      this.displayDates.push(date);
      this.displayDates.splice(0, 1);
    },
    createYearSlide (h) {
      return this.displayDates.map((displayDate, index) => {
        const fullYear = displayDate.getFullYear();
        return h('transition', {
          props: {
            name: `mu-date-display-${this.slideType}`
          },
          key: index
        }, [
          h('div', {
            staticClass: 'mu-date-display-slideIn-wrapper',
            key: fullYear
          }, [
            h('div', { staticClass: 'mu-date-display-year-title' }, fullYear)
          ])
        ]);
      });
    },
    createMonthSlide (h) {
      return this.displayDates.map((displayDate, index) => {
        const displayMonthDay = this.dateTimeFormat.formatDisplay(displayDate);
        return h('transition', {
          props: {
            name: `mu-date-display-${this.slideType}`
          },
          key: index
        }, [
          h('div', {
            staticClass: 'mu-date-display-slideIn-wrapper',
            key: displayMonthDay
          }, [
            h('div', { staticClass: 'mu-date-display-monthday-title' }, displayMonthDay)
          ])
        ]);
      });
    }
  },
  render (h) {
    const displayYear = h('div', {
      staticClass: 'mu-date-display-year',
      on: {
        click: () => this.$emit('changeView', 'year')
      }
    }, this.createYearSlide(h));
    const displayMonthDay = h('div', {
      staticClass: 'mu-date-display-monthday',
      on: {
        click: () => this.$emit('changeView', 'monthDay')
      }
    }, this.createMonthSlide(h));

    return h('div', {
      staticClass: 'mu-date-display',
      class: {
        'selected-year': !this.monthDaySelected
      }
    }, [displayYear, displayMonthDay]);
  },
  watch: {
    selectedDate (val) {
      this.replaceSelected(val);
    }
  }
};
