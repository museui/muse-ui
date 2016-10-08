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
    this._handlerScroll = (e) => {
      if (this.onScroll) this.onScroll()
    }
    this.scroller.addEventListener('scroll', this._handlerScroll)
  },

  beforeDestroy () {
    this.scroller.removeEventListener('scroll', this._handlerScroll)
  }
}
