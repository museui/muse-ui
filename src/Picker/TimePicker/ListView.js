export default {
  props: {
    format: {
      type: String,
      default: 'ampm',
      validator (val) {
        return ['ampm', '24hr'].indexOf(val) !== -1;
      }
    },
    time: {
      type: Date,
      default () {
        return new Date();
      }
    }
  },
  computed: {
    hours () {
      const hourSize = this.format === 'ampm' ? 12 : 24;
      const hours = [];
      for (let i = 1; i <= hourSize; i++) {
        const num = i % 24;
        num === 0 ? hours.unshift('00') : hours.push(num > 9 ? num : '0' + num);
      }
      return hours;
    },
    minutes () {
      const minutes = [];
      for (let i = 1; i <= 60; i++) {
        const num = i % 60;
        num === 0 ? minutes.unshift('00') : minutes.push(num > 9 ? num : '0' + num);
      }
      return minutes;
    }
  },
  mounted () {
    this.scrollToSelected(this.$refs.hours);
    this.scrollToSelected(this.$refs.minutes);
  },
  methods: {
    scrollToSelected (container) {
      const buttonNode = container.querySelector('.is-active');
      const btnTop = buttonNode.offsetTop;
      const btnHeight = buttonNode.offsetHeight;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const top = containerTop + containerHeight / 2;
      const maxScrollTop = container.scrollHeight - containerHeight;
      let scrollTop = btnTop + btnHeight / 2 - top;
      scrollTop = Math.min(maxScrollTop, scrollTop);
      scrollTop = Math.max(0, scrollTop);
      setTimeout(() => (container.scrollTop = scrollTop), 0);
    },
    createHoursList (h) {
      const buttons = this.hours.map((hour) => {
        const val = Number(hour);
        let curHour = this.time.getHours();
        if (this.format === 'ampm') {
          curHour %= 12;
          curHour = curHour || 12;
        }
        const isActive = curHour === val;
        return h('button', {
          staticClass: 'mu-timepicker-hour-button',
          class: {
            'is-active': isActive
          },
          on: {
            click: () => this.$emit('changeHours', val)
          }
        }, hour);
      });
      return h('div', {
        staticClass: 'mu-timepicker-list-hours',
        ref: 'hours'
      }, buttons);
    },
    createMinutesList (h) {
      const buttons = this.minutes.map((minute) => {
        const val = Number(minute);
        return h('button', {
          staticClass: 'mu-timepicker-minute-button',
          class: {
            'is-active': this.time.getMinutes() === val
          },
          on: {
            click: () => this.$emit('changeMinutes', val)
          }
        }, minute);
      });
      return h('div', {
        staticClass: 'mu-timepicker-list-minutes',
        ref: 'minutes'
      }, buttons);
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-timepicker-list'
    }, [
      this.createHoursList(h),
      this.createMinutesList(h)
    ]);
  },
  watch: {
    time () {
      if (this.$isServer) return;
      this.$nextTick(() => {
        this.scrollToSelected(this.$refs.hours);
        this.scrollToSelected(this.$refs.minutes);
      });
    }
  }
};
