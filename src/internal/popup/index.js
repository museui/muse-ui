import PopupManager from './manager'
import {getZIndex} from './utils'
import keycode from 'keycode'
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
      this.$emit('overlayClick', e)
    },
    escPress (e) {
      this.$emit('escPress', e)
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
          if (this.$refs.popup.contains(e.target)) return
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
    bindEscPress () {
      if (!this._handleEscPress) {
        this._handleEscPress = (e) => {
          if (keycode(e) === 'esc') this.escPress(e)
        }
        window.addEventListener('keydown', this._handleEscPress)
      }
    },
    unBindEscPress () {
      window.removeEventListener('keydown', this._handleEscPress)
    },
    resetZIndex () {
      this.overlayZIndex = getZIndex()
      this.zIndex = getZIndex()
    }
  },
  mounted () {
    this.bindEscPress()
    if (this.overlay && this.open) PopupManager.open(this)
    if (this.open) this.bindClickOutSide()
    if (!this.$refs.popup) {
      console.warn('必须有一个 ref=‘popup’ 的元素')
      return
    }
    document.body.appendChild(this.$refs.popup)
  },
  updated () {
    if (!this.overlay) {
      this.setZIndex()
    }
  },
  beforeDestroy () {
    PopupManager.close(this)
    this.unBindEscPress()
    this.unBindClickOutSide()
    document.body.removeChild(this.$refs.popup)
  },
  watch: {
    open (val, oldVal) {
      if (val === oldVal) return
      if (val) {
        this.bindClickOutSide()
        this.resetZIndex()
        if (this.overlay) PopupManager.open(this)
      } else {
        this.unBindClickOutSide()
        PopupManager.close(this)
      }
    }
  }
}
