import Vue from 'vue';
import keycode from 'keycode';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import overlayOpt from './Overlay';
const Overlay = Vue.extend(overlayOpt);

const PopupManager = {
  instances: [],
  overlay: false,

  open (instance) {
    if (!instance || this.instances.indexOf(instance) !== -1) return;
    if (!this.overlay && instance.overlay) {
      this.showOverlay(instance);
    }
    this.instances.push(instance);
    this.changeOverlayStyle();
  },
  close (instance) {
    const index = this.instances.indexOf(instance);
    if (index === -1) return;
    this.instances.splice(index, 1);
    this.changeOverlayStyle();
  },

  showOverlay (instance) {
    const overlay = this.overlay = new Overlay({
      el: document.createElement('div')
    });
    overlay.fixed = true;
    overlay.color = instance.overlayColor;
    overlay.opacity = instance.overlayOpacity;
    overlay.zIndex = instance.overlayZIndex;
    overlay.onClick = this.handleOverlayClick.bind(this);
    document.body.appendChild(overlay.$el);
    if (instance.lockScroll) this.preventScrolling();
    Vue.nextTick(() => {
      overlay.show = true;
    });
  },
  // 禁止滚动
  preventScrolling () {
    if (this.locked) return;
    // body 操作
    const body = document.getElementsByTagName('body')[0];
    disableBodyScroll(body, {
      reserveScrollBarGap: true
    });
    this.locked = true;
  },

  // 还原滚动设置
  allowScrolling () {
    const body = document.getElementsByTagName('body')[0];
    enableBodyScroll(body, {
      reserveScrollBarGap: true
    });
    clearAllBodyScrollLocks();
    this.locked = false;
  },
  closeOverlay () {
    if (!this.overlay) return;
    this.allowScrolling();
    const overlay = this.overlay;
    overlay.show = false;
    this.overlay = null;
    setTimeout(() => {
      document.body.removeChild(overlay.$el);
      overlay.$destroy();
    }, 450);
  },

  changeOverlayStyle () {
    if (!this.overlay) return;
    let instance;
    for (let i = 1; i <= this.instances.length; i++) {
      instance = this.instances[this.instances.length - i];
      if (instance && instance.overlay) {
        break;
      }
      instance = null;
    }

    if (!instance) return this.closeOverlay();

    if (instance && instance.overlay) {
      this.overlay.color = instance.overlayColor;
      this.overlay.opacity = instance.overlayOpacity;
      this.overlay.zIndex = instance.overlayZIndex;
    }
  },

  handleOverlayClick () {
    if (this.instances.length === 0) return;
    const instance = this.instances[this.instances.length - 1];
    if (instance.overlayClick) {
      instance.overlayClick();
    }
  }
};

typeof window !== 'undefined' && window.addEventListener('keydown', (e) => {
  if (PopupManager.instances.length === 0 || keycode(e) !== 'esc') return;
  const instance = PopupManager.instances[PopupManager.instances.length - 1];
  if (instance.escPress) {
    instance.escPress();
  }
});

export default PopupManager;
