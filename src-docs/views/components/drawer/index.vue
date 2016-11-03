<template>
<div class="content-wrapper">
  <markdown-element :text="description" />
  <code-example :code="exampleSimpleCode" title="简单的使用" description="使用 `open` 参数控制显示, `docked` 默认为 true,这个时候不会显示遮盖层，点击菜单也不会关闭">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleRightCode" title="打开右边的 Drawer">
    <ex-right/>
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleRight from './exampleRight'
import exampleRightCode from '!raw!./exampleRight'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleRightCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-right': exampleRight
  }
}
</script>
