export default {
  name: 'mu-list',
  provide () {
    return {
      listItemClick: this.listItemClick,
      getNestedLevel: this.getNestedLevel,
      getToggleNestedType: this.getToggleNestedType,
      getListValue: this.getListValue
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
    toggleNestedType: {
      type: String,
      default: 'expand'
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
