<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单的使用">
    <ex-simple />
  </code-example>
  <code-example :code="exampleCustomCode" title="自定义弹出位置">
    <ex-custom/>
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleCustom from './exampleCustom'
import exampleCustomCode from '!raw!./exampleCustom'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleCustomCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-custom': exampleCustom
  }
}
</script>
