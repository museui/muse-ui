<template>
<div>
  <mu-raised-button label="dialog" @click="open"/>
  <mu-dialog :open="dialog" title="Dialog" @close="close">
    这是一个简单的弹出框
    <mu-flat-button slot="actions" @click="close" primary label="取消"/>
    <mu-flat-button slot="actions" primary @click="close" label="确定"/>
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
