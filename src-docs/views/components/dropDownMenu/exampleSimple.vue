<template>
<div>
  <mu-dropDown-menu :value="value" @change="handleChange">
    <mu-menu-item value="1" title="星期一"/>
    <mu-menu-item value="2" title="星期二"/>
    <mu-menu-item value="3" title="星期三"/>
    <mu-menu-item value="4" title="星期四"/>
    <mu-menu-item value="5" title="星期五"/>
    <mu-menu-item value="6" title="星期六"/>
    <mu-menu-item value="7" title="星期日"/>
  </mu-dropDown-menu>
</div>
</template>

<script>
export default {
  data () {
    return {
      value: '1'
    }
  },
  methods: {
    handleChange (value) {
      this.value = value
    }
  }
}
</script>
