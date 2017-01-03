<template>
<transition name="mu-snackbar">
  <div class="mu-snackbar" v-clickoutside="clickOutSide" :style="{'z-index': zIndex}">
    <div class="mu-snackbar-message">
      {{message}}
    </div>
    <flat-button v-if="action" @click="handleActionClick" class="mu-snackbar-action" :color="actionColor"  rippleColor="#FFF" :rippleOpacity="0.3" secondary :label="action"/>
  </div>
</transition>
</template>

<script>
import flatButton from '../flatButton'
import {getZIndex} from '../internal/popup/utils'
import clickoutside from '../internal/clickoutside'
export default {
  name: 'mu-snackbar',
  props: {
    action: {
      type: String
    },
    actionColor: {
      type: String
    },
    message: {
      type: String
    }
  },
  data () {
    return {
      zIndex: getZIndex()
    }
  },
  methods: {
    clickOutSide () {
      this.$emit('close', 'clickOutSide')
    },
    handleActionClick () {
      this.$emit('actionClick')
      this.$emit('action-click')
    }
  },
  components: {
    'flat-button': flatButton
  },
  directives: {
    clickoutside
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-snackbar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: @alternateTextColor;
  background-color: @textColor;
  padding: 0px 24px;
  min-height: 48px;
  width: 100%;
  max-width: 568px;
}

.mu-snackbar-action{
  margin: 0 -16px 0 24px;
}

.mu-snackbar-message {
  display: flex;
  flex: 1;
  padding-top: 8px;
  padding-bottom: 8px;
}

@media only screen and (max-width: 992px) and (min-width: 601px) {
  .mu-snackbar {
    width: auto;
    min-width: 288px;
    left: 5%;
    bottom: 7%;
  }
}
@media only screen and (min-width: 993px) {
  .mu-snackbar {
    width: auto;
    min-width: 8%;
    top: 10%;
    right: 7%;
    left: auto;
    bottom: auto;
    min-width: 288px;
  }
}

.mu-snackbar-enter-active,.mu-snackbar-leave-active{
  transition: transform .4s @easeOutFunction, opacity .4s @easeOutFunction;
  backface-visibility: hidden;
}

.mu-snackbar-enter,
.mu-snackbar-leave-active{
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}

</style>
