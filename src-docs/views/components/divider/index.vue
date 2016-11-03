<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleFormCode" title="配合表单元素使用">
    <ex-form />
  </code-example>
  <code-example :code="exampleListCode" title="配合List组件使用">
    <ex-list />
  </code-example>
  <code-example :code="exampleMenuCode" title="配合Menu组件使用">
    <ex-menu />
  </code-example>
  <api-view :api="apiData" />
</div>
</template>

<script>
import description from './README.md'
import exampleForm from './exampleForm'
import exampleFormCode from '!raw!./exampleForm'
import exampleList from './exampleList'
import exampleListCode from '!raw!./exampleList'
import exampleMenu from './exampleMenu'
import exampleMenuCode from '!raw!./exampleMenu'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleFormCode,
      exampleListCode,
      exampleMenuCode,
      apiData
    }
  },
  components: {
    'ex-form': exampleForm,
    'ex-list': exampleList,
    'ex-menu': exampleMenu
  }
}
</script>
