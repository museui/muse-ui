<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example title="简单的使用"  description="配合 `menu` 和 `listItem` 组件使用，定义不同的内容和颜色" :code="exampleSimpleCode">
    <ex-simple />
  </code-example>
  <code-example title="配合图标和按钮"  description="配合 `icon` 和 `iconButton` 组件使用, 这个时候一般使用圆形的徽章" :code="exampleIconCode">
    <ex-icon />
  </code-example>
  <code-example title="定义不同的内容" :code="exampleContentCode">
    <ex-content />
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleIcon from './exampleIcon'
import exampleIconCode from '!raw!./exampleIcon'
import exampleContent from './exampleContent'
import exampleContentCode from '!raw!./exampleContent'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleIconCode,
      exampleContentCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-icon': exampleIcon,
    'ex-content': exampleContent
  }
}
</script>

<style lang="css">
</style>
