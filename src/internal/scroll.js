export default {
  mounted () {
    this._handlerScroll = (e) => {
      if (this.windowScroll) this.windowScroll()
    }
    window.addEventListener('scroll', this._handlerScroll)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this._handlerScroll)
  }
}
