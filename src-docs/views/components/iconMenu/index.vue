<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="不同的菜单位置" description="通过 `anchorOrigin` 和 `targetOrigin` 定义不同的菜单弹出的位置">
    <ex-simple />
  </code-example>
  <code-example :code="exampleControlCode" title="控制菜单的选择和显示" description="通过 `open` 参数控制菜单显示， `value` 控制选择">
    <ex-control />
  </code-example>
  <code-example :code="exampleScrollableCode" title="可滚动的菜单">
    <ex-scroll />
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleControl from './exampleControl'
import exampleControlCode from '!raw!./exampleControl'
import exampleScrollable from './exampleScrollable'
import exampleScrollableCode from '!raw!./exampleScrollable'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleControlCode,
      exampleScrollableCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-control': exampleControl,
    'ex-scroll': exampleScrollable
  }
}
</script>
