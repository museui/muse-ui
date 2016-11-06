<template>
<mobile-tear-sheet>
  <mu-list>
    <mu-sub-header>最近聊天记录</mu-sub-header>
    <mu-list-item title="Mike Li">
      <mu-avatar :src="avatar1" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="Maco Mai">
      <mu-avatar :src="avatar2" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="Alex Qin">
      <mu-avatar :src="avatar3" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="Allen Qun">
      <mu-avatar :src="avatar4" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="Myron Liu">
      <mu-avatar :src="avatar7" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
  </mu-list>
  <mu-divider/>
  <mu-list>
    <mu-sub-header>历史聊天记录</mu-sub-header>
    <mu-list-item title="Gaia Zhou">
      <mu-avatar :src="avatar5" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="Miller Wang">
      <mu-avatar :src="avatar6" slot="leftAvatar"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
  </mu-list>
</mobile-tear-sheet>
</template>

<script>
import mobileTearSheet from '../../../components/mobileTearSheet'
import avatar1 from '../../../assets/images/avatar1.jpg'
import avatar2 from '../../../assets/images/avatar2.jpg'
import avatar3 from '../../../assets/images/avatar3.jpg'
import avatar4 from '../../../assets/images/avatar4.jpg'
import avatar5 from '../../../assets/images/avatar5.jpg'
import avatar6 from '../../../assets/images/avatar6.jpg'
import avatar7 from '../../../assets/images/uicon.jpg'
export default {
  data () {
    return {
      avatar1,
      avatar2,
      avatar3,
      avatar4,
      avatar5,
      avatar6,
      avatar7
    }
  },
  components: {
    'mobile-tear-sheet': mobileTearSheet
  }
}
</script>
