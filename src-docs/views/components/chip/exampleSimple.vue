<template>
<div class="demo-chip-container">
  <mu-chip class="demo-chip">
    default chip
  </mu-chip>
  <mu-chip class="demo-chip"  @delete="handleClose" showDelete>
    delete chip
  </mu-chip>
  <mu-chip class="demo-chip">
    <mu-avatar :size="32" src="/images/uicon.jpg"/> avatar chip
  </mu-chip>
  <mu-chip class="demo-chip" @delete="handleClose" showDelete>
    <mu-avatar :size="32" src="/images/uicon.jpg"/> avatar delete chip
  </mu-chip>
  <mu-chip class="demo-chip" @delete="handleClose" showDelete>
    <mu-avatar :size="32" icon="face"/> icon avatar chip
  </mu-chip>

  <mu-chip class="demo-chip" backgroundColor="blue300" @delete="handleClose" showDelete>
    <mu-avatar color="blue300" backgroundColor="indigo900" :size="32">MB</mu-avatar> custom chip
  </mu-chip>
</div>
</template>

<script>
export default {
  methods: {
    handleClose () {
      window.alert('你点击了删除按钮')
    }
  }
}
</script>

<style lang="css">
.demo-chip-container{
  display: flex;
  flex-wrap: wrap;
}
.demo-chip{
  margin: 4px;
}
</style>
