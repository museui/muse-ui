import PopupManager from './manager'
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
      if (val && this.overlay) {
        PopupManager.open(this)
      } else {
        PopupManager.close(this)
      }
    }
  },
  methods: {
    overlayClick () {
      this.$emit('overlayClick')
    }
  },
  mounted () {
    if (this.open && this.overlay) {
      PopupManager.open(this)
    }
  },
  beforeDestroy () {
    PopupManager.close(this)
  }
}
