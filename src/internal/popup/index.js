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
    }
  },
  watch: {
    open (val) {
      if (this.overlay) {
        if (val) {
          PopupManager.open(this)
        } else {
          PopupManager.close(this)
        }
      }
    }
  },
  methods: {
    overlayClick () {
      this.$emit('overlayClick')
    },
    setZIndex () {
      if (this.open) {
        const dom = this.$el
        if (dom) dom.style.zIndex = getZIndex()
      }
    }
  },
  mounted () {
    if (this.open && this.overlay) {
      PopupManager.open(this)
    } else {
      this.setZIndex()
    }
  },
  updated () {
    if (!this.overlay) {
      this.setZIndex()
    }
  },
  beforeDestroy () {
    PopupManager.close(this)
  }
}
