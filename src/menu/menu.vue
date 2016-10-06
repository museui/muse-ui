<template>
<div class="mu-menu">
  <div ref="list" class="mu-menu-list" :class="{'mu-menu-destop': desktop}">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'mu-menu',
  props: {
    desktop: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    autoWidth: {
      type: Boolean,
      default: true
    },
    width: {
      type: [String, Number]
    },
    maxHeight: {
      type: Number
    },
    selectIndex: {}
  },
  computed: {
    keyWidth () {
      return this.desktop ? 64 : 56
    }
  },
  mounted () {
    if (this.autoWidth) this.setWidth()
  },
  updated () {
    if (this.autoWidth) this.setWidth()
  },
  methods: {
    setWidth () {
      const el = this.$el
      const listEl = this.$refs.list
      const elWidth = el.offsetWidth
      const keyWidth = this.keyWidth
      const minWidth = keyWidth * 1.5
      let keyIncrements = elWidth / keyWidth
      let newWidth

      keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements)
      newWidth = keyIncrements * keyWidth

      if (newWidth < minWidth) newWidth = minWidth

      el.style.width = `${newWidth}px`
      listEl.style.width = `${newWidth}px`
    },
    handlerChange (index) {
      this.$emit('change')
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-menu {
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 90;
}

.mu-menu-list {
  padding: 8px 0;
  display: table-cell;
  -webkit-user-select: none;
  width: 168px;
  > .mu-divider {
    margin: 7px 0px 8px;
  }
  > .mu-sub-header {
    padding-left: 24px;
    margin-top: -8px
  }
}

.mu-menu-destop {
  padding: 16px 0;
  > .mu-sub-header {
    margin-top: -16px;
  }
}
</style>
