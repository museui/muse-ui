import Chip from '../../Chip';

export default {
  props: {
    chips: Boolean,
    placeholder: String,
    filterable: Boolean // enable search option
  },
  data () {
    return {
      searchValue: ''
    };
  },
  methods: {
    createSlotSelection (item) {
      return this.$scopedSlots.selection({
        ...item,
        disabled: this.disabled || this.readonly
      });
    },
    createSelectedItems (h) {
      if (!this.chips) return this.selects.map(item => item.label).join(',');
      return this.selects.map(item => {
        return this.$scopedSlots.selection ? this.createSlotSelection(item) : h(Chip, {
          props: {
            delete: true
          },
          on: {
            delete: () => {
              this.inputValue.splice(this.inputValue.indexOf(item.value), 1);
            }
          }
        }, item.label);
      });
    },
    createInputElement (h) {
      return h('input', {
        staticClass: 'mu-select-input',
        ref: 'input',
        class: {
          'is-enable': this.filterable
        },
        attrs: {
          tabindex: 0,
          readOnly: !this.filterable,
          placeholder: !this.inputValue && this.inputValue !== 0 ? this.placeholder : ''
        },
        domProps: {
          value: this.searchValue
        },
        on: {
          ...this.createListeners(),
          input: (e) => { this.searchValue = e.target.value; }
        }
      });
    },
    createSelection (h) {
      const content = h('div', {
        staticClass: 'mu-select-content'
      }, [...this.createSelectedItems(h), this.createInputElement(h)]);
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
          'is-multi': this.multiple
        },
        on: {
          click: () => {
            if (this.disabled || this.readonly) return;
            this.toggleMenu();
          }
        },
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
        option.visible = !val || option.label.indexOf(val) !== -1;
      });
      this.resetFocusIndex();
    }
  }
};
