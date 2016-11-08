<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleCode" title="使用示例" description="contentBlock 是一个普通的内容块，只是调整了padding">
    <example/>
  </code-example>
</div>
</template>

<script>
import description from './README.md'
import example from './example'
import exampleCode from '!raw!./example'
export default {
  data () {
    return {
      description,
      exampleCode
    }
  },
  components: {
    example
  }
}
</script>
