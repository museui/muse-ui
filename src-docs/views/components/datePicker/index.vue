<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单的使用" description="datePicker 默认是以竖屏弹出框的是形式选择，有横屏和竖屏两种显示模式，通过 `mode=landscape` or `mode=portrait` 切换">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleInlineCode" title="内联弹出模式" description="设置 `container=inline` 可以使时间选择内联方式弹出">
    <ex-inline/>
  </code-example>
  <code-example :code="exampleSelectCode" title="选择控制" description="和其它表单组件一样，datePicker 也可以通过 `v-model` 控制value属性，`maxDate` 和 `minDate` 控制选择日期范围，设置 `autoOk` 和 `disableYearSelection` 来切换自动确定和关闭年份选择功能">
    <ex-select />
  </code-example>
  <code-example :code="exampleDisabledCode" title="通过函数指定不可选择的时间" description="`shouldDisableDate` 参数可以通过函数指定哪些时间不可选择。">
    <ex-disabled />
  </code-example>
  <code-example :code="exampleLocaleCode" title="语言环境配置" description="通过自定义 `dateTimeFormat` 来格式化不同语言的显示">
    <ex-locale/>
  </code-example>
  <api-view :api="apiData"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleInline from './exampleInline'
import exampleInlineCode from '!raw!./exampleInline'
import exampleSelect from './exmapleSelect'
import exampleSelectCode from '!raw!./exmapleSelect'
import exampleDisabled from './exampleDisabled'
import exampleDisabledCode from '!raw!./exampleDisabled'
import exampleLocale from './exampleLocale'
import exampleLocaleCode from '!raw!./exampleLocale'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleInlineCode,
      exampleSelectCode,
      exampleDisabledCode,
      exampleLocaleCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-inline': exampleInline,
    'ex-select': exampleSelect,
    'ex-disabled': exampleDisabled,
    'ex-locale': exampleLocale
  }
}
</script>

<style lang="css">
</style>
