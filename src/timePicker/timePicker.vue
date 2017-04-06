<template>
<div class="mu-time-picker" :class="{'fullWidth': fullWidth}">
  <text-field @focus="handleFocus" :name="name" @labelClick="handleClick" :value="inputValue" :fullWidth="fullWidth"
    :inputClass="inputClass" :label="label" :labelFloat="labelFloat" :labelClass="labelClass" :labelFocusClass="labelFocusClass"
    :hintText="hintText" :hintTextClass="hintTextClass" :helpText="helpText" :helpTextClass="helpTextClass"
    :disabled="disabled" :errorText="errorText" :errorColor="errorColor" :icon="icon" :iconClass="iconClass"
    :underlineShow="underlineShow" :underlineClass="underlineClass" :underlineFocusClass="underlineFocusClass"/>
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
    inputClass: {
      type: [String, Array, Object]
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
      const newValue = timeUtils.formatTime(val, this.format)
      if (this.inputValue === newValue) return
      this.inputValue = newValue
      this.$emit('change', newValue)
    }
  },
  watch: {
    value (val) {
      this.inputValue = val
    },
    inputValue (val) {
      this.$emit('input', val)
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
