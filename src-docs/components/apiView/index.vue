<template>
<div>
  <mu-tabs @change="">
    <mu-tab title="Props"/>
    <mu-tab title="Slots"/>
    <mu-tab title="Events"/>
  </mu-tabs>
</div>
</template>

<script>
export default {
  props: {
    api: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
