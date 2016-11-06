<template>
<div>
  <mu-paper class="demo-menu">
    <mu-menu desktop>
      <mu-menu-item title="Back"/>
      <mu-menu-item disabled title="Forward"/>
      <mu-divider />
      <mu-menu-item disabled title="Recently closed"/>
      <mu-menu-item disabled title="Google"/>
      <mu-menu-item title="YouTube"/>
    </mu-menu>
  </mu-paper>
  <mu-paper class="demo-menu">
    <mu-menu desktop>
      <mu-menu-item title="Undo"/>
      <mu-menu-item disabled title="Redo"/>
      <mu-divider />
      <mu-menu-item title="Cut"/>
      <mu-menu-item title="Copy"/>
      <mu-menu-item title="Paste"/>
    </mu-menu>
  </mu-paper>
</div>
</template>


<style lang="css">
.demo-menu {
  display: inline-block;
  margin: 16px 32px 16px 0;
}
</style>
