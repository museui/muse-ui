<script>
import {isInner} from './timeUtils'
export default {
  props: {
    hasSelected: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'minute',
      validator (val) {
        return ['hour', 'minute'].indexOf(val) !== -1
      }
    },
    value: {
      type: Number
    }
  },
  computed: {
    isInner () {
      return isInner(this)
    },
    pointerStyle () {
      const {type, value, calcAngle} = this
      const angle = type === 'hour' ? calcAngle(value, 12) : calcAngle(value, 60)
      return {
        transform: `rotateZ(${angle}deg)`
      }
    }
  },
  methods: {
    calcAngle (value, base) {
      value %= base
      const angle = 360 / base * value
      return angle
    }
  },
  render (h) {
    if (this.value === undefined || this.value === null) return h('span', {})
    return h('div', {
      class: {
        'mu-clock-pointer': true,
        'inner': this.isInner
      },
      style: this.pointerStyle
    }, [h('div', {
      class: {
        'mu-clock-pointer-mark': true,
        'has-selected': this.hasSelected
      }
    })])
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-clock-pointer {
  height: 40%;
  background-color: @primaryColor;
  width: 2px;
  left: calc(50% - 1px);
  position: absolute;
  bottom: 50%;
  transform-origin: center bottom 0px;
  pointer-events: none;
  &.inner {
    height: 30%;
  }
}

.mu-clock-pointer-mark {
  box-sizing: content-box;
  background-color: @alternateTextColor;
  border: 4px solid @primaryColor;
  width: 7px;
  height: 7px;
  position: absolute;
  top: -5px;
  left: -6px;
  border-radius: 100%;
  &.has-selected {
    display: none;
  }
}
</style>
