<template>
<div class="content-wrapper">
  <markdown-element :text="description" />
  <code-example :code="exampleSimpleCode" title="简单的使用" description="下拉框的value 通过 `v-model` 控制，通过 `menuItem` 配置可选项； `multiple` 可将下拉框改为多选，这个时候 `v-model` 需要绑定数组">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleComplexCode" title="其它参数的使用" description="`maxHeight` 控制弹窗框的高度，`errorText` 当表单验证出错时可以给出提示信息">
    <ex-complex/>
  </code-example>
  <api-view :api="apiData" />
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleComplex from './exampleComplex'
import exampleComplexCode from '!raw!./exampleComplex'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleComplexCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-complex': exampleComplex
  }
}
</script>

<style lang="css">
</style>
