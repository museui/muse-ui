<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')">
    <ex-simple />
  </code-example>
  <code-example :code="exampleShiftCode" :title="$t('shiftExample')">
    <ex-shift />
  </code-example>
  <api-view :api="apiData.bottomNav" title="BottomNav API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.bottomNavItem" title="bottomNavItem API" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleShift from './exampleShift'
import exampleShiftCode from '!raw!./exampleShift'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleShiftCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-shift': exampleShift
  },
  locales: {
    zh,
    en
  }
}
</script>
