<template>
<div class="content-wrapper">
  <markdown-element :text="description" />
  <code-example :code="exampleSimpleCode" title="简单的使用" description="">
    <ex-simple />
  </code-example>
  <api-view :api="apiData"/>
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
