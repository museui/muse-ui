<template>
  <ul class="pagination clearfix">
    <li>
      <mu-pageItem icon="chevron_left" :isCircle="isCircle" @click="handleClick" :disabled="leftDisabled">
      </mu-pageItem>
    </li>
    <li v-for="index in total">
      <mu-pageItem :index="index" :isCircle="isCircle" @click="handleClick" :isActive="current ? current === index : defaultCurrent === index "></mu-pageItem>
    </li>
    <li>
      <mu-pageItem icon="chevron_right" :isCircle="isCircle" @click="handleClick" :disabled="rightDisabled"></mu-pageItem>
    </li>
  </ul>
</template>

<script>
import pageItem from './pageItem'
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
    }
  },
  data () {
    return {
      leftDisabled: false,
      rightDisabled: false
    }
  },
  mounted () {
    this.IconIsDisabled()
  },
  computed: {

  },
  methods: {
    handleClick (index) {
      this.$emit('click', index)
    },

    IconIsDisabled () {
      this.leftDisabled = this.current === 1
      this.rightDisabled = this.current === this.total
    }
  },
  components: {
    'mu-pageItem': pageItem
  },
  watch: {
    current: function (val) {
      this.leftDisabled = val === 1
      this.rightDisabled = val === this.total
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
