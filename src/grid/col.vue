<template>
<div class="col" :class="classObj">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'mu-col',
  props: {
    width: {
      type: String,
      default: '100'
    },
    tablet: {
      type: String,
      default: ''
    },
    desktop: {
      type: String,
      default: ''
    }
  },
  computed: {
    classObj () {
      let className = 'col-' + this.width
      let classObj = {}
      classObj[className] = true
      if (this.tablet) {
        let tablet = 'tablet-' + this.tablet
        classObj[tablet] = true
      }
      if (this.desktop) {
        let desktop = 'desktop-' + this.desktop
        classObj[desktop] = true
      }
      return classObj
    }
  }
}
</script>
