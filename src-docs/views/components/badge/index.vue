<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :title="$t('simpleExample')"  :description="$t('simpleExampleDesc')" :code="exampleSimpleCode">
    <ex-simple />
  </code-example>
  <code-example :title="$t('iconAndButton')"  :description="$t('iconAndButtonDesc')" :code="exampleIconCode">
    <ex-icon />
  </code-example>
  <code-example :title="$t('custom')" :code="exampleContentCode">
    <ex-content />
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleIcon from './exampleIcon'
import exampleIconCode from '!raw!./exampleIcon'
import exampleContent from './exampleContent'
import exampleContentCode from '!raw!./exampleContent'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleIconCode,
      exampleContentCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-icon': exampleIcon,
    'ex-content': exampleContent
  },
  locales: {
    zh,
    en
  }
}
</script>
