<template>
<div>
  <mu-raised-button label="scrollable dialog" @click="open"/>
  <mu-dialog :open="dialog" @close="close" title="Scrollable Dialog" scrollable>
    <mu-menu>
      <mu-menu-item :title="'menu item ' + menu" v-for="menu, index in menus" :key="index"/>
    </mu-menu>
    <mu-flat-button primary label="关闭" @click="close" slot="actions"/>
  </mu-dialog>
</div>
</template>

<script>
export default {
  data () {
    const menus = []
    for (let i = 0; i < 30; i++) {
      menus.push(i + 1)
    }
    return {
      dialog: false,
      menus
    }
  },
  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}
</script>
