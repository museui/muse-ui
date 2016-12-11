<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :title="$t('listExample')" :code="exampleListCode">
    <ex-list/>
  </code-example>

  <code-example :title="$t('insetExample')" :code="exampleInsetCode">
    <ex-inset/>
  </code-example>

  <code-example :title="$t('gridListExample')" :code="exampleGridListCode">
    <ex-grid-list/>
  </code-example>

  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleList from '../list/exampleChat'
import exampleListCode from '!raw!../list/exampleChat'
import exampleInset from '../list/exampleFolder'
import exampleInsetCode from '!raw!../list/exampleFolder'
import exampleGridList from '../gridList/exampleSimple'
import exampleGridListCode from '!raw!../gridList/exampleSimple'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleListCode,
      exampleInsetCode,
      exampleGridListCode,
      apiData
    }
  },
  components: {
    'ex-list': exampleList,
    'ex-inset': exampleInset,
    'ex-grid-list': exampleGridList
  },
  locales: {
    zh,
    en
  }
}
</script>
