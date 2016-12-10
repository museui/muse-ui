<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <example/>
  </code-example>
</div>
</template>

<script>
import description from './README.md'
import descriptionEn from './README_EN.md'
import example from './example'
import exampleCode from '!raw!./example'
export default {
  data () {
    return {
      description,
      exampleCode
    }
  },
  components: {
    example
  },
  locales: {
    zh: {
      description,
      simpleExample: '使用示例',
      simpleExampleDesc: 'contentBlock 是一个普通的内容块，只是调整了padding'
    },
    en: {
      description: descriptionEn,
      simpleExample: 'Simple Example',
      simpleExampleDesc: 'contentBlock is content block，only set padding'
    }
  }
}
</script>
