import color from '../../internal/mixins/color';
export default {
  mixins: [color],
  props: {
    affix: String,
    dateTimeFormat: Object,
    view: String,
    format: String,
    viewType: String,
    displayDate: Date
  },
  computed: {
    sanitizeTime () {
      let hour = this.displayDate.getHours();
      let min = this.displayDate.getMinutes().toString();
      if (this.format === 'ampm') {
        hour %= 12;
        hour = hour || 12;
      }
      hour = hour.toString();
      if (hour.length < 2) hour = `0${hour}`;
      if (min.length < 2) min = `0${min}`;
      return [hour, min];
    }
  },
  methods: {
    createDateDisplay (h) {
      const fullYear = this.displayDate.getFullYear();
      const displayMonthDay = this.dateTimeFormat.formatDateDisplay(this.displayDate);
      return h('div', {
        staticClass: 'mu-date-display'
      }, [
        h('div', {
          staticClass: 'mu-date-display-year',
          class: {
            active: this.view === 'year'
          },
          on: {
            click: () => this.$emit('changeView', 'year')
          }
        }, [
          h('div', {
            staticClass: 'mu-date-display-year-title'
          }, fullYear)
        ]),
        h('div', {
          staticClass: 'mu-date-display-monthday',
          class: {
            active: this.view === 'monthDay' || this.view === 'month'
          },
          on: {
            click: () => this.$emit('changeView', 'monthDay')
          }
        }, [
          h('div', {
            staticClass: 'mu-date-display-monthday-title'
          }, displayMonthDay)
        ])
      ]);
    },
    createTimeDisplay (h) {
      const displayTime = h('div', {
        staticClass: 'mu-time-display-time'
      }, [
        h('span', {
          staticClass: 'mu-time-display-clickable',
          class: {
            'active': this.view === 'hour' || (this.view === 'minute' && this.viewType === 'list')
          },
          on: {
            click: this.viewType === 'list' ? () => {} : () => this.$emit('changeView', 'hour')
          }
        }, this.sanitizeTime[0]),
        h('span', {}, ':'),
        h('span', {
          staticClass: 'mu-time-display-clickable',
          class: {
            'active': this.view === 'minute' || (this.view === 'hour' && this.viewType === 'list')
          },
          on: {
            click: this.viewType === 'list' ? () => {} : () => this.$emit('changeView', 'minute')
          }
        }, this.sanitizeTime[1])
      ]);

      const displayAffix = this.format === 'ampm' ? h('div', {
        staticClass: 'mu-time-display-affix'
      }, [
        h('div', {
          staticClass: 'mu-time-display-clickable',
          class: {
            'active': this.affix === 'pm'
          },
          on: {
            click: () => this.$emit('selectAffix', 'pm')
          }
        }, 'PM'),
        h('div', {
          staticClass: 'mu-time-display-clickable',
          class: {
            'active': this.affix === 'am'
          },
          on: {
            click: () => this.$emit('selectAffix', 'am')
          }
        }, 'AM')
      ]) : undefined;
      return h('div', {
        staticClass: ' mu-time-display'
      }, [
        h('div', {
          staticClass: 'mu-time-display-text'
        }, [
          this.format === 'ampm' ? h('div', {
            staticClass: 'mu-time-display-affix'
          }) : undefined,
          displayTime,
          displayAffix
        ])
      ]);
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-picker-display mu-date-time-display ' + this.getColorClass(false),
      style: {
        'background-color': this.getColor(this.color)
      }
    }, [
      this.createDateDisplay(h),
      this.createTimeDisplay(h)
    ]);
  }
};
