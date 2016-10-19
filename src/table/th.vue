<template>
  <th class="mu-th">
    <slot></slot>
  </th>
</template>

<script>
export default {
  name: 'mu-th'
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-th {
  font-weight: normal;
  font-size: 12px;
  padding-left: 24px;
  padding-right: 24px;
  height: 56px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: @secondaryTextColor;
  position: relative;
}
</style>
