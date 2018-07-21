import { isPromise, getObjAttr } from '../utils';
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
    getValue (prop) {
      return getObjAttr(this.model, prop);
    },
    addItem (item) {
      this.items.push(item);
    },
    removeItem (item) {
      const index = this.items.indexOf(item);
      if (index === -1) return;
      this.items.splice(index, 1);
    },
    validate () {
      let valid = true;
      const promises = [];
      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        const result = item.validate();
        if (isPromise(result)) {
          promises.push(result);
          continue;
        }
        if (!result) {
          valid = false;
        }
      }
      if (promises.length > 0 && typeof Promise !== 'undefined') {
        return Promise.all([
          valid ? Promise.resolve(valid) : Promise.reject(valid),
          ...promises
        ]).then(
          () => true,
          () => false
        );
      }
      return typeof Promise !== 'undefined' ? Promise.resolve(valid) : valid;
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
      },
      on: this.$listeners
    }, this.$slots.default);
  }
};
