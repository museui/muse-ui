<template>
<div class="demo-raised-button-container">
  <mu-raised-button class="demo-raised-button" label="选择文件">
    <input type="file" class="file-button">
  </mu-raised-button>
  <mu-raised-button class="demo-raised-button" label="文字在后面" icon="android" primary/>
  <mu-raised-button class="demo-raised-button" label="文字在前面" labelPosition="before" icon="folder" secondary/>
  <mu-raised-button class="demo-raised-button" href="https://github.com/museui/muse-ui" label="链接按钮" labelPosition="after" secondary>
      <i class="mudocs-icon-custom-github mu-icon" style="font-size:24px;"></i>
  </mu-raised-button>
  <mu-raised-button class="demo-raised-button" icon="android" backgroundColor="#a4c639" />
</div>
</template>

<script>
export default {
}
</script>


<style lang="css">
.file-button{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
}

.demo-raised-button-container{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.demo-raised-button {
  margin: 12px;
}
</style>
