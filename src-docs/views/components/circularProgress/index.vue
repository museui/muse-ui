<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="Indeterminate Progress">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleDeterminateCode" title="Determinate Progress">
    <ex-determinate/>
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleDeterminate from './exampleDeterminate'
import exampleDeterminateCode from '!raw!./exampleDeterminate'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleDeterminateCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-determinate': exampleDeterminate
  }
}
</script>
