<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleFormCode" :title="$t('formExample')">
    <ex-form />
  </code-example>
  <code-example :code="exampleListCode" :title="$t('listExample')">
    <ex-list />
  </code-example>
  <code-example :code="exampleMenuCode" :title="$t('menuExample')">
    <ex-menu />
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleForm from './exampleForm'
import exampleFormCode from '!raw!./exampleForm'
import exampleList from './exampleList'
import exampleListCode from '!raw!./exampleList'
import exampleMenu from './exampleMenu'
import exampleMenuCode from '!raw!./exampleMenu'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
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
  },
  locales: {
    zh,
    en
  }
}
</script>
