<template>
  <div class="mu-text-field" :class="textFieldClass">
    <icon  v-if="icon" class="mu-text-field-icon" :value="icon"></icon>
    <text-field-label v-if="label" :float="float">{{label}}</text-field-label>
    <slot>
      <input v-if="!multiLine" @input="handlerInput" @focus="handlerFocus" :value="value" @blur="handlerBlur" :placeholder="float ? '' : placeholder" class="mu-text-field-input" :name="name" :type="type">
      <enhanced-textarea @change="handlerChange" @focus.native="handlerFocus" @blur.native="handlerBlur" v-if="multiLine" :placeholder="placeholder" :value="inputValue"></enhanced-textarea>
    </slot>
    <underline :focus="focus" :error="error" :warning="warning"></underline>
  </div>
</template>

<script>
import icon from '../icon'
import underline from './textFieldUnderline'
import enhancedTextarea from './enhancedTextarea'
import textFieldLabel from './textFieldLabel'
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
    }
  },
  data () {
    return {
      focus: false,
      error: false,
      warning: false
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
        'has-icon': this.icon
      }
    },
    inputValue () {
      return this.value
    },
    float () {
      return this.labelFloat && !this.focus && !this.value
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
  line-height: 48px;
  height: 48px;
  width: 256px;
  display: inline-block;
  position: relative;
  color: @disabledColor;
  &.full-width {
    width: 100%;
  }
  &.has-icon {
    padding-left: 56px;
  }
  &.focus-state {
    color: @primary1Color;
  }
  &.has-label{
    height: 72px;
    line-height: 72px;
  }
}

.mu-text-field-icon {
  position: absolute;
  left: 16px;
  top: 14px;
  .mu-text-field.has-label &{
    top: 38px;
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
  height: 100%;
  line-height: 100%;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  color: @textColor;
  font-family: inherit;
  .mu-text-field.has-label & {
    margin-top: 14px;
  }
  &::-webkit-input-placeholder {
    color: @disabledColor;
  }
}
</style>
