<template>
<div class="code-block">
  <div class="code-toolbar" @click="toggle">
    <span class="code-toolBar-title">{{title}}</span>
    <mu-icon-button touch :tooltip="tooltip" icon="code"/>
  </div>
  <markdown-element :text="text" class="code-block-code-style" :class="{'hide': !open}"/>
  <markdown-element v-if="description" :text="description" class="code-block-description"/>
</div>
</template>

<script>
import markdownElement from '../markdownElement'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String
    },
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      tooltip: '示例代码',
      open: false
    }
  },
  computed: {
    text () {
      return `\`\`\`html
${this.code}
             \`\`\``
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  },
  components: {
    'markdown-element': markdownElement
  }
}
</script>

<style lang="less">
@import "../../../src/styles/import.less";
.code-toolbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0px 24px;
  background-color: darken(@darkerAccentColor, 5%);
  cursor: pointer;
}

.code-toolBar-title{
  padding-right: 16px;
  line-height: 56px;
  font-size: 20px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: @secondaryTextColor;
}

.code-block-code-style {
  overflow: auto;
  max-height: 1400px;
  transition: max-height 800ms @easeInOutFunction;
  display: block;
  overflow-x: auto;
  margin: 0;
  &.hide {
    max-height: 0;
  }
}

.code-block-description{
  overflow: auto;
  padding: 10px 20px 0;
  margin: 0;
}
</style>
