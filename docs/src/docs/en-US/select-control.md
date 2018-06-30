# Select control

The select control allows the user to select the options, which are divided into `mu-checkbox`, `mu-radio` and `mu-switch`.

## Example

:::demo
```html
<mu-container>
  <mu-flex class="select-control-row">
    <mu-checkbox v-model="normal.checkbox" :label="'Checkbox: ' + normal.checkbox"></mu-checkbox>
  </mu-flex>
  <div class="select-control-group">
    <mu-flex class="select-control-row" :key="'radio ' + i" v-for="i in 3">
      <mu-radio :value="i" v-model="normal.radio"  :label="'Radio ' + i"></mu-radio>
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
    <mu-flex class="select-control-row">
      <mu-checkbox label="全选" :input-value="checkAll" @change="handleCheckAll" :checked-icon="this.checkbox.value1.length < 3 ? 'indeterminate_check_box' : undefined"></mu-checkbox>
    </mu-flex>
    <mu-flex class="select-control-row" :key="'Checkbox ' + i" v-for="i in 3">
      <mu-checkbox :value="'Checkbox ' + i" v-model="checkbox.value1" :label="'Checkbox ' + i"></mu-checkbox>
    </mu-flex>
  </div>

  Disable state
  <mu-flex class="select-control-row">
    <mu-checkbox disabled label="disabled"></mu-checkbox>
  </mu-flex>
  <mu-flex class="select-control-row">
    <mu-checkbox disabled :input-value="true" label="disabled"></mu-checkbox>
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
    <mu-flex class="select-control-row" :key="'radio ' + i" v-for="i in 3">
      <mu-radio :value="'radio ' + i" v-model="radio.value1" :label="'radio ' + i"></mu-radio>
    </mu-flex>
  </div>

  Disable state
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

<mu-alert color="info"> Supports all native properties and events for input tags.</mu-alert>

## Checkbox Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| label | lable | String | — | — |
| label-left | whether the label is on the left side | Boolean | — | — |
| uncheck-icon | unselected icon | String | — | — |
| checked-icon | selected icon | String | — | — |
| input-value | used for `v-model` bindings | Boolean, Array | — | — |
| disabled | whether it is disabled | Boolean | — | — |
| color | color | String | — | — |
| ripple | whether to turn on ripple animation | Boolean | - | true |

## Checkbox Events

| Name | Description | Parameters |
|-----|------|-----|
| change | trigger when the value changes | (value) |

## Radio Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| label | lable | String | — | — |
| label-left | whether the label is on the left side | Boolean | — | — |
| uncheck-icon | unselected icon | String | — | — |
| checked-icon | selected icon | String | — | — |
| input-value | used for `v-model` bindings | — | — | — |
| disabled | whether it is disabled | Boolean | — | — |
| color | color | String | — | — |
| ripple | whether to turn on ripple animation | Boolean | - | true |

## Checkbox Events

| Name | Description | Parameters |
|-----|------|-----|
| change | trigger when the value changes | (value) |

## Switch Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| label | label | String | — | — |
| label-left | whether the label is on the left side | Boolean | — | — |
| input-value | used for `v-model` bindings | Boolean | — | — |
| disabled | whether it is disabled | Boolean | — | — |
| color | color | String | — | — |
| ripple | whether to turn on ripple animation | Boolean | - | true |

## Switch Events

| Name | Description | Parameters |
|-----|------|-----|
| change | trigger when the value changes | (value) |

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
  },
  computed: {
    checkAll () {
      return this.checkbox.value1.length > 0;
    }
  },
  methods: {
    handleCheckAll (val) {
      this.checkbox.value1 = this.checkAll && this.checkbox.value1.length >= 3 ? [] : ['Checkbox 1', 'Checkbox 2', 'Checkbox 3'];
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
