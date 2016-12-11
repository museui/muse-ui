<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')">
    <ex-simple />
  </code-example>
  <code-example :code="exampleCustomCode" :title="$t('customExample')">
    <ex-custom/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleCustom from './exampleCustom'
import exampleCustomCode from '!raw!./exampleCustom'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleCustomCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-custom': exampleCustom
  },
  locales: {
    zh,
    en
  }
}
</script>
