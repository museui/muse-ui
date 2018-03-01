import List from '../../List';
import Popover from '../../Popover';

export default {
  provide () {
    return {
      optionClick: this.optionClick,
      addOption: this.addOption,
      removeOption: this.removeOption,
      isOptionSelected: this.isOptionSelected,
      isMultiple: this.isMultiple
    };
  },
  props: {
    multiple: Boolean,
    noDataText: {
      type: String,
      default: '暂无数据显示'
    },
    maxHeight: {
      type: [String, Number],
      default: 300
    }
  },
  data () {
    return {
      options: [],
      open: false
    };
  },
  computed: {
    selects () {
      return this.options.filter((option) => option.selected).map((option, index) => {
        return {
          value: option.value,
          label: option.label,
          index
        };
      });
    }
  },
  methods: {
    activateInput () {
      this.isFocused = true;
    },
    deactivateInput () {
      this.isFocused = false;
    },
    openMenu () {
      this.open = true;
      this.setFocusIndex(this.getSelectedIndex());
    },
    closeMenu () {
      this.open = false;
      this.resetFocusIndex();
    },
    toggleMenu () {
      if (this.open) return this.closeMenu();
      this.openMenu();
      this.focusInput();
    },
    isMultiple () {
      return this.multiple;
    },
    isOptionSelected (value) {
      return value === this.inputValue || (this.multiple && this.inputValue && this.inputValue.indexOf(value) !== -1);
    },
    addOption (option) {
      this.options.push(option);
    },
    removeOption (option) {
      const index = this.options.indexOf(option);
      if (index !== -1) this.options.splice(index, 1);
    },
    optionClick (option) {
      const { value, selected } = option;
      let selectedValue = this.multiple ? this.inputValue ? [...this.inputValue] : [] : this.inputValue;
      switch (true) {
        case selected && this.multiple:
          selectedValue.splice(selectedValue.indexOf(value), 1);
          break;
        case !selected && this.multiple:
          selectedValue = [];
          this.options.forEach((item) => {
            if (item.value === option.value || item.selected) selectedValue.push(item.value);
          });
          break;
        default:
          selectedValue = value;
          break;
      }
      this.inputValue = selectedValue;
      if (!this.multiple) this.closeMenu();
      this.$nextTick(() => this.focusInput());
    },
    createContent (h) {
      return h('div', {
        staticClass: 'mu-option-list',
        ref: 'list',
        style: {
          'maxHeight': this.maxHeight + 'px'
        }
      }, [
        h(List, {
          props: {
            dense: true
          }
        }, [
          this.enableOptions.length === 0 ? h('div', { staticClass: 'mu-select-no-data' }, this.noDataText) : null,
          this.$slots.default
        ])
      ]);
    },
    createMenu (h) {
      const trigger = this.$refs.select;
      return h(Popover, {
        class: this.popoverClass,
        style: {
          'min-width': trigger ? trigger.offsetWidth + 'px' : ''
        },
        props: {
          trigger: trigger,
          open: this.open,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          targetOrigin: {
            vertical: 'top',
            horizontal: 'left'
          }
        },
        on: {
          close: () => this.closeMenu()
        }
      }, [
        this.createContent(h)
      ]);
    }
  }
};
