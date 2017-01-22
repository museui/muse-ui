<template>
  <span>
    <transition name="mu-dialog-slide" @after-enter="show()" @after-leave="hide()">
      <div class="mu-dialog-wrapper" v-show="open" ref="popup" :class="dialogClass" :style="{'z-index': zIndex}">
        <div class="mu-dialog">
          <h3 class="mu-dialog-title" v-if="showTitle" ref="title" :class="headerClass">
            <slot name="title">
              {{title}}
            </slot>
          </h3>
          <div class="mu-dialog-body " :style="bodyStyle" :class="bodyClass">
            <slot></slot>
          </div>
          <div class="mu-dialog-actions" v-if="showFooter" ref="footer" :class="footerClass">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    </transition>
  </span>
</template>

<script>
import Popup from '../internal/popup'
import {convertClass} from '../utils'
export default {
  mixins: [Popup],
  name: 'mu-dialog',
  props: {
    dialogClass: {
      type: [String, Array, Object]
    },
    title: {
      type: String
    },
    titleClass: {
      type: [String, Array, Object]
    },
    bodyClass: {
      type: [String, Array, Object]
    },
    actionsContainerClass: {
      type: [String, Array, Object]
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
        '-webkit-overflow-scrolling': 'touch',
        'max-height': this.scrollable ? this.maxDialogContentHeight + 'px' : 'none'
      }
    },
    showTitle () {
      return this.title || (this.$slots && this.$slots.title && this.$slots.title.length > 0)
    },
    showFooter () {
      return this.$slots && this.$slots.actions && this.$slots.actions.length > 0
    },
    headerClass () {
      const {scrollable} = this
      const classNames = []
      if (scrollable) classNames.push('scrollable')
      return classNames.concat(convertClass(this.titleClass))
    },
    footerClass () {
      const {scrollable} = this
      const classNames = []
      if (scrollable) classNames.push('scrollable')
      return classNames.concat(convertClass(this.actionsContainerClass))
    }
  },
  data () {
    return {
      maxDialogContentHeight: null
    }
  },
  mounted () {
    this.setMaxDialogContentHeight()
  },
  updated () {
    setTimeout(() => {
      this.setMaxDialogContentHeight()
    }, 0)
  },
  methods: {
    setMaxDialogContentHeight () {
      let maxDialogContentHeight = window.innerHeight - 2 * 64
      if (this.$refs.footer) maxDialogContentHeight -= this.$refs.footer.offsetHeight
      if (this.title) maxDialogContentHeight -= this.$refs.title.offsetHeight
      this.maxDialogContentHeight = maxDialogContentHeight
    },
    overlayClick () {
      this.$emit('close', 'overlay')
    },
    escPress () {
      this.$emit('close', 'esc')
    },
    show () {
      this.$emit('show')
    },
    hide () {
      this.$emit('hide')
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-dialog-wrapper {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 75%;
  max-width: 768px;
}
.mu-dialog {
  width: 100%;
  padding: 0;
  background-color: @dialogBackgroundColor;
  border-radius: 2px;
  font-size: 16px;
  .depth(5);
}

.mu-dialog-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 20px;
  margin: 0;
  font-size: 22px;
  font-weight: normal;
  line-height: 32px;
  color: @textColor;
  + .mu-dialog-body{
    padding-top: 0;
  }
  &.scrollable{
    border-bottom: 1px solid @borderColor;
  }
}
.mu-dialog-body {
  padding: 24px 24px 20px;
  color: fade(@textColor, 60%);
}

.mu-dialog-actions {
  min-height: 48px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .mu-raised-button + .mu-raised-button{
    margin-left: 10px;
  }
  &.scrollable{
    border-top: 1px solid @borderColor;
  }
}

.mu-dialog-slide-enter-active,
.mu-dialog-slide-leave-active{
  transition: opacity .45s @easeOutFunction;
  .mu-dialog {
    backface-visibility: hidden;
    transition: transform .45s @easeOutFunction;
  }
}
.mu-dialog-slide-enter,
.mu-dialog-slide-leave-active {
    opacity: 0;
}

.mu-dialog-slide-enter .mu-dialog{
  transform: translate3d(0, -64px, 0);
}
.mu-dialog-slide-leave-active .mu-dialog{
  transform: translate3d(0, 64px, 0);
}
</style>
