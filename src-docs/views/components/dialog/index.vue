<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleAlertCode" :title="$t('alertExample')" :description="$t('alertExampleDesc')">
    <ex-alert/>
  </code-example>
  <code-example :code="exampleScrollCode" :title="$t('scrollExample')">
    <ex-scroll/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleAlert from './exampleAlert'
import exampleAlertCode from '!raw!./exampleAlert'
import exampleScroll from './exampleScroll'
import exampleScrollCode from '!raw!./exampleScroll'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleAlertCode,
      exampleScrollCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-alert': exampleAlert,
    'ex-scroll': exampleScroll
  },
  locales: {
    zh,
    en
  }
}
</script>
