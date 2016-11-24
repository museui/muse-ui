<template>
<div class="mu-pagination">
  <page-item icon="chevron_left" identifier="singleBack" @click="handleClick" :disabled="leftDisabled">
  </page-item>
  <page-item :index="1" @click="handleClick" :isActive="actualCurrent === 1"/>
  <page-item v-if="totalPageCount > 5 && actualCurrent - 1 >= 4" identifier="backs" @click="handleClick" title="前5页">
    <span>...</span>
  </page-item>
  <page-item v-for="item in pageList" :index="item" @click="handleClick" :isActive="actualCurrent === item"/>
  <page-item v-if="totalPageCount > 5 && totalPageCount - actualCurrent >= 4" identifier="forwards" @click="handleClick" title="后5页">
    <span>...</span>
  </page-item>
  <page-item :index="totalPageCount" @click="handleClick" :isActive="actualCurrent === totalPageCount"></page-item>
  <page-item icon="chevron_right" identifier="singleForward" @click="handleClick" :disabled="rightDisabled"></page-item>
  <select-field  v-if="showSizeChanger" v-model="actualPageSize" :style="{width: '100px'}">
    <menu-item v-for="item in pageSizeOption" :value="item" :title="item + ' / 页'" :style="{width: '100px'}"/>
  </select-field>
  <!-- <text-field v-if="showQuickJumper" type="number" hintText="快速跳转" :style="{width: '70px'}" v-model="quickJumpPage" @keyup.native.enter="quickJump"/> -->
</div>
</template>

<script>
import pageItem from './pageItem'
import selectField from '../selectField'
import textField from '../textField'
import menuItem from '../menu/menuItem'
export default{
  name: 'mu-pagination',
  props: {
    total: {
      type: Number,
      default: 1
    },
    current: {
      type: Number,
      default: 1
    },
    defaultPageSize: {
      type: Number,
      default: 10
    },
    pageSize: {
      type: Number
    },
    showSizeChanger: {
      type: Boolean,
      default: false
    },
    pageSizeOption: {
      type: Array,
      default: () => ['10', '20', '30', '40']
    }
    // showQuickJumper: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data () {
    return {
      leftDisabled: false,
      rightDisabled: false,
      actualCurrent: this.current,
      actualPageSize: this.defaultPageSize,
      totalPageCount: 0,
      pageList: [],
      quickJumpPage: ''
    }
  },
  mounted () {
    this.iconIsDisabled()
    // 优先使用pageSizeOption
    if (this.pageSizeOption) {
      this.actualPageSize = this.pageSizeOption[0]
    } else if (this.pageSize) {
      this.actualPageSize = this.pageSize
    }
    this.totalPageCount = Math.ceil(this.total / this.actualPageSize)
    this.pageList = this.calcPageList(this.actualCurrent)
  },
  computed: {
    totalPageCount: function () {
      return Math.ceil(this.total / this.actualPageSize)
    }
  },
  methods: {
    handleClick (res) {
      if (typeof res === 'number') {
        this.actualCurrent = res
      } else {
        switch (res) {
          case 'singleBack':
            this.actualCurrent = Math.max(1, this.actualCurrent - 1)
            break
          case 'backs':
            this.actualCurrent = Math.max(1, this.actualCurrent - 5)
            break
          case 'forwards':
            this.actualCurrent = Math.min(this.totalPageCount, this.actualCurrent + 5)
            break
          case 'singleForward':
            this.actualCurrent = Math.min(this.totalPageCount, this.actualCurrent + 1)
            break
        }
      }
    },
    iconIsDisabled () {
      this.leftDisabled = this.current === 1
      this.rightDisabled = this.current === this.totalPageCount
    },

    calcPageList (current) {
      let pageList = []
      let left = Math.max(2, current - 2)
      let right = Math.min(current + 2, this.totalPageCount - 1)
      if (current - 1 <= 2) {
        right = 1 + 3
      }

      if (this.totalPageCount - current <= 2) {
        left = this.totalPageCount - 3
      }

      for (let i = left; i <= right; i++) {
        pageList.push(i)
      }

      return pageList
    }
    // quickJump () {
    //   if (this.quickJumpPage) {
    //     this.actualCurrent = Math.min(this.quickJumpPage, this.totalPageCount)
    //   }
    // }
  },
  components: {
    'page-item': pageItem,
    'select-field': selectField,
    'text-field': textField,
    'menu-item': menuItem
  },
  watch: {
    actualCurrent: function (val) {
      this.leftDisabled = val === 1
      this.rightDisabled = val === this.totalPageCount
      this.pageList = this.calcPageList(val)
      this.$emit('pageChange', val)
    },
    actualPageSize: function (val) {
      this.$emit('pageSizeChange', val)
    },
    current (val) {
      this.actualCurrent = val
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-pagination{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

</style>
