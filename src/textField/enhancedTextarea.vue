<template>
  <textarea :value="value" @input="handlerInput" @focus="onfocus" @blur="onblur" :placeholder="placeholder"></textarea>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String
    },
    value: {
      type: String
    }
  },
  methods: {
    resizeTextarea () {
      let element = this.$el
      if (!element) return
      let lineHeight = window.getComputedStyle(element, null).getPropertyValue('line-height')
      lineHeight = Number(lineHeight.substring(0, lineHeight.indexOf('px')))
      let pt = window.getComputedStyle(element, null).getPropertyValue('padding-top')
      pt = Number(pt.substring(0, pt.indexOf('px')))
      let pd = window.getComputedStyle(element, null).getPropertyValue('padding-bottom')
      pd = Number(pd.substring(0, pd.indexOf('px')))
      let line = this.getLineNum(this.value)
      line = line > this.rows ? line : this.rows
      let height = pd + pt + lineHeight * line
      element.style.height = height + 'px'
    },
    getLineNum (value, line) {
      line = line || 0
      line++
      if (!value || value.indexOf('\n') === -1) return line
      let num = value.indexOf('\n')
      return this.getLineNum(value.substring(num + 1), line)
    },
    handlerInput (e) {
      this.$emit('change', e.target.value)
    }
  },
  mounted () {
    this.resizeTextarea()
  },
  watch: {
    value (val, oldVal) {
      if (val === oldVal) return
      this.resizeTextarea()
    }
  }
}
</script>

<style lang="css">
</style>
