<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单的使用" description="`Raised Button` 默认、主色、强调色, 不可用、全宽五种不同状态的按钮示例">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleComplexCode" title="稍复杂的使用" description="配合图标、文件按钮、调整文字位置，自定义样式等">
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
