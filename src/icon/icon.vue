<template>
  <i v-if="value" @click="handleClick" class="mu-icon material-icons" :style="style" v-text="value" :class="[value]" aria-hidden="true"></i>
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
  },
  computed: {
    style () {
      return {
        'font-size': this.size + 'px',
        'width': this.size + 'px',
        'height': this.size + 'px'
      }
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
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
