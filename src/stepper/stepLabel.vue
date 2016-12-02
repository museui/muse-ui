<template>
<span class="mu-step-label" :class="{'active': active, 'completed': completed, 'disabled': disabled}">
  <span class="mu-step-label-icon-container" v-if="num || ($slots.icon && $slots.length > 0)">
    <slot name="icon">
      <svg v-if="completed" class="mu-step-label-icon" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <div v-if="!completed" class="mu-step-label-circle">
        {{num}}
      </div>
    </slot>
  </span>
  <slot></slot>
</span>
</template>

<script>
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
  fill: currentColor;
  .mu-step-label.disabled &{
    color: @grey500;
  }
  .mu-step-label.completed &,
  .mu-step-label.active & {
    color: @primaryColor;
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
    background-color: @primaryColor;
  }
}
</style>
