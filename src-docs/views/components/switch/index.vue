<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleCode" title="使用示例" description="此组件亦可以使用 `v-model` 控制，`labelPosition` 控制文字的位置">
    <example/>
  </code-example>
  <api-view :api="apiData"/>
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
