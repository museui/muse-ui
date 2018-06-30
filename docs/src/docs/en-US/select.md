# Select

The `mu-select` is used to collect user-supplied information from a list of options.

## Example

Like the `select` tag, you need to use with `mu-select` and `mu-option`.

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

## Multiple selection

Set `multiple` to turn the selection box into multiple choices, `separator` changes the delimiter, `chips` uses the `mu-chip` component to show selected items.

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

## Searchable

Set `filerable` to turn the selection box into searchable selection box.

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

## Customizing templates

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

## Label input

You can create values that are not in the options, just set `tags` to true.

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-select label="Tags Input" v-model="tags" multiple tags>
        <mu-option v-for="language,index in languages" :key="language" :label="language" :value="language"></mu-option>
      </mu-select>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-select label="Tags Input" v-model="tags" chips multiple tags>
        <mu-option v-for="language,index in languages" :key="language" :label="language" :value="language"></mu-option>
      </mu-select>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-select label="Tags Input" v-model="tags" chips multiple tags>
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
```
:::

<mu-alert color="info">mu-select supports all native properties and events for select tags.</mu-alert>

## Select Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| multiple | whether to multiple selection | Boolean | — | — |
| filterable | whether to search | Boolean | — | — |
| chips | whether the selected option is displayed with the `mu-chip` component | Boolean | — | — |
| max-height | the maximum height of the popup selection list
 | Number/String | — | 300 |
| separator | text Separator for multiple selections | String | — | , |
| popover-class | popup style | String | — | — |
| no-data-text | text displayed when data is not searched | String | — | no data display |
| textline | The pop-up list item displays the number of rows, which changes the height of the option after setting | String | two-line/three-line | — |
| dense | decrease pop-up list maximum height | Boolean | — | true |
| value | used for `v-model` bindings | — | — | — |
| color | input box color | String | — | — |
| icon | the icon to the left of the input box | String | — | — |
| label | label text | String | — | — |
| label-float | whether the label floats | Boolean | — | false |
| error-text | Error reminder text, if this parameter has a value, then the input box will be converted to the wrong state, the display effect will change | String | — | — |
| help-text | help text | String | — | — |
| full-width | whether the width is set to 100%, default 256px | Boolean | — | false |
| disabled |  whether is not available | Boolean | — | false |
| action-icon | the icon to the right of the select box | String | — | — |
| action-click | function executed after icon click | Function | — | — |
| solo | change the style, and then hide the underline and label of the input box after setting | Boolean | — | false |
| underline-color | underline color  | String | - | - |

## Select Slots

| Name | Description |
|-----|------|
| prepend | select box prefix content |
| append | select box tail content |
| default | - |


## Select Events

| Name | Description | Parameters |
|-----|------|-----|
| change | trigger when the value change | (value) |

## Select Scope Slots

| Name | Description | Parameters |
|------|------|------|
| selection | slots for selected options | { selected, label, value, index, disabled}  |

## Option Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| label | the label of the option | String | — | — |
| value | the value of the option | — | — | — |
| ripple | click whether there is ripple effect | Boolean | — | false |
| avatar | if there is an avatar in the content of the option, the height of the list item will be adjusted according to this parameter | Boolean | — | false |
| disabled | whether the option is disabled | Boolean | — | false |

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
      languages: ['Java', 'JavaScript', 'C#', 'C++', 'HTML'],
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
      },
      tags: []
    }
  }
}
</script>
