<template>
  <th class="mu-th" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <slot></slot>
    <tooltip v-if="tooltip" :verticalPosition="verticalPosition" :horizontalPosition="horizontalPosition" :show="tooltipShown" :label="tooltip" :touch="touch"></tooltip>
  </th>
</template>

<script>
import tooltip from '../tooltip'
export default {
  name: 'mu-th',
  props: {
    tooltip: {
      type: String
    },
    tooltipPosition: {
      type: String,
      default: 'bottom-center'
    },
    touch: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tooltipShown: false
    }
  },
  computed: {
    verticalPosition () {
      const tooltipPosition = this.tooltipPosition.split('-')
      return tooltipPosition[0]
    },
    horizontalPosition () {
      const tooltipPosition = this.tooltipPosition.split('-')
      return tooltipPosition[1]
    }
  },
  methods: {
    showTooltip () {
      this.tooltipShown = true
    },
    hideTooltip () {
      this.tooltipShown = false
    }
  },
  components: {
    tooltip
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-th {
  font-weight: normal;
  font-size: 12px;
  padding-left: 24px;
  padding-right: 24px;
  height: 56px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: @secondaryTextColor;
  position: relative;
}
</style>
