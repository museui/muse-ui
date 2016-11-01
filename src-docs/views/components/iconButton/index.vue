<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单的使用" description="通过 `icon` 参数，或者通过 `slot` 指定图标。">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleTooltipCode" title="按钮提示" description="不同位置、不同类型的提示文字，鼠标移上去看看吧">
    <ex-tooltip/>
  </code-example>
  <api-view :api="apiData" />
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleTooltip from './exampleTooltip'
import exampleTooltipCode from '!raw!./exampleTooltip'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleTooltipCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-tooltip': exampleTooltip
  }
}
</script>

<style lang="css">
</style>
