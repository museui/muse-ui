<template>
<div>
  <mu-raised-button label="点这里" ref="button" @click="toggle"/>
  <h3 class="demo-popover-title">当前设置</h3>
  <pre>anchorOrigin: {{stringify(anchorOrigin)}}
targetOrigin: {{stringify(targetOrigin)}}</pre>
  <h3 class="demo-popover-title">Anchor Origin</h3>
  <div class="demo-anchor-origin">
    <div class="demo-origin-block">
      <span>vertical 垂直方向</span>
      <mu-radio class="demo-origin-raido" name="anchorVertical" v-model="anchorOrigin.vertical" nativeValue="top" label="Top"/>
      <mu-radio class="demo-origin-raido" name="anchorVertical" v-model="anchorOrigin.vertical" nativeValue="center" label="Center"/>
      <mu-radio class="demo-origin-raido" name="anchorVertical" v-model="anchorOrigin.vertical" nativeValue="bottom" label="Bottom"/>
    </div>
    <div class="demo-origin-block">
      <span>horizontal 水平方向</span>
      <mu-radio class="demo-origin-raido" name="anchorHorizontal" v-model="anchorOrigin.horizontal" nativeValue="left" label="Left"/>
      <mu-radio class="demo-origin-raido" name="anchorHorizontal" v-model="anchorOrigin.horizontal" nativeValue="middle" label="Middle"/>
      <mu-radio class="demo-origin-raido" name="anchorHorizontal" v-model="anchorOrigin.horizontal" nativeValue="right" label="Right"/>
    </div>
  </div>
  <h3 class="demo-popover-title">Target Origin</h3>
  <div class="demo-anchor-origin">
    <div class="demo-origin-block">
      <span>vertical 垂直方向</span>
      <mu-radio class="demo-origin-raido" name="targetVertical" v-model="targetOrigin.vertical" nativeValue="top" label="Top"/>
      <mu-radio class="demo-origin-raido" name="targetVertical" v-model="targetOrigin.vertical" nativeValue="center" label="Center"/>
      <mu-radio class="demo-origin-raido" name="targetVertical" v-model="targetOrigin.vertical" nativeValue="bottom" label="Bottom"/>
    </div>
    <div class="demo-origin-block">
      <span>horizontal 水平方向</span>
      <mu-radio class="demo-origin-raido" name="targetHorizontal" v-model="targetOrigin.horizontal" nativeValue="left" label="Left"/>
      <mu-radio class="demo-origin-raido" name="targetHorizontal" v-model="targetOrigin.horizontal" nativeValue="middle" label="Middle"/>
      <mu-radio class="demo-origin-raido" name="targetHorizontal" v-model="targetOrigin.horizontal" nativeValue="right" label="Right"/>
    </div>
  </div>
  <mu-popover :open="open" :autoPosition="false" :trigger="trigger" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin" @close="handleClose">
    <mu-menu>
      <mu-menu-item title="Refresh" />
      <mu-menu-item title="Send feedback" />
      <mu-menu-item title="Settings" />
      <mu-menu-item title="Help" />
      <mu-menu-item title="Sign out" />
    </mu-menu>
  </mu-popover>
</div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      trigger: null,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      targetOrigin: {
        vertical: 'top',
        horizontal: 'left'
      }
    }
  },
  mounted () {
    this.trigger = this.$refs.button.$el
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    handleClose () {
      this.open = false
    },
    stringify (obj) {
      return JSON.stringify(obj)
    }
  }
}
</script>

<style lang="css">
.demo-popover-title {
  margin-bottom: 0;
  font-weight: 500;
}

.demo-anchor-origin{
  display: flex;
}

.demo-origin-block{
  display: flex;
  flex-direction: column;
  margin-left: 12px;
}
.demo-origin-raido {
  margin-top: 12px;
}
</style>
