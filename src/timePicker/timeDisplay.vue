<template>
<div class="mu-time-display">
  <div class="mu-time-display-text">
    <div class="mu-time-display-affix"></div>
    <div class="mu-time-display-time">
      <span class="mu-time-display-clickable" @click="handleSelectHour" :class="{'inactive': mode === 'minute'}">{{sanitizeTime[0]}}</span>
      <span>:</span>
      <span class="mu-time-display-clickable" @click="handleSelectMin" :class="{'inactive': mode === 'hour'}">{{sanitizeTime[1]}}</span>
    </div>
    <div class="mu-time-display-affix">
      <div v-if="format === 'ampm'" @click="handleSelectAffix('pm')"  class="mu-time-display-clickable" :class="{'inactive': affix === 'am'}">
        PM
      </div>
      <div v-if="format === 'ampm'" @click="handleSelectAffix('am')"  class="mu-time-display-clickable mu-time-display-affix-top" :class="{'inactive': affix === 'pm'}">
        AM
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    affix: {
      type: String,
      default: '',
      validator (val) {
        return ['', 'pm', 'am'].indexOf(val) !== -1
      }
    },
    format: {
      type: String,
      validator (val) {
        return val && ['ampm', '24hr'].indexOf(val) !== -1
      }
    },
    mode: {
      type: String,
      default: 'hour',
      validator (val) {
        return ['hour', 'minute'].indexOf(val) !== -1
      }
    },
    selectedTime: {
      type: Date,
      default () {
        return new Date()
      },
      required: true
    }
  },
  methods: {
    handleSelectAffix (affix) {
      this.$emit('selectAffix', affix)
    },
    handleSelectHour () {
      this.$emit('selectHour')
    },
    handleSelectMin () {
      this.$emit('selectMin')
    }
  },
  computed: {
    sanitizeTime () {
      let hour = this.selectedTime.getHours()
      let min = this.selectedTime.getMinutes().toString()

      if (this.format === 'ampm') {
        hour %= 12
        hour = hour || 12
      }

      hour = hour.toString()
      if (hour.length < 2) hour = `0${hour}`
      if (min.length < 2) min = `0${min}`

      return [hour, min]
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-time-display {
  padding: 14px 0px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  background-color: @primaryColor;
  color: @alternateTextColor;
  .mu-clock-landspace & {
    width: 179px;
    position: relative;
  }
}

.mu-time-display-text {
  margin: 6px 0px;
  line-height: 58px;
  height: 58px;
  font-size: 58px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  .mu-clock-landspace & {
    margin: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 48px;

  }
}

.mu-time-display-affix {
  flex: 1 1;
  position: relative;
  line-height: 17px;
  height: 17px;
  font-size: 17px;
  .mu-clock-landspace &{
    flex: none;
    height: auto;
    display: flex;
    flex-direction: column;
  }
}

.mu-time-display-time {
  margin: 0px 10px;
  .mu-clock-landspace & {
    margin-top: -28px;
  }
}

.mu-time-display-clickable {
  cursor: pointer;
  &.inactive {
    opacity: 0.7
  }
  .mu-clock-landspace & {
    margin-top: 8px;
  }
}

.mu-time-display-affix-top {
  position: absolute;
  top: -20px;
  left: 0px;
  .mu-clock-landspace &{
    position: static;
    order: -1;
  }
}
</style>
