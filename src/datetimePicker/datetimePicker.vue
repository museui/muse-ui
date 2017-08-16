<template>
<div class="mu-datetime-picker" :class="{'fullWidth': fullWidth}">

  <text-field
    @focus="handleFocus"
    @labelClick="handleClick"
    :value="inputValue"
    :disabled="disabled"
    :fullWidth="fullWidth"
    :label="label"
    :labelFloat="labelFloat"
    :labelClass="labelClass"
    :labelFocusClass="labelFocusClass"
    :hintText="hintText"
    :hintTextClass="hintTextClass"
    :helpText="helpText"
    :helpTextClass="helpTextClass"
    :errorText="errorText"
    :errorColor="errorColor"
    :icon="icon"
    :iconClass="iconClass"
    :inputClass="inputClass"
    :required="required"
    :underlineShow="underlineShow"
    :underlineClass="underlineClass"
    :underlineFocusClass="underlineFocusClass"/>

  <date-picker-dialog
    ref="dialog"
    v-if="!disabled"
    @monthChange="handleMonthChange"
    @yearChange="handleYearChange"
    @accept="handleDateAccept"
    @dismiss="dismiss"
    :initialDate="dialogDate"
    :mode="mode"
    :maxDate="maxLimitDate"
    :minDate="minLimitDate"
    :shouldDisableDate="shouldDisableDate"
    :firstDayOfWeek="firstDayOfWeek"
    :container="container"
    :disableYearSelection="disableYearSelection"
    :dateTimeFormat="dateTimeFormat"
    :autoOk="autoOk"
    :okLabel="okLabel"
    :cancelLabel="cancelLabel"/>

  <time-picker-dialog
    ref="timeDialog"
    v-if="!disabled"
    @accept="handleAccept"
    :initialTime="dialogTime"
    :mode="mode"
    :container="container"
    :autoOk="autoOk"
    :okLabel="okLabel"
    :cancelLabel="cancelLabel"/>

</div>
</template>
<script>
import textField from '../textField'
import * as dateUtils from '../datePicker/dateUtils'
import * as timeUtils from '../timePicker/timeUtils'
import datePickerDialog from '../datePicker/datePickerDialog'
import timePickerDialog from '../timePicker/timePickerDialog'

export default {
  name: 'mu-datetime-picker',
  components: {
    'text-field': textField,
    'date-picker-dialog': datePickerDialog,
    'time-picker-dialog': timePickerDialog
  },
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
    required: {
      type: Boolean,
      default: false
    },
    cancelLabel: {
      type: String
    },
    okLabel: {
      type: String
    },
    container: {
      type: String,
      default: 'dialog',
      validator (val) {
        return val && ['dialog', 'inline'].indexOf(val) !== -1
      }
    },
    disableYearSelection: {
      type: Boolean
    },
    firstDayOfWeek: {
      type: Number
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
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD hh:mm:ss'
    },
    maxDate: {
      type: [String, Date]
    },
    minDate: {
      type: [String, Date]
    },
    name: {
      type: String
    },
    label: {
      type: String
    },
    labelFloat: {
      type: Boolean,
      default: false
    },
    labelClass: {
      type: [String, Array, Object]
    },
    labelFocusClass: {
      type: [String, Array, Object]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hintText: {
      type: String
    },
    hintTextClass: {
      type: [String, Array, Object]
    },
    helpText: {
      type: String
    },
    helpTextClass: {
      type: [String, Array, Object]
    },
    errorText: {
      type: String
    },
    errorColor: {
      type: String
    },
    icon: {
      type: String
    },
    iconClass: {
      type: [String, Array, Object]
    },
    inputClass: {
      type: [String, Array, Object]
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    underlineShow: {
      type: Boolean,
      default: true
    },
    underlineClass: {
      type: [String, Array, Object]
    },
    underlineFocusClass: {
      type: [String, Array, Object]
    },
    value: {
      type: String
    }
  },
  computed: {
    maxLimitDate () {
      return this.maxDate ? typeof this.maxDate === 'string' ? dateUtils.strFormatToDate(this.maxDate, this.format) : this.maxDate : undefined
    },
    minLimitDate () {
      return this.minDate ? typeof this.minDate === 'string' ? dateUtils.strFormatToDate(this.minDate, this.format) : this.minDate : undefined
    }
  },
  data () {
    return {
      inputValue: this.value,
      dialogDate: null,
      dialogTime: null,
      dateFormat: 'YYYY-MM-DD',
      timeFormat: 'hh:mm:ss',
      date: null,
      time: null
    }
  },
  mounted () {
    let datetime

    if (typeof this.inputValue === 'string') {
      datetime = dateUtils.strFormatToDate(this.inputValue, this.format)
      this.date = dateUtils.dateToStr(datetime, this.dateFormat)
      this.time = dateUtils.dateToStr(datetime, this.timeFormat)
    }
  },
  methods: {
    handleClick () {
      if (!this.disabled) {
        setTimeout(() => {
          this.openDialog()
        }, 0)
      }
    },
    getDatetime () {
      let datetime = this.date + ' ' + this.time
      let dateStr = dateUtils.dateToStr(new Date(datetime), this.format)

      return dateStr
    },
    handleFocus (event) {
      event.target.blur()
      this.$emit('focus', event)
    },
    openDialog () {
      if (this.disabled) return
      this.dialogDate = this.date ? dateUtils.strFormatToDate(this.date, this.dateFormat) : new Date()
      this.$refs.dialog.open = true
    },
    openTimeDialog () {
      if (this.disabled) return
      this.dialogTime = this.time ? timeUtils.strToTime(this.time, this.timeFormat) : new Date()
      this.$refs.timeDialog.open = true
    },
    handleDateAccept (val) {
      this.date = dateUtils.dateToStr(val, this.dateFormat)

      setTimeout(() => {
        this.openTimeDialog()
      }, 0)
    },
    handleAccept (val) {
      this.time = timeUtils.formatTime(val, this.timeFormat)
      const datetime = this.getDatetime()
      if (this.inputValue === datetime) {
        this.$emit('change', datetime)
        return
      }
      this.inputValue = datetime
      this.$emit('change', datetime)
    },
    dismiss () {
      this.$emit('dismiss')
    },
    handleMonthChange (date) {
      this.$emit('monthChange', date)
    },
    handleYearChange (date) {
      this.$emit('yearChange', date)
    }
  },
  watch: {
    value (val) {
      this.inputValue = val
    },
    inputValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-datetime-picker{
  display: flex;
  position: relative;
  width: 256px;
  &.fullWidth {
    width: 100%
  }
}
</style>
