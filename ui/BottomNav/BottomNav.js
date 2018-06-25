import color from '../internal/mixins/color';
import AbstractButton from '../internal/AbstractButton';

export default {
  name: 'mu-bottom-nav',
  mixins: [color],
  provide () {
    return {
      getBottomNavValue: this.getBottomNavValue,
      getBottomNavShift: this.getBottomNavShift,
      bottomNavItemClick: this.bottomNavItemClick,
      getDefaultVal: this.getDefaultVal,
      getActiveColor: this.getActiveColor
    };
  },
  props: {
    shift: Boolean,
    value: {}
  },
  data () {
    return {
      activeValue: this.value || 0
    };
  },
  methods: {
    getBottomNavValue () {
      return this.activeValue;
    },
    getBottomNavShift () {
      return this.shift;
    },
    getDefaultVal () {
      if (!this.index) this.index = 0;
      return this.index++;
    },
    getActiveColor () {
      return {
        className: this.getNormalColorClass(this.color, true),
        color: this.getColor(this.color)
      };
    },
    bottomNavItemClick (value) {
      this.activeValue = value;
    }
  },
  watch: {
    value (val) {
      this.activeValue = val;
    },
    activeValue (val) {
      if (val === this.value) return;
      this.$emit('update:value', val);
      this.$emit('change', val);
    }
  },
  render (h) {
    return h(AbstractButton, {
      class: {
        'mu-bottom-nav': true,
        'mu-bottom-nav-shift': this.shift,
        [this.getColorClass(false)]: this.shift
      },
      style: {
        'background-color': this.shift ? this.getColor(this.color) : ''
      },
      props: {
        ripple: this.shift,
        wrapperClass: 'mu-bottom-nav-shift-wrapper',
        containerElement: 'div',
        rippleOpacity: 0.3
      }
    }, this.$slots.default);
  }
};
