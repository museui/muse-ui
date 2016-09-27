
<template>
    <i v-if="value" class="mu-icon material-icons" :style="{'font-size': size + 'px'}" v-text="value" :class="[value]" aria-hidden="true"></i>
</template>

<script>
export default {
  name: 'mu-icon',
  props: {
    value: {
      type: String
    },
    size: {
      type: Number,
      default: 24
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-icon {
    font-size: @iconSize;
    cursor: inherit;
}
</style>
