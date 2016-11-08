<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleCode" title="使用示例">
    <example/>
  </code-example>

  <api-view :api="apiData.flexbox" title="Flexbox API"/>
  <api-view :api="apiData.flexboxItem" title="FlexboxItem API"/>
</div>
</template>

<script>
import description from './README.md'
import example from './example'
import exampleCode from '!raw!./example'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleCode,
      apiData
    }
  },
  components: {
    example
  }
}
</script>
