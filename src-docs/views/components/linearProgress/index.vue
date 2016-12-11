<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleIndeterminateCode" title="Indeterminate Progress" :description="$t('indeterminateDesc')">
    <ex-indeterminate />
  </code-example>
  <code-example :code="exampleDeterminateCode" title="Determinate Progress" :description="$t('determinateDesc')">
    <ex-determinate/>
  </code-example>
  <code-example :code="exampleCustomCode" :title="$t('customExample')">
    <ex-custom/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleIndeterminate from './exampleIndeterminate'
import exampleIndeterminateCode from '!raw!./exampleIndeterminate'
import exampleDeterminate from './exampleDeterminate'
import exampleDeterminateCode from '!raw!./exampleDeterminate'
import exampleCustom from './exampleCustom'
import exampleCustomCode from '!raw!./exampleCustom'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleIndeterminateCode,
      exampleDeterminateCode,
      exampleCustomCode,
      apiData
    }
  },
  components: {
    'ex-indeterminate': exampleIndeterminate,
    'ex-determinate': exampleDeterminate,
    'ex-custom': exampleCustom
  },
  locales: {
    zh,
    en
  }
}
</script>
