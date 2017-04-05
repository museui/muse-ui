<template>
<mu-list>
  <mu-list-item title="图片" disabled>
    <mu-avatar slot="left" src="/images/uicon.jpg"/>
  </mu-list-item>
  <mu-list-item title="图片,自定义大小" disabled>
    <mu-avatar  slot="left" src="/images/uicon.jpg" :size="30"/>
  </mu-list-item>
  <mu-list-item title="图标" disabled>
    <mu-avatar slot="left" icon="folder"/>
  </mu-list-item>
  <mu-list-item title="图标, 自定义大小、颜色" disabled>
    <mu-avatar slot="left" icon="folder" color="orange200" backgroundColor="pink400" :size="30" :iconSize="20"/>
  </mu-list-item>
  <mu-list-item title="文字" disabled>
    <mu-avatar slot="left" color="deepOrange300" backgroundColor="purple500">MB</mu-avatar>
  </mu-list-item>
</mu-list>
</template>
