<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleCircleCode" :title="$t('circleExample')">
    <ex-circle/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleCircle from './exampleCircle'
import exampleCircleCode from '!raw!./exampleCircle'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleCircleCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-circle': exampleCircle
  },
  locales: {
    zh,
    en
  }
}
</script>
