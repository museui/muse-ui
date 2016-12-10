<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" title="Indeterminate Progress">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleDeterminateCode" title="Determinate Progress">
    <ex-determinate/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleDeterminate from './exampleDeterminate'
import exampleDeterminateCode from '!raw!./exampleDeterminate'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleDeterminateCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-determinate': exampleDeterminate
  },
  locales: {
    zh,
    en
  }
}
</script>
