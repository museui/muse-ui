<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :title="$t('simpleExample')"  :description="$t('simpleExampleDesc')" :code="exampleCode">
    <example/>
  </code-example>
  <code-example :title="$t('defineExample')"  :description="$t('defineExampleDesc')" :code="defineExampleCode">
    <defineExample/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import example from './example'
import exampleCode from '!raw!./example'
import defineExample from './defineExample'
import defineExampleCode from '!raw!./defineExample'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleCode,
      defineExampleCode,
      apiData
    }
  },
  components: {
    example,
    defineExample
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="css">
</style>
