import AbstractButton from '../internal/AbstractButton';

export default {
  name: 'mu-bottom-nav',
  provide () {
    return {
      getBottomNavValue: this.getBottomNavValue,
      getBottomNavShift: this.getBottomNavShift,
      bottomNavItemClick: this.bottomNavItemClick,
      getDefaultVal: this.getDefaultVal
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
    bottomNavItemClick (value) {
      this.activeValue = value;
    }
  },
  watch: {
    val (val) {
      this.activeValue = val;
    },
    activeValue (val) {
      this.$emit('update:value', val);
      this.$emit('change', val);
    }
  },
  render (h) {
    return h(AbstractButton, {
      class: {
        'mu-bottom-nav': true,
        'mu-bottom-nav-shift': this.shift
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
