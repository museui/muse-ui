<template>
<div>
  <mu-select-field label="很长很长的选择" :maxHeight="300">
    <mu-menu-item v-for="item, index in list" :key="index" :title="item" :value="index"/>
  </mu-select-field>
  <br/>
  <mu-select-field v-model="game" label="错误的样式" :errorText="errorText">
    <mu-menu-item value="1" title="阴阳师"/>
    <mu-menu-item value="2" title="影之刃"/>
    <mu-menu-item value="3" title="天下HD"/>
    <mu-menu-item value="4" title="穿越火线"/>
    <mu-menu-item value="5" title="英雄联盟"/>
    <mu-menu-item value="6" title="王者荣耀"/>
  </mu-select-field>
</div>
</template>

<script>
export default {
  data () {
    const list = []
    for (let i = 0; i < 30; i++) {
      list.push(`item ${i + 1}`)
    }
    return {
      list,
      game: ''
    }
  },
  computed: {
    errorText () {
      return this.game ? '' : '这是必选项'
    }
  }
}
</script>
