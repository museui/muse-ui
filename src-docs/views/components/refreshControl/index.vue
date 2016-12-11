<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <example />
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import example from './example'
import exampleCode from '!raw!./example'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleCode,
      apiData
    }
  },
  components: {
    example
  },
  locales: {
    zh,
    en
  }
}
</script>
