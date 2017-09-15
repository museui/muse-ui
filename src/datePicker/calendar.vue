<template>
<div class="mu-calendar" :class="{'mu-calendar-landspace': mode === 'landscape'}">
  <date-display @selectYear="selectYear" @selectMonth="selectMonth" :monthDaySelected="displayMonthDay" :disableYearSelection="disableYearSelection" :selectedDate="selectedDate" :dateTimeFormat="dateTimeFormat"></date-display>
  <div class="mu-calendar-container">
    <div class="mu-calendar-monthday-container" v-if="displayMonthDay">
      <calendar-toolbar :slideType="slideType" :nextMonth="nextMonth" :prevMonth="prevMonth" @monthChange="handleMonthChange" :displayDates="displayDates" :dateTimeFormat="dateTimeFormat" />
      <div class="mu-calendar-week">
        <span class="mu-calendar-week-day" v-for="weekText, index in weekTexts" :key="index">{{weekText}}</span>
      </div>
      <div class="mu-calendar-monthday">
        <transition :name="'mu-calendar-slide-' + slideType" v-for="displayDate, index in displayDates" :key="index">
          <div class="mu-calendar-monthday-slide" :key="displayDate.getTime()" >
            <calendar-month @selected="handleSelected" :shouldDisableDate="shouldDisableDate" :displayDate="displayDate" :firstDayOfWeek="firstDayOfWeek" :maxDate="maxDate" :minDate="minDate" :selectedDate="selectedDate" />
          </div>
        </transition>
      </div>
    </div>
    <calendar-year @change="handleYearChange" v-if="!displayMonthDay" :selectedDate="selectedDate" :maxDate="maxDate" :minDate="minDate"/>
    <div class="mu-calendar-actions">
      <flat-button :label="cancelLabel"  @click="handleCancel" primary/>
      <flat-button v-if="!autoOk" @click="handleOk" :label="okLabel" primary/>
    </div>
  </div>
</div>
</template>

