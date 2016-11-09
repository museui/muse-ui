<template>
<div>
  <mu-radio label="单选 1" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/> <br/>
  <mu-radio label="单选 2" name="group" nativeValue="simple2" v-model="value"  class="demo-radio"/> <br/>
  <mu-radio label="自定义icon" name="group" nativeValue="simple3" v-model="value"  class="demo-radio" uncheckIcon="favorite_border" checkedIcon="favorite"/> <br/>
  <mu-radio label="不可用" class="demo-radio" name="disabled" disabled v-model="disabled" nativeValue="dd"/> <br/>
  <mu-radio label="不可用" class="demo-radio" name="disabled" disabled v-model="disabled" nativeValue="tt"/><br/>
  <mu-radio label="文字在左边的" class="demo-radio" nativeValue="test" v-model="value2" labelLeft/><br/>
</div>
</template>
<script>
export default {
  data () {
    return {
      value: 'simple2',
      value2: '22',
      disabled: 'tt'
    }
  }
}
</script>
<style>
.demo-radio {
  margin-bottom: 16px;
}
</style>
