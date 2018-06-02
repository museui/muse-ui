import { isInner } from './timeUtils';
const positions = [
  [0, 5],
  [54.5, 16.6],
  [94.4, 59.5],
  [109, 114],
  [94.4, 168.5],
  [54.5, 208.4],
  [0, 223],
  [-54.5, 208.4],
  [-94.4, 168.5],
  [-109, 114],
  [-94.4, 59.5],
  [-54.5, 19.6]
];
const innerPositions = [
  [0, 40],
  [36.9, 49.9],
  [64, 77],
  [74, 114],
  [64, 151],
  [37, 178],
  [0, 188],
  [-37, 178],
  [-64, 151],
  [-74, 114],
  [-64, 77],
  [-37, 50]
];
export default {
  inject: ['getColorObject'],
  props: {
    value: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'minute',
      validator (val) {
        return ['hour', 'minute'].indexOf(val) !== -1;
      }
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isInner () {
      return isInner(this);
    },
    numberClass () {
      return {
        'mu-timepicker-number__selected': this.selected,
        'mu-timepicker-number__inner': this.isInner
      };
    },
    numberStyle () {
      let pos = this.value;
      if (this.type === 'hour') {
        pos %= 12;
      } else {
        pos = pos / 5;
      }
      let transformPos = positions[pos];
      if (this.isInner) transformPos = innerPositions[pos];
      const [x, y] = transformPos;
      return {
        transform: `translate(${x}px, ${y}px)`,
        left: this.isInner ? 'calc(50% - 14px)' : 'calc(50% - 16px)'
      };
    }
  },
  render (h) {
    const { color, bgColorClass } = this.getColorObject();
    return h('span', {
      staticClass: 'mu-timepicker-number ' + (this.selected ? bgColorClass : ''),
      class: this.numberClass,
      style: {
        'background-color': this.selected ? color : '',
        ...this.numberStyle
      }
    }, this.value === 0 ? '00' : this.value);
  }
};
