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
      this.$emit('close', 'overlay')
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
          if (this.popupEl.contains(e.target)) return
          this.clickOutSide(e)
        }
      }
      setTimeout(() => {
        document.addEventListener('click', this._handleClickOutSide)
      }, 0)
    },
    unBindClickOutSide () {
      document.removeEventListener('click', this._handleClickOutSide)
    },
    resetZIndex () {
      this.overlayZIndex = getZIndex()
      this.zIndex = getZIndex()
    }
  },
  mounted () {
    this.popupEl = this.appendBody ? this.$refs.popup : this.$el
    if (this.open) {
      PopupManager.open(this)
      this.bindClickOutSide()
    }
    if (!this.popupEl && this.appendBody) {
      console.warn('必须有一个 ref=‘popup’ 的元素')
      return
    }
    if (this.appendBody) document.body.appendChild(this.popupEl)
  },
  updated () {
    if (!this.overlay) {
      this.setZIndex()
    }
  },
  beforeDestroy () {
    PopupManager.close(this)
    this.unBindClickOutSide()
    if (this.appendBody && this.popupEl) document.body.removeChild(this.popupEl)
  },
  watch: {
    open (val, oldVal) {
      if (val === oldVal) return
      if (val) {
        this.bindClickOutSide()
        this.resetZIndex()
        PopupManager.open(this)
      } else {
        this.unBindClickOutSide()
        PopupManager.close(this)
      }
    }
  }
}
