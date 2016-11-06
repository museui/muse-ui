<template>
<mobile-tear-sheet>
  <mu-list>
    <mu-list-item title="Mike Li">
      <mu-avatar :src="avatar1" slot="rightAvatar"/>
      <mu-icon value="grade" slot="left" color="pinkA200"/>
    </mu-list-item>
    <mu-list-item title="Maco Mai" inset>
      <mu-avatar :src="avatar2" slot="rightAvatar"/>
    </mu-list-item>
    <mu-list-item title="Alex Qin" inset>
      <mu-avatar :src="avatar3" slot="rightAvatar"/>
    </mu-list-item>
    <mu-list-item title="Allen Qun" inset>
      <mu-avatar :src="avatar4" slot="rightAvatar"/>
    </mu-list-item>
  </mu-list>
  <mu-divider inset/>
  <mu-list>
    <mu-list-item title="Myron Liu">
      <mu-avatar :src="avatar7" slot="rightAvatar"/>
      <mu-avatar color="pinkA200" :style="{'margin-left': '-8px'}" backgroundColor="transparent" slot="leftAvatar">A</mu-avatar>
    </mu-list-item>
    <mu-list-item title="Gaia Zhou" inset>
      <mu-avatar :src="avatar5" slot="rightAvatar"/>
    </mu-list-item>
    <mu-list-item title="Miller Wang" inset>
      <mu-avatar :src="avatar6" slot="rightAvatar"/>
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
