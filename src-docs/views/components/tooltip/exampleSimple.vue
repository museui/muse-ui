<template>
<div>
  <div class="demo-icon-tip" @mouseenter="handleHover" @mouseleave="handleHoverExit">
    <mu-icon value="print"/>
    <mu-tooltip :show="show" label="打印" :touch="touch" :verticalPosition="verticalPosition" :horizontalPosition="horizontalPosition"/>
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
      touch: <mu-switch v-model="touch">
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
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    }
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
  padding: 12px;
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
