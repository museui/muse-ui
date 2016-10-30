<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="简单的使用">
    <ex-simple />
  </code-example>
  <code-example :code="exampleShiftCode" title="Shift 模式">
    <ex-shift />
  </code-example>
  <api-view :api="apiData.bottomNav" title="BottomNav API"/>
  <api-view :api="apiData.bottomNavItem" title="bottomNavItem API"/>
</div>
</template>

<script>
import description from './README.md'
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleShift from './exampleShift'
import exampleShiftCode from '!raw!./exampleShift'
import apiData from './api'
export default {
  data () {
    return {
      description,
      exampleSimpleCode,
      exampleShiftCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-shift': exampleShift
  }
}
</script>
