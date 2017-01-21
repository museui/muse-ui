<template>
<div>
  <mu-auto-complete hintText="请随便输入点啥" @input="handleInput" :dataSource="dataSource" @change="handlechange" />
  <mu-auto-complete hintText="请随便输入点啥" labelFloat label="full width" fullWidth @input="handleInput" :dataSource="dataSource"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      dataSource: []
    }
  },
  methods: {
    handlechange (val) {
      console.log(`you choose ${val}`)
    },

    handleInput (val) {
      this.dataSource = [
        val,
        val + val,
        val + val + val
      ]
    }
  }
}
</script>
