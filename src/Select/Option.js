import { ListItem, ListItemContent, ListItemTitle, ListAction } from '../List';
import Checkbox from '../Checkbox';
export default {
  name: 'mu-option',
  inject: ['addOption', 'removeOption', 'optionClick', 'isOptionSelected', 'isMultiple'],
  props: {
    label: {
      required: true,
      type: String
    },
    value: {
      required: true
    }
  },
  data () {
    return {
      focusState: 'none' // 'none', 'focused', 'keyboard-focused'
    };
  },
  computed: {
    selected () {
      return this.isOptionSelected(this.value);
    }
  },
  created () {
    this.addOption(this);
  },
  mounted () {
    this.applyFocusState();
  },
  methods: {
    applyFocusState () {
      const button = this.$refs.listItem.$refs.button;
      if (button) {
        const buttonEl = button.$el;

        switch (this.focusState) {
          case 'none':
            buttonEl.blur();
            break;
          case 'focused':
            buttonEl.focus();
            break;
          case 'keyboard-focused':
            button.setKeyboardFocus();
            buttonEl.focus();
            break;
        }
      }
    }
  },
  destroyed () {
    this.removeOption(this);
  },
  watch: {
    focusState () {
      this.applyFocusState();
    }
  },
  render (h) {
    const defaultItem = [
      this.isMultiple() ? h(ListAction, [
        h(Checkbox, {
          props: {
            inputValue: this.selected,
            color: 'secondary',
            tabIndex: -1
          }
        })
      ]) : undefined,
      h(ListItemContent, [
        h(ListItemTitle, {}, this.label)
      ])
    ];
    return h(ListItem, {
      staticClass: 'mu-option',
      ref: 'listItem',
      class: {
        'is-selected': this.selected
      },
      props: {
        button: true,
        nested: false,
        tabIndex: -1
      },
      on: {
        click: (e) => this.optionClick(this, e)
      }
    }, this.$slots.default && this.$slots.default.length > 0 ? this.$slots.default : defaultItem);
  }
};
