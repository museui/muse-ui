<template>
<div>
  <mu-raised-button @click="openBottomSheet" label="Open Bottom Sheet" />
  <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
    <mu-list @itemClick="closeBottomSheet">
      <mu-sub-header>
        请选择一个
      </mu-sub-header>
      <mu-list-item title="阴阳师"/>
      <mu-list-item title="贪吃蛇大作战"/>
      <mu-list-item title="一划到底"/>
      <mu-list-item title="全民斗地主"/>
    </mu-list>
  </mu-bottom-sheet>
</div>
</template>

<script>
export default {
  data () {
    return {
      bottomSheet: false
    }
  },
  methods: {
    closeBottomSheet () {
      this.bottomSheet = false
    },
    openBottomSheet () {
      this.bottomSheet = true
    }
  }
}
</script>
