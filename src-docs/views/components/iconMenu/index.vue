<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple />
  </code-example>
  <code-example :code="exampleControlCode" :title="$t('controlExample')" :description="$t('controlExampleDesc')">
    <ex-control />
  </code-example>
  <code-example :code="exampleScrollableCode" :title="$t('scrollableExample')">
    <ex-scroll />
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleControl from './exampleControl'
import exampleControlCode from '!raw!./exampleControl'
import exampleScrollable from './exampleScrollable'
import exampleScrollableCode from '!raw!./exampleScrollable'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleControlCode,
      exampleScrollableCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-control': exampleControl,
    'ex-scroll': exampleScrollable
  },
  locales: {
    zh,
    en
  }
}
</script>
