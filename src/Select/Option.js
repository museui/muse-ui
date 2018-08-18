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
    },
    disabled: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    searchText: String, // 用户搜索的文本，如果设置此值，会根据这个字段来搜搜，否则使用label属性
    avatar: Boolean
  },
  data () {
    return {
      visible: true,
      focused: false
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
  destroyed () {
    this.removeOption(this);
  },
  render (h) {
    const defaultItem = [
      this.isMultiple() ? h(ListAction, [
        h(Checkbox, {
          props: {
            inputValue: this.selected,
            color: 'secondary',
            disabled: this.disabled,
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
        'is-selected': this.selected,
        'is-disabled': this.disabled,
        'is-focused': this.focused
      },
      props: {
        ripple: this.ripple,
        open: this.open,
        avatar: this.avatar,
        button: !this.disabled,
        tabIndex: -1
      },
      directives: [{
        name: 'show',
        value: this.visible
      }],
      on: {
        click: (e) => this.optionClick(this.value)
      }
    }, this.$slots.default && this.$slots.default.length > 0 ? this.$slots.default : defaultItem);
  }
};
