<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单的使用" description="每个 `dialog` 的显示和关闭都在外部使用 `v-if` 控制，当点击遮盖层或者敲下 `esc` 键，都会触发 `close` 事件">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleAlertCode" title="Alert" description="可以不监听 `close` 事件，使其只能通过点击确定按钮关闭">
    <ex-alert/>
  </code-example>
  <code-example :code="exampleScrollCode" title="可滚动的对话框">
    <ex-scroll/>
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleAlert from './exampleAlert'
import exampleAlertCode from '!raw!./exampleAlert'
import exampleScroll from './exampleScroll'
import exampleScrollCode from '!raw!./exampleScroll'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleAlertCode,
      exampleScrollCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-alert': exampleAlert,
    'ex-scroll': exampleScroll
  }
}
</script>
