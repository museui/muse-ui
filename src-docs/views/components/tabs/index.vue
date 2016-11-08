<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单的使用">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleIconCode" title="使用图标">
    <ex-icon />
  </code-example>
  <code-example :code="exampleIconTextCode" title="图标 + 文字">
    <ex-icon-text />
  </code-example>

  <api-view :api="apiData.tabs" title="Tabs API"/>
  <api-view :api="apiData.tab" title="Tab API"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleIcon from './exampleIcon'
import exampleIconCode from '!raw!./exampleIcon'
import exampleIconText from './exampleIconText'
import exampleIconTextCode from '!raw!./exampleIconText'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleIconCode,
      exampleIconTextCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-icon': exampleIcon,
    'ex-icon-text': exampleIconText
  }
}
</script>
