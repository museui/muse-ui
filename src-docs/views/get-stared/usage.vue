<template>
  <div class="content-wrapper">
    <markdown-element :text="text"/>
  </div>
</template>

<script>
import markdownElement from '../../components/markdownElement'
import usageText from './usage.md'
export default {
  data () {
    return {
      text: usageText
    }
  },
  components: {
    'markdown-element': markdownElement
  }
}
</script>

<style lang="css">
</style>
