<template>
  <span>
    <transition name="mu-dialog-slide" @after-enter="show()" @after-leave="hide()">
      <div class="mu-dialog-wrapper" @click="handleWrapperClick" v-if="open" ref="popup" :style="{'z-index': zIndex}">
        <div class="mu-dialog" ref="dialog" :class="dialogClass">
          <h3 class="mu-dialog-title" v-if="showTitle" ref="title" :class="headerClass">
            <slot name="title">
              {{title}}
            </slot>
          </h3>
          <div class="mu-dialog-body " :style="bodyStyle" :class="bodyClass" ref="elBody">
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
import PopupManager from '../internal/popup/manager'
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
        '-webkit-overflow-scrolling': 'touch'
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
  mounted () {
    this.setMaxDialogContentHeight()
  },
  updated () {
    this.$nextTick(() => {
      this.setMaxDialogContentHeight()
    })
  },
  methods: {
    handleWrapperClick (e) {
      const wrapperEl = this.$refs.popup
      if (wrapperEl === e.target) PopupManager.handleOverlayClick()
    },
    setMaxDialogContentHeight () {
      const dialogEl = this.$refs.dialog
      if (!dialogEl) return
      if (!this.scrollable) {
        dialogEl.style.maxHeight = ''
        return
      }

      let maxDialogContentHeight = window.innerHeight - 2 * 64
      const { footer, title, elBody } = this.$refs
      if (footer) maxDialogContentHeight -= footer.offsetHeight
      if (title) maxDialogContentHeight -= title.offsetHeight
      if (elBody) {
        let maxBodyHeight = maxDialogContentHeight
        if (footer) maxBodyHeight -= footer.offsetHeight
        if (title) maxBodyHeight -= title.offsetHeight
        elBody.style.maxHeight = maxBodyHeight + 'px'
      }
      dialogEl.style.maxHeight = maxDialogContentHeight + 'px'
    },
    show () {
      this.$emit('show')
    },
    hide () {
      this.$emit('hide')
    }
  },
  watch: {
    open (newValue) {
      if (!newValue) return
      this.$nextTick(() => {
        this.setMaxDialogContentHeight()
      })
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-dialog-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mu-dialog {
  width: 75%;
  max-width: 768px;
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
