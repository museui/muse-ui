<template>
  <tr class="mu-tr" :key="rowId" @click="handleClick" @mouseenter="handleHover" @mouseleave="handleExit" :class="className">
    <mu-th class="mu-checkbox-col" v-if="isTh && showCheckbox">
      <checkbox :value="isSelectAll && enableSelectAll" @change="handleSelectAllChange" :disabled="!enableSelectAll || !multiSelectable" />
    </mu-th>
    <mu-td class="mu-checkbox-col" v-if="isTb && showCheckbox">
      <checkbox ref="checkLabel" :disabled="!selectable || !$parent.selectable" @change="handleCheckboxChange" @click.native="handleCheckboxClick" :value="isSelected"/>
    </mu-td>
    <mu-td class="mu-checkbox-col" v-if="isTf && showCheckbox"></mu-td>
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
      default: true
    },
    selected: {
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
  mounted () {
    if (this.selected) {
      this.$parent.selectRow(this.rowId)
    }
  },
  computed: {
    className () {
      return {
        hover: this.hover,
        selected: this.isSelected,
        stripe: false
      }
    },
    isTh () {
      return this.$parent.isThead
    },
    isTf () {
      return this.$parent.isTfoot
    },
    isTb () {
      return this.$parent.isTbody
    },
    isSelected () {
      return this.$parent.selectedRows && this.$parent.selectedRows.indexOf(this.rowId) !== -1
    },
    showCheckbox () {
      return this.$parent.showCheckbox
    },
    enableSelectAll () {
      return this.$parent.enableSelectAll
    },
    multiSelectable () {
      return this.$parent.multiSelectable
    },
    isSelectAll () {
      return this.$parent.isSelectAll
    }
  },
  methods: {
    handleHover (event) {
      if (isPc() && this.$parent.isTbody) {
        this.hover = true
        if (this.$parent.handleRowHover) this.$parent.handleRowHover(event, this.rowId, this)
      }
    },
    handleExit (event) {
      if (isPc() && this.$parent.isTbody) {
        this.hover = false
        if (this.$parent.handleRowHoverExit) this.$parent.handleRowHoverExit(event, this.rowId, this)
      }
    },
    handleClick (e) {
      if (!this.$parent.isTbody) return
      if (this.selectable) {
        if (!this.isSelected) {
          this.$parent.selectRow(this.rowId)
        } else {
          this.$parent.unSelectRow(this.rowId)
        }
      }
      this.$parent.handleRowClick(e, this)
    },
    handleCheckboxClick (event) {
      event.stopPropagation()
    },
    handleCheckboxChange (val) {
      if (!this.selectable) return
      if (val) {
        this.$parent.selectRow(this.rowId)
      } else {
        this.$parent.unSelectRow(this.rowId)
      }
    },
    handleSelectAllChange (val) {
      if (val) {
        this.$parent.selectAll()
      } else {
        this.$parent.unSelectAll()
      }
    },
    handleCellHover (event, name, td) {
      if (this.$parent.handleCellHover) this.$parent.handleCellHover(event, name, td, this.rowId, this)
    },
    handleCellHoverExit (event, name, td) {
      if (this.$parent.handleCellHoverExit) this.$parent.handleCellHoverExit(event, name, td, this.rowId, this)
    },
    handleCellClick (event, name, td) {
      if (this.$parent.handleCellClick) this.$parent.handleCellClick(event, name, td, this.rowId, this)
    },
    handleSort (n, dir) {
      this.$parent.handleSort(n, dir)
    }
  },
  watch: {
    selected (val, oldVal) {
      if (val === oldVal) return
      if (val) {
        this.$parent.selectRow(this.rowId, false)
      } else {
        this.$parent.unSelectRow(this.rowId, false)
      }
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
    background-color: fade(lighten(@primaryColor, 50%), 40%);
  }

  .mu-tfoot & {
    border-top: 1px solid @borderColor;
  }
  .mu-checkbox {
    vertical-align: middle;
  }
}

.mu-checkbox-col {
  width: 72px;
}
</style>
