<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="使用示例" description="不同的设备上`snackbar` 与 `toast` 弹出的位置是不同的，使用时需要注意，同时只能存在一个 `snackbar` 或 `toast` 。">
    <ex-simple/>
  </code-example>
  <api-view :api="apiData.snackbar" title="Snackbar API"/>
  <api-view :api="apiData.toast" title="Toast API"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple
  }
}
</script>

<style lang="css">
</style>
