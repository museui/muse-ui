<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单的使用">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleComplexCode" title="稍复杂的使用" description="通过定义 `rows` 和 `cols` 来定义每个 `gridTile` 的空间， 通过 `titlePosition` 改变 title的位置，`actionPosition` 改变 `action` 位置。">
    <ex-complex/>
  </code-example>
  <code-example :code="exampleInlineCode" title="在一行的示例" description="通过外部 `class` 调整成一行的网格列表">
    <ex-inline/>
  </code-example>
  <api-view :api="apiData.gridList" title="GridList API"/>
  <api-view :api="apiData.gridTile" title="GridTile API"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleComplex from './exampleComplex'
import exampleComplexCode from '!raw!./exampleComplex'
import exampleInline from './exampleInline'
import exampleInlineCode from '!raw!./exampleInline'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleComplexCode,
      exampleInlineCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-complex': exampleComplex,
    'ex-inline': exampleInline
  }
}
</script>
