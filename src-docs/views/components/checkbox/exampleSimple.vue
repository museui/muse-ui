<template>
<div>
  <mu-checkbox label="最简单的" class="demo-checkbox" :value="true"/> <br/>
  <mu-checkbox label="自定义icon" class="demo-checkbox" uncheckIcon="favorite_border" checkedIcon="favorite"/> <br/>
  <mu-checkbox label="不同的图形的icon" class="demo-checkbox" uncheckIcon="visibility_off" checkedIcon="visibility"/><br/>
  <mu-checkbox label="不可用" class="demo-checkbox" disabled/> <br/>
  <mu-checkbox label="不可用" class="demo-checkbox" disabled :value="true"/><br/>
  <mu-checkbox label="文字在左边的" class="demo-checkbox" labelLeft/><br/>
</div>
</template>
<script>
export default {
  data () {
    return {
      defaultVal: true
    }
  }
}
</script>
<style>
.demo-checkbox {
  margin-bottom: 16px;
}
</style>
