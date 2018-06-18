import AbstractButton from '../internal/AbstractButton';
import route from '../internal/mixins/route';
import ripple from '../internal/mixins/ripple';
import ExpandTransition from '../internal/ExpandTransition';
import List from './List';
import Popover from '../Popover';
import { isNotNull } from '../utils';

export default {
  name: 'mu-list-item',
  mixins: [route, ripple],
  inject: [
    'listItemClick',
    'getNestedLevel',
    'getNestedIndent',
    'getListValue',
    'getToggleNested',
    'getToggleNestedType'
  ],
  props: {
    button: Boolean,
    nestedListClass: [String, Object, Array],
    open: {
      type: Boolean,
      default: true
    },
    avatar: Boolean,
    nested: Boolean, // 是否允许嵌套
    tabIndex: [String, Number],
    value: {}
  },
  data () {
    return {
      nestedOpen: this.open
    };
  },
  computed: {
    nestedLevel () {
      return this.getNestedLevel();
    },
    nestedIndent () {
      return this.getNestedIndent();
    },
    toggleNested () {
      return this.getToggleNested();
    },
    toggleNestedType () {
      return this.getToggleNestedType();
    }
  },
  created () {
    if (this.toggleNestedType === 'popover' && this.nestedOpen) {
      this.nestedOpen = false;
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e);
      this.listItemClick(this);
      if (this.toggleNested) this.handleToggleNested();
    },
    handleKeyboardFocus (isFocus) {
      this.$emit('keyboard-focus', isFocus);
    },
    handleHover (event) {
      this.$emit('hover', event);
    },
    handleHoverExit (event) {
      this.$emit('hover-exit', event);
    },
    handleToggleNested () {
      this.nestedOpen = !this.nestedOpen;
      this.$emit('toggle-nested', this.nestedOpen);
    },
    handleNestedClick (item) {
      this.listItemClick(item);
    },
    createItem (h) {
      const listValue = this.getListValue();
      const nestedPadding = this.nestedIndent && this.toggleNestedType === 'expand' ? 18 * this.nestedLevel : 0;
      const itemClass = [
        'mu-item',
        this.nestedOpen && this.nested ? 'mu-item__open' : '',
        this.avatar ? 'has-avatar' : '',
        this.textline,
        isNotNull(listValue) && isNotNull(this.value) && listValue === this.value ? 'is-selected' : ''
      ].join(' ');

      return h(AbstractButton, {
        class: 'mu-item-wrapper',
        ref: 'button',
        attrs: {
          tabindex: this.tabIndex
        },
        props: {
          containerElement: this.button ? 'a' : 'div',
          wrapperClass: itemClass,
          wrapperStyle: {
            'margin-left': nestedPadding ? nestedPadding + 'px' : ''
          },
          disabled: !this.button,
          ripple: this.button && this.ripple,
          rippleColor: this.rippleColor,
          rippleOpacity: this.rippleOpacity,
          centerRipple: false,
          ...this.generateRouteProps()
        },
        on: {
          click: this.handleClick,
          keyboardFocus: this.handleKeyboardFocus,
          hover: this.handleHover,
          hoverExit: this.handleHoverExit
        }
      }, this.$slots.default);
    },
    createNestedList (h) {
      if (!this.nested) return null;
      const list = h(List, {
        class: this.nestedListClass,
        props: {
          nestedIndent: this.nestedIndent,
          toggleNested: this.toggleNested,
          toggleNestedType: this.toggleNestedType,
          nestedLevel: this.nestedLevel + 1,
          value: this.getListValue()
        },
        on: {
          'item-click': this.handleNestedClick
        }
      }, this.$slots.nested);

      switch (this.toggleNestedType) {
        case 'expand':
          return h(ExpandTransition, {}, [this.nestedOpen ? list : undefined]);
        case 'popover':
          return h(Popover, {
            props: {
              open: this.nestedOpen,
              trigger: this.$el,
              appendBody: false,
              placement: 'right-start'
            },
            on: {
              close: this.handleToggleNested
            }
          }, [list]);
      }
      return null;
    }
  },
  render (h) {
    return h('li', [this.createItem(h), this.createNestedList(h)]);
  },
  watch: {
    open (val) {
      this.nestedOpen = val;
    },
    nestedOpen (val) {
      this.$emit('update:open', val);
    }
  }
};
