<template>
  <div class="content-wrapper">
    <markdown-element :text="text"/>
  </div>
</template>

<script>
import usageText from './usage.md'
export default {
  data () {
    return {
      text: usageText
    }
  }
}
</script>
