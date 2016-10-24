<template>
<span class="mu-step-label" :class="{'active': active, 'completed': completed, 'disabled': disabled}">
  <span class="mu-step-label-icon-container" v-if="num || ($slots.icon && $slots.length > 0)">
    <slot name="icon">
      <icon v-if="completed" value="check_circle" class="mu-step-label-icon"/>
      <div v-if="!completed" class="mu-step-label-circle">
        {{num}}
      </div>
    </slot>
  </span>
  <slot></slot>
</span>
</template>

<script>
import icon from '../icon'
export default {
  name: 'mu-step-label',
  props: {
    active: {
      type: Boolean
    },
    completed: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    num: {
      type: [String, Number]
    }
  },
  components: {
    icon
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-step-label{
  height: 72px;
  color: @textColor;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 14px;
  padding-right: 14px;
  .mu-stepper-vertical & {
    height: 64px;
  }
  &.disabled {
    color: @disabledColor;
    cursor: not-allowed;
  }
  &.active {
    font-weight: 500;
  }
}

.mu-step-label-icon-container{
  display: flex;
  align-items: center;
  margin-right: 8px;
  width: 24px;
}

.mu-step-label-icon {
  display: block;
  font-size: 24px;
  width: 24px;
  height: 24px;
  color: @grey500;
  .mu-step-label.disabled &{
    color: @grey500;
  }
  .mu-step-label.completed &,
  .mu-step-label.active & {
    color: @primary1Color;
  }
}

.mu-step-label-circle{
  width: 20px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  overflow: hidden;
  border-radius: 100%;
  background-color: @grey500;
  color: @alternateTextColor;
  .mu-step-label.disabled &{
    background-color: @grey500;
  }
  .mu-step-label.completed &,
  .mu-step-label.active & {
    background-color: @primary1Color;
  }
}
</style>
