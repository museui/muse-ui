<template>
<div class="mu-date-display" :class="displayClass">
  <div class="mu-date-display-year" :class="{'disabled': disableYearSelection}" @click="handleSelectYear">
    <transition :name="'mu-date-display-' +  slideType" v-for="displayDate, index in displayDates" :key="index">
      <div class="mu-date-display-slideIn-wrapper" :key="displayDate.getFullYear()">
        <div class="mu-date-display-year-title">
          {{displayDate.getFullYear()}}
        </div>
      </div>
    </transition>
  </div>
  <div class="mu-date-display-monthday" @click="handleSelectMonth">
    <transition :name="'mu-date-display-' +  slideType" v-for="displayDate, index in displayDates" :key="index">
      <div class="mu-date-display-slideIn-wrapper" :key="dateTimeFormat.formatDisplay(displayDate)" >
        <div class="mu-date-display-monthday-title">
          {{dateTimeFormat.formatDisplay(displayDate)}}
        </div>
      </div>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  props: {
    dateTimeFormat: {
      type: Object
    },
    disableYearSelection: {
      type: Boolean,
      default: false
    },
    monthDaySelected: {
      type: Boolean,
      default: true
    },
    selectedDate: {
      type: Date
    }
  },
  data () {
    return {
      displayDates: [this.selectedDate],
      slideType: 'next'
    }
  },
  computed: {
    selectedYear () {
      return !this.monthDaySelected
    },
    displayClass () {
      return {
        'selected-year': this.selectedYear
      }
    }
  },
  methods: {
    replaceSelected (date) {
      let oldDate = this.displayDates[0]
      this.slideType = date.getTime() > oldDate.getTime() ? 'next' : 'prev'
      this.displayDates.push(date)
      this.displayDates.splice(0, 1)
    },
    handleSelectYear () {
      if (!this.disableYearSelection) this.$emit('selectYear')
    },
    handleSelectMonth () {
      this.$emit('selectMonth')
    }
  },
  watch: {
    selectedDate (val) {
      this.replaceSelected(val)
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-date-display{
  width: 100%;
  font-weight: 700;
  display: block;
  background-color: @primaryColor;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-left-radius: 0;
  color: @alternateTextColor;
  padding: 20px;
  .mu-calendar-landspace & {
    width: 165px;
    height: 330px;
    float: left;
    border-top-right-radius: 0;
    border-bottom-left-radius: 2px;
  }
}

.mu-date-display-year {
  position: relative;
  overflow: hidden;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  height: 16px;
  opacity: 0.7;
  transition: all .45s @easeOutFunction;
  margin-bottom: 10px;
  .mu-date-display.selected-year &{
    opacity: 1;
  }
}


.mu-date-display-year-title {
  cursor: pointer;
  .mu-date-display-year.disabled &{
    cursor: not-allowed;
  }
  .mu-date-display.selected-year {
    cursor: default;
  }

}

.mu-date-display-monthday {
  position: relative;
  display: block;
  overflow: hidden;
  font-size: 36px;
  line-height: 36px;
  height: 38px;
  transition: all .45s @easeOutFunction;
  width: 100%;
  font-weight: 500;
  .mu-date-display.selected-year &{
    opacity: 0.7;
  }
  .mu-calendar-landspace & {
    height: 100%;
  }
}

.mu-date-display-slideIn-wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
}

.mu-date-display-monthday-title {
  cursor: default;
  width: 100%;
  display: block;
  .mu-date-display.selected-year &{
    cursor: pointer;
  }
}

.mu-date-display-next-enter-active,
.mu-date-display-next-leave-active,
.mu-date-display-prev-enter-active,
.mu-date-display-prev-leave-active {
  transition: transform 450ms @easeOutFunction, opacity 450ms @easeOutFunction;
  backface-visibility: hidden;
}

.mu-date-display-next-enter {
  transform: translate3d(0, -100%, 0);
  opacity: 0;
}
.mu-date-display-next-leave-active {
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}

.mu-date-display-prev-enter {
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}
.mu-date-display-prev-leave-active {
  transform: translate3d(0, -100%, 0);
  opacity: 0;
}
</style>
