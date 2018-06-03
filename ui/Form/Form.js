export default {
  name: 'mu-form',
  provide () {
    return {
      muForm: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    inline: Boolean,
    labelWidth: [String, Number],
    labelPosition: {
      type: String,
      default: 'top',
      validator (val) {
        return ['left', 'right', 'top'].indexOf(val) !== -1;
      }
    },
    autoValidate: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      items: []
    };
  },
  methods: {
    addItem (item) {
      this.items.push(item);
    },
    removeItem (item) {
      const index = this.items.indexOf(item);
      if (index === -1) return;
      this.items.splice(index, 1);
    },
    validate () {
      let result = true;
      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        if (!item.validate()) {
          result = false;
        }
      }
      return result;
    },
    clear () {
      this.items.forEach((item) => (item.errorMessage = ''));
    }
  },
  render (h) {
    return h('form', {
      staticClass: 'mu-form',
      class: {
        'mu-form__inline': this.inline
      }
    }, this.$slots.default);
  }
};
