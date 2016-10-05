<template>
<div class="mu-toast-wrapper" :style="{'z-index': zIndex}">
  <div class="mu-toast">
    {{message}}
  </div>
</div>
</template>

<script>
import {getZIndex} from '../internal/popup/utils'
export default {
  name: 'mu-toast',
  props: {
    message: {
      type: String
    }
  },
  data () {
    return {
      zIndex: getZIndex()
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-toast-wrapper {
  position: fixed;
  bottom: 16px;
  left: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.mu-toast {
  height: 48px;
  line-height: 48px;
  padding: 0 24px;
  background-color: @textColor;
  color: @alternateTextColor;
  border-radius: 24px;
  .ellipsis();
  margin: auto;
}
@media (min-width: 480px) {
  .mu-toast {
    max-width: 568px;
    min-width: 288px;
  }
}
</style>
