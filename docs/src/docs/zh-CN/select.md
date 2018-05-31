# 选择框

`mu-select` 用于从选项列表中收集用户提供的信息。

## 示例

同 `select` 标签类似，需要 `mu-select` 与 `mu-option` 两者配合使用

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-select label="Normal" v-model="normal.value1" full-width>
        <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
      </mu-select>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-select label="Disabled Options" v-model="normal.value3" full-width>
        <mu-option v-for="option,index in options" :disabled="index % 2 !== 0" :key="option" :label="option" :value="option"></mu-option>
      </mu-select>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-select label="Error" error-text="Please select an option" v-model="normal.value2" full-width>
        <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
      </mu-select>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-select label="Disabled" disabled v-model="normal.value4" full-width>
        <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
      </mu-select>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-select label="Readonly" readonly v-model="normal.value5" full-width>
        <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
      </mu-select>
    </mu-col>
  </mu-row>
</mu-container>
<script>
export default {
  data () {
    return {
      options: [
        'Option 1', 'Option 2', 'Option 3', 'Option 4',
        'Option 5', 'Option 6', 'Option 7', 'Option 8',
        'Option 9', 'Option 10'
      ],
      normal: {
        value1: '',
        value2: '',
        value3: '',
        value4: 'Option 1',
        value5: 'Option 2'
      }
    }
  }
}
</script>
```
:::

## 多选

设置 `multiple` 将选择框变为多选， `separator` 更改分隔符, `chips` 使用 `mu-chip` 组件展示已选择项

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-select label="Multi Select" multiple v-model="multi.value1" full-width>
        <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
      </mu-select>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-select label="Separator" multiple separator="/" v-model="multi.value2" full-width>
        <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
      </mu-select>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-select label="Use Chips" multiple chips v-model="multi.value3" full-width>
        <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
      </mu-select>
    </mu-col>
  </mu-row>
</mu-container>
<script>
export default {
  data () {
    return {
      citys: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ],
      multi: {
        value1: [],
        value2: [],
        value3: []
      }
    }
  }
}
</script>
```
:::

## 可搜索

设定 `filerable` 将选择框变为可搜索的选择框。

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-select label="Filerable Select" filterable v-model="filterable.value1" full-width>
        <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
      </mu-select>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-select label="Multi Filerable Select" filterable multiple v-model="filterable.value2" full-width>
        <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
      </mu-select>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-select label="Use Chips Filterable" filterable multiple chips v-model="filterable.value3" full-width>
        <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
      </mu-select>
    </mu-col>
  </mu-row>
</mu-container>
<script>
export default {
  data () {
    return {
      citys: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ],
      filterable: {
        value1: '',
        value2: [],
        value3: []
      }
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
    <mu-col span="12" sm="6">
      <mu-select label="Option Slot" v-model="custom.value1" full-width>
        <mu-option v-for="language,index in languages" avatar :key="language" :label="language" :value="language">
          <mu-list-item-action avatar>
            <mu-avatar :size="36" color="primary">
              {{language.substring(0, 1)}}
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{language}}</mu-list-item-title>
          </mu-list-item-content>
        </mu-option>
      </mu-select>
    </mu-col>
    <mu-col span="12" sm="6">
      <mu-select label="Selection Scoped Slot" multiple chips v-model="custom.value2" full-width>
        <template slot="selection" slot-scope="scope">
          <mu-chip :selected="scope.selected" color="teal">
            {{scope.label}}
          </mu-chip>
        </template>
        <mu-option v-for="language,index in languages" :key="language" :label="language" :value="language"></mu-option>
      </mu-select>
    </mu-col>
  </mu-row>
</mu-container>
<script>
export default {
  data () {
    return {
      citys: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ],
      custom: {
        value1: '',
        value2: []
      }
    }
  }
}
</script>
```
:::

<mu-alert color="info">mu-select 支持 select 标签所有的原生属性和事件。</mu-alert>

## Select Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| multiple | 是否多选 | Boolean | — | — |
| filterable | 是否可搜索 | Boolean | — | — |
| chips | 已选项是否用 `mu-chip` 组件显示 | Boolean | — | — |
| max-height | 弹出选择列表的最大高度 | Number/String | — | 300 |
| separator | 多选时的文本分隔符 | String | — | , |
| popover-class | 弹出框的样式 | String | — | — |
| no-data-text | 未搜索数据时显示的文本 | String | — | 暂无数据显示 |
| textline | 弹出列表项显示行数，设置之后会改变选项的高度 | String | two-line/three-line | — |
| dense | 减小弹出列表最大高度 | Boolean | — | true |
| value | 用于 `v-model` 绑定 | — | — | — |
| color | 输入框颜色 | String | — | — |
| icon | 输入框左边的图标 | String | — | — |
| label | 标签文本 | String | — | — |
| label-float | 标签是否浮动 | Boolean | — | false |
| error-text | 错误提醒文字，如果此参数有值，那么输入框会转为错误的状态, 显示效果将会更改 | String | — | — |
| help-text | 帮助文字 | String | — | — |
| full-width | 是否将宽度设置为 100%, 默认 256px | Boolean | — | false |
| disabled | 输入框是否不可用 | Boolean | — | false |

## Select Scope Slots

| 名称 | 介绍 | 参数 |
|------|------|------|
| selection | 已选项的插槽 | { selected, label, value, index, disabled}  |

## Option Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| label | 选项的标签 | String | — | — |
| value | 选项的值 | — | — | — |
| ripple | 点击是否有波纹效果 | Boolean | — | false |
| avatar | 选项内容中是否有头像，会根据此参数调整列表项高度 | Boolean | — | false |
| disabled | 选项是否被禁用 | Boolean | — | false |

<script>
export default {
  data () {
    return {
      options: [
        'Option 1', 'Option 2', 'Option 3', 'Option 4',
        'Option 5', 'Option 6', 'Option 7', 'Option 8',
        'Option 9', 'Option 10'
      ],
      citys: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ],
      languages: ['Java', 'JavaScript', 'C#', 'C++', 'HTML', 'React', 'Vue', 'Muse-UI'],
      normal: {
        value1: '',
        value2: '',
        value3: '',
        value4: 'Option 1',
        value5: 'Option 2'
      },
      multi: {
        value1: [],
        value2: [],
        value3: []
      },
      filterable: {
        value1: '',
        value2: [],
        value3: []
      },
      custom: {
        value1: '',
        value2: [],
        value3: []
      }
    }
  }
}
</script>
