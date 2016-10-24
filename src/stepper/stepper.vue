
<script>
import stepConnector from './stepConnector'
export default {
  name: 'mu-stepper',
  props: {
    activeStep: {
      type: Number,
      default: 0
    },
    linear: {
      type: Boolean,
      default: true
    },
    orientation: {
      type: String,
      default: 'horizontal',
      validator (val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1
      }
    }
  },
  render (h) {
    const {activeStep, linear, orientation} = this
    const children = []
    if (this.$slots.default && this.$slots.default.length > 0) {
      let index = 0
      this.$slots.default.forEach((vNode) => {
        if (!vNode.componentOptions) return
        if (index > 0) {
          children.push(h(stepConnector, {}))
        }
        const propsData = vNode.componentOptions.propsData
        if (activeStep === index) {
          propsData.active = true
        } else if (linear && activeStep > index) {
          propsData.completed = true
        } else if (linear && activeStep < index) {
          propsData.disabled = true
        }
        propsData.index = index++
        children.push(vNode)
      })
      if (children.length > 0) children[children.length - 1].componentOptions.propsData.last = true
    }
    return h('div', {
      class: ['mu-stepper', orientation === 'vertical' ? 'mu-stepper-vertical' : '']
    }, children)
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-stepper{
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}

.mu-stepper-vertical{
  flex-direction: column;
  align-items: stretch;
}
</style>
