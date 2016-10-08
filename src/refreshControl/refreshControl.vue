<template>
  <div class="mu-refresh-control" :style="refreshStyle" :class="refreshClass">
    <icon v-show="!refreshing && draging" :size="28" value="refresh" :style="circularStyle"></icon>
    <circular v-show="refreshing" :size="24" :border-width="2"></circular>
  </div>
</template>

<script>
import Drag from '../utils/drag'
import icon from '../icon'
import circular from '../internal/circular'
import * as domUtil from '../utils/domUtil'

const LENGTH = 130 // 下拉最大长度
const INITY = -63  // 初始化Y轴位置
export default {
  name: 'mu-refresh-control',
  props: {
    refreshing: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: window.Element
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
  beforeDestory () {
    this.drager.destory()
    this.drager = null
  },
  methods: {
    clearState () {
      this.state = 'ready'
      this.draging = false
      this.y = 0
    }
  },
  watch: {
    refreshing (val) {
      if (!val) {
        domUtil.transitionEnd(this.$el, this.clearState.bind(this))
      } else {
        this.state = 'refreshAnimate'
      }
    }
  },
  components: {
    icon,
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
  color: @primary1Color;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-radius: 50%;
  .depth(1);
  position: absolute;
  left: 50%;
  margin-left: -18px;
  margin-top: 24px;
  z-index: 100;
  .mu-icon {
    display: inline-block;
    vertical-align: middle;
  }
}

.mu-refresh-control-animate{
   transition: all 0.45s ease;
}

.mu-refresh-control-hide{
  opacity: 1;
  transform: translate3d(0, -63px, 0);
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
