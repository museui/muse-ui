# Auto-complete

`Mu-auto-complete` is an extension of the normal text input box, which can be dynamically completed automatically.。


## Example
:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-auto-complete :data="fruits" label="prompt for input" v-model="value1"></mu-auto-complete>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-auto-complete :data="fruits" label="display up to five search data" :max-search-results="5" v-model="value2"></mu-auto-complete>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-auto-complete :data="fruits" label="activate and display input prompts" :max-search-results="5"  v-model="value3" open-on-focus></mu-auto-complete>
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
      <mu-auto-complete :data="fruits" label="prompt for input" v-model="value4" avatar>
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
      <mu-auto-complete :data="fruits" label="display up to five search data" :max-search-results="5" v-model="value5" avatar>
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
      <mu-auto-complete :data="fruits" label="activate and display input prompts" :max-search-results="6"  v-model="value6" open-on-focus avatar>
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

<mu-alert color="info">Mu-auto-complete supports all native properties and events for input tags.</mu-alert>

## Auto Complete Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| data | prompt input data | Array | — | — |
| max-height | maximum height of pop-up box | Number/String | 300 |
| max-search-results | maximum display of search results | Number | — |
| open-on-focus | whether to open prompt input list when focus | Boolean | — |
| textline | The pop-up list item displays the number of rows, which changes the height of the option after setting | String | two-line/three-line | — |
| dense | decrease pop-up list maximum height | Boolean | — | true |
| avatar | if there is an avatar in the content of the option, the height of the list item will be adjusted according to this parameter | Boolean | — | false |
| color | input box color | String | — | — |
| icon | the icon to the left of the input box | String | — | — |
| label | label text | String | — | — |
| label-float | whether the label floats | Boolean | — | false |
| error-text | Error reminder text, if this parameter has a value, then the input box will be converted to the wrong state, the display effect will change | String | — | — |
| help-text | help text | String | — | — |
| full-width | whether the width is set to 100%, default 256px | Boolean | — | false |
| disabled |  whether the input box is not available | Boolean | — | false |
| action-icon | the icon to the right of the input box | String | — | — |
| action-click | function executed after icon click | Function | — | — |
| solo | change the style, and then hide the underline and label of the input box after setting | Boolean | — | false |
| underline-color | underline color  | String | - | - |
| prefix | input box prefix content | String | — | — |
| suffix | input box tail content | String | — | — |

## Auto Complete Events

| 名称 | 介绍 | 回调参数 |
|-----|------|--------|
| select | 选择某一项时触发事件 | (value, item) |
| change | 值改变时触发 | (value) |

## Auto Complete Slots

| Name | Description |
|-----|------|
| prepend | input box front content |
| append | input box post content |
| default | - |

## Auto Complete Scope Slots

| Name | Description | Attribute |
|------|------|------|
| — | slots for options | { item, index, highlight }  |

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
