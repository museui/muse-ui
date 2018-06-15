# 自动补全输入

`mu-auto-complete` 是普通文本输入框的扩展，可以动态的自动完成输入。


## 示例
:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-auto-complete :data="fruits" label="提示输入内容" v-model="value1"></mu-auto-complete>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-auto-complete :data="fruits" label="最多显示五条搜索数据" :max-search-results="5" v-model="value2"></mu-auto-complete>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-auto-complete :data="fruits" label="激活及显示输入提示" :max-search-results="5"  v-model="value3" open-on-focus></mu-auto-complete>
    </mu-col>
  </mu-row>
</mu-container>
<script>
const fruits = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon'
];
export default {
  data () {
    return {
      fruits,
      value1: '',
      value2: '',
      value3: ''
    }
  }
}
</script>

```
:::

## 自定义模板

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-auto-complete :data="fruits" label="提示输入内容" v-model="value4" avatar>
        <template slot-scope="scope">
          <mu-list-item-action>
            <mu-avatar color="primary">
              {{scope.item.substring(0, 1)}}
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content v-html="scope.highlight.html"></mu-list-item-content>
        </template>
      </mu-auto-complete>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-auto-complete :data="fruits" label="最多显示五条搜索数据" :max-search-results="5" v-model="value5" avatar>
        <template slot-scope="scope">
          <mu-list-item-action>
            <mu-avatar color="primary">
              {{scope.item.substring(0, 1)}}
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content v-html="scope.highlight.html"></mu-list-item-content>
        </template>
      </mu-auto-complete>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-auto-complete :data="fruits" label="激活及显示输入提示" :max-search-results="6"  v-model="value6" open-on-focus avatar>
        <template slot-scope="scope">
          <mu-list-item-action>
            <mu-avatar color="primary">
              {{scope.item.substring(0, 1)}}
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content v-html="scope.highlight.html"></mu-list-item-content>
        </template>
      </mu-auto-complete>
    </mu-col>
  </mu-row>
</mu-container>
<script>
const fruits = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon'
];
export default {
  data () {
    return {
      fruits,
      value4: '',
      value5: '',
      value6: ''
    }
  }
}
</script>

```
:::

<mu-alert color="info">mu-auto-complete 支持 input 标签所有的原生属性和事件。</mu-alert>

## Auto Complete Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| data | 提示的输入的数据 | Array | — | — |
| max-height | 弹出框的最大高度 | Number/String | 300 |
| max-search-results | 最大显示搜索结果数 | Number | — |
| open-on-focus | 是否在 focus 时打开提示输入列表 | Boolean | — |
| textline | 弹出列表项显示行数，设置之后会改变选项的高度 | String | two-line/three-line | — |
| dense | 减小弹出列表最大高度 | Boolean | — | true |
| avatar | 选项内容中是否有头像，会根据此参数调整列表项高度 | Boolean | — | false |
| color | 输入框颜色 | String | — | — |
| icon | 输入框左边的图标 | String | — | — |
| label | 标签文本 | String | — | — |
| label-float | 标签是否浮动 | Boolean | — | false |
| error-text | 错误提醒文字，如果此参数有值，那么输入框会转为错误的状态, 显示效果将会更改 | String | — | — |
| help-text | 帮助文字 | String | — | — |
| full-width | 是否将宽度设置为 100%, 默认 256px | Boolean | — | false |
| disabled | 输入框是否不可用 | Boolean | — | false |
| action-icon | 输入框右边的图标 | String | — | — |
| action-click | 图标点击之后执行的函数 | Function | — | — |
| solo | 改变样式，设置之后会隐藏输入框的下划线和标签 | Boolean | — | false |
| underline-color | 下划线的颜色  | String | - | - |
| prefix | 输入框前缀内容 | String | — | — |
| suffix | 输入框尾部内容 | String | — | — |

## Auto Complete Events

| 名称 | 介绍 | 回调参数 |
|-----|------|--------|
| select | 选择某一项时触发事件 | (value, item) |
| change | 值改变时触发 | (value) |

## Auto Complete Slots

| 名称 | 介绍 |
|-----|------|
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |
| default | - |

## Auto Complete Scope Slots

| 名称 | 介绍 | 参数 |
|------|------|------|
| — | 选项的插槽 | { item, index, highlight }  |

<script>
const fruits = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon'
];
export default {
  data () {
    return {
      fruits,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: ''
    }
  }
}
</script>
