import Vue from 'vue'
import overlayOpt from './overlay'
import {getZIndex} from './utils'
const Overlay = Vue.extend(overlayOpt)

const PopupManager = {
  instances: [],
  overlay: false,

  open (instance) {
    if (!instance || this.instances.indexOf(instance) !== -1) return
    if (this.instances.length === 0) {
      this.showOverlay(instance.overlayColor, instance.overlayOpacity)
    }
    this.instances.push(instance)
    this.changeOverlayStyle()
    if (instance.$el) {
      this.setZIndex(instance)
    } else {
      Vue.nextTick(() => {
        this.setZIndex(instance)
      })
    }
  },

  setZIndex (instance) {
    const dom = instance.$el
    dom.style.zIndex = getZIndex()
  },

  close (instance) {
    let index = this.instances.indexOf(instance)
    if (index === -1) return
    Vue.nextTick(() => {
      this.instances.splice(index, 1)
      if (this.instances.length === 0) {
        this.closeOverlay()
      }
      this.changeOverlayStyle()
    })
  },

  showOverlay (color, opacity) {
    let overlay = this.overlay = new Overlay({
      el: document.createElement('div')
    })
    overlay.fixed = true
    overlay.color = color
    overlay.opacity = opacity
    overlay.zIndex = 2000
    overlay.onClick = this.handleOverlayClick.bind(this)
    document.body.appendChild(overlay.$el)
    this.preventScrolling()
    Vue.nextTick(() => {
      overlay.show = true
    })
  },
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
      overlay.$el.remove()
      overlay.$destroy()
    }, 450)
  },

  changeOverlayStyle () {
    if (!this.overlay || this.instances.length === 0) return
    const instance = this.instances[this.instances.length - 1]
    this.overlay.color = instance.overlayColor
    this.overlay.opacity = instance.overlayOpacity
  },

  handleOverlayClick () {
    if (this.instances.length === 0) return
    const instance = this.instances[this.instances.length - 1]
    if (instance.overlayClick) {
      instance.overlayClick()
    }
  }
}

// window.addEventListener('keydown', function (event) {
//   if (event.keyCode === 27) { // ESC
//     if (PopupManager.instances.length > 0) {
//       const topInstance = PopupManager.instances[PopupManager.instances.length - 1]
//       if (!topInstance) return
//       if (topInstance.escPress) {
//         topInstance.escPress()
//       }
//     }
//   }
// })

export default PopupManager
