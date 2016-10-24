<template>
<div class="mu-step-connector">
  <span class="mu-step-connector-line"></span>
</div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-step-connector{
  flex: 1 1 auto;
  .mu-stepper-vertical &{
    margin-left: 25px;
  }
}

.mu-step-connector-line{
  display: block;
  border-color: @grey400;
  margin-left: -6px;
  border-top-style: solid;
  border-top-width: 1px;
  .mu-stepper-vertical & {
    border-top: none;
    border-left-style: solid;
    border-left-width: 1px;
    min-height: 28px;
    margin-left: 0;
  }
}
</style>
