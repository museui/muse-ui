<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleInlineCode" :title="$t('inlineExample')" :description="$t('inlineExampleDesc')">
    <ex-inline/>
  </code-example>
  <code-example :code="exampleSelectCode" :title="$t('controlExample')" :description="$t('controlExampleDesc')">
    <ex-select />
  </code-example>
  <code-example :code="exampleDisabledCode" :title="$t('disabledExample')" :description="$t('disabledExampleDesc')">
    <ex-disabled />
  </code-example>
  <code-example :code="exampleLocaleCode" :title="$t('localeExample')" :description="$t('localeExampleDesc')">
    <ex-locale/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleInline from './exampleInline'
import exampleInlineCode from '!raw!./exampleInline'
import exampleSelect from './exmapleSelect'
import exampleSelectCode from '!raw!./exmapleSelect'
import exampleDisabled from './exampleDisabled'
import exampleDisabledCode from '!raw!./exampleDisabled'
import exampleLocale from './exampleLocale'
import exampleLocaleCode from '!raw!./exampleLocale'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleInlineCode,
      exampleSelectCode,
      exampleDisabledCode,
      exampleLocaleCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-inline': exampleInline,
    'ex-select': exampleSelect,
    'ex-disabled': exampleDisabled,
    'ex-locale': exampleLocale
  },
  locales: {
    zh,
    en
  }
}
</script>
