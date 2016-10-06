<template>
  <transition name="mu-actionsheet" v-if="open">
    <div class="mu-actionsheet">
      <mu-menu :autoWidth="false" width="100%">
        <slot></slot>
      </mu-menu>
    </div>
  </transition>
</template>

<script>
import Popup from '../internal/popup'
import {menu} from '../menu'
export default {
  name: 'mu-actionsheet',
  mixins: [Popup],
  components: {
    'mu-menu': menu
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-actionsheet {
  background-color: @canvasColor;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

.mu-actionsheet-enter-active,
.mu-actionsheet-leave-active{
  transition: transform .45s @easeOutFunction;
}

.mu-actionsheet-enter,
.mu-actionsheet-leave-active{
  transform: translate3d(0, 100%, 0);
}
</style>
