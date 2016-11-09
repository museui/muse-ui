<template>
<div class="content-wrapper">
  <markdown-element :text="text"/>
</div>
</template>

<script>
import contributing from './CONTRIBUTING.md'
export default {
  data () {
    return {
      text: contributing
    }
  }
}
</script>
