<template>
<mu-paper class="code-examples">
  <code-block :title="title" :description="description" :code="code"/>
  <div class="code-examples-content">
    <slot></slot>
  </div>
</mu-paper>
</template>

<script>
import codeBlock from './codeBlock'
export default {
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    code: {
      type: String
    }
  },
  data () {
    return {
      tooltip: ''
    }
  },
  components: {
    'code-block': codeBlock
  }
}
</script>

<style lang="less">
@import "../../../src/styles/import.less";
.code-examples {
  background-color: @dialogBackgroundColor;
  margin-bottom: 32px;
  .markdown-body + & {
    margin-top: 24px;
  }
}

.code-examples-content{
  border-radius: 0 0 2px 0;
  padding: 14px 24px 24px;
  margin: 0;
}
</style>
