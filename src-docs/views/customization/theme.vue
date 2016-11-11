<template>
<div class="content-wrapper">
  <markdown-element :text="titleText"/>
  <paper :class="['theme-' + theme]">
    <mu-tabs :value="theme" @change="changeTheme">
      <mu-tab title="LIGHT (DEFAULT)" value="default"/>
      <mu-tab title="DARK" value="dark"/>
      <mu-tab title="TEAL" value="teal"/>
      <mu-tab title="CARBON" value="carbon"/>
    </mu-tabs>
  </paper>
</div>
</template>

<script>
const titleText = `
## 主题

### 示例

下面的示例，你可以通过选择不同的tab来改变主题
`
export default {
  data () {
    return {
      titleText,
      theme: 'default'
    }
  },
  methods: {
    changeTheme (theme) {
      this.theme = theme
    }
  }
}
</script>

<style lang="css">
</style>
