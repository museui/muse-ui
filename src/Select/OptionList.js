import List from '../List';

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
    maxHeight: {
      type: [String, Number],
      default: 300
    },
    value: {}
  },
  data () {
    return {
      options: []
    };
  },
  computed: {
    selects () {
      return this.options.filter((option) => option.selected).map((option) => {
        return {
          value: option.value,
          label: option.label
        };
      });
    }
  },
  methods: {
    isMultiple () {
      return this.multiple;
    },
    isOptionSelected (value) {
      return value === this.value || (this.multiple && this.value && this.value.indexOf(value) !== -1);
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
      let selectedValue = this.multiple ? this.value ? [...this.value] : [] : this.value;
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
      this.$emit('change', selectedValue);
      this.$emit('option-click', option);
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-option-list',
      style: {
        'maxHeight': this.maxHeight + 'px'
      }
    }, [
      h(List, {
        props: {
          dense: true
        }
      }, this.$slots.default)
    ]);
  }
};
