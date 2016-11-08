<template>
<div class="demo-vsteper-container">
  <mu-stepper :activeStep="activeStep" orientation="vertical">
    <mu-step>
      <mu-step-label>
        选择活动地点
      </mu-step-label>
      <mu-step-content>
        <p>
          在附近选择一个活动的地点, 最好靠近地铁站公交站，已方便交通，附近设施应尽量完善，最重要的是有Wifi
        </p>
        <mu-raised-button label="下一步" class="demo-step-button" @click="handleNext" primary/>
      </mu-step-content>
    </mu-step>
    <mu-step>
      <mu-step-label>
        创建一个群组
      </mu-step-label>
      <mu-step-content>
        <p>
          创建群组，50人左右，以18-25单身青年为主。。。。。
        </p>
        <mu-raised-button label="下一步" class="demo-step-button" @click="handleNext" primary/>
        <mu-flat-button label="上一步" class="demo-step-button" @click="handlePrev"/>
      </mu-step-content>
    </mu-step>
    <mu-step>
      <mu-step-label>
        宣传活动
      </mu-step-label>
      <mu-step-content>
        <p>
          多在群里发消息宣传宣传，有事没事多在群里唠唠嗑，确定的话就ok拉
        </p>
        <mu-raised-button label="完成" class="demo-step-button" @click="handleNext" primary/>
        <mu-flat-button label="上一步" class="demo-step-button" @click="handlePrev"/>
      </mu-step-content>
    </mu-step>
  </mu-stepper>
  <p v-if="finished">
    都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置
  </p>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeStep: 0
    }
  },
  computed: {
    finished () {
      return this.activeStep > 2
    }
  },
  methods: {
    handleNext () {
      this.activeStep++
    },
    handlePrev () {
      this.activeStep--
    },
    reset () {
      this.activeStep = 0
    }
  }
}
</script>

<style lang="css">
.demo-vsteper-container{
  max-width: 380px;
  max-height: 400px;
  margin: auto;
}

.demo-step-button {
  margin-top: 12px;
  margin-right: 12px;
}
</style>
