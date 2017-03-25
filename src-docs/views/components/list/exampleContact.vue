<template>
<mobile-tear-sheet>
  <mu-list>
    <mu-list-item title="Mike Li">
      <mu-avatar src="/images/avatar1.jpg" slot="rightAvatar"/>
      <mu-icon value="grade" slot="left" color="pinkA200"/>
    </mu-list-item>
    <mu-list-item title="Maco Mai" inset>
      <mu-avatar src="/images/avatar2.jpg" slot="rightAvatar"/>
    </mu-list-item>
    <mu-list-item title="Alex Qin" inset>
      <mu-avatar src="/images/avatar3.jpg" slot="rightAvatar"/>
    </mu-list-item>
    <mu-list-item title="Allen Qun" inset>
      <mu-avatar src="/images/avatar4.jpg" slot="rightAvatar"/>
    </mu-list-item>
  </mu-list>
  <mu-divider inset/>
  <mu-list>
    <mu-list-item title="Myron Liu">
      <mu-avatar src="/images/uicon.jpg" slot="rightAvatar"/>
      <mu-avatar color="pinkA200" :style="{'margin-left': '-8px'}" backgroundColor="transparent" slot="leftAvatar">A</mu-avatar>
    </mu-list-item>
    <mu-list-item title="Gaia Zhou" inset>
      <mu-avatar src="/images/avatar5.jpg" slot="rightAvatar"/>
    </mu-list-item>
    <mu-list-item title="Miller Wang" inset>
      <mu-avatar src="/images/avatar6.jpg" slot="rightAvatar"/>
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
