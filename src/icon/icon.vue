<script>
import {getColor} from '../utils'
export default {
  name: 'mu-icon',
  props: {
    value: {
      type: String
    },
    size: {
      type: Number
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconStyle () {
      return {
        'font-size': this.size + 'px',
        'width': this.size + 'px',
        'height': this.size + 'px',
        'color': getColor(this.color)
      }
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  },
  render (h) {
    const {value, iconStyle, handleClick} = this
    if (!value) return null
    const isMaterial = value.indexOf(':') !== 0
    const text = isMaterial ? value : ''
    return h('i', {
      class: ['mu-icon', isMaterial ? 'material-icons' : value.substring(1)],
      style: iconStyle,
      on: {
        click: handleClick
      }
    }, text)
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-icon {
    font-size: @iconSize;
    cursor: inherit;
}
</style>
