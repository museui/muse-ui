<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :title="$t('exampleHeaderContentFooter')" :code="exampleHeaderContentFooterCode">
    <exampleHeaderContentFooter/>
  </code-example>
  <code-example :title="$t('exampleHeaderSiderOne')" :code="exampleHeaderSiderOneCode">
    <exampleHeaderSiderOne/>
  </code-example>
  <code-example :title="$t('exampleHeaderSiderTwo')" :code="exampleHeaderSiderTwoCode">
    <exampleHeaderSiderTwo/>
  </code-example>
  <code-example :title="$t('exampleSider')" :code="exampleSiderCode">
    <exampleSider/>
  </code-example>
</div>
</template>

<script>
import exampleHeaderContentFooter from './exampleHeaderContentFooter'
import exampleHeaderContentFooterCode from '!raw!./exampleHeaderContentFooter'
import exampleHeaderSiderOne from './exampleHeaderSiderOne'
import exampleHeaderSiderOneCode from '!raw!./exampleHeaderSiderOne'
import exampleHeaderSiderTwo from './exampleHeaderSiderTwo'
import exampleHeaderSiderTwoCode from '!raw!./exampleHeaderSiderTwo'
import exampleSider from './exampleSider'
import exampleSiderCode from '!raw!./exampleSider'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleHeaderContentFooterCode,
      exampleHeaderSiderOneCode,
      exampleHeaderSiderTwoCode,
      exampleSiderCode
    }
  },
  components: {
    exampleHeaderContentFooter,
    exampleHeaderSiderOne,
    exampleHeaderSiderTwo,
    exampleSider
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="css">
</style>
