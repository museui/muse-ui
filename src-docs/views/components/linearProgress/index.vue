<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleIndeterminateCode" title="Indeterminate Progress" description="默认的进度指示器">
    <ex-indeterminate />
  </code-example>
  <code-example :code="exampleDeterminateCode" title="Determinate Progress" description="不过设置不同 `value` 来改变进度条的进度">
    <ex-determinate/>
  </code-example>
  <api-view :api="apiData" />
</div>
</template>

<script>
import description from './README.md'
import exampleIndeterminate from './exampleIndeterminate'
import exampleIndeterminateCode from '!raw!./exampleIndeterminate'
import exampleDeterminate from './exampleDeterminate'
import exampleDeterminateCode from '!raw!./exampleDeterminate'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleIndeterminateCode,
      exampleDeterminateCode,
      apiData
    }
  },
  components: {
    'ex-indeterminate': exampleIndeterminate,
    'ex-determinate': exampleDeterminate
  }
}
</script>
