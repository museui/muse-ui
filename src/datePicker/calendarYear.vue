<template>
<div class="mu-calendar-year-container">
  <div class="mu-calendar-year" ref="container">
    <div class="mu-calendar-year-list">
      <year-button @click="handleClick(year)" v-for="year in years" :key="'yearButton' + year"  :year="year" :selected="year === selectedDate.getFullYear()"/>
    </div>
  </div>
</div>
</template>

<script>
import yearButton from './yearButton'
export default {
  props: {
    maxDate: {
      type: Date
    },
    minDate: {
      type: Date
    },
    selectedDate: {
      type: Date
    }
  },
  computed: {
    years () {
      const minYear = this.minDate.getFullYear()
      const maxYear = this.maxDate.getFullYear()
      const years = []
      for (let year = minYear; year <= maxYear; year++) {
        years.push(year)
      }
      return years
    }
  },
  methods: {
    handleClick (year) {
      this.$emit('change', year)
    },
    scrollToSelectedYear (yearButtonNode) {
      const container = this.$refs.container

      const containerHeight = container.clientHeight
      const yearButtonNodeHeight = yearButtonNode.clientHeight || 32

      const scrollYOffset = (yearButtonNode.offsetTop + yearButtonNodeHeight / 2) - containerHeight / 2
      container.scrollTop = scrollYOffset
    }
  },
  components: {
    'year-button': yearButton
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-calendar-year-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 10px;
  width: 310px;
  height: 272px;
  overflow: hidden;
}

.mu-calendar-year {
  background-color: @dialogBackgroundColor;
  height: inherit;
  line-height: 35px;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
}

.mu-calendar-year-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
}
</style>
