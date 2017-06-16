<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'mu-breadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  },
  methods: {
    updateChildren () {
      this.$children.forEach(item => {
        item.separator = this.separator
      })
    }
  },
  mounted () {
    this.updateChildren()
  },
  updated () {
    this.$nextTick(() => {
      this.updateChildren()
    })
  },
  watch: {
    separator () {
      this.updateChildren()
    }
  }
}
</script>

