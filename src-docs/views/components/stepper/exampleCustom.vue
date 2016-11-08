<template>
<div class="demo-step-container">
  <mu-stepper :activeStep="activeStep" :linear="false">
    <mu-step>
      <mu-step-label>
        选择活动地点
      </mu-step-label>
    </mu-step>
    <mu-step>
      <mu-step-label class="demo-step-label-warning">
        <mu-icon slot="icon" value="warning" color="red"/>
        创建一个群组
      </mu-step-label>
    </mu-step>
    <mu-step>
      <mu-step-label>
        宣传活动
      </mu-step-label>
    </mu-step>
  </mu-stepper>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeStep: -1
    }
  }
}
</script>

<style>
.demo-step-container {
  width: 100%;
  max-width: 700px;
  margin: auto;
}

.demo-step-label-warning {
  color: rgb(244, 67, 54);
}
</style>
