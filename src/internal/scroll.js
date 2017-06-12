export default {
  props: {
    scroller: {}
  },
  mounted () {
    this.$bindScroll()
  },
  methods: {
    $bindScroll () {
      const scroller = this.scroller || window
      this._handleScroll = (e) => {
        if (this.onScroll) this.onScroll()
      }
      scroller.addEventListener('scroll', this._handleScroll)
    },
    $unbindScroll (scroller) {
      scroller = scroller || this.scroller || window
      if (this._handleScroll) scroller.removeEventListener('scroll', this._handleScroll)
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
