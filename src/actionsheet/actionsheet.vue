<template>
  <transition name="mu-actionsheet">
    <div class="mu-actionsheet">

    </div>
  </transition>
</template>

<script>
import Popup from '../internal/popup'
export default {
  mixins: [Popup],
  props: {
    open: {
      default: true
    }
  }
}
</script>

<style lang="css">
</style>
