<template>
<div>
  <mu-icon-menu icon="more_vert" @change="handleChange" :open="open" @open="handleOpen" @close="handleClose" :value="value">
    <mu-menu-item value="1" title="Refresh" />
    <mu-menu-item value="2" title="Send feedback" />
    <mu-menu-item value="3" title="Settings" />
    <mu-menu-item value="4" title="Help" />
    <mu-menu-item value="5" title="Sign out" />
  </mu-icon-menu>
  <mu-raised-button label="toggle" @click="toggle"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      value: '3',
      open: false
    }
  },
  methods: {
    handleChange (val) {
      this.value = val
    },
    toggle () {
      this.open = !this.open
    },
    handleOpen () {
      this.open = true
    },
    handleClose () {
      this.open = false
    }
  }
}
</script>
