<template>
<div class="content-wrapper">
  <markdown-element :text="text"/>
  <code-example title="简单的使用" :code="exampleIconCode">
    <ex-icon/>
  </code-example>
  <code-example title="配合 IconMenu 加入菜单" :code="exampleIconMenuCode">
    <ex-icon-menu/>
  </code-example>
  <code-example title="加入搜索框和按钮" :code="exampleFieldCode">
    <ex-field/>
  </code-example>

  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleIcon from './exampleIcon'
import exampleIconCode from '!raw!./exampleIcon'
import exampleIconMenu from './exampleIconMenu'
import exampleIconMenuCode from '!raw!./exampleIconMenu'
import exampleField from './exampleField'
import exampleFieldCode from '!raw!./exampleField'
import apiData from './api'
export default {
  data () {
    return {
      text: description,
      exampleIconCode: exampleIconCode,
      exampleIconMenuCode,
      exampleFieldCode,
      apiData
    }
  },
  components: {
    'ex-icon': exampleIcon,
    'ex-icon-menu': exampleIconMenu,
    'ex-field': exampleField
  }
}
</script>

<style lang="css">
</style>
