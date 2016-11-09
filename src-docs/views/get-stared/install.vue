<template>
<div class="content-wrapper">
  <markdown-element :text="text"/>
</div>
</template>

<script>
import installText from './install.md'
export default {
  data () {
    return {
      text: installText
    }
  }
}
</script>
