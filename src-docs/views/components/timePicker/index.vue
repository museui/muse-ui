<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单的使用" description="调整 `format` 属性可以切换 12/24小时制， `mode` 切换横屏或竖屏显示">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleInlineCode" title="内联弹出模式" description="`container` 设置为 `inline` 则使用内联模式弹出">
    <ex-inline/>
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleInline from './exampleInline'
import exampleInlineCode from '!raw!./exampleInline'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleInlineCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-inline': exampleInline
  }
}
</script>
