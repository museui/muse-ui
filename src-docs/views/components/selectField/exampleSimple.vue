<template>
<div>
  <mu-select-field v-model="game1" label="选择你喜欢的游戏">
    <mu-menu-item value="1" title="阴阳师"/>
    <mu-menu-item value="2" title="影之刃"/>
    <mu-menu-item value="3" title="天下HD"/>
    <mu-menu-item value="4" title="穿越火线"/>
    <mu-menu-item value="5" title="英雄联盟"/>
    <mu-menu-item value="6" title="王者荣耀"/>
  </mu-select-field>
  <br/>
  <mu-select-field v-model="game2" multiple label="选择多个">
    <mu-menu-item value="1" title="阴阳师"/>
    <mu-menu-item value="2" title="影之刃"/>
    <mu-menu-item value="3" title="天下HD"/>
    <mu-menu-item value="4" title="穿越火线"/>
    <mu-menu-item value="5" title="英雄联盟"/>
    <mu-menu-item value="6" title="王者荣耀"/>
  </mu-select-field>
  <br/>
  <mu-select-field v-model="game3" disabled label="选择你喜欢的游戏">
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
    return {
      game1: '1',
      game2: ['1'],
      game3: '3'
    }
  }
}
</script>