<script>
import dateDisplay from './dateDisplay'
import calendarToolbar from './calendarToolbar'
import flatButton from '../flatButton'
import calendarMonth from './calendarMonth'
import * as dateUtils from './dateUtils'
import calendarYear from './calendarYear'
import keycode from 'keycode'
export default {
  props: {
    dateTimeFormat: {
      type: Object,
      default () {
        return dateUtils.dateTimeFormat
      }
    },
    autoOk: {
      type: Boolean,
      default: false
    },
    okLabel: {
      type: String,
      default: '确定'
    },
    cancelLabel: {
      type: String,
      default: '取消'
    },
    disableYearSelection: {
      type: Boolean,
      default: false
    },
    firstDayOfWeek: {
      type: Number,
      default: 1
    },
    initialDate: {
      type: Date,
      default () {
        return new Date()
      }
    },
    maxDate: {
      type: Date,
      default () {
        return dateUtils.addYears(new Date(), 100)
      }
    },
    minDate: {
      type: Date,
      default () {
        return dateUtils.addYears(new Date(), -100)
      }
    },
    mode: {
      type: String,
      default: 'portrait',
      validator (val) {
        return val && ['portrait', 'landscape'].indexOf(val) !== -1
      }
    },
    shouldDisableDate: {
      type: Function
    }
  },
  data () {
    const displayDate = dateUtils.cloneDate(this.initialDate)
    displayDate.setDate(1)
    return {
      weekTexts: this.dateTimeFormat.getWeekDayArray(this.firstDayOfWeek),
      displayDates: [displayDate],
      selectedDate: this.initialDate,
      slideType: 'next',
      displayMonthDay: true
    }
  },
  computed: {
    prevMonth () {
      return this.displayDates && dateUtils.monthDiff(this.displayDates[0], this.minDate) > 0
    },
    nextMonth () {
      return this.displayDates && dateUtils.monthDiff(this.displayDates[0], this.maxDate) < 0
    }
  },
  methods: {
    handleMonthChange (val) {
      const displayDate = dateUtils.addMonths(this.displayDates[0], val)
      this.changeDislayDate(displayDate)
      this.$emit('monthChange', displayDate)
    },
    handleYearChange (year) {
      if (this.selectedDate.getFullYear() === year) return
      let date = dateUtils.cloneAsDate(this.selectedDate)
      date.setFullYear(year)
      this.setSelected(date)
      this.selectMonth()
      this.$emit('yearChange', date)
    },
    handleSelected (date) {
      this.setSelected(date)
      if (this.autoOk) this.handleOk()
    },
    handleCancel () {
      this.$emit('dismiss')
    },
    handleOk () {
      const {selectedDate, maxDate, minDate} = this

      if (selectedDate.getTime() > maxDate.getTime()) this.selectedDate = new Date(maxDate.getTime())
      if (selectedDate.getTime() < minDate.getTime()) this.selectedDate = new Date(minDate.getTime())

      this.$emit('accept', this.selectedDate)
    },
    setSelected (date) {
      this.selectedDate = date
      this.changeDislayDate(date)
    },
    changeDislayDate (date) {
      const oldDate = this.displayDates[0]
      if (date.getFullYear() === oldDate.getFullYear() && date.getMonth() === oldDate.getMonth()) return
      this.slideType = date.getTime() > oldDate.getTime() ? 'next' : 'prev'
      const displayDate = dateUtils.cloneDate(date)
      displayDate.setDate(1)
      this.displayDates.push(displayDate)
      this.displayDates.splice(0, 1)
    },
    selectYear () {
      this.displayMonthDay = false
    },
    selectMonth () {
      this.displayMonthDay = true
    },
    addSelectedDays (days) {
      this.setSelected(dateUtils.addDays(this.selectedDate, days))
    },
    addSelectedMonths (months) {
      this.setSelected(dateUtils.addMonths(this.selectedDate, months))
    },
    addSelectedYears (years) {
      this.setSelected(dateUtils.addYears(this.selectedDate, years))
    },
    handleKeyDown (event) {
      switch (keycode(event)) {
        case 'up':
          if (event.altKey && event.shiftKey) {
            this.addSelectedYears(-1)
          } else if (event.shiftKey) {
            this.addSelectedMonths(-1)
          } else {
            this.addSelectedDays(-7)
          }
          break

        case 'down':
          if (event.altKey && event.shiftKey) {
            this.addSelectedYears(1)
          } else if (event.shiftKey) {
            this.addSelectedMonths(1)
          } else {
            this.addSelectedDays(7)
          }
          break

        case 'right':
          if (event.altKey && event.shiftKey) {
            this.addSelectedYears(1)
          } else if (event.shiftKey) {
            this.addSelectedMonths(1)
          } else {
            this.addSelectedDays(1)
          }
          break

        case 'left':
          if (event.altKey && event.shiftKey) {
            this.addSelectedYears(-1)
          } else if (event.shiftKey) {
            this.addSelectedMonths(-1)
          } else {
            this.addSelectedDays(-1)
          }
          break
      }
    }
  },
  mounted () {
    this.handleWindowKeyDown = (event) => {
      this.handleKeyDown(event)
    }
    typeof window !== 'undefined' && window.addEventListener('keydown', this.handleWindowKeyDown)
  },
  beforeDestory () {
    window.removeEventListener('keydown', this.handleWindowKeyDown)
  },
  watch: {
    initialDate (val) {
      this.selectedDate = val
    }
  },
  components: {
    'date-display': dateDisplay,
    'calendar-toolbar': calendarToolbar,
    'flat-button': flatButton,
    'calendar-month': calendarMonth,
    'calendar-year': calendarYear
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-calendar {
  color: @textColor;
  user-select: none;
  width: 310px;
}

.mu-calendar-landspace{
  width: 479px;
}

.mu-calendar-container{
  display: flex;
  flex-direction: column;
}

.mu-calendar-monthday-container {
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  flex-direction: column;
  font-size: 12px;
  font-weight: 400;
  padding: 0px 8px;
  transition: all .45s @easeOutFunction;
}

.mu-calendar-week {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 500;
  height: 20px;
  line-height: 15px;
  opacity: 0.5;
  text-align: center;
}

.mu-calendar-week-day {
  width: 42px;
}

.mu-calendar-monthday{
  position: relative;
  overflow: hidden;
  height: 214px;
}

.mu-calendar-monthday-slide{
  height: 100%;
  width: 100%;
}

.mu-calendar-actions{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0px;
  max-height: 48px;
  padding: 0px;
  .mu-flat-button {
    min-width: 64px;
    margin: 4px 8px 8px 0px;
  }
}
.mu-calendar-slide-next-enter-active,
.mu-calendar-slide-next-leave-active,
.mu-calendar-slide-prev-enter-active,
.mu-calendar-slide-prev-leave-active {
  transition: transform 450ms @easeOutFunction, opacity 450ms @easeOutFunction;
  backface-visibility: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}

.mu-calendar-slide-next-enter {
  transform: translate3d(100%, 0, 0);
}
.mu-calendar-slide-next-leave-active {
  transform: translate3d(-100%, 0, 0);
  opacity: 0;
}

.mu-calendar-slide-prev-enter {
  transform: translate3d(-100%, 0, 0);
}
.mu-calendar-slide-prev-leave-active {
  transform: translate3d(100%, 0, 0);
  opacity: 0;
}


</style>
