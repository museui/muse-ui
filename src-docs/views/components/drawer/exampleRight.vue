<template>
<div>
  <mu-raised-button label="toggle drawer" @click="toggle()"/>
  <mu-drawer right :open="open" @close="toggle()">
    <mu-appbar title="Muse UI"/>
    <mu-list>
      <mu-list-item title="Menu Item 1"/>
      <mu-list-item title="Menu Item 2"/>
      <mu-list-item title="Menu Item 3"/>
      <mu-list-item @click.native="open = false" title="Close"/>
    </mu-list>
  </mu-drawer>
</div>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>
