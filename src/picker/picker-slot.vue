<template>
  <div class="mu-picker-slot" :class="{'mu-picker-slot-divider': divider}" :style="{'width': width}">
    <div v-if="!divider" class="mu-picker-slot-wrapper" :class="{'animate': animate}" :style="{'height': contentHeight + 'px'}" ref="wrapper">
      <div class="mu-picker-item" :style="{'text-align': textAlign}" :class="{'selected': item === value}"
      v-for="item, index in values" :key="index">{{item.text || item}}</div>
    </div>
    <div v-if="divider">{{ content }}</div>
  </div>
</template>

<script>
import Vue from 'vue'
import Drag from '../utils/drag'
import translateUtil from '../utils/translate'
import * as domUtil from '../utils/domUtil'
const ITEM_HEIGHT = 36
export default {
  props: {
    divider: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
    values: {
      type: Array,
      default () {
        return []
      }
    },
    value: {},
    textAlign: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    visibleItemCount: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      animate: false
    }
  },
  computed: {
    contentHeight () {
      return ITEM_HEIGHT * this.visibleItemCount
    },
    valueIndex () {
      return this.values.indexOf(this.value)
    },
    dragRange () {
      let values = this.values
      let visibleItemCount = this.visibleItemCount
      return [ -ITEM_HEIGHT * (values.length - Math.ceil(visibleItemCount / 2)), ITEM_HEIGHT * Math.floor(visibleItemCount / 2) ]
    }
  },
  mounted: function () {
    if (!this.divider) {
      this.initEvents()
      this.doOnValueChange()
    }
  },
  methods: {
    value2Translate (value) {
      let values = this.values
      let valueIndex = values.indexOf(value)
      let offset = Math.floor(this.visibleItemCount / 2)
      if (valueIndex !== -1) {
        return (valueIndex - offset) * -ITEM_HEIGHT
      }
    },
    translate2Value (translate) {
      translate = Math.round(translate / ITEM_HEIGHT) * ITEM_HEIGHT
      let index = -(translate - Math.floor(this.visibleItemCount / 2) * ITEM_HEIGHT) / ITEM_HEIGHT
      return this.values[index]
    },
    doOnValueChange () {
      let value = this.value
      let wrapper = this.$refs.wrapper
      translateUtil.translateElement(wrapper, null, this.value2Translate(value))
    },
    doOnValuesChange () {
      let el = this.$el
      let items = el.querySelectorAll('.mu-picker-item')
      Array.prototype.forEach.call(items, (item, index) => {
        translateUtil.translateElement(item, null, ITEM_HEIGHT * index)
      })
    },
    initEvents () {
      let el = this.$refs.wrapper
      let drag = new Drag(this.$el)
      let startTop = 0
      let velocityTranslate, prevTranslate
      drag.start(() => {
        startTop = translateUtil.getElementTranslate(el).top
      }).drag((endPos, event) => {
        event.preventDefault()
        event.stopPropagation()
        let translate = startTop + endPos.y
        translateUtil.translateElement(el, 0, translate)
        velocityTranslate = translate - prevTranslate || translate
        prevTranslate = translate
      }).end((endPos) => {
        const momentumRatio = 7
        let currentTranslate = translateUtil.getElementTranslate(el).top
        let momentumTranslate
        if (endPos.time < 300) {
          momentumTranslate = currentTranslate + velocityTranslate * momentumRatio
        }
        let dragRange = this.dragRange
        this.animate = true
        domUtil.transitionEnd(el, () => {
          this.animate = false
        })
        Vue.nextTick(() => {
          let translate
          if (momentumTranslate) {
            translate = Math.round(momentumTranslate / ITEM_HEIGHT) * ITEM_HEIGHT
          } else {
            translate = Math.round(currentTranslate / ITEM_HEIGHT) * ITEM_HEIGHT
          }
          translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0])
          translateUtil.translateElement(el, null, translate)
          this.$emit('change', this.translate2Value(translate))
        })
      })
    }
  },
  watch: {
    values (newVal) {
      if (this.valueIndex === -1) {
        this.value = (newVal || [])[0]
      }
    },
    value () {
      this.doOnValueChange()
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-picker-slot{
  font-size: 18px;
  overflow: hidden;
  position: relative;
  max-height: 100%;
  text-align: center;
  &.mu-picker-slot-divider{
    color: @textColor;
    display: flex;
    align-items: center;
    line-height: 36px;
  }
}
.mu-picker-slot-wrapper.animate{
  transition: transform .45s @easeOutFunction;
  backface-visibility: hidden;
}
.mu-picker-item{
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  font-size: 20px;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  color: @secondaryTextColor;
  left: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  transition-duration: .3s;
  backface-visibility: hidden;
  &.selected {
    color: @textColor;
    transform: translate3d(0, 0, 0) rotateX(0);
  }
}
</style>
