<template>
<div class="content-wrapper">
  <markdown-element :text="text"/>
  <code-example title="简单的使用" :code="examplePaginationCode">
    <ex-pagination/>
  </code-example>
  <code-example title="更多的分页" :code="morePaginationCode">
    <ex-morePagination/>
  </code-example>
  <code-example title="改变每页显示条目数" :code="pageSizeChangeCode">
    <ex-pageSizeChange/>
  </code-example>
  <!-- <code-example title="快速跳转到某一页" :code="quickJumpCode">
    <ex-quickJump/>
  </code-example> -->
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import examplePagination from './examplePagination'
import examplePaginationCode from '!raw!./examplePagination'
import morePagination from './morePagination'
import morePaginationCode from '!raw!./morePagination'
import pageSizeChange from './pageSizeChange'
import pageSizeChangeCode from '!raw!./pageSizeChange'
// import quickJump from './quickJump'
// import quickJumpCode from '!raw!./quickJump'
import apiData from './api'
export default {
  data () {
    return {
      text: description,
      examplePaginationCode,
      morePaginationCode,
      pageSizeChangeCode,
      // quickJumpCode,
      apiData
    }
  },
  components: {
    'ex-pagination': examplePagination,
    'ex-morePagination': morePagination,
    // 'ex-quickJump': quickJump,
    'ex-pageSizeChange': pageSizeChange
  }
}
</script>

<style lang="css">
</style>
