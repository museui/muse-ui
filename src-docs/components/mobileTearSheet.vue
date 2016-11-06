<template>
<div class="mobile-tear-sheet">
  <div class="mobile-tear-sheet-container" :style="{'height': height}">
    <slot></slot>
  </div>
  <img class="mobile-tear-sheet-bottom-tear" :src="tear" />
</div>
</template>

<script>
import tear from '../assets/images/bottom-tear.svg'
export default {
  props: {
    height: {
      type: String
    }
  },
  data () {
    return {
      tear
    }
  }
}
</script>

<style lang="css">
.mobile-tear-sheet {
  margin-bottom: 24px;
  margin-right: 24px;
  max-width: 360px;
  width: 100%;
}

.mobile-tear-sheet-container {
  border: 1px solid #d9d9d9;
  border-bottom: none;
  overflow: hidden;
}

.mobile-tear-sheet-bottom-tear {
  display: block;
  position: relative;
  margin-top: -10;
  max-width: 360;
}
</style>
