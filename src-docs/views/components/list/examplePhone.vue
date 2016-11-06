<template>
<mobile-tear-sheet>
  <mu-list>
    <mu-list-item title="(+86) 88977296" describeText="电话">
      <mu-icon value="call" color="indigo" slot="left"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="(+86) 87495750" describeText="工作电话" inset>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
  </mu-list>
  <mu-divider inset/>
  <mu-list>
    <mu-list-item title="mike.io@example.com" describeText="电子邮箱">
      <mu-icon value="email" color="indigo" slot="left"/>
      <mu-icon value="chat_bubble" slot="right"/>
    </mu-list-item>
    <mu-list-item title="myron.io@example.com" describeText="工作邮箱" inset>
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
