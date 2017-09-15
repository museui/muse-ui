<template>
  <div class="mu-text-field-multiline">
    <textarea ref="textareaHidden" rows="1" class="mu-text-field-textarea-hide mu-text-field-input" :value="value"></textarea>
    <textarea ref="textarea" :name="name" class="mu-text-field-input mu-text-field-textarea"
      :class="normalClass" :value="value" @change="handleChange"
      @input="handleInput" @focus="handleFocus" @blur="handleBlur"
      :placeholder="placeholder" :disabled="disabled" :required="required"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    rows: {
      type: Number,
      default: 1
    },
    rowsMax: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    normalClass: {
      type: [String, Array, Object]
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    resizeTextarea () {
      let element = this.$refs.textarea
      if (!element) return
      let hiddenEl = this.$refs.textareaHidden
      let lineHeight = window.getComputedStyle(element, null).getPropertyValue('line-height')
      lineHeight = Number(lineHeight.substring(0, lineHeight.indexOf('px')))
      let pt = window.getComputedStyle(element, null).getPropertyValue('padding-top')
      pt = Number(pt.substring(0, pt.indexOf('px')))
      let pd = window.getComputedStyle(element, null).getPropertyValue('padding-bottom')
      pd = Number(pd.substring(0, pd.indexOf('px')))
      let minHeight = pd + pt + lineHeight * this.rows
      let maxHeight = pd + pt + lineHeight * (this.rowsMax || 0)
      let height = hiddenEl.scrollHeight
      element.style.height = (height < minHeight ? minHeight : height > maxHeight && maxHeight > 0 ? maxHeight : height) + 'px'
    },
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleChange (e) {
      this.$emit('change', e)
    },
    handleFocus (e) {
      this.$emit('focus', e)
    },
    handleBlur (e) {
      this.$emit('blur', e)
    },
    focus () {
      const { textarea } = this.$refs
      if (textarea) {
        textarea.focus()
      }
    }
  },
  mounted () {
    this.resizeTextarea()
  },
  watch: {
    value (val, oldVal) {
      if (val === oldVal) return
      this.$nextTick(() => {
        this.resizeTextarea()
      })
    }
  }
}
</script>

<style lang="less">
.mu-text-field-textarea{
  resize: vertical;
  line-height: 1.5;
  position: relative;
  height: 100%;
  resize: none;
}
.mu-text-field-multiline{
  width: 100%;
  position: relative;
}
.mu-text-field-textarea-hide{
  width: 100%;
  height: initial;
  resize: none;
  position: absolute;
  padding: 0;
  overflow: auto;
  visibility: hidden;
}
</style>
