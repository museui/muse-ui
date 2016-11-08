<template>
<div class="content-wrapper">
  <markdown-element :text="description" />
  <code-example :code="exampleSimpleCode" title="简单的使用" description="关于 `textField` 一些简单的使用例子， 还是可以通过 `v-model` 控制value">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleErrorCode" title="错误状态样式" description="使用 `errorText` 在输入出错时给提示，并且输入框变为错误状态， 可根据 `errorColor` 调整颜色">
    <ex-error/>
  </code-example>
  <code-example :code="exampleIconCode" title="使用图标的示例">
    <ex-icon/>
  </code-example>
  <code-example :code="exampleDisabledCode" title="输入框被禁用">
    <ex-disabled/>
  </code-example>
  <code-example :code="exampleInputLengthCode" title="输入字符数记录" description="设置 `maxLength` 属性，启动输入字符数记录，再输入时会触发 `textOverflow` 事件，当一个参数为 `true` 是则说明输入的长度已超过最大长度">
    <ex-input-length/>
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleError from './exampleError'
import exampleErrorCode from '!raw!./exampleError'
import exampleIcon from './exampleIcon'
import exampleIconCode from '!raw!./exampleIcon'
import exampleDisabled from './exampleDisabled'
import exampleDisabledCode from '!raw!./exampleDisabled'
import exampleInputLength from './exampleInputLength'
import exampleInputLengthCode from '!raw!./exampleInputLength'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleErrorCode,
      exampleIconCode,
      exampleDisabledCode,
      exampleInputLengthCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-error': exampleError,
    'ex-icon': exampleIcon,
    'ex-disabled': exampleDisabled,
    'ex-input-length': exampleInputLength
  }
}
</script>
