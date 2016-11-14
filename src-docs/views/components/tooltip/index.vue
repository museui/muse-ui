<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="使用示例" description="鼠标移动至图标是显示提示信息，设置不同的属性调整提示信息的位置和样式。`Tooltip` 的 Container 元素必须是已定位的元素(也就是 `position` 为 relative、absolute 或 fixed)">
    <ex-simple />
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple
  }
}
</script>
