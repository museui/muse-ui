<template>
<div>
  <mu-raised-button label="Alert Dialog" @click="open"/>
  <mu-dialog :open="dialog" title="Alert Dialog">
    只有点击确定按钮才可以关闭对话框
    <mu-flat-button label="确定" slot="actions" primary @click="close"/>
  </mu-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}
</script>

<style lang="css">
</style>
