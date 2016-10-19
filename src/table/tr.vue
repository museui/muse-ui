<template>
  <tr class="mu-tr" :key="rowId" @click="handleClick" @mouseenter="handleHover" @mouseleave="handleOut" :class="className">
    <mu-th style="width: 72px;" v-if="isTh">
      <checkbox :value="selected" disabled/>
    </mu-th>
    <mu-td v-if="!isTh">
      <checkbox @click.native="handleCheckboxClick" :value="selected"/>
    </mu-td>
    <slot></slot>
  </tr>
</template>

<script>
import {isPc} from '../utils'
import td from './td'
import th from './th'
import checkbox from '../checkbox'
let uuid = 1
export default {
  name: 'mu-tr',
  props: {
    selectable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hover: false,
      rowId: 'tr-' + uuid++
    }
  },
  computed: {
    className () {
      return {
        hover: this.hover,
        selected: this.selected,
        stripe: false
      }
    },
    isTh () {
      return this.$parent.isThead
    },
    selected () {
      return this.$parent.selectedRows && this.$parent.selectedRows.indexOf(this.rowId) !== -1
    }
  },
  methods: {
    handleHover () {
      if (isPc() && this.$parent.isTbody) this.hover = true
    },
    handleOut () {
      this.hover = false
    },
    handleClick (e) {
      if (this.$parent.handleRowClick) this.$parent.handleRowClick(e, this)
    },
    handleCheckboxClick (event) {
      event.stopPropagation()
    }
  },
  components: {
    'mu-td': td,
    'mu-th': th,
    checkbox
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-tr {
  border-bottom: 1px solid @borderColor;
  color: @textColor;
  height: 48px;
  &:last-child {
    border-bottom: none;
  }
  &.selected {
    background-color: @grey100;
  }
  &.hover {
    background-color: @grey200;
  }
  &.stripe {
    background-color: fade(lighten(@primary1Color, 50%), 40%)
  }

  .mu-tfoot & {
    border-top: 1px solid @borderColor;
  }
  .mu-checkbox {
    vertical-align: middle;
  }
}
</style>
