<template>
<div>
  <div class="demo-icon-tip" ref="demo" @mouseenter="handleHover" @mouseleave="handleHoverExit">
    <mu-icon value="print"/>
    <mu-tooltip label="打印" :show="show" :trigger="trigger" :touch="touch" :verticalPosition="verticalPosition" :horizontalPosition="horizontalPosition"/>
  </div>
  <div class="demo-tip-setting">
    <p>
      垂直位置：
      <mu-radio name="verticalPosition" v-model="verticalPosition" label="top" nativeValue="top"/>
      <mu-radio name="verticalPosition" v-model="verticalPosition" label="bottom" nativeValue="bottom"/>
    </p>
    <p>
      水平位置：
      <mu-radio name="horizontalPosition" v-model="horizontalPosition" label="left" nativeValue="left"/>
      <mu-radio name="horizontalPosition" v-model="horizontalPosition" label="center" nativeValue="center"/>
      <mu-radio name="horizontalPosition" v-model="horizontalPosition" label="right" nativeValue="right"/>
    </p>
    <p>
      touch: <mu-switch v-model="touch"/>
    </p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      touch: false,
      trigger: null,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    }
  },
  mounted () {
    this.trigger = this.$refs.demo
  },
  methods: {
    handleHover () {
      this.show = true
    },
    handleHoverExit () {
      this.show = false
    }
  }
}
</script>

<style lang="css">
.demo-icon-tip{
  display: inline-block;
  cursor: default;
  position: relative;
}

.demo-tip-setting p{
  display: flex;
  align-items: center;
}

.demo-tip-setting .mu-radio {
  margin-left: 32px;
}
.demo-tip-setting .mu-radio:first-child{
  margin-left: 0;
}
.demo-tip-setting .mu-switch {
  margin-left: 8px;
}
</style>
