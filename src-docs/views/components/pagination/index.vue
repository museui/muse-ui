<template>
<div class="content-wrapper">
  <markdown-element :text="text"/>
  <code-example title="简单的使用" :code="examplePaginationCode">
    <ex-pagination/>
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import examplePagination from './examplePagination'
import examplePaginationCode from '!raw!./examplePagination'
import apiData from './api'
export default {
  data () {
    return {
      text: description,
      examplePaginationCode,
      apiData
    }
  },
  components: {
    'ex-pagination': examplePagination
  }
}
</script>

<style lang="css">
</style>
