<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleComplexCode" :title="$t('complexExample')" :description="$t('complexExampleDesc')">
    <ex-complex/>
  </code-example>
  <code-example :code="exampleInlineCode" :title="$t('inlineExample')" :description="$t('inlineExampleDesc')">
    <ex-inline/>
  </code-example>
  <api-view :api="apiData.gridList" title="GridList API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.gridTile" title="GridTile API" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleComplex from './exampleComplex'
import exampleComplexCode from '!raw!./exampleComplex'
import exampleInline from './exampleInline'
import exampleInlineCode from '!raw!./exampleInline'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleComplexCode,
      exampleInlineCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-complex': exampleComplex,
    'ex-inline': exampleInline
  },
  locales: {
    zh,
    en
  }
}
</script>
