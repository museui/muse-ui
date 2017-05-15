import PopupManager from './manager'
import {getZIndex} from './utils'
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    overlayOpacity: {
      type: Number,
      default: 0.4
    },
    overlayColor: {
      type: String,
      default: '#000'
    },
    escPressClose: { // 按退出键是否触发关闭事件
      type: Boolean,
      default: true
    },
    appendBody: { // 是否添加到 body 元素后, 内部使用
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      overlayZIndex: getZIndex(),
      zIndex: getZIndex()
    }
  },
  methods: {
    overlayClick (e) {
      if (this.overlay) this.$emit('close', 'overlay')
    },
    escPress (e) {
      if (this.escPressClose) this.$emit('close', 'esc')
    },
    clickOutSide (e) {
      this.$emit('clickOutSide', e)
    },
    setZIndex () {
      const dom = this.$el
      if (!this.zIndex) this.zIndex = getZIndex()
      if (dom) dom.style.zIndex = this.zIndex
    },
    bindClickOutSide () {
      if (!this._handleClickOutSide) {
        this._handleClickOutSide = (e) => {
          const popupEl = this.popupEl()
          if (!popupEl || !popupEl.contains(e.target)) this.clickOutSide(e)
        }
      }
      setTimeout(() => {
        window.addEventListener('click', this._handleClickOutSide)
      }, 0)
    },
    unBindClickOutSide () {
      window.removeEventListener('click', this._handleClickOutSide)
    },
    resetZIndex () {
      this.overlayZIndex = getZIndex()
      this.zIndex = getZIndex()
    },
    popupEl () {
      return this.appendBody ? this.$refs.popup : this.$el
    },
    appendPopupElToBody () {
      if (!this.appendBody) return
      this.$nextTick(() => {
        const popupEl = this.popupEl()
        if (!popupEl) {
          console.warn('必须有一个 ref=‘popup’ 的元素')
          return
        }
        document.body.appendChild(popupEl)
      })
    }
  },
  mounted () {
    if (this.open) {
      PopupManager.open(this)
      this.bindClickOutSide()
      this.appendPopupElToBody()
    }
  },
  updated () {
    if (!this.overlay) {
      this.setZIndex()
    }
  },
  beforeDestroy () {
    PopupManager.close(this)
    this.unBindClickOutSide()
    if (this.appendBody) {
      const popupEl = this.popupEl()
      if (!popupEl) return
      document.body.removeChild(popupEl)
    }
  },
  watch: {
    open (val, oldVal) {
      if (val === oldVal) return
      if (val) {
        this.bindClickOutSide()
        this.resetZIndex()
        PopupManager.open(this)
        this.appendPopupElToBody()
      } else {
        this.unBindClickOutSide()
        PopupManager.close(this)
      }
    }
  }
}
