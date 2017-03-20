<template>
<div>
    <mu-checkbox name="group" nativeValue="checkbox1" v-model="list" label="checkbox1" class="demo-checkbox"/> <br/>
    <mu-checkbox name="group" nativeValue="checkbox2" v-model="list" label="checkbox2" class="demo-checkbox"/> <br/>
    <mu-checkbox name="group" nativeValue="checkbox3" v-model="list" label="checkbox3" class="demo-checkbox"/> <br/>
    <div class="demo-checkbox">
      你选择的是：{{list}}
    </div>
    <mu-checkbox :label="single ? 'true' : 'false'" v-model="single"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      single: false
    }
  }
}
</script>

<style>
.demo-checkbox {
  margin-bottom: 16px;
}
</style>
