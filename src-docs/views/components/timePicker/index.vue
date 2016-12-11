<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleInlineCode" :title="$t('inlineExample')" :description="$t('inlineExampleDesc')">
    <ex-inline/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleInline from './exampleInline'
import exampleInlineCode from '!raw!./exampleInline'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleInlineCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-inline': exampleInline
  },
  locales: {
    zh,
    en
  }
}
</script>
