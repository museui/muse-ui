<template>
<mobile-tear-sheet>
  <mu-list :value="value" @change="handleChange">
    <mu-list-item :value="1" title="Mike Li">
      <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
    </mu-list-item>
    <mu-list-item  :value="2" title="Maco Mai" inset toggleNested>
      <mu-avatar src="avatar2" slot="leftAvatar"/>
      <mu-list-item :value="3"  title="Myron Liu" slot="nested">
        <mu-avatar src="/images/uicon.jpg" slot="leftAvatar"/>
      </mu-list-item>
      <mu-list-item :value="4" title="Gaia Zhou" slot="nested" inset>
        <mu-avatar src="/images/avatar5.jpg" slot="leftAvatar"/>
      </mu-list-item>
      <mu-list-item :value="5"  title="Miller Wang" slot="nested" inset>
        <mu-avatar src="/images/avatar6.jpg" slot="leftAvatar"/>
      </mu-list-item>
    </mu-list-item>
    <mu-list-item :value="6" title="Alex Qin" inset>
      <mu-avatar src="/images/avatar3.jpg" slot="leftAvatar"/>
    </mu-list-item>
    <mu-list-item :value="7" title="Allen Qun" inset>
      <mu-avatar src="/images/avatar4.jpg" slot="leftAvatar"/>
    </mu-list-item>
  </mu-list>
</mobile-tear-sheet>
</template>

<script>
import mobileTearSheet from '../../../components/mobileTearSheet'
export default {
  data () {
    return {
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
