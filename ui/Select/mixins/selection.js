import Chip from '../../Chip';
import clickOutSide from '../../internal/directives/click-outside';
export default {
  directives: {
    'click-outside': clickOutSide
  },
  data () {
    return {
      searchValue: '',
      selectedIndex: -1
    };
  },
  created () {
    this.setSeachValue();
  },
  methods: {
    setSeachValue () {
      if (!this.multiple) this.searchValue = this.selects.map(item => item.label).join(',');
    },
    changeSelectedIndex (keycode) {
      const maxIndex = this.selects.length - 1;
      if (keycode === 'left') {
        this.selectedIndex = this.selectedIndex === -1 ? maxIndex : this.selectedIndex - 1;
      } else if (keycode === 'right') {
        this.selectedIndex = this.selectedIndex >= maxIndex ? -1 : this.selectedIndex + 1;
      } else if (this.selectedIndex === -1) {
        this.selectedIndex = maxIndex;
        return;
      }

      if (['backspace', 'delete'].indexOf(keycode) !== -1) {
        const newIndex = this.selectedIndex === maxIndex
          ? this.selectedIndex - 1
          : this.selects[this.selectedIndex + 1] ? this.selectedIndex : -1;
        if (this.selectedIndex !== -1) this.removeSelection(this.selectedIndex);
        this.selectedIndex = newIndex;
      }
    },
    removeSelection (index) {
      return this.inputValue.splice(index, 1);
    },
    createSlotSelection (item) {
      return this.$scopedSlots.selection({
        ...item,
        disabled: this.disabled || this.readonly
      });
    },
    createChipSelection (h, { selected, index, label }) {
      return h(Chip, {
        attrs: {
          tabindex: -1
        },
        props: {
          delete: true,
          selected
        },
        on: {
          delete: () => {
            if (this.disabled || this.readonly) return;
            this.removeSelection(index);
          }
        }
      }, label);
    },
    createTextSelection (h, { selected, label }, isLast) {
      return h('span', {
        staticClass: 'mu-selection-text',
        class: {
          'is-active': selected
        }
      }, isLast ? label : label + this.separator);
    },
    createSelectedItems (h) {
      return this.selects.map((item, index) => {
        const selected = this.selectedIndex === index;

        switch (true) {
          case !!this.$scopedSlots.selection:
            return this.createSlotSelection({ ...item, selected });
          case this.chips:
            return this.createChipSelection(h, { ...item, selected });
          default:
            return this.createTextSelection(h, { ...item, selected }, index === this.selects.length - 1);
        }
      });
    },
    createInputElement (h) {
      const enable = this.filterable && !this.readonly;
      return [
        h('input', {
          staticClass: 'mu-select-input',
          ref: 'input',
          class: {
            'is-enable': enable
          },
          attrs: {
            tabindex: 0,
            readonly: !enable,
            placeholder: !this.inputValue && this.inputValue !== 0 ? this.placeholder : ''
          },
          domProps: {
            value: this.searchValue
          },
          on: {
            ...this.createListeners(),
            input: (e) => { this.searchValue = e.target.value; }
          }
        })
      ];
    },
    createSelection (h) {
      const content = h('div', {
        staticClass: 'mu-select-content'
      }, this.multiple ? [
        ...this.createSelectedItems(h),
        ...this.createInputElement(h)
      ] : this.createInputElement(h));
      const action = h('div', {
        staticClass: 'mu-select-action'
      }, [
        h('svg', {
          staticClass: 'mu-select-icon',
          attrs: {
            viewBox: '0 0 24 24'
          }
        }, [
          h('path', {
            attrs: {
              d: 'M7 10l5 5 5-5z'
            }
          })
        ])
      ]);
      return h('div', {
        staticClass: 'mu-select',
        class: {
          'is-open': this.open,
          'is-multi': this.multiple,
          'is-filterable': this.filterable,
          'is-readonly': this.readonly
        },
        on: {
          click: (e) => {
            if (this.disabled || this.readonly || (this.filterable && e.target === this.$refs.input)) return;
            this.toggleMenu();
          }
        },
        directives: [{
          name: 'click-outside',
          value: (e) => {
            if (this.$refs.popover.$el.contains(e.target) ) return;
            this.blur();
          }
        }],
        ref: 'select'
      }, [
        content,
        action
      ]);
    }
  },
  watch: {
    searchValue (val) {
      this.options.forEach(option => {
        option.visible = !this.filterable || !val || option.label.indexOf(val) !== -1;
      });
      this.resetFocusIndex();
      if (this.isFocused && !this.open) this.open = true;
    },
    selects () {
      this.setSeachValue();
    }
  }
};
