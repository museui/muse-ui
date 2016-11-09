<template>
<div class="content-wrapper">
  <markdown-element :text="text"/>
</div>
</template>

<script>
import changlogText from './CHANELOG.md'
export default {
  data () {
    return {
      text: changlogText
    }
  }
}
</script>
