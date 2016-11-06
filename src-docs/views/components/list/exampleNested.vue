<template>
<mobile-tear-sheet>
  <mu-list>
    <mu-list-item title="Sent mail">
      <mu-icon slot="left" value="send"/>
    </mu-list-item>
    <mu-list-item title="Drafts">
      <mu-icon slot="left" value="drafts"/>
    </mu-list-item>
    <mu-list-item title="Inbox" toggleNested>
      <mu-icon slot="left" value="inbox"/>
      <mu-list-item slot="nested" title="Starred">
        <mu-icon slot="left" value="grade"/>
      </mu-list-item>
      <mu-list-item slot="nested" disabled title="Sent mail" toggleNested>
        <mu-icon slot="left" value="send"/>
        <mu-list-item title="Drafts" slot="nested">
          <mu-icon slot="left" value="drafts"/>
        </mu-list-item>
      </mu-list-item>
      <mu-list-item slot="nested" title="Inbox" toggleNested>
        <mu-icon slot="left" value="inbox"/>
        <mu-list-item title="Drafts" slot="nested">
          <mu-icon slot="left" value="drafts"/>
        </mu-list-item>
      </mu-list-item>
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
