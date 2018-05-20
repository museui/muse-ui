export default {
  name: 'mu-list',
  provide () {
    return {
      listItemClick: this.listItemClick,
      getNestedLevel: this.getNestedLevel,
      getToggleNested: this.getToggleNested,
      getToggleNestedType: this.getToggleNestedType,
      getListValue: this.getListValue,
      getNestedIndent: this.getNestedIndent
    };
  },
  props: {
    nestedLevel: {
      type: Number,
      default: 0
    },
    textline: {
      type: String,
      default: '',
      validator (val) {
        return ['', 'two-line', 'three-line'].indexOf(val) !== -1;
      }
    },
    nestedIndent: {
      type: Boolean,
      default: true
    },
    toggleNested: Boolean,
    toggleNestedType: {
      type: String,
      default: 'expand',
      validator (val) {
        return ['expand', 'popover'].indexOf !== -1;
      }
    },
    dense: Boolean,
    value: {}
  },
  methods: {
    listItemClick (item) {
      this.$emit('change', item.value);
      this.$emit('item-click', item);
    },
    getListValue () {
      return this.value;
    },
    getNestedLevel () {
      return this.nestedLevel;
    },
    getNestedIndent () {
      return this.nestedIndent;
    },
    getToggleNested () {
      return this.toggleNested;
    },
    getToggleNestedType () {
      return this.toggleNestedType;
    }
  },
  render (h) {
    return h('ul', {
      staticClass: 'mu-list',
      class: {
        ['mu-list-' + this.textline]: this.textline,
        'mu-list-dense': this.dense
      },
      on: this.$listeners
    }, this.$slots.default);
  }
};
