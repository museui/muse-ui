<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单的列表" description="一个简单的列表的例子，定义左边和右边的图标">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleChatCode" title="聊天列表" description="使用 `avatar` 和 `icon` 的例子">
    <ex-chat />
  </code-example>
  <code-example :code="exampleContactCode" title="联系人列表" description="使用 `inset` 和 `avatar` 完成联系人列表">
    <ex-contact />
  </code-example>
  <code-example :code="exampleFolderCode" title="文件夹列表">
    <ex-folder />
  </code-example>
  <code-example :code="exampleNestedCode" title="嵌套列表" description="使用 `nested` slot 完成嵌套列表 `toggleNested` 参数设置为 `true` 会自动切换子列表的显示与隐藏。">
    <ex-nested />
  </code-example>
  <code-example :code="exampleSettingCode" title="设置列表" description="配合 `checkbox` 和 `switch` 等表单组件完成设置列表展示">
    <ex-setting />
  </code-example>
  <code-example :code="examplePhoneCode" title="通讯列表">
    <ex-phone />
  </code-example>
  <code-example :code="exampleMessageCode" title="信息列表" description="配合 `iconMenu` 组件,使用 `describe` slot 定制更多样的描述信息">
    <ex-message />
  </code-example>
  <code-example :code="exampleSelectableCode" title="可选择的列表" description="使用 `value` 属性和 `change` 事件完成列表的选择功能">
    <ex-selectable />
  </code-example>

  <api-view title="List API" :api="apiData.list"/>
  <api-view title="ListItem API" :api="apiData.listItem"/>
</div>
</template>

<script>
import description from './README.md'
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
export default {
  data () {
    return {
      description,
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
  }
}
</script>
