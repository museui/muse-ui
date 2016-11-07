<template>
<div>
  <mu-slider v-model="value1" step="5" class="demo-slider"/>
  <mu-slider v-model="value2" step="10" class="demo-slider"/>
  <mu-slider v-model="value3" step="15" class="demo-slider"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      value1: 0,
      value2: 0,
      value3: 0
    }
  }
}
</script>

<style lang="css">
.demo-slider {
  margin-bottom: 16px;
}
</style>
