<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单的使用" description="slider组件内部使用 `input[type=range]` 组件，所以也可以使用 `v-model` 控制value">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleDisabledCode" title="禁用示例">
    <ex-disabled/>
  </code-example>
  <code-example :code="exampleStepCode" title="步长定义">
    <ex-step/>
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleDisabled from './exampleDisabled'
import exampleDisabledCode from '!raw!./exampleDisabled'
import exampleStep from './exampleStep'
import exampleStepCode from '!raw!./exampleStep'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleDisabledCode,
      exampleStepCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-disabled': exampleDisabled,
    'ex-step': exampleStep
  }
}
</script>
