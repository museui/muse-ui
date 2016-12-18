<template>
  <div class="mu-refresh-control" :style="refreshStyle" :class="refreshClass">
    <svg v-show="!refreshing && draging" viewBox="0 0 24 24" class="mu-refresh-svg-icon" :style="circularStyle">
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
    </svg>
    <circular v-show="refreshing" :size="24" :border-width="2"></circular>
  </div>
</template>

<script>
import Drag from '../utils/drag'
import circular from '../internal/circular'
import * as domUtil from '../utils/domUtil'

const LENGTH = 130 // 下拉最大长度
const INITY = -68  // 初始化Y轴位置
export default {
  name: 'mu-refresh-control',
  props: {
    refreshing: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: Element
    }
  },
  data () {
    return {
      y: 0,
      draging: false,
      state: 'pending'
    }
  },
  computed: {
    refreshStyle () {
      let style = {}
      if (!this.refreshing && this.draging) {
        let translate3d = 'translate3d(0, ' + (this.y + INITY) + 'px, 0) '
        style['-webkit-transform'] = style['transform'] = translate3d
      }
      return style
    },
    circularStyle () {
      let style = {}
      if (!this.refreshing && this.draging) {
        let percentage = this.y / LENGTH
        let rotate = 'rotate(' + (360 * percentage) + 'deg)'
        let opacity = this.y / Math.abs(INITY)
        style['-webkit-transform'] = style['transform'] = rotate
        style['opacity'] = opacity
      }
      return style
    },
    refreshClass () {
      let classNames = []
      switch (this.state) {
        case 'pending':
          break
        case 'ready':
          classNames.push('mu-refresh-control-noshow')
          break
        case 'dragStart':
          classNames.push('mu-refresh-control-hide')
          break
        case 'dragAnimate':
          classNames.push('mu-refresh-control-animate')
          classNames.push('mu-refresh-control-hide')
          break
        case 'refreshAnimate':
          classNames.push('mu-refresh-control-animate')
          classNames.push('mu-refresh-control-noshow')
          break
      }
      if (this.refreshing) classNames.push('mu-refresh-control-refreshing')
      return classNames
    }
  },
  mounted () {
    this.bindDrag()
  },
  beforeDestory () {
    this.unbindDrag()
  },
  methods: {
    clearState () {
      this.state = 'ready'
      this.draging = false
      this.y = 0
    },
    bindDrag () {
      if (!this.trigger) return
      const drager = this.drager = new Drag(this.trigger)
      const initTop = domUtil.getOffset(this.$el).top + INITY  // 初始化位置
      this.state = 'ready'
      drager.start(() => {
        if (this.refreshing) return
        this.state = 'dragStart'
        let top = domUtil.getOffset(this.$el).top
        if (top === initTop) this.draging = true
      }).drag((pos, event) => {
        if (pos.y < 5) return // 消除误差
        let top = domUtil.getOffset(this.$el).top
        if (this.refreshing || !initTop || top < initTop) {
          this.draging = false
          return
        }

        if (top === initTop && !this.draging) {
          this.draging = true
          drager.reset(event)
        }

        if (this.draging && pos.y > 0) {
          event.preventDefault()
          event.stopPropagation()
        }

        this.y = pos.y
        if (this.y < 0) this.y = 1
        if (this.y > LENGTH) this.y = LENGTH
      }).end((pos, event) => {
        if (!pos.y || pos.y < 5) {
          this.clearState()
          return // 消除误差
        }
        let canRefresh = pos.y + INITY > 0 && this.draging
        this.state = 'dragAnimate'
        if (canRefresh) {
          this.draging = false
          this.$emit('refresh')
        } else {
          this.y = 0
          domUtil.transitionEnd(this.$el, this.clearState.bind(this))
        }
      })
    },
    unbindDrag () {
      if (!this.drager) return
      this.drager.destory()
      this.drager = null
    }
  },
  watch: {
    refreshing (val) {
      if (!val) {
        domUtil.transitionEnd(this.$el, this.clearState.bind(this))
      } else {
        this.state = 'refreshAnimate'
      }
    },
    trigger (trigger, oldTrigger) {
      if (trigger === oldTrigger) return
      this.unbindDrag()
      this.bindDrag()
    }
  },
  components: {
    circular
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-refresh-control{
  display: flex;
  margin: 0 auto;
  width: 40px;
  height: 40px;
  color: @primaryColor;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-radius: 50%;
  .depth(1);
  position: absolute;
  left: 50%;
  margin-left: -18px;
  margin-top: 24px;
  z-index: 90;
  .mu-icon {
    display: inline-block;
    vertical-align: middle;
  }
}

.mu-refresh-svg-icon {
  display: inline-block;
  width: 28px;
  height: 28px;
  fill: currentColor;
  user-select: none;
}

.mu-refresh-control-animate{
   transition: all 0.45s ease;
}

.mu-refresh-control-hide{
  opacity: 1;
  transform: translate3d(0, -68px, 0);
}

.mu-refresh-control-noshow{
  opacity: 0;
  transform: scale(0.01);
}

.mu-refresh-control-refreshing {
  transform: scale(1);
  opacity: 1;
}

</style>
