<template>
<transition name="mu-step-content">
  <div class="mu-step-content" v-show="active" :class="{'last': last}">
    <slot></slot>
  </div>
</transition>
</template>

<script>
export default {
  name: 'mu-step-content',
  props: {
    active: {
      type: Boolean
    },
    last: {
      type: Boolean
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-step-content{
  margin-top: -14px;
  margin-left: 25px;
  padding-left: 21px;
  padding-right: 16px;
  overflow: hidden;
  &.last {
    border-left: none;
  }
  .mu-stepper-vertical & {
    border-left: 1px solid @grey400;
  }
}

.mu-step-content-enter-active,
.mu-step-content-leave-active {
  transition: height .45s @easeOutFunction;
  display: block;
}

.mu-step-content-enter,
.mu-step-content-leave-active {
  height: 0;
}

</style>
