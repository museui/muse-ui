<template>
<transition name="mu-toast">
  <div class="mu-toast" v-clickoutside="clickOutSide" :style="{'z-index': zIndex}">
    {{message}}
  </div>
</transition>
</template>

<script>
import {getZIndex} from '../internal/popup/utils'
import clickoutside from '../internal/clickoutside'
export default {
  name: 'mu-toast',
  props: {
    message: {
      type: String
    }
  },
  methods: {
    clickOutSide () {
      this.$emit('close', 'clickOutSide')
    }
  },
  data () {
    return {
      zIndex: getZIndex()
    }
  },
  directives: {
    clickoutside
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-toast {
  height: 48px;
  line-height: 48px;
  padding: 0 24px;
  background-color: @textColor;
  color: @alternateTextColor;
  border-radius: 24px;
  .ellipsis();
  max-width: 568px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}


@media only screen and (max-width: 992px) and (min-width: 601px) {
  .mu-toast {
    width: auto;
    min-width: 288px;
    left: 5%;
    bottom: 7%;
  }
}
@media only screen and (min-width: 993px) {
  .mu-toast {
    width: auto;
    min-width: 8%;
    top: 10%;
    right: 7%;
    left: auto;
    bottom: auto;
    min-width: 288px;
  }
}

.mu-toast-enter-active,.mu-toast-leave-active{
  transition: transform .4s @easeOutFunction, opacity .4s @easeOutFunction;
  backface-visibility: hidden;
}

.mu-toast-enter,
.mu-toast-leave-active{
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}
</style>
