<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example title="配合列表使用" :code="exampleListCode">
    <ex-list/>
  </code-example>

  <code-example title="向内缩进示例" :code="exampleInsetCode">
    <ex-inset/>
  </code-example>

  <code-example title="配合网格列表使用" :code="exampleGridListCode">
    <ex-grid-list/>
  </code-example>

  <api-view :api="apiData" />
</div>
</template>

<script>
import description from './README.md'
import exampleList from '../list/exampleChat'
import exampleListCode from '!raw!../list/exampleChat'
import exampleInset from '../list/exampleFolder'
import exampleInsetCode from '!raw!../list/exampleFolder'
import exampleGridList from '../gridList/exampleSimple'
import exampleGridListCode from '!raw!../gridList/exampleSimple'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleListCode,
      exampleInsetCode,
      exampleGridListCode,
      apiData
    }
  },
  components: {
    'ex-list': exampleList,
    'ex-inset': exampleInset,
    'ex-grid-list': exampleGridList
  }
}
</script>
