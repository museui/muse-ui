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
    tags: Boolean, // 可创建条目
    placeholder: String,
    separator: {
      type: String,
      default: ','
    },
    filterable: Boolean // enable search option
  },
  computed: {
    autoComplete () {
      return this.filterable || this.tags;
    }
  },
  render (h) {
    const { data, children, defaultActionIcon } = this.createSelection(h);
    return this.createInput(h, data, [
      ...children,
      this.createMenu(h)
    ], defaultActionIcon);
  }
};
