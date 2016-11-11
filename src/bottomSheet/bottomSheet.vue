<template>
  <transition name="mu-bottom-sheet">
    <div class="mu-bottom-sheet">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import Popup from '../internal/popup'
export default {
  name: 'mu-bottom-sheet',
  mixins: [Popup],
  methods: {
    overlayClick () {
      this.$emit('close', 'overlay')
    },
    escPress () {
      this.$emit('close', 'esc')
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-bottom-sheet {
  background-color: @dialogBackgroundColor;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

.mu-bottom-sheet-enter-active,
.mu-bottom-sheet-leave-active{
  transition: transform .45s @easeOutFunction;
}

.mu-bottom-sheet-enter,
.mu-bottom-sheet-leave-active{
  transform: translate3d(0, 100%, 0);
}
</style>
