<template>
<mu-paper class="demo-menu">
  <mu-menu desktop>
    <mu-menu-item title="Single" inset/>
    <mu-menu-item title="1.15" inset/>
    <mu-menu-item title="Double" inset/>
    <mu-menu-item title="Custom: 1.2" rightIcon="keyboard_arrow_right" leftIcon="check">
      <mu-menu-item title="Show" rightIcon="keyboard_arrow_right">
        <mu-menu-item title="Show Level 2" />
        <mu-menu-item title="Grid lines" leftIcon="check" />
        <mu-menu-item title="Page breaks" inset/>
        <mu-menu-item title="Rules" leftIcon="check" />
      </mu-menu-item>
      <mu-menu-item title="Grid lines" leftIcon="check" />
      <mu-menu-item title="Page breaks" inset/>
      <mu-menu-item title="Rules" leftIcon="check" />
    </mu-menu-item>
    <mu-divider />
    <mu-menu-item title="Add space before paragraph" />
    <mu-menu-item title="Add space after paragraph" />
    <mu-divider />
    <mu-menu-item title="Custom spacing..." />
  </mu-menu>
</mu-paper>
</template>
<style lang="css">
.demo-menu {
  display: inline-block;
  margin: 16px 32px 16px 0;
}
</style>
