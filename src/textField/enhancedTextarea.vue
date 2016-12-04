<template>
  <div class="mu-text-field-multiline">
    <textarea ref="textareaHidden" class="mu-text-field-textarea-hide mu-text-field-input" :value="value"></textarea>
    <textarea ref="textarea" class="mu-text-field-input mu-text-field-textarea"
      :class="normalClass" :value="value"
      @input="handleInput" @focus="handleFocus" @blur="handleBlur"
      :placeholder="placeholder" :disabled="disabled"></textarea>
  </div>
</template>

<script>
export default {
  props: {
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
      this.$emit('change', e.target.value)
    },
    handleFocus (e) {
      this.$emit('focus', e)
    },
    handleBlur (e) {
      this.$emit('blur', e)
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
