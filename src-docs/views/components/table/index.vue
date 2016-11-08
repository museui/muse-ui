<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单的使用示例" description="同 `table` 标签一样使用，只不过都需要 `mu-` 前缀">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleComplexCode" title="稍复杂的使用" description="设置不同的参数，完成不同的功能">
    <ex-complex/>
  </code-example>

  <api-view :api="apiData.table" title="Table API"/>
  <api-view :api="apiData.thead" title="Thead Slots"/>
  <api-view :api="apiData.tbody" title="Tbody Slots"/>
  <api-view :api="apiData.tfoot" title="Tfoot Slots"/>
  <api-view :api="apiData.tr" title="Tr API"/>
  <api-view :api="apiData.th" title="Th API"/>
  <api-view :api="apiData.td" title="Td API"/>
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
