<template>
<transition name="mu-dialog-scale">
  <div class="mu-dialog">
    <div class="mu-dialog-header" ref="title" :class="{'scrollable': scrollable}" v-if="title">
      <div class="mu-dialog-title">
        {{title}}
      </div>
    </div>
    <div class="mu-dialog-body " :style="bodyStyle">
      <slot>
        <div v-if="message">
          {{message}}
        </div>
      </slot>
    </div>
    <div class="mu-dialog-footer" ref="footer" :class="{'scrollable': scrollable}">
      <slot name="actions">
      </slot>
    </div>
  </div>
</transition>
</template>

<script>
import Popup from '../internal/popup'
export default {
  mixins: [Popup],
  name: 'mu-dialog',
  props: {
    title: {
      type: String
    },
    message: {
      type: String
    },
    scrollable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bodyStyle () {
      return {
        'overflow-x': 'hidden',
        'overflow-y': this.scrollable ? 'auto' : 'hidden',
        'max-height': this.scrollable ? this.maxDialogContentHeight + 'px' : 'none'
      }
    }
  },
  data () {
    return {
      maxDialogContentHeight: null
    }
  },
  mounted () {
    let maxDialogContentHeight = window.innerHeight - 2 * 64
    maxDialogContentHeight -= this.$refs.footer.offsetHeight
    if (this.title) maxDialogContentHeight -= this.$refs.title.offsetHeight
    this.maxDialogContentHeight = maxDialogContentHeight
  },
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
.mu-dialog {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 75%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0;
  background-color: @canvasColor;
  border-radius: 2px;
  font-size: 16px;
  .depth(5);
}

.mu-dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 20px;
  + .mu-dialog-body{
    padding-top: 0;
  }
  &.scrollable{
    border-bottom: 1px solid @borderColor;
  }
}
.mu-dialog-title {
  flex: 1;
  font-size: 22px;
  line-height: 32px;
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: normal;
  color: @textColor;
}
.mu-dialog-body {
  padding: 24px 24px 20px;
  color: fade(@textColor, 60%);
}

.mu-dialog-footer {
  min-height: 48px;
  padding: 8px;
  text-align: right;
  .mu-raised-button + .mu-raised-button{
    margin-left: 10px;
  }
  &.scrollable{
    border-top: 1px solid @borderColor;
  }
}

.mu-dialog-scale-enter-active,
.mu-dialog-scale-leave-active{
  transition: all .45s @easeOutFunction;
}
.mu-dialog-scale-enter,
.mu-dialog-scale-leave-active {
    opacity: 0;
}

.mu-dialog-scale-enter {
  transform: translate3d(-50%, -50%, 0) scale(1.1) ;
}
.mu-dialog-scale-leave-active {
  transform: translate3d(-50%, -50%, 0) scale(0.8) ;
}
</style>
