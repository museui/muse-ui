<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleCode" :title="$t('simpleExample')">
    <example/>
  </code-example>

  <api-view :api="apiData.flexbox" title="Flexbox API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.flexboxItem" title="FlexboxItem API" :i18n="$t.bind(this)"/>
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
