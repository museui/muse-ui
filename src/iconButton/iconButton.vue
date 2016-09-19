<template>
<abstract-button :href="href" :disabled="disabled" class="mu-icon-button">
  <icon :value="this.icon" :class="[iconClass]"></icon>
</abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import icon from '../icon'
export default {
  name: 'mu-icon-button',
  props: {
    icon: {
      type: String
    },
    iconClass: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'abstract-button': abstractButton,
    icon
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-icon-button {
  position: relative;
  display: inline-block;
  overflow: visible;
  line-height: 1;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding: 12px;
  border: none;
  appearance: none;
  background: none;
  color: inherit;
  text-decoration: none;
  transition-duration: 300ms;
  transition-timing-function: @easeOutFunction;
  transform: translate3d(0, 0, 0);
  .flex-shrink(0);
  margin: 0;
  outline: 0;
  cursor: pointer;
  .mu-circle-ripple{
    color: @textColor;
  }
  &.disabled{
    color: @disabledColor;
    cursor: default;
  }
}
</style>
