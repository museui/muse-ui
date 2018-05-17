import Circular from './Circular';
import color from '../internal/mixins/color';

export default {
  name: 'mu-circular-progress',
  mixins: [color],
  props: {
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'indeterminate',
      validator (val) {
        return ['indeterminate', 'determinate'].indexOf(val) !== -1;
      }
    },
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 24
    },
    strokeWidth: {
      type: Number,
      default: 3
    }
  },
  computed: {
    radius () {
      return (this.size - this.strokeWidth) / 2;
    },
    circularSvgStyle () {
      return {
        width: this.size,
        height: this.size
      };
    },
    circularPathStyle () {
      const relVal = this.getRelativeValue();
      return {
        stroke: this.getColor(this.color),
        'stroke-dasharray': `${this.getArcLength(relVal)}, ${this.getArcLength(1)}`
      };
    }
  },
  methods: {
    getArcLength (fraction) {
      return fraction * Math.PI * (this.size - this.strokeWidth);
    },
    getRelativeValue () {
      const { value, min, max } = this;
      const clampedValue = Math.min(Math.max(min, value), max);
      return clampedValue / (max - min);
    },
    createDeterminateCircular (h) {
      if (this.mode !== 'determinate') return;
      return h('svg', {
        staticClass: 'mu-circular-progress-determinate',
        style: this.circularSvgStyle,
        attrs: {
          viewBox: '0 0 ' + this.size + ' ' + this.size
        }
      }, [
        h('circle', {
          staticClass: 'mu-circular-progress-determinate-path',
          style: this.circularPathStyle,
          attrs: {
            r: this.radius,
            cx: this.size / 2,
            cy: this.size / 2,
            fill: 'none',
            'stroke-miterlimit': '20',
            'stroke-width': this.strokeWidth
          }
        })
      ]);
    }
  },
  render (h) {
    const circular = this.mode === 'indeterminate'
      ? h(Circular, {
        props: {
          size: this.size,
          color: this.color,
          borderWidth: this.strokeWidth
        }
      }) : undefined;
    return h('div', {
      staticClass: `mu-circular-progress ${this.getColorClass()}`,
      style: {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }, [
      circular,
      this.createDeterminateCircular(h)
    ]);
  }
};
