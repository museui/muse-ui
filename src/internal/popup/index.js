import PopupManager from './manager'
import {getZIndex} from './utils'
import keycode from 'keycode'
export default {
  props: {
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
  methods: {
    overlayClick () {
      this.$emit('overlayClick')
    },
    setZIndex () {
      const dom = this.$el
      if (dom) dom.style.zIndex = getZIndex()
    }
  },
  mounted () {
    if (this.overlay) {
      PopupManager.open(this)
    } else {
      this.setZIndex()
    }
    window.addEventListener('keydown', (event) => {
      if (keycode(event) === 'esc' && this && this.escPress) this.escPress()
    })
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
