<template>
<div>
  <mu-paper style="display: inline-block;margin-right: 16px;">
    <mu-menu>
      <mu-menu-item title="menu 1">
        <mu-badge content="12" slot="after"/>
      </mu-menu-item>
      <mu-menu-item title="menu 2">
        <mu-badge content="old" primary slot="after"/>
      </mu-menu-item>
      <mu-menu-item title="menu 3">
        <mu-badge content="news" secondary slot="after"/>
      </mu-menu-item>
    </mu-menu>
  </mu-paper>
  <mu-paper style="display: inline-block; width: 256px;">
    <mu-list>
      <mu-list-item title="List Item 1">
        <mu-badge content="12" slot="right"/>
      </mu-list-item>
      <mu-list-item title="List Item 2">
        <mu-badge content="old" primary slot="right"/>
      </mu-list-item>
      <mu-list-item title="List Item 3">
        <mu-badge content="news" secondary slot="right"/>
      </mu-list-item>
    </mu-list>
  </mu-paper>
</div>
</template>
