<template>
<div class="mu-pagination" v-if="total">
  <page-item identifier="singleBack" @click="handleClick" :disabled="leftDisabled">
    <svg viewBox="0 0 24 24" class="mu-pagination-svg-icon">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
  </page-item>
  <page-item :index="1" @click="handleClick" :isActive="actualCurrent === 1"/>
  <page-item v-if="totalPageCount > 5 && actualCurrent - 1 >= 4" identifier="backs" @click="handleClick" title="前5页">
    <span>...</span>
  </page-item>
  <page-item v-for="item in pageList" :key="item" :index="item" @click="handleClick" :isActive="actualCurrent === item"/>
  <page-item v-if="totalPageCount > 5 && totalPageCount - actualCurrent >= 4" identifier="forwards" @click="handleClick" title="后5页">
    <span>...</span>
  </page-item>
  <page-item :index="totalPageCount" @click="handleClick" :isActive="actualCurrent === totalPageCount" v-if="totalPageCount !== 1"></page-item>
  <page-item identifier="singleForward" @click="handleClick" :disabled="rightDisabled">
    <svg viewBox="0 0 24 24" class="mu-pagination-svg-icon">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg>
  </page-item>
  <select-field  v-if="showSizeChanger" v-model="actualPageSize" :style="{width: '100px'}">
    <menu-item v-for="item in pageSizeOption" :key="'mt_' + item" :value="item" :title="item + pageSizeChangerText" :style="{width: '100px'}"/>
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
      default: 1,
      validator: value => value >= 1
    },
    current: {
      type: Number,
      default: 1,
      validator: value => value >= 1
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
      default: () => [10, 20, 30, 40]
    },
    pageSizeChangerText: {
      type: String,
      default: () => ' / 页'
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
    // 优先使用pageSizeOption,如果props配置了默认值，那么该props无论在父组件
    // 中是否配置该值都不会为undefined,所以需要使用showSizeChanger来做这个判断
    // 才对
    if (this.showSizeChanger) {
      this.actualPageSize = this.pageSizeOption[0]
    } else if (this.pageSize) {
      this.actualPageSize = this.pageSize
    }

    this.totalPageCount = Math.ceil(this.total / this.actualPageSize)
    this.pageList = this.calcPageList(this.actualCurrent)

    this.iconIsDisabled(this.actualCurrent)
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
    iconIsDisabled (current) {
      this.leftDisabled = current === 1
      this.rightDisabled = current === this.totalPageCount
    },

    calcPageList (current) {
      let pageList = []
      if (this.totalPageCount > 5) {
        let left = Math.max(2, current - 2)
        let right = Math.min(current + 2, this.totalPageCount - 1)
        if (current - 1 < 2) {
          right = 4
        }

        if (this.totalPageCount - current < 2) {
          left = this.totalPageCount - 3
        }

        for (let i = left; i <= right; i++) {
          pageList.push(i)
        }
      } else {
        for (let i = 2; i < this.totalPageCount; i++) {
          pageList.push(i)
        }
      }

      return pageList
    },
    pageSizeAndTotalChange (current) {
      this.iconIsDisabled(current)
      this.pageList = this.calcPageList(current)
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
      if (val === 0) {
        return
      }
      this.pageSizeAndTotalChange(val)
      this.$emit('pageChange', val)
      this.$emit('page-change', val)
    },
    actualPageSize: function (val, oldVal) {
      // 如果页面条数改变的时候,对应的当前页也是需要重新计算的,
      // 计算规则是根据当前页的起始索引来计算该索引位于新的pageSize
      // 中的页码
      let itemIndex = oldVal * (this.actualCurrent - 1)
      let oldCurrent = this.actualCurrent
      this.actualCurrent = Math.floor(itemIndex / val) + 1
      // 页码条数改变的时候当前页不一定改变,但是我们必须重新计算一些依赖的参数
      this.totalPageCount = Math.ceil(this.total / this.actualPageSize)
      if (oldCurrent === this.actualCurrent) {
        this.pageSizeAndTotalChange(oldCurrent)
      }
      this.$emit('pageSizeChange', val)
      this.$emit('page-size-change', val)
    },
    total: function (val) {
      // 如果条目总数改变的时候当前页也需要重新计算
      let oldCurrent = this.actualCurrent
      this.actualCurrent = Math.min(this.totalPageCount, this.actualCurrent)
      // 总条数改变的时候当前页不一定改变,但是我们必须重新计算一些依赖的参数,
      // 比如total从10变为11(pageSize=10),那么current没变,不过右前进的按钮应该由
      // disable变为enable的
      this.totalPageCount = Math.ceil(this.total / this.actualPageSize)
      if (oldCurrent === this.actualCurrent) {
        this.pageSizeAndTotalChange(oldCurrent)
      }
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

.mu-pagination-svg-icon{
  display: inline-block;
  width: 24px;
  height: 24px;
  fill: currentColor;
  user-select: none;
  transition: all 450ms @easeOutFunction;
}

</style>
