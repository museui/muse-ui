<template>
<div class="mu-time-picker" :class="{'fullWidth': fullWidth}">
  <text-field @focus="handleFocus" @labelClick="handleClick" :value="inputValue"
    :label="label" :labelFloat="labelFloat" :disabled="disabled" :hintText="hintText"
    :helpText="helpText" :errorText="errorText" :errorColor="errorColor" :icon="icon"
    :fullWidth="fullWidth" :underlineShow="underlineShow"/>
  <time-picker-dialog v-if="!disabled" @accept="handleAccept" ref="dialog" :initialTime="dialogTime" :format="format" :mode="mode" :container="container" :autoOk="autoOk" :okLabel="okLabel" :cancelLabel="cancelLabel"/>
</div>
</template>

<script>
import textField from '../textField'
import timePickerDialog from './timePickerDialog'
import * as timeUtils from './timeUtils'
export default {
  name: 'mu-time-picker',
  props: {
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
    mode: {
      type: String,
      default: 'portrait',
      validator (val) {
        return val && ['portrait', 'landscape'].indexOf(val) !== -1
      }
    },
    format: {
      type: String,
      default: 'ampm',
      validator (val) {
        return ['ampm', '24hr'].indexOf(val) !== -1
      }
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
    underlineShow: {
      type: Boolean,
      default: true
    },
    value: {
      type: String
    }
  },
  data () {
    return {
      inputValue: this.value,
      dialogTime: null
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
      if (this.disabled) return
      this.dialogTime = this.inputValue ? timeUtils.strToTime(this.inputValue, this.format) : new Date()
      this.$refs.dialog.open = true
    },
    handleAccept (val) {
      this.inputValue = timeUtils.formatTime(val, this.format)
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
    'time-picker-dialog': timePickerDialog
  }
}
</script>

<style lang="less">
.mu-time-picker{
  display: inline-block;
  position: relative;
  width: 256px;
  &.fullWidth {
    width: 100%;
  }
}
</style>
