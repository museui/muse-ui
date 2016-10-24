<script>
export default {
  name: 'mu-step',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    completed: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    },
    last: {
      type: Boolean,
      default: false
    }
  },
  render (h) {
    const {active, completed, disabled, index, last} = this
    const children = []
    if (this.$slots.default && this.$slots.default.length > 0) {
      this.$slots.default.forEach((vNode) => {
        if (!vNode.componentOptions || !vNode.componentOptions.propsData) return
        const num = index + 1
        vNode.componentOptions.propsData = Object.assign({active, completed, disabled, last, num}, vNode.componentOptions.propsData)
        children.push(vNode)
      })
    }
    return h('div', {
      class: 'mu-step'
    }, children)
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-step{
  flex: 0 0 auto;
  margin-left: -6px;
  .mu-stepper-vertical & {
    margin-top: -14px;
    margin-left: 0;
  }
  &:first-child {
    margin-left: 0;
  }
}
</style>
