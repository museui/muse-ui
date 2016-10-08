<template>
<transition :name="popupTransition">
  <div class="mu-popup" :style="{'z-index': zIndex}" :class="[position ? 'mu-popup-' + position : '']">
    <slot></slot>
  </div>
</transition>
</template>

<script>
import Popup from '../internal/popup'
import {getZIndex} from '../internal/popup/utils'
export default {
  name: 'mu-popup',
  mixins: [Popup],
  props: {
    popupTransition: {
      type: String,
      default: 'popup-slide'
    },
    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    zIndex () {
      return this.overlay ? '' : getZIndex()
    }
  },
  beforeMount () {
    if (this.popupTransition !== 'popup-fade') {
      this.popupTransition = `popup-slide-${this.position}`
    }
  }
}
</script>

<style lang="css">
.mu-popup {
  position: fixed;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
}

.mu-popup-top {
  top: 0;
  right: auto;
  bottom: auto;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}

.mu-popup-right {
  top: 50%;
  right: 0;
  bottom: auto;
  left: auto;
  transform: translate3d(0, -50%, 0);
}
.mu-popup-bottom {
  top: auto;
  right: auto;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}

.mu-popup-left {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 0;
  transform: translate3d(0, -50%, 0);
}

.popup-slide-top-transition,
  .popup-slide-right-transition,
  .popup-slide-bottom-transition,
  .popup-slide-left-transition {
    transition: transform .3s ease;
  }

  .popup-slide-top-enter,
  .popup-slide-top-leave {
    transform: translate3d(-50%, -100%, 0);
  }

  .popup-slide-right-enter,
  .popup-slide-right-leave {
    transform: translate3d(100%, -50%, 0);
  }

  .popup-slide-bottom-enter,
  .popup-slide-bottom-leave {
    transform: translate3d(-50%, 100%, 0);
  }

  .popup-slide-left-enter,
  .popup-slide-left-leave {
    transform: translate3d(-100%, -50%, 0);
  }

  .popup-fade-transition {
    transition: opacity .3s;
  }

  .popup-fade-enter,
  .popup-fade-leave {
    opacity: 0;
  }
</style>
