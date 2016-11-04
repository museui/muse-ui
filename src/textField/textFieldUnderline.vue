<template>
  <div>
    <hr class="mu-text-field-line" :class="{'disabled': disabled}" />
    <hr v-if="!disabled" class="mu-text-field-focus-line" :style="errorStyle" :class="lineClass"/>
  </div>
</template>

<script>
import {getColor} from '../utils'
export default {
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean
    },
    errorColor: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  computed: {
    lineClass () {
      return {
        focus: this.focus,
        error: this.error
      }
    },
    errorStyle () {
      return {
        'background-color': this.error ? getColor(this.errorColor) : ''
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-text-field-line {
  margin: 0;
  height: 1px;
  border: none;
  background-color: @borderColor;
  left: 0;
  right: 0;
  position: absolute;
  .mu-text-field.has-icon & {
    left: 56px;
  }
  &.disabled{
    height: auto;
    background-color: transparent;
    border-bottom: 2px dotted @disabledColor;
  }
  html.pixel-ratio-2 & {
    .transform(scaleY(0.5));
  }
  html.pixel-ratio-3 & {
    .transform(scaleY(0.33));
  }
}

.mu-text-field-focus-line{
  margin: 0;
  height: 2px;
  border: none;
  background-color: @primaryColor;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: -1px;
  transform: scaleX(0);
  transition: transform .45s @easeOutFunction;
  .mu-text-field.has-icon & {
    left: 56px;
  }
  &.focus {
    transform: scaleX(1);
    html.pixel-ratio-2 & {
      .transform(scaleX(1) scaleY(0.5));
    }
    html.pixel-ratio-3 & {
      .transform(scaleX(1) scaleY(0.33));
    }
  }
  &.error {
    transform: scaleX(1);
    background-color: @red;
    html.pixel-ratio-2 & {
      .transform(scaleX(1) scaleY(0.5));
    }
    html.pixel-ratio-3 & {
      .transform(scaleX(1) scaleY(0.33));
    }
  }
  html.pixel-ratio-2 & {
    .transform(scaleX(0) scaleY(0.5));
  }
  html.pixel-ratio-3 & {
    .transform(scaleX(0) scaleY(0.33));
  }
}
</style>
