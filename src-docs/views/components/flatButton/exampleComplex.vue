<template>
<div class="demo-flat-button-container">
  <mu-flat-button label="选择文件">
    <input type="file" class="file-button">
  </mu-flat-button>
  <mu-flat-button label="文字在后面" icon="android" primary/>
  <mu-flat-button label="文字在前面" labelPosition="before" icon="folder" secondary/>
  <mu-flat-button icon="android" backgroundColor="#a4c639" color="#FFF"/>
</div>
</template>


<style lang="css">
.file-button{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
}

.demo-flat-button-container{
  display: flex;
  align-items: center;
}
</style>
