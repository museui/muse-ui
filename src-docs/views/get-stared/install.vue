<template>
<div class="content-wrapper">
  <markdown-element :text="text"/>
</div>
</template>

<script>
import markdownElement from '../../components/markdownElement'
import installText from './install.md'
export default {
  data () {
    return {
      text: installText
    }
  },
  components: {
    'markdown-element': markdownElement
  }
}
</script>
