<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleTooltipCode" :title="$t('tooltipExample')" :description="$t('tooltipExampleDesc')">
    <ex-tooltip/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleTooltip from './exampleTooltip'
import exampleTooltipCode from '!raw!./exampleTooltip'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleTooltipCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-tooltip': exampleTooltip
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="css">
</style>
