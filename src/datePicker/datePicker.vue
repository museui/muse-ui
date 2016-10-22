<template>
  <div>
    <text-field @focus="handleFocus" @labelClick="handleClick" :value="inputValue" :label="label" :labelFloat="labelFloat" :disabled="disabled" :hintText="hintText" :helpText="helpText" :errorText="errorText" :errorColor="errorColor" :icon="icon" :fullWidth="fullWidth"/>
    <date-picker-dialog @accept="handleAccept" :initialDate="dialogDate" ref="dialog" :mode="mode" :maxDate="maxLimitDate" :minDate="minLimitDate" :shouldDisableDate="shouldDisableDate" :firstDayOfWeek="firstDayOfWeek" :container="container" :disableYearSelection="disableYearSelection" :dateTimeFormat="dateTimeFormat" :autoOk="autoOk" :okLabel="okLabel" :cancelLabel="cancelLabel"/>
  </div>
</template>
<script>
import * as dateUtils from './dateUtils'
import textField from '../textField'
import datePickerDialog from './datePickerDialog'
export default {
  name: 'mu-date-picker',
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
      default: 'YYYY-MM-DD'
    },
    maxDate: {
      type: String
    },
    minDate: {
      type: String
    },
    label: {
      type: String
    },
    labelFloat: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hintText: {
      type: String
    },
    helpText: {
      type: String
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
    fullWidth: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    }
  },
  computed: {
    maxLimitDate () {
      return null
    },
    minLimitDate () {
      return null
    }
  },
  data () {
    return {
      inputValue: this.value,
      dialogDate: null
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
    handleFocus (event) {
      event.target.blur()
      this.$emit('focus', event)
    },
    openDialog () {
      this.dialogDate = this.inputValue ? dateUtils.strFormatToDate(this.inputValue, this.format) : new Date()
      this.$refs.dialog.open = true
    },
    handleAccept (val) {
      this.inputValue = dateUtils.dateToStr(val, this.format)
    }
  },
  watch: {
    value (val) {
      this.inputValue = val
    },
    inputValue (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },
  components: {
    'text-field': textField,
    'date-picker-dialog': datePickerDialog
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-date-picker{
  height: 32px;
  line-height: 32px;
}
</style>
