<template>
<div class="demo-flat-button-container">
  <mu-flat-button label="选择文件" class="demo-flat-button">
    <input type="file" class="file-button">
  </mu-flat-button>
  <mu-flat-button label="文字在后面" class="demo-flat-button" icon="android" primary/>
  <mu-flat-button label="文字在前面" class="demo-flat-button" labelPosition="before" icon="folder" secondary/>
  <mu-flat-button icon="android" class="demo-flat-button" backgroundColor="#a4c639" color="#FFF"/>
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
  flex-wrap: wrap;
  align-items: center;
}
.demo-flat-button {
  margin: 12px;
}
</style>
