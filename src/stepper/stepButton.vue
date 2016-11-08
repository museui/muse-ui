<template>
<abstract-button @click="handleClick" :centerRipple="false" class="mu-step-button" :disabled="disabled">
  <step-label :active="active" :completed="completed" :num="num" :disabled="disabled" v-if="childrenInLabel">
    <slot></slot>
    <slot name="icon" slot="icon"></slot>
  </step-label>
  <slot v-if="!childrenInLabel"></slot>
</abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import stepLabel from './stepLabel'
export default {
  name: 'mu-step-button',
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
    },
    last: {
      type: Boolean
    },
    childrenInLabel: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  },
  components: {
    abstractButton,
    'step-label': stepLabel
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-step-button {
  border: 10px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  margin: 0px;
  padding: 0px;
  outline: none;
  font-size: inherit;
  font-weight: inherit;
  transform: translate(0px, 0px);
  background-color: transparent;
  transition: all 450ms @easeOutFunction 0ms;
  .mu-stepper-vertical & {
    width: 100%;
  }
  &.hover {
    background-color: fade(@black, 6%);
  }
}
</style>
