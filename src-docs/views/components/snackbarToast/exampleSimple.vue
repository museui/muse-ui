<template>
<div>
  <mu-raised-button label="show snackbar" class="demo-snackbar-button" @click="showSnackbar"/>
  <mu-raised-button label="show toast" class="demo-snackbar-button" @click="showToast"/>
  <mu-snackbar v-if="snackbar" message="一段简单的文本" action="关闭" @actionClick="hideSnackbar" @close="hideSnackbar"/>
  <mu-toast v-if="toast" message="一段简单的文本" @close="hideToast"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      snackbar: false,
      toast: false
    }
  },
  methods: {
    showSnackbar () {
      this.snackbar = true
      if (this.snackTimer) clearTimeout(this.snackTimer)
      this.snackTimer = setTimeout(() => { this.snackbar = false }, 2000)
    },
    hideSnackbar () {
      this.snackbar = false
      if (this.snackTimer) clearTimeout(this.snackTimer)
    },
    showToast () {
      this.toast = true
      if (this.toastTimer) clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
    },
    hideToast () {
      this.toast = false
      if (this.toastTimer) clearTimeout(this.toastTimer)
    }
  }
}
</script>

<style lang="css">
.demo-snackbar-button{
  margin: 12px;
}
</style>
