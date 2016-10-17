<template>
  <div class="mu-text-field" :class="textFieldClass" :style="focus ? errorStyle : {}">
    <icon  v-if="icon" class="mu-text-field-icon" :value="icon"></icon>
    <label ref="content" class="mu-text-field-content">
      <text-field-label v-if="label" :float="float">{{label}}</text-field-label>
      <text-field-hint v-if="hintText" :text="hintText" :show="showHint"></text-field-hint>
      <slot>
        <input :disabled="disabled" v-if="!multiLine" @focus="handlerFocus" v-model="inputValue" @blur="handlerBlur" class="mu-text-field-input" :name="name" :type="type">
        <enhanced-textarea :disabled="disabled" :rows="rows" :rowsMax="rowsMax" @change="handlerChange" @focus.native="handlerFocus" @blur.native="handlerBlur" v-if="multiLine" :value="value"></enhanced-textarea>
      </slot>
      <underline v-if="underlineShow" :error="!!errorText" :disabled="disabled" :errorColor="errorColor" :focus="focus"></underline>
      <div class="mu-text-field-help" :style="errorStyle" v-if="errorText || helpText">
          <div>
              {{errorText || helpText}}
          </div>
          <div v-if="maxLength > 0">
              {{charLength}}/{{maxLength}}
          </div>
      </div>
    </label>
  </div>
</template>

<script>
import icon from '../icon'
import underline from './textFieldUnderline'
import enhancedTextarea from './enhancedTextarea'
import textFieldLabel from './textFieldLabel'
import {getColor} from '../utils'
import textFieldHint from './textFieldHint'
export default {
  name: 'mu-text-field',
  props: {
    name: {
      type: String
    },
    type: {
      type: String
    },
    icon: {
      type: String
    },
    label: {
      type: String
    },
    labelFloat: {
      type: Boolean,
      default: false
    },
    hintText: {
      type: String
    },
    value: {},
    initiallyFocus: {
      type: Boolean,
      default: false
    },
    multiLine: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 1
    },
    rowsMax: {
      type: Number
    },
    errorText: {
      type: String
    },
    errorColor: {
      type: String
    },
    helpText: {
      type: String
    },
    maxLength: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    underlineShow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      focus: false,
      inputValue: this.value
    }
  },
  mounted () {
    this.focus = this.initiallyFocus
  },
  computed: {
    textFieldClass () {
      return {
        'focus-state': this.focus,
        'has-label': this.label,
        'no-empty-state': this.inputValue,
        'has-icon': this.icon,
        'error': this.errorText,
        'disabled': this.disabled,
        'full-width': this.fullWidth
      }
    },
    float () {
      return this.labelFloat && !this.focus && !this.inputValue
    },
    errorStyle () {
      return {
        color: !this.disabled && this.errorText ? getColor(this.errorColor) : ''
      }
    },
    charLength () {
      return this.maxHeight && this.inputValue ? this.inputValue.length : 0
    },
    showHint () {
      return !this.float && !this.inputValue
    }
  },
  methods: {
    handlerFocus () {
      this.focus = true
    },
    handlerBlur () {
      this.focus = false
    },
    handlerChange (val) {
      this.inputValue = val
    }
  },
  watch: {
    value (val) {
      this.inputValue = val
    },
    inputValue (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    },
    charLength (val) {
      if (val > this.maxLength) this.$emit('textOverflow')
    }
  },
  components: {
    icon,
    underline,
    'enhanced-textarea': enhancedTextarea,
    'text-field-label': textFieldLabel,
    'text-field-hint': textFieldHint
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-text-field{
  font-size: 16px;
  width: 256px;
  display: inline-block;
  position: relative;
  color: @secondaryTextColor;
  &.full-width {
    width: 100%;
  }
  &.has-icon {
    padding-left: 56px;
  }
  &.focus-state {
    color: @primary1Color;
    &.error{
      color: @red;
    }
  }
}

.mu-text-field-icon {
  position: absolute;
  left: 16px;
  top: 12px;
  .mu-text-field.has-label &{
    top: 36px;
  }
}

.mu-text-field-content{
  display: block;
  cursor: pointer;
  .mu-text-field.disabled &{
    color: @disabledColor;
    cursor: not-allowed;
  }
  padding-bottom: 8px;
  padding-top: 8px;
  .mu-text-field.has-label &{
    padding-top: 28px;
  }
}

.mu-text-field-input{
  appearance: none;
  outline: none;
  border: none;
  background: none;
  border-radius: 0 0 0 0;
  box-shadow: none;
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 36px;
  min-height: 36px;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  font-family: inherit;
  color: @textColor;
  font-family: inherit;
}

.mu-text-field-help {
  font-size: 12px;
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
  .mu-text-field.error &{
    color: @red;
  }
  .mu-text-field.disabled &{
    color: inherit;
  }
}
</style>
