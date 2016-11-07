<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单的使用" description="这些事最简单的使用示例，通过 `uncheckIcon` 和 `checkedIcon` 自定义图标，`disabled` 使组件不可用, `labelPosition` 改变文字的位置">
    <ex-simple />
  </code-example>
  <code-example :code="exampleControlCode" title="复选框控制" description="`v-model` 控制复选框的 value , `v-model` 只能控制 value属性，所以 checkbox 元素的的value只能使用 `nativeValue` 来定义">
    <ex-control />
  </code-example>
  <api-view :api="apiData" />
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleControl from './exampleControl'
import exampleControlCode from '!raw!./exampleControl'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleControlCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-control': exampleControl
  }
}
</script>

<style lang="css">
</style>
