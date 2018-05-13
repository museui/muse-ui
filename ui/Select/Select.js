import input from '../internal/mixins/input.js';
import menu from './mixins/menu';
import selection from './mixins/selection';
import events from './mixins/events';
import keyboard from './mixins/keyboard';

export default {
  name: 'mu-select',
  mixins: [input, menu, selection, events, keyboard],
  props: {
    popoverClass: [String, Object, Array],
    multiple: Boolean,
    maxHeight: {
      type: [String, Number],
      default: 300
    },
    readonly: Boolean,
    chips: Boolean,
    placeholder: String,
    separator: {
      type: String,
      default: ','
    },
    filterable: Boolean // enable search option
  },
  render (h) {
    return this.createInput(h, [
      this.createSelection(h),
      this.createMenu(h)
    ]);
  }
};
