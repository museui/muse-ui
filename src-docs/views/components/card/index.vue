<template>
<div class="content-wrapper">
  <markdown-element :text="description" />
  <code-example :code="exampleSimpleCode" title="简单的使用" description="`card` 需要一系列组件配合使用才能完成效果, `mu-card`、`mu-card-header`、`mu-card-media`、`mu-card-title`、`mu-card-text`、`mu-card-actions`">
    <ex-simple/>
  </code-example>
  <api-view :api="apiData.card" title="Card Slots"/>
  <api-view :api="apiData.cardHeader" title="CardHeader"/>
  <api-view :api="apiData.cardMedia" title="CardMedia"/>
  <api-view :api="apiData.cardTitle" title="CardTitle"/>
  <api-view :api="apiData.cardText" title="CardText Slots"/>
  <api-view :api="apiData.cardActions" title="CardActions Slots"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple
  }
}
</script>

<style lang="css">
</style>
