<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单的使用" description="通过 `zDepth` 控制纸片的阴影程度">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleCircleCode" title="圆形的纸片">
    <ex-circle/>
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleCircle from './exampleCircle'
import exampleCircleCode from '!raw!./exampleCircle'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleCircleCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-circle': exampleCircle
  }
}
</script>
