<template>
<mobile-tear-sheet>
  <mu-list>
    <mu-sub-header>最近聊天记录</mu-sub-header>
    <mu-list-item title="Mike Li">
      <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="Maco Mai">
      <mu-avatar src="/images/avatar2.jpg" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="Alex Qin">
      <mu-avatar src="/images/avatar3.jpg" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="Allen Qun">
      <mu-avatar src="/images/avatar4.jpg" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="Myron Liu">
      <mu-avatar src="/images/uicon.jpg" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
  </mu-list>
  <mu-divider/>
  <mu-list>
    <mu-sub-header>历史聊天记录</mu-sub-header>
    <mu-list-item title="Gaia Zhou">
      <mu-avatar src="/images/avatar5.jpg" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="Miller Wang">
      <mu-avatar src="/images/avatar6.jpg" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
  </mu-list>
</mobile-tear-sheet>
</template>

<script>
import mobileTearSheet from '../../../components/mobileTearSheet'
export default {
  components: {
    'mobile-tear-sheet': mobileTearSheet
  }
}
</script>
