import Vue from 'vue'
import keycode from 'keycode'
import overlayOpt from './overlay'
const Overlay = Vue.extend(overlayOpt)

const PopupManager = {
  instances: [],
  overlay: false,

  open (instance) {
    if (!instance || this.instances.indexOf(instance) !== -1) return
    if (!this.overlay && instance.overlay) {
      this.showOverlay(instance)
    }
    this.instances.push(instance)
    this.changeOverlayStyle()
  },
  close (instance) {
    let index = this.instances.indexOf(instance)
    if (index === -1) return
    this.instances.splice(index, 1)
    Vue.nextTick(() => {
      if (this.instances.length === 0) {
        this.closeOverlay()
      }
      this.changeOverlayStyle()
    })
  },

  showOverlay (instance) {
    let overlay = this.overlay = new Overlay({
      el: document.createElement('div')
    })
    overlay.fixed = true
    overlay.color = instance.overlayColor
    overlay.opacity = instance.overlayOpacity
    overlay.zIndex = instance.overlayZIndex
    overlay.onClick = this.handleOverlayClick.bind(this)
    document.body.appendChild(overlay.$el)
    this.preventScrolling()
    Vue.nextTick(() => {
      overlay.show = true
    })
  },
  // 还原滚动设置
  preventScrolling () {
    if (this.locked) return
    // body 操作
    const body = document.getElementsByTagName('body')[0]
    const html = document.getElementsByTagName('html')[0]
    this.bodyOverflow = body.style.overflow
    this.htmlOverflow = html.style.overflow
    body.style.overflow = 'hidden'
    html.style.overflow = 'hidden'
    this.locked = true
  },

  // 禁止滚动
  allowScrolling () {
    const body = document.getElementsByTagName('body')[0]
    const html = document.getElementsByTagName('html')[0]
    body.style.overflow = this.bodyOverflow || ''
    html.style.overflow = this.htmlOverflow || ''
    this.bodyOverflow = null
    this.htmlOverflow = null
    this.locked = false
  },
  closeOverlay () {
    if (!this.overlay) return
    this.allowScrolling()
    let overlay = this.overlay
    overlay.show = false
    this.overlay = null
    setTimeout(() => {
      document.body.removeChild(overlay.$el)
      overlay.$destroy()
    }, 450)
  },

  changeOverlayStyle () {
    const instance = this.instances[this.instances.length - 1]
    if (!this.overlay || this.instances.length === 0) return
    if (instance.overlay) {
      this.overlay.color = instance.overlayColor
      this.overlay.opacity = instance.overlayOpacity
      this.overlay.zIndex = instance.overlayZIndex
    } else {
      this.closeOverlay()
    }
  },

  handleOverlayClick () {
    if (this.instances.length === 0) return
    const instance = this.instances[this.instances.length - 1]
    if (instance.overlayClick) {
      instance.overlayClick()
    }
  }
}
typeof window !== 'undefined' && window.addEventListener('keydown', (e) => {
  if (PopupManager.instances.length === 0 || keycode(e) !== 'esc') return
  const instance = PopupManager.instances[PopupManager.instances.length - 1]
  if (instance.escPress) {
    instance.escPress()
  }
})

export default PopupManager
