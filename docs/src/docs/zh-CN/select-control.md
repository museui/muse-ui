# 选择控件

选择控件允许用户选择的选项，分为 `mu-checkbox` ，`mu-radio` 和 `mu-switch`。

## 示例

:::demo
```html
<mu-container>
  <mu-flex class="select-control-row">
    <mu-checkbox v-model="normal.checkbox" :label="'Checkbox: ' + normal.checkbox"></mu-checkbox>
  </mu-flex>
  <div class="select-control-group">
    <mu-flex class="select-control-row" v-for="i in 3">
      <mu-radio :value="i" v-model="normal.radio" :label="'Radio ' + i"></mu-checkbox>
    </mu-flex>
  </div>
  <mu-flex class="select-control-row">
    <mu-switch v-model="normal.switch" :label="'Switch: ' + normal.switch"></mu-switch>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      normal: {
        checkbox: true,
        radio: 1,
        switch: false
      }
    }
  }
}
</script>
<style>
.select-control-row{
  padding: 8px 0;
}
.select-control-group {
  margin: 16px 0;
}
</style>
```
:::

## Checkbox

:::demo
```html
<mu-container>
  <mu-flex class="select-control-row">
    <mu-checkbox v-model="checkbox.value2" uncheck-icon="favorite_border" checked-icon="favorite" label="自定义图标"></mu-checkbox>
  </mu-flex>
  <mu-flex class="select-control-row">
    <mu-checkbox v-model="checkbox.value3" uncheck-icon="visibility_off" checked-icon="visibility" label="自定义图标"></mu-checkbox>
  </mu-flex>
  <div class="select-control-group" >
    Selects: {{checkbox.value1}}
    <mu-flex class="select-control-row" v-for="i in 3">
      <mu-checkbox :value="'Checkbox ' + i" v-model="checkbox.value1" :label="'Checkbox ' + i"></mu-checkbox>
    </mu-flex>
  </div>

  不可用状态
  <mu-flex class="select-control-row">
    <mu-checkbox disabled label="disabled"></mu-checkbox>
  </mu-flex>
  <mu-flex class="select-control-row">
    <mu-checkbox disabled input-value="true" label="disabled"></mu-checkbox>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      checkbox: {
        value1: [],
        value2: false,
        value3: false
      }
    }
  }
}
</script>
<style>
.select-control-row{
  padding: 8px 0;
}
.select-control-group {
  margin: 16px 0;
}
</style>
```
:::

## Raido

:::demo
```html
<mu-container>
  <mu-flex class="select-control-row">
    <mu-radio v-model="radio.value2" value="heart" uncheck-icon="favorite_border" checked-icon="favorite" label="自定义图标"></mu-radio>
  </mu-flex>
  <mu-flex class="select-control-row">
    <mu-radio v-model="radio.value2" value="visibility" uncheck-icon="visibility_off" checked-icon="visibility" label="自定义图标"></mu-radio>
  </mu-flex>
  <div class="select-control-group" >
    Selects: {{radio.value1}}
    <mu-flex class="select-control-row" v-for="i in 3">
      <mu-radio :value="'radio ' + i" v-model="radio.value1" :label="'radio ' + i"></mu-radio>
    </mu-flex>
  </div>

  不可用状态
  <mu-flex class="select-control-row">
    <mu-radio disabled v-model="radio.value3" value="null" label="disabled"></mu-radio>
  </mu-flex>
  <mu-flex class="select-control-row">
    <mu-radio disabled v-model="radio.value3" value="disable" label="disabled"></mu-radio>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      radio: {
        value1: [],
        value2: 'heart',
        value3: 'disable'
      }
    }
  }
}
</script>
<style>
.select-control-row{
  padding: 8px 0;
}
.select-control-group {
  margin: 16px 0;
}
</style>
```
:::

## Switch

:::demo
```html
<mu-container>
  <mu-flex class="select-control-row">
    <mu-switch v-model="switchVal.value1" label="switch"></mu-switch>
  </mu-flex>
  <mu-flex class="select-control-row">
    <mu-switch v-model="switchVal.value2" label="switch"></mu-switch>
  </mu-flex>
  <mu-flex class="select-control-row">
    <mu-switch v-model="switchVal.value3" disabled label="disabled"></mu-switch>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      switchVal: {
        value1: false,
        value2: true,
        value3: false
      }
    }
  }
}
</script>
```
:::

<mu-alert color="info"> 支持 input 标签所有的原生属性和事件。</mu-alert>

## Checkbox Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| label | 标签 | String | — | — |
| label-left | 标签是否在左边 | Boolean | — | — |
| uncheck-icon | 未选择时的 icon | String | — | — |
| checked-icon | 已选择时的 icon | String | — | — |
| input-value | 用于 `v-model` 绑定 | Boolean, Array | — | — |
| disabled | 是否禁用 | Boolean | — | — |

## Radio Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| label | 标签 | String | — | — |
| label-left | 标签是否在左边 | Boolean | — | — |
| uncheck-icon | 未选择时的 icon | String | — | — |
| checked-icon | 已选择时的 icon | String | — | — |
| input-value | 用于 `v-model` 绑定 | — | — | — |
| disabled | 是否禁用 | Boolean | — | — |

## Switch Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| label | 标签 | String | — | — |
| label-left | 标签是否在左边 | Boolean | — | — |
| input-value | 用于 `v-model` 绑定 | Boolean | — | — |
| disabled | 是否禁用 | Boolean | — | — |

<script>
export default {
  data () {
    return {
      normal: {
        checkbox: true,
        radio: 1,
        switch: false
      },
      checkbox: {
        value1: [],
        value2: false,
        value3: false
      },
      radio: {
        value1: [],
        value2: 'heart',
        value3: 'disable'
      },
      switchVal: {
        value1: false,
        value2: true,
        value3: false
      }
    }
  }
}
</script>
<style>
.select-control-row{
  padding: 8px 0;
}
.select-control-group {
  margin: 16px 0;
}
</style>
