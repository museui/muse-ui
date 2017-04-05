<template>
<div class="mu-picker">
  <picker-slot :divider="slot.divider" :content="slot.content"  :text-align="slot.textAlign" :width="slot.width" v-for="(slot, $index) in slots" :key="$index" @change="change($index, arguments)" :value="values[$index]" :values="slot.values" :visible-item-count="visibleItemCount"></picker-slot>
  <div class="mu-picker-center-highlight"></div>
</div>
</template>

<script>
import pickerSlot from './picker-slot'
export default {
  name: 'mu-picker',
  props: {
    visibleItemCount: {
      type: Number,
      default: 5
    },
    values: {
      type: Array,
      default () {
        return []
      }
    },
    slots: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    change (index, args) {
      this.$emit('change', args[0], index)
    }
  },
  components: {
    'picker-slot': pickerSlot
  }
}
</script>
<style lang="less">
@import "../styles/import.less";
.mu-picker{
  background: @dialogBackgroundColor;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  -webkit-mask-box-image: -webkit-linear-gradient(bottom, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent);
  -webkit-mask-box-image: linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent);
}

.mu-picker-center-highlight {
  height: 36px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  width: 100%;
  top: 50%;
  margin-top: -18px;
  pointer-events: none;
  border-top: 1px solid @borderColor;
  border-bottom: 1px solid @borderColor;
}

.mu-picker-center-highlight:before {
  left: 0;
  top: 0;
  bottom: auto;
  right: auto;
}

.mu-picker-center-highlight:after {
  left: 0;
  bottom: 0;
  right: auto;
  top: auto;
}
</style>
