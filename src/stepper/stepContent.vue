<template>
  <div class="mu-step-content"  :class="{'last': last}">
    <div style="position: relative; overflow: hidden; height: 100%;">
      <expand-transition>
        <div class="mu-step-content-inner" ref="inner" v-if="active">
          <slot></slot>
        </div>
      </expand-transition>
    </div>
</div>
</template>

<script>
import expandTransition from '../internal/expandTransition'
export default {
  name: 'mu-step-content',
  props: {
    active: {
      type: Boolean
    },
    last: {
      type: Boolean
    }
  },
  components: {
    'expand-transition': expandTransition
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
  .mu-stepper-vertical & {
    border-left: 1px solid @grey400;
  }
  &.last {
    border-left: none;
  }
}

.mu-step-content-inner {
  position: relative;
  width: 100%;
  top: 0px;
  left: 0px;
  overflow: hidden;
}

</style>
