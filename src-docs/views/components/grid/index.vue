<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleCode" title="使用示例" description="`width` 在手机上的宽度, `tablet` 平板上的宽度, `desktop` pc端上的宽度">
    <example/>
  </code-example>
  <api-view :api="apiData.row" title="Row API"/>
  <api-view :api="apiData.col" title="Col API"/>
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
