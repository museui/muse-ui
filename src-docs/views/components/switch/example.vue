<template>
<div>
  <mu-switch label="开关" class="demo-switch" /><br/>
  <mu-switch label="默认为 true" v-model="toggle" class="demo-switch" /><br/>
  <mu-switch label="不可用" disabled class="demo-switch" /><br/>
  <mu-switch label="文字在左边" labelLeft class="demo-switch" />
</div>
</template>

<script>
export default {
  data () {
    return {
      toggle: true
    }
  }
}
</script>

<style lang="css">
.demo-switch {
  margin-bottom: 16px;
}
</style>
