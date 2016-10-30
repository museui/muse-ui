<template>
<div class="demo-badge-container">
  <mu-badge class="demo-badge-content">
    <mu-icon value="folder_open"/>
    <mu-icon value="cloud_upload" slot="content"/>
  </mu-badge>
  <mu-badge  class="demo-badge-content">
    版权信息
    <span style="font-size: 20px;" slot="content">&copy;</span>
  </mu-badge>
</div>
</template>
<style lang="less">
.demo-badge-content {
  padding: 12px;
  .mu-badge{
    background-color: inherit;
    color: inherit;
  }
}
</style>
