export default {
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    rows: {
      type: Number,
      default: 1
    },
    rowsMax: {
      type: Number
    },
    value: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.resizeTextarea();
  },
  watch: {
    value (val, oldVal) {
      this.$nextTick(() => {
        this.resizeTextarea();
      });
    }
  },
  methods: {
    resizeTextarea () {
      const element = this.$refs.textarea;
      if (!element) return;
      const hiddenEl = this.$refs.textareaHidden;
      let lineHeight = window.getComputedStyle(element, null).getPropertyValue('line-height');
      lineHeight = Number(lineHeight.substring(0, lineHeight.indexOf('px')));
      let pt = window.getComputedStyle(element, null).getPropertyValue('padding-top');
      pt = Number(pt.substring(0, pt.indexOf('px')));
      let pd = window.getComputedStyle(element, null).getPropertyValue('padding-bottom');
      pd = Number(pd.substring(0, pd.indexOf('px')));
      const minHeight = pd + pt + lineHeight * this.rows;
      const maxHeight = pd + pt + lineHeight * (this.rowsMax || this.rows);
      const height = hiddenEl.scrollHeight;
      element.style.height = (height < minHeight ? minHeight : height > maxHeight && maxHeight > 0 ? maxHeight : height) + 'px';
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-text-field-multiline'
    }, [
      h('textarea', {
        staticClass: 'mu-text-field-textarea-hide mu-text-field-input',
        ref: 'textareaHidden',
        attrs: {
          rows: 1
        },
        domProps: {
          value: this.value || ' '
        }
      }),
      h('textarea', {
        staticClass: 'mu-text-field-input mu-text-field-textarea',
        ref: 'textarea',
        attrs: {
          tabindex: 0,
          ...this.$attrs,
          disabled: this.disabled
        },
        domProps: {
          value: this.value || ''
        },
        on: this.$listeners
      })
    ]);
  }
};
