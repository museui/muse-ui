<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :title="$t('simpleExample')" :description="$t('simpleExampleDesc')" :code="exampleSimpleCode">
    <ex-simple/>
  </code-example>
  <code-example :title="$t('configExample')"  :description="$t('configExampleDesc')" :code="examplePropsCode">
    <ex-props/>
  </code-example>
  <code-example :title="$t('filterExample')"  :description="$t('filterExampleDesc')" :code="exampleFilterCode">
    <ex-filter/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleProps from './exampleProps'
import examplePropsCode from '!raw!./exampleProps'
import exampleFilter from './exampleFilter'
import exampleFilterCode from '!raw!./exampleFilter'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      examplePropsCode,
      exampleFilterCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-props': exampleProps,
    'ex-filter': exampleFilter
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="css">
</style>
