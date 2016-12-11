<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleList')" :description="$t('simpleListDesc')">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleChatCode" :title="$t('chatList')" :description="$t('chatListDesc')">
    <ex-chat />
  </code-example>
  <code-example :code="exampleContactCode" :title="$t('contactList')" :description="$t('contactListDesc')">
    <ex-contact />
  </code-example>
  <code-example :code="exampleFolderCode" :title="$t('folderList')">
    <ex-folder />
  </code-example>
  <code-example :code="exampleNestedCode" :title="$t('nestedList')" :description="$t('nestedListDesc')">
    <ex-nested />
  </code-example>
  <code-example :code="exampleSettingCode" :title="$t('settingList')" :description="$t('settingListDesc')">
    <ex-setting />
  </code-example>
  <code-example :code="examplePhoneCode" :title="$t('addressList')">
    <ex-phone />
  </code-example>
  <code-example :code="exampleMessageCode" :title="$t('messageList')" :description="$t('messageListDesc')">
    <ex-message />
  </code-example>
  <code-example :code="exampleSelectableCode" :title="$t('selectableList')" :description="$t('selectableListDesc')">
    <ex-selectable />
  </code-example>

  <api-view title="List API" :api="apiData.list" :i18n="$t.bind(this)"/>
  <api-view title="ListItem API" :api="apiData.listItem" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleChat from './exampleChat'
import exampleChatCode from '!raw!./exampleChat'
import exampleContact from './exampleContact'
import exampleContactCode from '!raw!./exampleContact'
import exampleFolder from './exampleFolder'
import exampleFolderCode from '!raw!./exampleFolder'
import exampleNested from './exampleNested'
import exampleNestedCode from '!raw!./exampleNested'
import exampleSetting from './exampleSetting'
import exampleSettingCode from '!raw!./exampleSetting'
import examplePhone from './examplePhone'
import examplePhoneCode from '!raw!./examplePhone'
import exampleMessage from './exampleMessage'
import exampleMessageCode from '!raw!./exampleMessage'
import exampleSelectable from './exampleSelectable'
import exampleSelectableCode from '!raw!./exampleSelectable'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleChatCode,
      exampleContactCode,
      exampleFolderCode,
      exampleNestedCode,
      exampleSettingCode,
      examplePhoneCode,
      exampleMessageCode,
      exampleSelectableCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-chat': exampleChat,
    'ex-contact': exampleContact,
    'ex-folder': exampleFolder,
    'ex-nested': exampleNested,
    'ex-setting': exampleSetting,
    'ex-phone': examplePhone,
    'ex-message': exampleMessage,
    'ex-selectable': exampleSelectable
  },
  locales: {
    zh,
    en
  }
}
</script>
