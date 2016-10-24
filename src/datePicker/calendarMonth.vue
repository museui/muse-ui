<template>
<div class="mu-calendar-monthday-content">
  <div class="mu-calendar-monthday-row" :key="i"  v-for="week, i in weeksArray">
    <day-button @click="handleClick(date)" v-for="date, j in week" :disabled="isDisableDate(date)" :key="'dayButton' + i + '' + j" :selected="equalsDate(date)" :date="date"></day-button>
  </div>
</div>
</template>

<script>
import dayButton from './dayButton'
import * as dateUtils from './dateUtils'
export default {
  props: {
    displayDate: {
      type: Date
    },
    firstDayOfWeek: {
      type: Number,
      default: 1
    },
    maxDate: {
      type: Date
    },
    minDate: {
      type: Date
    },
    selectedDate: {
      type: Date
    },
    shouldDisableDate: {
      type: Function
    }
  },
  data () {
    return {
      weeksArray: dateUtils.getWeekArray(this.displayDate || new Date(), this.firstDayOfWeek)
    }
  },
  methods: {
    equalsDate (date) {
      return dateUtils.isEqualDate(date, this.selectedDate)
    },
    isDisableDate (day) {
      if (day === null) return false
      let disabled = false
      if (this.maxDate && this.minDate) disabled = !dateUtils.isBetweenDates(day, this.minDate, this.maxDate)
      if (!disabled && this.shouldDisableDate) disabled = this.shouldDisableDate(day)
      return disabled
    },
    handleClick (date) {
      if (date) this.$emit('selected', date)
    }
  },
  watch: {
    displayDate (val) {
      return dateUtils.getWeekArray(val || new Date(), this.firstDayOfWeek)
    }
  },
  components: {
    'day-button': dayButton
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-calendar-monthday-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 400;
  height: 228px;
  line-height: 2;
  position: relative;
  text-align: center;
}

.mu-calendar-monthday-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 34px;
  margin-bottom: 2px;
}
</style>
