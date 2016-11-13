<template>
<div class="demo-menu-container">
  <mu-paper class="demo-menu">
    <mu-menu desktop>
      <mu-menu-item title="Bold" afterText="⌘B"/>
      <mu-menu-item title="Italic" afterText="⌘I"/>
      <mu-menu-item title="Underline" afterText="⌘U"/>
      <mu-menu-item title="Strikethrough" afterText="Alt+Shift+5"/>
      <mu-menu-item title="Superscript" afterText="⌘."/>
      <mu-menu-item title="Subscript" afterText="⌘,"/>
      <mu-divider />
      <mu-menu-item title="Paragraph styles" rightIcon="keyboard_arrow_right"/>
      <mu-menu-item title="Align" rightIcon="keyboard_arrow_right"/>
      <mu-menu-item title="Line spacing" rightIcon="keyboard_arrow_right"/>
      <mu-menu-item title="Paragraph styles" rightIcon="keyboard_arrow_right"/>
      <mu-menu-item title="Numbered list" rightIcon="keyboard_arrow_right"/>
      <mu-menu-item title="List options" rightIcon="keyboard_arrow_right"/>
      <mu-divider />
      <mu-menu-item title="Clear formatting" afterText="⌘/"/>
    </mu-menu>
  </mu-paper>
  <mu-paper class="demo-menu">
    <mu-menu desktop :width="256">
      <mu-menu-item title="Open" afterText="Cmd + O" />
      <mu-menu-item title="Paste in place" afterText="Shift + V" />
      <mu-menu-item title="Research" afterText="Opt + Shift + Cmd + I" />
    </mu-menu>
  </mu-paper>
</div>
</template>

<style lang="css">
.demo-menu {
  display: inline-block;
  margin: 16px 32px 16px 0;
}

.demo-menu-container{
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
}

</style>
