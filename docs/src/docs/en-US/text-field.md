# Text input box

The `mu-text-field` is used to collect user-provided information.

## Example

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

## Multi-Line Input

Setting `multi-line` will be rendered as a `textarea` tag, with `rows` and `rowsMax` controlling the number of lines to display in the input box.
:::demo
```html
<mu-container>
  <mu-text-field v-model="value9" placeholder="Default 3 lines, maximum display 6 lines" multi-line :rows="3" :rows-max="6"></mu-text-field><br/>
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

## Display icons

:::demo
```html
<mu-container>
  <mu-text-field v-model="value11" type="number" placeholder="Telephone" icon="phone"></mu-text-field><br/>
  <mu-text-field v-model="value12" multi-line :rows="4" icon="comment"  placeholder="Enter information"></mu-text-field><br/>
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

## Help text and error state

:::demo
```html
<mu-container>
  <mu-text-field v-model="value13" label="UserName" label-float help-text="A character with a username of 6-12 length" icon="account_circle"></mu-text-field><br/>
  <mu-text-field v-model="value14" label="Password" label-float error-text="Please enter password" icon="locked"></mu-text-field><br/>
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

## Input length limit

Setting `max-length` to start input length limit and display the number of input character.

:::demo
```html
<mu-container>
  <mu-text-field v-model="value15" placeholder="No more than 10 characters" :max-length="10"></mu-text-field><br/>
  <mu-text-field v-model="value16" placeholder="No more than 100 characters allowed" multi-line :rows="3" :max-length="100"></mu-text-field><br/>
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

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| color | input box color | String | — | — |
| icon | the icon to the left of the input box | String | — | — |
| label | label text | String | — | — |
| label-float | whether the label floats | Boolean | — | false |
| error-text | Error reminder text, if this parameter has a value, then the input box will be converted to the wrong state, the display effect will change | String | — | — |
| help-text | help text | String | — | — |
| full-width | whether the width is set to 100%, default 256px | Boolean | — | false |
| disabled |  whether the input box is not available | Boolean | — | false |
| multi-line | whether to input multiple lines | String | — | — |
| max-length | maximum number of characters to input | Number | — | — |
| rows | number of the rows | Number | — | 1 |
| rows-max | maximum number of the rows | — | — |
| action-icon | the icon to the right of the input box | String | — | — |
| action-click | function executed after icon click | Function | — | — |
| solo | change the style, and then hide the underline and label of the input box after setting | Boolean | — | false |
| underline-color | underline color  | String | - | - |
| prefix | input box prefix content | String | — | — |
| suffix | input box tail content | String | — | — |

## Text Field Events

| Name | Description | Parameters |
|-----|------|-----|
| change | trigger when the value change | (value) |

## Text Field Slots

| Name | Description |
|-----|------|
| prepend | input box front content |
| append | input box post content |
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
