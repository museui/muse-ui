<template>
<td class="mu-td">
  <slot></slot>
</td>
</template>

<script>
export default {
  name: 'mu-td'
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-td{
  padding-left: 24px;
  padding-right: 24px;
  height: 48px;
  text-align: left;
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
