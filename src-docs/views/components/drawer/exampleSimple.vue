<template>
<div>
    <mu-raised-button label="toggle drawer" @click="toggle()"/>
    <mu-raised-button label="undocked drawer" @click="toggle(true)"/>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-menu @itemClick="docked ? '' : toggle()">
        <mu-menu-item title="Menu Item 1"/>
        <mu-menu-item title="Menu Item 2"/>
        <mu-menu-item title="Menu Item 3"/>
      </mu-menu>
    </mu-drawer>
</div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      docked: true
    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    }
  }
}
</script>
