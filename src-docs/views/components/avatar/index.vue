<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example title="简单的使用"  description="设置不同的图片、图标、文件以及大小" :code="exampleCode">
    <example />
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

<style lang="css">
</style>
