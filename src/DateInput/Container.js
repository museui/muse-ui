import BottomSheet from '../BottomSheet';
import Dialog from '../Dialog';
import Popover from '../Popover';

export default {
  props: {
    container: {
      type: String,
      default: 'popover', // dialog popover bottomSheet
      validator (val) {
        return val && ['dialog', 'popover', 'bottomSheet'].indexOf(val) !== -1;
      }
    },
    trigger: {},
    open: Boolean
  },
  methods: {
    createWrap (h, children) {
      switch (this.container) {
        case 'popover':
          return h(Popover, {
            props: {
              open: this.open,
              cover: true,
              lazy: true,
              trigger: this.trigger
            },
            on: this.$listeners
          }, children);
        case 'dialog':
          return h(Dialog, {
            props: {
              open: this.open,
              dialogClass: 'mu-picker-dialog',
              transition: 'slide-top'
            },
            on: this.$listeners
          }, children);
        case 'bottomSheet':
          return h(BottomSheet, {
            props: {
              open: this.open
            },
            on: this.$listeners
          }, children);
      }
    }
  },
  render (h) {
    return this.createWrap(h, this.$slots.default);
  }
};
