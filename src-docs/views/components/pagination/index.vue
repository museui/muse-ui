<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :title="$t('simpleExample')" :code="examplePaginationCode">
    <ex-pagination/>
  </code-example>
  <code-example :title="$t('moreExample')" :code="morePaginationCode">
    <ex-morePagination/>
  </code-example>
  <code-example :title="$t('pageSizeExample')" :code="pageSizeChangeCode">
    <ex-pageSizeChange/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import examplePagination from './examplePagination'
import examplePaginationCode from '!raw!./examplePagination'
import morePagination from './morePagination'
import morePaginationCode from '!raw!./morePagination'
import pageSizeChange from './pageSizeChange'
import pageSizeChangeCode from '!raw!./pageSizeChange'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      examplePaginationCode,
      morePaginationCode,
      pageSizeChangeCode,
      apiData
    }
  },
  components: {
    'ex-pagination': examplePagination,
    'ex-morePagination': morePagination,
    'ex-pageSizeChange': pageSizeChange
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="css">
</style>
