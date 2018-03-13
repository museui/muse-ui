import TimeDisplay from './TimeDisplay';
import ClockHours from './Hours';
import ClockMinutes from './Minutes';

export default {
  name: 'mu-time-picker',
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
    },
    noDisplay: Boolean,
    landscape: Boolean
  },
  data () {
    return {
      mode: 'hour'
    };
  },
  methods: {
    getAffix () {
      if (this.format !== 'ampm') return '';
      const hours = this.time.getHours();
      if (hours < 12) {
        return 'am';
      }
      return 'pm';
    },
    handleSelectAffix (affix) {
      if (affix === this.getAffix()) return;
      const hours = this.time.getHours();
      if (affix === 'am') {
        this.handleChangeHours(hours - 12, affix);
        return;
      }
      this.handleChangeHours(hours + 12, affix);
    },
    handleChangeHours (hours, finished) {
      const time = new Date(this.time);
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
      if (finished) this.mode = 'minute';
    },
    handleChangeMinutes (minutes, finished) {
      const time = new Date(this.time);
      time.setMinutes(minutes);
      this.changeTime(time, 'minute', finished);
    },
    changeTime (time, mode, finished) {
      this.$emit('change', time, mode, finished);
      this.$emit('update:time', time);
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-timepicker',
      class: {
        'mu-timepicker-landspace': this.landscape
      }
    }, [
      !this.noDisplay ? h(TimeDisplay, {
        props: {
          selectedTime: this.time,
          format: this.format,
          mode: this.mode,
          affix: this.getAffix()
        },
        on: {
          selectMin: () => { this.mode = 'minute'; },
          selectHour: () => { this.mode = 'hour'; },
          selectAffix: this.handleSelectAffix
        }
      }) : undefined,
      h('div', {
        staticClass: 'mu-timepicker-container'
      }, [
        h('div', { staticClass: 'mu-timepicker-circle' }),
        this.mode === 'hour' ? h(ClockHours, {
          props: {
            format: this.format,
            initialHours: this.time.getHours()
          },
          on: {
            change: this.handleChangeHours
          }
        }) : undefined,
        this.mode === 'minute' ? h(ClockMinutes, {
          props: {
            initialMinutes: this.time.getMinutes()
          },
          on: {
            change: this.handleChangeMinutes
          }
        }) : undefined
      ]),
      this.$slots.default
    ]);
  }
};
