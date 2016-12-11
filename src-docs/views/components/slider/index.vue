<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleDisabledCode" :title="$t('disabledExample')">
    <ex-disabled/>
  </code-example>
  <code-example :code="exampleStepCode" :title="$t('stepExample')">
    <ex-step/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleDisabled from './exampleDisabled'
import exampleDisabledCode from '!raw!./exampleDisabled'
import exampleStep from './exampleStep'
import exampleStepCode from '!raw!./exampleStep'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleDisabledCode,
      exampleStepCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-disabled': exampleDisabled,
    'ex-step': exampleStep
  },
  locales: {
    zh,
    en
  }
}
</script>
