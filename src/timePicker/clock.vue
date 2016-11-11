<template>
<div class="mu-clock" :class="{'mu-clock-landspace': landscape}">
  <!--time display-->
  <time-display :selectedTime="selectedTime" :format="format" :mode="mode" :affix="getAffix()"
    @selectMin="mode = 'minute'" @selectHour="mode = 'hour'" @selectAffix="handleSelectAffix"/>
  <div class="mu-clock-container">
    <div class="mu-clock-circle"></div>
    <clock-hours v-if="mode === 'hour'" :format="format" :initialHours="selectedTime.getHours()" @change="handleChangeHours" />
    <clock-minutes v-if="mode === 'minute'" @change="handleChangeMinutes" :initialMinutes="selectedTime.getMinutes()"/>
    <div class="mu-clock-actions">
      <flat-button :label="cancelLabel" @click="dismiss" primary/>
      <flat-button :label="okLabel" @click="accept" primary/>
    </div>
  </div>
</div>
</template>

<script>
import timeDisplay from './timeDisplay'
import clockHours from './clockHours'
import clockMinutes from './clockMinutes'
import flatButton from '../flatButton'
export default {
  props: {
    autoOk: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: 'ampm',
      validator (val) {
        return ['ampm', '24hr'].indexOf(val) !== -1
      }
    },
    initialTime: {
      type: Date,
      default () {
        return new Date()
      }
    },
    okLabel: {
      type: String,
      default: '确定'
    },
    cancelLabel: {
      type: String,
      default: '取消'
    },
    landscape: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectedTime: this.initialTime,
      mode: 'hour'
    }
  },
  methods: {
    getAffix () {
      if (this.format !== 'ampm') return ''

      const hours = this.selectedTime.getHours()
      if (hours < 12) {
        return 'am'
      }

      return 'pm'
    },
    handleSelectAffix (affix) {
      if (affix === this.getAffix()) return

      const hours = this.selectedTime.getHours()

      if (affix === 'am') {
        this.handleChangeHours(hours - 12, affix)
        return
      }

      this.handleChangeHours(hours + 12, affix)
    },
    handleChangeHours (hours, finished) {
      const time = new Date(this.selectedTime)
      let affix
      if (typeof finished === 'string') {
        affix = finished
        finished = undefined
      }

      if (!affix) {
        affix = this.getAffix()
      }
      if (affix === 'pm' && hours < 12) {
        hours += 12
      }

      time.setHours(hours)
      this.selectedTime = time

      if (finished) {
        setTimeout(() => {
          this.mode = 'minute'
          this.$emit('changeHours', time)
        }, 100)
      }
    },
    handleChangeMinutes (minutes) {
      const time = new Date(this.selectedTime)
      time.setMinutes(minutes)
      this.selectedTime = time
      setTimeout(() => {
        this.$emit('changeMinutes', time)
        if (this.autoOk) this.accept()
      }, 0)
    },
    accept () {
      this.$emit('accept', this.selectedTime)
    },
    dismiss () {
      this.$emit('dismiss')
    }
  },
  watch: {
    initialTime (val) {
      this.selectedTime = val
    }
  },
  components: {
    'time-display': timeDisplay,
    'clock-hours': clockHours,
    'clock-minutes': clockMinutes,
    'flat-button': flatButton
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-clock {
  user-select: none;
  width: 280px;
}

.mu-clock-landspace{
  width: 479px;
  display: flex;
  justify-content: space-between;
}

.mu-clock-container {
  height: 280px;
  padding: 10px;
  position: relative;
  box-sizing: content-box;
  position: relative;
  padding-bottom: 62px;
  .mu-clock-landspace & {
    width: 300px;
  }
}

.mu-clock-circle {
  position: absolute;
  top: 20px;
  width: 260px;
  height: 260px;
  border-radius: 100%;
  background-color: fade(@darkBlack, 7%);
  .mu-clock-landspace &{
    left: 50%;
    margin-left: -130px;
  }
}

.mu-clock-actions{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 8px;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
