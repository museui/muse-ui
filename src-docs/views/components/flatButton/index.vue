<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单使用" description="`Flat Button` 默认、主色、强调色、不可用、四种不同状态的按钮示例">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleComplexCode" title="稍复杂的使用" description="配合选择文件按钮，图标，定义label的位置">
    <ex-complex/>
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleComplex from './exampleComplex'
import exampleComplexCode from '!raw!./exampleComplex'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleComplexCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-complex': exampleComplex
  }
}
</script>

<style lang="css">
</style>
