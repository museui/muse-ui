<template>
  <label class="mu-text-field" :class="textFieldClass" :style="focus ? errorStyle : {}">
    <icon  v-if="icon" class="mu-text-field-icon" :value="icon"></icon>
    <text-field-label v-if="label" :float="float">{{label}}</text-field-label>
    <slot>
      <input :disabled="disabled" v-if="!multiLine" @input="handlerInput" @focus="handlerFocus" :value="value" @blur="handlerBlur" :placeholder="float ? '' : placeholder" class="mu-text-field-input" :name="name" :type="type">
      <enhanced-textarea :disabled="disabled" :rows="rows" :rowsMax="rowsMax" @change="handlerChange" @focus.native="handlerFocus" @blur.native="handlerBlur" v-if="multiLine" :placeholder="float ? '' : placeholder" :value="value"></enhanced-textarea>
    </slot>
    <underline :error="!!errorText" :disabled="disabled" :errorColor="errorColor" :focus="focus"></underline>
    <div class="mu-text-field-help" :style="errorStyle" v-if="errorText || helpText">
        <div>
            {{errorText || helpText}}
        </div>
        <div v-if="maxLength > 0">
            {{charLength}}/{{maxLength}}
        </div>
    </div>
  </label>
</template>

<script>
import icon from '../icon'
import underline from './textFieldUnderline'
import enhancedTextarea from './enhancedTextarea'
import textFieldLabel from './textFieldLabel'
import {getColor} from '../utils'
export default {
  name: 'mu-text-field',
  props: {
    id: {
      type: String,
      default () {
        return ''
      }
    },
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
    placeholder: {
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
    }
  },
  data () {
    return {
      focus: false
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
        'no-empty-state': this.value,
        'has-icon': this.icon,
        'error': this.errorText,
        'disabled': this.disabled,
        'full-width': this.fullWidth
      }
    },
    inputValue () {
      return this.value
    },
    float () {
      return this.labelFloat && !this.focus && !this.value
    },
    errorStyle () {
      return {
        color: !this.disabled && this.errorText ? getColor(this.errorColor) : ''
      }
    },
    charLength () {
      return this.value ? this.value.length : 0
    }
  },
  methods: {
    handlerFocus () {
      this.focus = true
    },
    handlerBlur () {
      this.focus = false
    },
    handlerInput (e) {
      this.$emit('change', e.target.value)
    },
    handlerChange (val) {
      this.$emit('change', val)
    }
  },
  components: {
    icon,
    underline,
    'enhanced-textarea': enhancedTextarea,
    'text-field-label': textFieldLabel
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
  &.disabled {
    color: @disabledColor;
    cursor: not-allowed;
  }
  padding-bottom: 8px;
  padding-top: 8px;
  &.has-label {
    padding-top: 28px;
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
  &::-webkit-input-placeholder {
    color: @disabledColor;
    opacity: 1;
  }
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
