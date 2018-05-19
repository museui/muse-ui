import AbstractButton from '../internal/AbstractButton';
import Icon from '../Icon';
import route from '../internal/mixins/route';
import ripple from '../internal/mixins/ripple';
import { isNotNull } from '../utils';
export default {
  name: 'mu-bottom-nav-item',
  mixins: [route, ripple],
  inject: [
    'getBottomNavValue',
    'getBottomNavShift',
    'getDefaultVal',
    'bottomNavItemClick',
    'getActiveColor'
  ],
  props: {
    icon: String,
    title: String,
    value: {}
  },
  data () {
    return {
      itemVal: null
    };
  },
  created () {
    this.itemVal = isNotNull(this.value) ? this.value : this.getDefaultVal();
  },
  computed: {
    active () {
      return this.getBottomNavValue() === this.itemVal;
    },
    activeClassName () {
      return this.getActiveColor().className;
    },
    activeColor () {
      return this.getActiveColor().color;
    },
    shift () {
      return this.getBottomNavShift();
    }
  },
  methods: {
    handleClick () {
      this.bottomNavItemClick(this.itemVal);
    }
  },
  watch: {
    value (val) {
      this.itemVal = val;
    }
  },
  render (h) {
    const icon = this.icon ? h(Icon, { class: 'mu-bottom-item-icon', props: { value: this.icon }}) : undefined;
    const title = this.title ? h('span', { staticClass: 'mu-bottom-item-text' }, this.title) : undefined;
    return h(AbstractButton, {
      staticClass: 'mu-bottom-item',
      class: {
        'mu-bottom-item-active': this.active,
        'is-shift': this.active && this.shift,
        [this.activeClassName]: !this.shift && this.active
      },
      style: {
        color: !this.shift && this.active ? this.activeColor : ''
      },
      props: {
        ripple: !this.shift && this.ripple,
        containerElement: 'div',
        wrapperClass: 'mu-bottom-item-wrapper',
        ...this.generateRouteProps()
      },
      on: {
        click: this.handleClick
      }
    }, [icon, title]);
  }
};
