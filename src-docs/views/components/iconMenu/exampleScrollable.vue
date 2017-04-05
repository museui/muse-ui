<template>
<div>
  <mu-icon-menu icon="more_vert" :maxHeight="300">
    <mu-menu-item v-for="item, index in list" :title="item" :key="index"/>
  </mu-icon-menu>
</div>
</template>

<script>
export default {
  data () {
    const list = []
    for (let i = 0; i < 30; i++) {
      list.push('Menu Item ' + (i + 1))
    }
    return {
      list
    }
  }
}
</script>

<style lang="css">
</style>
