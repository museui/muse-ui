<script>
import abstractButton from '../internal/abstractButton'
export default {
  name: 'mu-bottom-nav',
  props: {
    shift: {
      type: Boolean,
      default: false
    },
    value: {}
  },
  methods: {
    handleItemClick (value, item) {
      if (value !== this.value) {
        this.$emit('change', value)
      }
      this.$emit('itemClick', item)
      this.$emit('item-click', item)
    },
    setChildrenInstance () {
      var children = this.$slots.default
      children.forEach((vNode) => {
        if (vNode && vNode.child && vNode.child.isBottomNavItem) {
          vNode.child.bottomNav = this
        }
      })
    }
  },
  mounted () {
    this.setChildrenInstance()
  },
  updated () {
    var children = this.$slots.default
    children.forEach((vNode) => {
      if (vNode && vNode.child && vNode.child.isBottomNavItem) {
        vNode.child.bottomNav = this
      }
    })
  },
  render (h) {
    return h(abstractButton, {
      class: ['mu-bottom-nav', this.shift ? 'mu-bottom-nav-shift' : undefined],
      props: {
        disableTouchRipple: !this.shift,
        centerRipple: false,
        wrapperClass: 'mu-bottom-nav-shift-wrapper',
        containerElement: 'div',
        rippleOpacity: 0.3
      }
    }, this.$slots.default)
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-bottom-nav{
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: @dialogBackgroundColor;
  text-align: center;
  position: relative;
  width: 100%;
  color: @alternateTextColor;
}

.mu-bottom-nav-shift{
  background-color: @primaryColor;
}

.mu-bottom-nav-shift-wrapper{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
