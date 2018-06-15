# 文本输入框

`mu-text-field` 用于收集用户提供的信息。

## 示例

:::demo
```html
<mu-container>
  <mu-text-field v-model="value1"></mu-text-field><br/>
  <mu-text-field v-model="value2" placeholder="Please input......"></mu-text-field><br/>
  <mu-text-field v-model="value3" disabled placeholder="disabled input"></mu-text-field><br/>
  <mu-text-field v-model="value4" placeholder="error input" error-text="Please input......"></mu-text-field><br/>
  <mu-text-field v-model="value5" label="Email Address" suffix="@gmail.com"></mu-text-field><br/>
  <mu-text-field v-model="value6" label="Label Float" prefix="$" label-float ></mu-text-field><br/>
  <mu-text-field v-model="value7" label="Password" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"></mu-text-field><br/>
  <mu-text-field v-model="value8" label="Full Width" full-width></mu-text-field>
</mu-container>
<script>
export default {
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      visibility: false
    }
  }
}
</script>
```
:::

## 多行输入

设置 `multi-line` 之后会被渲染成 `textarea` 标签，通过 `rows` 和 `rowsMax` 控制显示输入框的行数。
:::demo
```html
<mu-container>
  <mu-text-field v-model="value9" placeholder="默认3行, 最大显示6行" multi-line :rows="3" :rows-max="6"></mu-text-field><br/>
  <mu-text-field v-model="value10" multi-line :rows="4" full-width></mu-text-field><br/>
</mu-container>
<script>
export default {
  data () {
    return {
      value9: '',
      value10: ''
    }
  }
}
</script>
```
:::

## 图标显示

:::demo
```html
<mu-container>
  <mu-text-field v-model="value11" type="number" placeholder="电话号码" icon="phone"></mu-text-field><br/>
  <mu-text-field v-model="value12" multi-line :rows="4" icon="comment"  placeholder="输入信息"></mu-text-field><br/>
</mu-container>
<script>
export default {
  data () {
    return {
      value11: '',
      value12: ''
    }
  }
}
</script>
```
:::

## 帮助文字和错误状态

:::demo
```html
<mu-container>
  <mu-text-field v-model="value13" label="UserName" label-float help-text="用户名为6-12长度的字符" icon="account_circle"></mu-text-field><br/>
  <mu-text-field v-model="value14" label="Password" label-float error-text="请输入密码" icon="locked"></mu-text-field><br/>
</mu-container>
<script>
export default {
  data () {
    return {
      value13: '',
      value14: ''
    }
  }
}
</script>
```
:::

## 输入长度限制

设置 `max-length` 后会启动输入长度限制，并显示输入字符数。

:::demo
```html
<mu-container>
  <mu-text-field v-model="value15" placeholder="最多不超过10个字符" :max-length="10"></mu-text-field><br/>
  <mu-text-field v-model="value16" placeholder="不允许超过100个字符" multi-line :rows="3" :max-length="100"></mu-text-field><br/>
</mu-container>
<script>
export default {
  data () {
    return {
      value15: '',
      value16: ''
    }
  }
}
</script>
```
:::


## Text Field Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| color | 输入框颜色 | String | — | — |
| icon | 输入框左边的图标 | String | — | — |
| label | 标签文本 | String | — | — |
| label-float | 标签是否浮动 | Boolean | — | false |
| error-text | 错误提醒文字，如果此参数有值，那么输入框会转为错误的状态, 显示效果将会更改 | String | — | — |
| help-text | 帮助文字 | String | — | — |
| full-width | 是否将宽度设置为 100%, 默认 256px | Boolean | — | false |
| disabled | 输入框是否不可用 | Boolean | — | false |
| multi-line | 是否多行输入 | String | — | — |
| max-length | 最多可输入字符数 | Number | — | — |
| rows | 行数 | Number | — | 1 |
| rows-max | 最大行数 | — | — |
| action-icon | 输入框右边的图标 | String | — | — |
| action-click | 图标点击之后执行的函数 | Function | — | — |
| solo | 改变样式，设置之后会隐藏输入框的下划线和标签 | Boolean | — | false |
| underline-color | 下划线的颜色  | String | - | - |
| prefix | 输入框前缀内容 | String | — | — |
| suffix | 输入框尾部内容 | String | — | — |

## Text Field Events

| 名称 | 介绍 | 参数 |
|-----|------|-----|
| change | 值改变时触发 | (value) |

## Text Field Slots

| 名称 | 介绍 |
|-----|------|
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |
| default | - |

<script>
export default {
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value12: '',
      value13: '',
      value14: '',
      value15: '',
      value16: '',
      visibility: false
    }
  }
}
</script>
