<template>
<mobile-tear-sheet>
  <mu-list :value="value" @change="handleChange">
    <mu-list-item :value="1" title="Mike Li">
      <mu-avatar :src="avatar1" slot="leftAvatar"/>
    </mu-list-item>
    <mu-list-item  :value="2" title="Maco Mai" inset toggleNested>
      <mu-avatar :src="avatar2" slot="leftAvatar"/>
      <mu-list-item :value="3"  title="Myron Liu" slot="nested">
        <mu-avatar :src="avatar7" slot="leftAvatar"/>
      </mu-list-item>
      <mu-list-item :value="4" title="Gaia Zhou" slot="nested" inset>
        <mu-avatar :src="avatar5" slot="leftAvatar"/>
      </mu-list-item>
      <mu-list-item :value="5"  title="Miller Wang" slot="nested" inset>
        <mu-avatar :src="avatar6" slot="leftAvatar"/>
      </mu-list-item>
    </mu-list-item>
    <mu-list-item :value="6" title="Alex Qin" inset>
      <mu-avatar :src="avatar3" slot="leftAvatar"/>
    </mu-list-item>
    <mu-list-item :value="7" title="Allen Qun" inset>
      <mu-avatar :src="avatar4" slot="leftAvatar"/>
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
      avatar7,
      value: 1
    }
  },
  methods: {
    handleChange (val) {
      this.value = val
    }
  },
  components: {
    'mobile-tear-sheet': mobileTearSheet
  }
}
</script>
