<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleCode" title="使用示例" description="按住下拉，然后松开会刷新数据。`RefreshControl` 的 Container 元素必须是已定位的元素(也就是 `position` 为 relative、absolute 或 fixed)">
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
