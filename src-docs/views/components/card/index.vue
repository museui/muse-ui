<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')" />
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple/>
  </code-example>
  <api-view :api="apiData.card" title="Card Slots" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.cardHeader" title="CardHeader" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.cardMedia" title="CardMedia" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.cardTitle" title="CardTitle" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.cardText" title="CardText Slots" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.cardActions" title="CardActions Slots" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="css">
</style>
