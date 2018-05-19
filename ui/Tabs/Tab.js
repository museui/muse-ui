import route from '../internal/mixins/route';
import ripple from '../internal/mixins/ripple';
import { isNotNull } from '../utils';
import AbstractButton from '../internal/AbstractButton';

export default {
  name: 'mu-tab',
  mixins: [route, ripple],
  inject: [
    'tabClick',
    'getActiveValue',
    'getDefaultVal',
    'addTab',
    'removeTab',
    'setTabHighLineStyle',
    'getActiveColor',
    'getTabsInverse'
  ],
  props: {
    disabled: Boolean,
    value: {}
  },
  data () {
    return {
      tabVal: 0
    };
  },
  computed: {
    active () {
      return !this.disabled && this.getActiveValue() === this.tabVal;
    },
    activeColor () {
      return this.getActiveColor();
    }
  },
  created () {
    this.tabVal = isNotNull(this.value) ? this.value : this.getDefaultVal();
    this.addTab(this);
  },
  methods: {
    handleClick (e) {
      this.tabClick(this.tabVal, this);
      this.$emit('click', e);
    }
  },
  beforeDestory () {
    this.removeTab(this);
  },
  watch: {
    active (val, oldVal) {
      if (val) this.$emit('active');
    },
    value (val) {
      this.tabVal = val;
      this.setTabHighLineStyle();
    }
  },
  render (h) {
    return h(AbstractButton, {
      staticClass: 'mu-tab',
      props: {
        ...this.generateRouteProps(),
        containerElement: 'div',
        wrapperClass: 'mu-tab-wrapper',
        disabled: this.disabled,
        ripple: this.ripple,
        rippleOpacity: this.rippleOpacity,
        rippleColor: this.rippleColor
      },
      style: {
        color: this.active ? this.activeColor.color : ''
      },
      class: {
        'mu-tab-active': this.active,
        'is-inverse': this.active &&
                    this.getTabsInverse() &&
                    !this.activeColor.className &&
                    !this.activeColor.color,
        [this.activeColor.className]: this.active
      },
      on: {
        click: this.handleClick
      }
    }, this.$slots.default);
  }
};
