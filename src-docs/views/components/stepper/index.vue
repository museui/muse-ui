<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')"/>
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleVerticalCode" :title="$t('verticalExample')" :description="$t('verticalExampleDesc')">
    <ex-vertical/>
  </code-example>
  <code-example :code="exampleNoLinearCode" :title="$t('nolinearExample')" :description="$t('nolinearExampleDesc')">
    <ex-linear/>
  </code-example>
  <code-example :code="exampleControlCode" :title="$t('controlExample')" :description="$t('controlExampleDesc')">
    <ex-control/>
  </code-example>
  <code-example :code="exampleCustomCode" :title="$t('customExample')">
    <ex-custom/>
  </code-example>
  <api-view :api="apiData.stepper" title="Stepper API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.step" title="Step API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.stepLabel" title="StepLabel API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.stepButton" title="StepButton API" :i18n="$t.bind(this)"/>
  <api-view :api="apiData.stepContent" title="StepContent API" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleVertical from './exampleVertical'
import exampleVerticalCode from '!raw!./exampleVertical'
import exampleNoLinear from './exampleNoLinear'
import exampleNoLinearCode from '!raw!./exampleNoLinear'
import exampleControl from './exampleControl'
import exampleControlCode from '!raw!./exampleControl'
import exampleCustom from './exampleCustom'
import exampleCustomCode from '!raw!./exampleCustom'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleVerticalCode,
      exampleNoLinearCode,
      exampleControlCode,
      exampleCustomCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-vertical': exampleVertical,
    'ex-linear': exampleNoLinear,
    'ex-control': exampleControl,
    'ex-custom': exampleCustom
  },
  locales: {
    zh,
    en
  }
}
</script>
