<template>
  <ul class="pagination clearfix">
    <li>
      <mu-pageItem icon="<" identifier="singleBack" :isCircle="isCircle" @click="handleClick" :disabled="leftDisabled">
      </mu-pageItem>
    </li>
    <li>
      <mu-pageItem :index="1" :isCircle="isCircle" @click="handleClick" :isActive="actualCurrent === 1"></mu-pageItem>
    </li>
    <li v-if="totalPageCount > 5 && actualCurrent - 1 >= 4">
      <mu-pageItem icon="..." identifier="backs" :isCircle="isCircle" @click="handleClick" @hover="handleHover" @hoverExit="handleHoverExit" title="前5页"></mu-pageItem>
    </li>
    <li v-for="item in pageList">
      <mu-pageItem :index="item" :isCircle="isCircle" @click="handleClick" :isActive="actualCurrent === item"></mu-pageItem>
    </li>
    <li v-if="totalPageCount > 5 && totalPageCount - actualCurrent >= 4">
      <mu-pageItem icon="..." identifier="forwards" :isCircle="isCircle" @click="handleClick" @hover="handleHover" @hoverExit="handleHoverExit" title="后5页"></mu-pageItem>
    </li>
    <li>
      <mu-pageItem :index="totalPageCount" :isCircle="isCircle" @click="handleClick" :isActive="actualCurrent === totalPageCount"></mu-pageItem>
    </li>
    <li>
      <mu-pageItem icon=">" identifier="singleForward" :isCircle="isCircle" @click="handleClick" :disabled="rightDisabled"></mu-pageItem>
    </li>
    <li :style="{width: '100px'}" v-if="showSizeChanger">
      <mu-select-field v-model="actualPageSize" :style="{width: '100px'}">
          <mu-menu-item v-for="item in pageSizeOption" :value="item" :title="item + ' / 页'" :style="{width: '100px'}">
      </mu-select-field>
    </li>
    <li :style="{width: '70px'}" v-if="showQuickJumper">
      <mu-text-field hintText="快速跳转" :style="{width: '70px'}" v-model="quickJumpPage" @keyup.native.enter="quickJump"/>
    </li>
  </ul>
</template>

<script>
import pageItem from './pageItem'
import selectField from '../selectField'
import menuItem from '../menu/menuItem'
export default{
  name: 'mu-pagination',
  props: {
    total: {
      type: Number,
      default: 1
    },
    current: {
      type: Number
    },
    defaultCurrent: {
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
    isCircle: {
      type: Boolean,
      default: false
    },
    showSizeChanger: {
      type: Boolean,
      default: false
    },
    pageSizeOption: {
      type: Array,
      default: () => ['10', '20', '30', '40']
    },
    showQuickJumper: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      leftDisabled: false,
      rightDisabled: false,
      actualCurrent: this.defaultCurrent,
      actualPageSize: this.defaultPageSize,
      totalPageCount: 0,
      pageList: [],
      quickJumpPage: ''
    }
  },
  mounted () {
    this.IconIsDisabled()
    if (this.current) {
      this.actualCurrent = this.current
    }

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
      this.$emit('pageChange', this.actualCurrent)
    },
    handleHover () {

    },
    handleHoverExit () {

    },

    IconIsDisabled () {
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
    },
    quickJump () {
      if (this.quickJumpPage) {
        this.actualCurrent = Math.min(this.quickJumpPage, this.totalPageCount)
      }
    }
  },
  components: {
    'mu-pageItem': pageItem,
    'mu-select-field': selectField,
    'mu-menu-item': menuItem
  },
  watch: {
    actualCurrent: function (val) {
      this.leftDisabled = val === 1
      this.rightDisabled = val === this.totalPageCount
      this.actualCurrent = val
      this.pageList = this.calcPageList(val)
    },
    actualPageSize: function (val) {
      this.$emit('pageSizeChange', val)
    },
    current: function (val, oldVal) {
      this.actualCurrent = val
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.pagination li{
  font-size: 1.5rem;
  float: left;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  border-radius: 2px;
  text-align: center;
  list-style-type: none;
}

.clearfix:after{
  content: "020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix{
  /* 触发 hasLayout */
  zoom: 1;
}
</style>
