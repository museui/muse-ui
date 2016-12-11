<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')" />
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleRightCode" :title="$t('rightExample')">
    <ex-right/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleRight from './exampleRight'
import exampleRightCode from '!raw!./exampleRight'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleRightCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-right': exampleRight
  },
  locales: {
    zh,
    en
  }
}
</script>
