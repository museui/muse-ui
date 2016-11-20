<template>
  <div class="mu-flexbox-item" :style="itemStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mu-flexbox-item',
  props: {
    order: {
      type: [Number, String],
      default: 0
    },
    grow: {
      type: [Number, String],
      default: 1
    },
    shrink: {
      type: [Number, String],
      default: 1
    },
    basis: {
      type: [Number, String],
      default: 'auto'
    }
  },
  computed: {
    itemStyle () {
      let styles = {}
      let marginName = this.$parent.orient === 'horizontal' ? 'marginLeft' : 'marginTop'
      styles[marginName] = `${this.$parent.gutter}px`
      styles['flex'] = `${this.grow} ${this.shrink} ${this.basis}`
      styles['order'] = this.order
      return styles
    }
  }
}
</script>
