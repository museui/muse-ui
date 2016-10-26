<template>
<mu-drawer :open="open" :docked="docked" class="app-drawer" :zDepth="1">
  <mu-appbar class="exmaples-nav-appbar">
    <div style="position:relative;">
      <h1 class="mu-appbar-title" style="display:inline-block;">Muse-UI</h1>
      <mu-badge style="position:absolute" content="alpha" secondary/>
    </div>
  </mu-appbar>
  <mu-divider/>
</mu-drawer>
</template>

<script>
export default {
  data () {
    return {
      open: true,
      docked: true
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {
  }
}
</script>

<style lang="less">
@import "../../src/styles/vars.less";
.exmaples-drawer{
  box-shadow: none;
  border-right: 1px solid @borderColor;
}

.exmaples-nav-appbar{
  background-color: #FFF !important;
  color: @secondaryTextColor !important;
}
</style>
