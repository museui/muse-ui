<template>
<div class="content-wrapper">
  <markdown-element :text="text"/>
  <code-example title="简单的使用" description="auto complete 组件必须要一个 `dataSource` 属性，决定了提示补全的内容。 " :code="exampleSimpleCode">
    <ex-simple/>
  </code-example>
  <code-example title="不同的配置参数使用"  description="`dataSource` 可以通过配置 `leftIcon` 或者 `rightIcon` 来显示 Icon， 通过设置 `openOnFocus` 输入框 focus 时的时候显示补全信息。 " :code="examplePropsCode">
    <ex-props/>
  </code-example>
  <code-example title="Filter 的使用"  description="通过配置不同的 `filter` 来过滤 `dataSource` 中的数据，只提示和输入相关的数据，也可以自定义 `filter` 函数，完成不同的 `dataSource` 过滤， `maxSearchResults` 用来控制显示结果的数量。" :code="exampleFilterCode">
    <ex-filter/>
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleProps from './exampleProps'
import examplePropsCode from '!raw!./exampleProps'
import exampleFilter from './exampleFilter'
import exampleFilterCode from '!raw!./exampleFilter'
import apiData from './api'
export default {
  data () {
    return {
      text: description,
      exampleSimpleCode,
      examplePropsCode,
      exampleFilterCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-props': exampleProps,
    'ex-filter': exampleFilter
  }
}
</script>

<style lang="css">
</style>
