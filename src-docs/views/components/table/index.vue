<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleComplexCode" :title="$t('complexExample')" :description="$t('complexExampleDesc')">
    <ex-complex/>
  </code-example>

  <api-view :api="apiData.table" title="Table API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.thead" title="Thead Slots" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.tbody" title="Tbody Slots" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.tfoot" title="Tfoot Slots" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.tr" title="Tr API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.th" title="Th API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.td" title="Td API" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleComplex from './exampleComplex'
import exampleComplexCode from '!raw!./exampleComplex'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleComplexCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-complex': exampleComplex
  },
  locales: {
    zh,
    en
  }
}
</script>
