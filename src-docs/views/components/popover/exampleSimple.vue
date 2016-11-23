<template>
<div>
  <mu-raised-button label="点这里" ref="button" @click="toggle"/>
  <mu-popover :trigger="trigger" :open="open" @close="handleClose">
    <mu-menu>
      <mu-menu-item title="Refresh" />
      <mu-menu-item title="Send feedback" />
      <mu-menu-item title="Settings" />
      <mu-menu-item title="Help" />
      <mu-menu-item title="Sign out" />
    </mu-menu>
  </mu-popover>
</div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      trigger: null
    }
  },
  mounted () {
    this.trigger = this.$refs.button.$el
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    handleClose (e) {
      this.open = false
    }
  }
}
</script>
