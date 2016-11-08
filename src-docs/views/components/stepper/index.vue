<template>
<div class="content-wrapper">
  <markdown-element :text="description"/>
  <code-example :code="exampleSimpleCode" title="水平的步骤导航" description="一个活动发起的示例, 默认的步骤导航，是一步完成之后才能进行下一步的， 通过改变 `activeStep` 的值来控制当前步骤，使用的时候可根据 `activeStep` 展示相应的页面">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleVerticalCode" title="垂直的步骤导航" description="垂直的步骤导航，步骤内容需要放置在 `stepContent` 组件中，当 `activeStep` 改变时会显示不同的内容, `stepContent` 只可以被用在垂直的步骤导航中">
    <ex-vertical/>
  </code-example>
  <code-example :code="exampleNoLinearCode" title="非线性步骤导航" description="`linear` 设置为 false 时，不用完成上一步骤也可以查看下步骤的内容，`stepLabel` 需要被替换为 `stepButton` 并监听点击事件显示改步骤内容">
    <ex-linear/>
  </code-example>
  <code-example :code="exampleControlCode" title="非线性控制完成示例" description="`linear` 这是为 false 时, `stepper` 组件不再给 `step` 传递 `completed` 属性，因此需要手动给每一个`step` 绑定 `completed`">
    <ex-control/>
  </code-example>
  <code-example :code="exampleCustomCode" title="自定义图标">
    <ex-custom/>
  </code-example>
  <api-view :api="apiData.stepper" title="Stepper API"/>
  <api-view :api="apiData.step" title="Step API"/>
  <api-view :api="apiData.stepLabel" title="StepLabel API"/>
  <api-view :api="apiData.stepButton" title="StepButton API"/>
  <api-view :api="apiData.stepContent" title="StepContent API"/>
</div>
</template>

<script>
import description from './README.md'
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
export default {
  data () {
    return {
      description,
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
  }
}
</script>
