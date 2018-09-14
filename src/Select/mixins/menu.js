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
    textline: List.props.textline,
    space: Popover.props.space,
    placement: Popover.props.placement,
    dense: {
      ...List.props.dense,
      default: true
    },
    noDataText: {
      type: String,
      default: '暂无数据显示'
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
      if (!this.multiple) {
        const option = this.getOption(this.value);
        return option ? [{
          label: option.label,
          value: this.value,
          index: 0
        }] : [];
      }
      const selects = Array.isArray(this.value) ? this.value : [];
      const selectItems = [];
      for (let i = 0; i < selects.length; i++) {
        const value = selects[i];
        const option = this.getOption(value);
        if (option) {
          selectItems.push({
            label: option.label,
            value: option.value,
            index: selectItems.length
          });
          continue;
        }

        if (this.tags) {
          selectItems.push({
            label: value,
            value,
            index: selectItems.length
          });
        }
      }
      return selectItems;
    }
  },
  beforeDestroy () {
    this.closeMenu();
  },
  methods: {
    activateInput () {
      this.isFocused = true;
    },
    deactivateInput () {
      this.isFocused = false;
      this.selectedIndex = -1;
      this.setSeachValue();
    },
    openMenu () {
      this.open = true;
      this.resetOptionVisable();
      const selectedIndex = this.getSelectedIndex();
      this.setFocusIndex(selectedIndex);
      setTimeout(() => this.setScollPosition(selectedIndex), 0);
      if (this.autoComplete) {
        this.$nextTick(() => {
          this.$refs.input.select();
        });
      }
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
    resetOptionVisable () {
      this.options.forEach((option) => (option.visible = true));
    },
    isMultiple () {
      return this.multiple;
    },
    isOptionSelected (value) {
      return value === this.value || (
        this.multiple &&
        this.value &&
        this.value.indexOf(value) !== -1
      );
    },
    addOption (option) {
      this.options.push(option);
    },
    removeOption (option) {
      const index = this.options.indexOf(option);
      if (index !== -1) this.options.splice(index, 1);
    },
    getOption (value) {
      const option = this.options.filter((option) => option.value === value)[0];
      if (option) return option;
      return {
        label: value,
        value
      };
    },
    insertValue (selectedValue, value) {
      let index = 0;
      for (let i = 0; i < this.options.length; i++) {
        const item = this.options[i];
        if (item.selected) {
          index = selectedValue.indexOf(item.value) + 1;
          continue;
        }
        if (item.value === value) {
          return selectedValue.splice(index, 0, value);
        }
      }
      return selectedValue.push(value);
    },
    optionClick (value, notRemove = false) {
      let selectedValue = this.multiple ? this.value ? [...this.value] : [] : this.value;
      if (this.multiple) {
        const index = selectedValue.indexOf(value);
        if (index === -1) {
          this.insertValue(selectedValue, value);
        } else {
          if (!notRemove) selectedValue.splice(index, 1);
        }
      } else {
        selectedValue = value;
      }
      this.$emit('input', selectedValue);
      this.$emit('change', selectedValue);
      if (this.multiple && this.autoComplete) this.searchValue = '';
      this.$nextTick(() => {
        this.focusInput();
        if (!this.multiple) this.closeMenu();
      });
    },
    createMenu (h) {
      const trigger = this.$refs.select;
      return h(Popover, {
        staticClass: 'mu-option-list',
        class: this.popoverClass,
        style: {
          'maxHeight': this.maxHeight + 'px',
          'visibility': this.tags && this.enableOptions.length === 0 ? 'hidden' : '',
          'min-width': trigger ? trigger.offsetWidth + 'px' : ''
        },
        ref: 'popover',
        props: {
          trigger: trigger,
          open: this.open,
          space: this.space,
          cover: !this.autoComplete,
          placement: this.placement
        },
        on: {
          close: () => this.closeMenu()
        }
      }, [
        h(List, {
          props: {
            textline: this.textline,
            dense: this.dense
          }
        }, [
          !this.tags && this.filterable && this.enableOptions.length === 0 ? h('div', { staticClass: 'mu-select-no-data' }, this.noDataText) : null,
          this.$slots.default
        ])
      ]);
    }
  }
};
