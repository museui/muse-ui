import TimeDisplay from './TimeDisplay';
import ClockHours from './Hours';
import ClockMinutes from './Minutes';
import Button from '../Button';

export default {
  name: 'mu-time-picker',
  props: {
    autoOk: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: 'ampm',
      validator (val) {
        return ['ampm', '24hr'].indexOf(val) !== -1;
      }
    },
    initialTime: {
      type: Date,
      default () {
        return new Date();
      }
    },
    okLabel: {
      type: String,
      default: '确定'
    },
    cancelLabel: {
      type: String,
      default: '取消'
    },
    landscape: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectedTime: this.initialTime,
      mode: 'hour'
    };
  },
  methods: {
    getAffix () {
      if (this.format !== 'ampm') return '';
      const hours = this.selectedTime.getHours();
      if (hours < 12) {
        return 'am';
      }
      return 'pm';
    },
    handleSelectAffix (affix) {
      if (affix === this.getAffix()) return;
      const hours = this.selectedTime.getHours();
      if (affix === 'am') {
        this.handleChangeHours(hours - 12, affix);
        return;
      }
      this.handleChangeHours(hours + 12, affix);
    },
    handleChangeHours (hours, finished) {
      const time = new Date(this.selectedTime);
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
      this.selectedTime = time;
      if (finished) {
        setTimeout(() => {
          this.mode = 'minute';
          this.$emit('changeHours', time);
        }, 100);
      }
    },
    handleChangeMinutes (minutes) {
      const time = new Date(this.selectedTime);
      time.setMinutes(minutes);
      this.selectedTime = time;
      setTimeout(() => {
        this.$emit('changeMinutes', time);
        if (this.autoOk) this.accept();
      }, 0);
    },
    accept () {
      this.$emit('accept', this.selectedTime);
    },
    dismiss () {
      this.$emit('dismiss');
    }
  },
  render (h) {
    const actions = h('div', {
      staticClass: 'mu-timepicker-actions'
    }, [
      h(Button, {
        props: {
          color: 'primary',
          flat: true
        },
        on: {
          click: this.dismiss
        }
      }, this.cancelLabel),
      h(Button, {
        props: {
          color: 'primary',
          flat: true
        },
        on: {
          click: this.accept
        }
      }, this.okLabel)
    ]);

    return h('div', {
      staticClass: 'mu-timepicker',
      class: {
        'mu-timepicker-landspace': this.landscape
      }
    }, [
      h(TimeDisplay, {
        props: {
          selectedTime: this.selectedTime,
          format: this.format,
          mode: this.mode,
          affix: this.getAffix()
        },
        on: {
          selectMin: () => { this.mode = 'minute'; },
          selectHour: () => { this.mode = 'hour'; },
          selectAffix: this.handleSelectAffix
        }
      }),
      h('div', {
        staticClass: 'mu-timepicker-container'
      }, [
        h('div', { staticClass: 'mu-timepicker-circle' }),
        this.mode === 'hour' ? h(ClockHours, {
          props: {
            format: this.format,
            initialHours: this.selectedTime.getHours()
          },
          on: {
            change: this.handleChangeHours
          }
        }) : undefined,
        this.mode === 'minute' ? h(ClockMinutes, {
          props: {
            initialMinutes: this.selectedTime.getMinutes()
          },
          on: {
            change: this.handleChangeMinutes
          }
        }) : undefined,
        actions
      ])
    ]);
  },
  watch: {
    initialTime (val) {
      this.selectedTime = val;
    }
  }
};
