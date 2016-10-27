<template>
<mu-paper class="code-examples">
  <div class="code-toolbar">
    <span class="code-toolBar-title">{{title}}</span>
    <mu-icon-button touch :tooltip="tooltip" icon="code"/>
  </div>

</mu-paper>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      tooltip: ''
    }
  }
}
</script>

<style lang="less">
@import "../../../src/styles/import.less";
.code-examples {
  background-color: @canvasColor;
  margin-bottom: 32px;
}

.code-toolbar{
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0px 24px;
  background-color: darken(@canvasColor, 26%);
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
</style>
