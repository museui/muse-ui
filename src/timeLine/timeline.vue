<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import {oneOf} from './assist.js'
export default {
  name: 'mu-timeline',
  props: {
    lineType: {
      type: String,
      default: 'solid',
      validator (val) {
        const arr = ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset']
        return oneOf(val, arr)
      }
    },
    lineColor: {
      type: String,
      default: '#e8e8e8'
    },
    lineWidth: {
      type: Number,
      default: 2
    },
    iconWidth: {
      type: Number,
      default: 15
    },
    iconColor: {
      type: String,
      default: '#7e57c2'
    },
    iconType: {
      type: String,
      default: 'solid',
      validator (val) {
        const arr = ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset']
        return oneOf(val, arr)
      }
    },
    iconLine: {
      type: Number,
      default: 2
    }
  },
  methods: {
    updateChildren () {
      for (let i = 0, length = this.$children.length; i < length; i++) {
        let item = this.$children[i]
        let {
          iconWidth,
          iconColor,
          iconType,
          iconLine,
          lineColor,
          lineWidth,
          lineType
        } = this
        item.icon = {
          width: iconWidth,
          color: iconColor,
          line: iconLine,
          type: iconType
        }
        item.line = {
          color: lineColor,
          width: lineWidth,
          type: lineType
        }
        if (i === length - 1) {
          item.last = true
        }
      }
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

