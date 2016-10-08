export default {
  mounted () {
    this._handlerClickOutSide = (e) => {
      if (!this.$el.contains(e.target)) {
        if (this.clickOutSide) this.clickOutSide()
      }
    }
    setTimeout(() => {
      document.addEventListener('click', this._handlerClickOutSide)
    }, 0)
  },

  beforeDestroy () {
    document.removeEventListener('click', this._handlerClickOutSide)
  }
}
