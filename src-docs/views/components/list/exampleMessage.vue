<template>
<mobile-tear-sheet>
  <mu-list>
    <mu-sub-header>今天</mu-sub-header>
    <mu-list-item title="这个周末一起吃饭么?">
      <mu-avatar :src="avatar1" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
    </mu-list-item>
    <mu-divider inset/>
    <mu-list-item title="Alex Qin">
      <mu-avatar :src="avatar2" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">看电影啊</span> <br/>
        我们去看电影，最近有部烂片上映，又有吐槽的了
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
    </mu-list-item>
    <mu-divider inset/>
    <mu-list-item title="LOL">
      <mu-avatar :src="avatar3" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>
        周末一起 LOL
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
    </mu-list-item>
    <mu-divider inset/>
    <mu-list-item title="Myron Liu">
      <mu-avatar :src="avatar7" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/> 实在编不下去，这就是个demo
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
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
