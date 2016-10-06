export default {
  mounted () {
    this._handlerClickOutSide = (e) => {
      if (!this.$el.contains(e.target)) {
        if (this.clickOutSide) this.clickOutSide()
      }
    }
    document.addEventListener('click', this._handlerClickOutSide)
  },

  beforeDestroy () {
    document.removeEventListener('click', this._handlerClickOutSide)
  }
}
