<template>
<div class="mu-paper" :class="paperClass">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'mu-paper',
  props: {
    circle: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: true
    },
    zDepth: {
      type: Number,
      default: 1
    }
  },
  computed: {
    paperClass () {
      var arr = []
      if (this.circle) arr.push('mu-paper-circle')
      if (this.rounded) arr.push('mu-paper-round')
      arr.push('mu-paper-' + this.zDepth)
      return arr
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-paper {
  transition: all .45s @easeOutFunction;
  color: @textColor;
  background-color: @dialogBackgroundColor;
  .depth(1);
}

.mu-paper-round {
  border-radius: 2px;
}

.mu-paper-circle {
  border-radius: 50%;
}

.mu-paper-1 {
  .depth(1);
}

.mu-paper-2 {
  .depth(2);
}

.mu-paper-3 {
  .depth(4);
}

.mu-paper-4 {
  .depth(4);
}

.mu-paper-5 {
  .depth(5);
}
</style>
