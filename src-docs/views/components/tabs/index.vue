<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleIconCode" :title="$t('iconExample')">
    <ex-icon />
  </code-example>
  <code-example :code="exampleIconTextCode" :title="$t('iconTextExample')">
    <ex-icon-text />
  </code-example>

  <api-view :api="apiData.tabs" title="Tabs API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.tab" title="Tab API" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleIcon from './exampleIcon'
import exampleIconCode from '!raw!./exampleIcon'
import exampleIconText from './exampleIconText'
import exampleIconTextCode from '!raw!./exampleIconText'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleIconCode,
      exampleIconTextCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-icon': exampleIcon,
    'ex-icon-text': exampleIconText
  },
  locales: {
    zh,
    en
  }
}
</script>
