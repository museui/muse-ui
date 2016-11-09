export default {
  props: {
    scroller: {
      type: [window.HTMLDocument, window.Element, window.Window],
      default () {
        return window
      }
    }
  },
  mounted () {
    this.$bindScroll()
  },
  methods: {
    $bindScroll () {
      if (!this.scroller) return
      this._handlerScroll = (e) => {
        if (this.onScroll) this.onScroll()
      }
      this.scroller.addEventListener('scroll', this._handlerScroll)
    },
    $unbindScroll (scroller) {
      scroller = scroller || this.scroller
      if (this._handlerScroll) scroller.removeEventListener('scroll', this._handlerScroll)
    }
  },
  beforeDestroy () {
    this.$unbindScroll()
  },
  watch: {
    scroller (scroller, oldScroller) {
      if (scroller === oldScroller) return
      this.$unbindScroll(oldScroller)
      this.$bindScroll(scroller)
    }
  }
}
