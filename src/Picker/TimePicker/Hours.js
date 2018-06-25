import ClockNumber from './Number';
import ClockPointer from './Pointer';
import { getTouchEventOffsetValues, rad2deg } from './timeUtils';
export default {
  props: {
    format: {
      type: String,
      default: 'ampm',
      validator (val) {
        return ['ampm', '24hr'].indexOf(val) !== -1;
      }
    },
    initialHours: {
      type: Number,
      default: new Date().getHours()
    }
  },
  computed: {
    hours () {
      const hourSize = this.format === 'ampm' ? 12 : 24;
      const hours = [];
      for (let i = 1; i <= hourSize; i++) {
        hours.push(i % 24);
      }
      return hours;
    }
  },
  mounted () {
    const clockElement = this.$refs.mask;
    this.center = {
      x: clockElement.offsetWidth / 2,
      y: clockElement.offsetHeight / 2
    };
    this.basePoint = {
      x: this.center.x,
      y: 0
    };
  },
  methods: {
    getSelected () {
      let hour = this.initialHours;
      if (this.format === 'ampm') {
        hour %= 12;
        hour = hour || 12;
      }
      return hour;
    },
    isMousePressed (event) {
      if (typeof event.buttons === 'undefined') {
        return event.nativeEvent.which;
      }
      return event.buttons;
    },
    handleDown (event) {
      this.isMouseDown = true;
    },
    handleUp (event) {
      if (!this.isMouseDown) return;
      event.preventDefault();
      this.isMouseDown = false;
      this.setClock(event, true);
    },
    handleMove (event) {
      event.preventDefault();
      if (this.isMousePressed(event) !== 1) return;
      this.setClock(event, false);
    },
    handleTouchMove (event) {
      event.preventDefault();
      this.setClock(event.changedTouches[0], false);
    },
    handleTouchEnd (event) {
      event.preventDefault();
      this.setClock(event.changedTouches[0], true);
    },
    setClock (event, finish) {
      if (typeof event.offsetX === 'undefined') {
        const offset = getTouchEventOffsetValues(event);
        event.offsetX = offset.offsetX;
        event.offsetY = offset.offsetY;
      }
      const hours = this.getHours(event.offsetX, event.offsetY);
      this.$emit('change', hours, finish);
    },
    getHours (offsetX, offsetY) {
      const step = 30;
      const x = offsetX - this.center.x;
      const y = offsetY - this.center.y;
      const cx = this.basePoint.x - this.center.x;
      const cy = this.basePoint.y - this.center.y;
      const atan = Math.atan2(cx, cy) - Math.atan2(x, y);
      let deg = rad2deg(atan);
      deg = Math.round(deg / step) * step;
      deg %= 360;
      let value = Math.floor(deg / step) || 0;
      const delta = Math.pow(x, 2) + Math.pow(y, 2);
      const distance = Math.sqrt(delta);
      value = value || 12;
      if (this.format === '24hr') {
        if (distance < 90) {
          value += 12;
          value %= 24;
        }
      } else {
        value %= 12;
      }
      return value;
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-timepicker-hours'
    }, [
      h(ClockPointer, {
        props: {
          type: 'hour',
          hasSelected: true,
          value: this.getSelected()
        }
      }),
      this.hours.map((hour) => {
        return h(ClockNumber, {
          props: {
            selected: this.getSelected() === hour,
            type: 'hour',
            value: hour
          },
          key: hour
        });
      }),
      h('div', {
        staticClass: 'mu-timepicker-hours-mask',
        on: {
          mousedown: this.handleDown,
          mouseup: this.handleUp,
          mousemove: this.handleMove,
          touchmove: this.handleTouchMove,
          touchend: this.handleTouchEnd
        },
        ref: 'mask'
      })
    ]);
  }
};
