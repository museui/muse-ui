<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :title="$t('simpleExample')" :code="exampleIconCode">
    <ex-icon/>
  </code-example>
  <code-example :title="$t('iconMenu')" :code="exampleIconMenuCode">
    <ex-icon-menu/>
  </code-example>
  <code-example :title="$t('addSearch')" :code="exampleFieldCode">
    <ex-field/>
  </code-example>

  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleIcon from './exampleIcon'
import exampleIconCode from '!raw!./exampleIcon'
import exampleIconMenu from './exampleIconMenu'
import exampleIconMenuCode from '!raw!./exampleIconMenu'
import exampleField from './exampleField'
import exampleFieldCode from '!raw!./exampleField'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
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
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="css">
</style>
