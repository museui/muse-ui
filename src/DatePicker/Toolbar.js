import Button from '../Button';
export default {
  props: {
    dateTimeFormat: Object,
    displayDates: Array,
    nextMonth: {
      type: Boolean,
      default: true
    },
    prevMonth: {
      type: Boolean,
      default: true
    },
    slideType: String
  },
  methods: {
    createTitleSlide (h) {
      return this.displayDates.map((displayDate, index) => {
        const title = this.dateTimeFormat.formatMonth(displayDate);
        return h('transition', {
          props: {
            name: `mu-datepicker-slide-${this.slideType}`
          },
          key: index
        }, [
          h('div', {
            staticClass: 'mu-datepicker-toolbar-title',
            key: title
          }, title)
        ]);
      });
    },
    createPrevIcon (h) {
      return h('svg', {
        staticClass: 'mu-datepicker-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [
        h('path', {
          attrs: {
            d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
          }
        })
      ]);
    },
    createNextIcon (h) {
      return h('svg', {
        staticClass: 'mu-datepicker-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [
        h('path', {
          attrs: {
            d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
          }
        })
      ]);
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-datepicker-toolbar'
    }, [
      h(Button, {
        props: {
          icon: true,
          disabled: !this.prevMonth
        },
        on: {
          click: () => this.$emit('monthChange', -1)
        }
      }, [this.createPrevIcon(h)]),
      h('div', {
        staticClass: 'mu-datepicker-toolbar-title-wrapper',
        on: {
          click: () => this.$emit('changeView', 'month')
        }
      }, [this.createTitleSlide(h)]),
      h(Button, {
        props: {
          icon: true,
          disabled: !this.nextMonth
        },
        on: {
          click: () => this.$emit('monthChange', 1)
        }
      }, [this.createNextIcon(h)])
    ]);
  }
};
