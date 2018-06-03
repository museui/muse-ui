import TimeDisplay from './TimeDisplay';
import ClockHours from './Hours';
import ClockMinutes from './Minutes';
import ListView from './ListView';
import color from '../../internal/mixins/color';
import pickerProps from '../mixins/props';

export default {
  name: 'mu-time-picker',
  provide () {
    return {
      getColorObject: this.getColorObject
    };
  },
  mixins: [color, pickerProps],
  props: {
    viewType: {
      type: String,
      default: 'clock',
      validator (val) {
        return ['clock', 'list'].indexOf(val) !== -1;
      }
    },
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
  data () {
    return {
      view: 'hour'
    };
  },
  methods: {
    getColorObject () {
      return {
        color: this.getColor(this.color),
        colorClass: this.getNormalColorClass(this.color, true),
        bgColorClass: this.getNormalColorClass(this.color)
      };
    },
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
      if (finished) this.view = 'minute';
    },
    handleChangeMinutes (minutes, finished) {
      const time = new Date(this.time);
      time.setMinutes(minutes);
      this.changeTime(time, 'minute', finished);
      if (finished) this.view = 'hour';
    },
    changeTime (time, view, finished) {
      this.$emit('change', time, view, finished);
      this.$emit('update:time', time);
    },
    changeView (view) {
      this.view = view;
    },
    createTimeDisplay (h) {
      if (this.noDisplay) return;
      return h(TimeDisplay, {
        props: {
          selectedTime: this.time,
          format: this.format,
          mode: this.view,
          color: this.displayColor,
          viewType: this.viewType,
          affix: this.getAffix()
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
            initialHours: this.time.getHours()
          },
          on: {
            change: this.handleChangeHours
          }
        }) : undefined,
        this.view === 'minute' ? h(ClockMinutes, {
          props: {
            initialMinutes: this.time.getMinutes()
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
          time: this.time
        },
        on: {
          changeHours: (val) => this.handleChangeHours(val, true),
          changeMinutes: (val) => this.handleChangeMinutes(val, true)
        }
      });
    }
  },
  render (h) {
    const { color, colorClass } = this.getColorObject();
    return h('div', {
      staticClass: 'mu-picker mu-timepicker ' + colorClass,
      style: {
        color
      },
      class: {
        'mu-picker-landspace': this.landscape
      }
    }, [
      this.createTimeDisplay(h),
      h('div', {
        staticClass: 'mu-picker-container'
      }, [
        this.viewType === 'list' ? this.createList(h) : this.createClock(h),
        this.$slots.default
      ])
    ]);
  }
};
