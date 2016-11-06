<template>
<div>
  <mu-paper class="demo-menu">
    <mu-menu>
      <mu-menu-item title="Preview" leftIcon="remove_red_eye"/>
      <mu-menu-item title="Share" leftIcon="person_add"/>
      <mu-menu-item title="Get Links" leftIcon="link"/>
      <mu-divider />
      <mu-menu-item title="Make a copy" leftIcon="content_copy"/>
      <mu-menu-item title="Download" leftIcon="file_download"/>
      <mu-menu-item title="Remove" leftIcon="delete"/>
    </mu-menu>
  </mu-paper>
  <mu-paper class="demo-menu">
    <mu-menu>
      <mu-menu-item title="Clear Config"/>
      <mu-menu-item title="New Config" rightIcon="person_add"/>
      <mu-menu-item title="Project" rightIcon="settings"/>
      <mu-menu-item title="Workspace" rightIcon="settings" rightIconColor="#559"/>
      <mu-menu-item title="Paragraph" rightIcon="¶"/>
      <mu-menu-item title="Section" rightIcon="§"/>
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
