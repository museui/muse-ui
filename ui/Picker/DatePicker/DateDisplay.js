import color from '../../internal/mixins/color';

export default {
  mixins: [color],
  props: {
    type: String,
    dateTimeFormat: Object,
    monthDaySelected: {
      type: Boolean,
      default: true
    },
    displayDate: Date
  },
  data () {
    return {
      displayDates: [this.displayDate],
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
        const displayMonthDay = this.type === 'date' ? this.dateTimeFormat.formatDisplay(displayDate) : this.dateTimeFormat.getMonthList()[displayDate.getMonth()];
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
    const displayMonthDay = this.type !== 'year' ? h('div', {
      staticClass: 'mu-date-display-monthday',
      on: {
        click: () => this.$emit('changeView', this.type === 'date' ? 'monthDay' : 'month')
      }
    }, this.createMonthSlide(h)) : undefined;

    return h('div', {
      staticClass: 'mu-picker-display mu-date-display ' + this.getColorClass(false),
      style: {
        'background-color': this.getColor(this.color)
      },
      class: {
        'selected-year': !this.monthDaySelected
      }
    }, [displayYear, displayMonthDay]);
  },
  watch: {
    displayDate (val) {
      this.replaceSelected(val);
    }
  }
};
