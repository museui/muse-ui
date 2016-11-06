<template>
<div class="content-wrapper">
  <markdown-element :text="description" />
  <code-example :code="exampleSimpleCode" title="简单的用法" description="两个简单的例子，可以根据内容自动调整宽度">
    <ex-simple />
  </code-example>
  <code-example :code="exampleDisabledCode" title="不可用的菜单" description="改变`desktop`将菜单的样式改为桌面版， 设置`disabled`菜单项将不可以用">
    <ex-disabled />
  </code-example>
  <code-example :code="exampleIconCode" title="图标使用" description="`menuItem` 组件使用 `leftIcon` 和 `rightIcon` 来配合 `icon` 组件">
    <ex-icon />
  </code-example>
  <code-example :code="exampleAfterCode" title="菜单快捷显示" description="`afterText` 属性定义标题右边的文字">
    <ex-after />
  </code-example>
  <code-example :code="exampleNestedCode" title="嵌套菜单" description="通过 `slot` 指定嵌套菜单，会在点击时出现 ">
    <ex-nested />
  </code-example>
  <api-view :api="apiData.menu" title="Menu API"/>
  <api-view :api="apiData.menuItem" title="MenuItem API"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleDisabled from './exampleDisabled'
import exampleDisabledCode from '!raw!./exampleDisabled'
import exampleIcon from './exampleIcon'
import exampleIconCode from '!raw!./exampleIcon'
import exampleAfter from './exampleAfter'
import exampleAfterCode from '!raw!./exampleAfter'
import exampleNested from './exampleNested'
import exampleNestedCode from '!raw!./exampleNested'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleDisabledCode,
      exampleIconCode,
      exampleAfterCode,
      exampleNestedCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-disabled': exampleDisabled,
    'ex-icon': exampleIcon,
    'ex-after': exampleAfter,
    'ex-nested': exampleNested
  }
}
</script>
