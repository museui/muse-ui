# Slider

The `mu-slider` is used to select within a fixed range.

## Example

:::demo
```html
<mu-container>
  <mu-slider class="demo-slider" v-model="normal.value1"></mu-slider>
  <mu-slider class="demo-slider" :step="10" v-model="normal.value2"></mu-slider>
  <mu-slider class="demo-slider" disabled v-model="normal.value3"></mu-slider>
</mu-container>
```
:::

## Color

Use `color` 、`track-color` and `thumb-color` property to set the color of silder.

:::demo
```html
<mu-container>
  <mu-slider class="demo-slider" color="secondary" v-model="color.value1"></mu-slider>
  <mu-slider class="demo-slider" track-color="green" v-model="color.value2"></mu-slider>
  <mu-slider class="demo-slider" thumb-color="orange" v-model="color.value3"></mu-slider>
</mu-container>
```
:::

## Slider Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| value | current value, support `v-model` directive | Number | — | — |
| max | maximum value | Number | — | 100 |
| min | minimum value | Number | — | 0 |
| step | step	| Number | — | 0.1 |
| color | color | String | — | — |
| thumb-color | thumb color | String | — | — |
| track-color | track color | String | — | — |
| disabled | whether it is disabled | Boolean | — | — |
| display-value | whether to display the current value | Boolean | — | — |

## Slider Events

| Attribute | Description | Parameters |
|-----|------|-----|
| change | trigger when the value change | (value) |

## Slider change

| Attribute | Description | Parameters |
|------|------|--------|
| change | trigger event when drag slider changes value | (value) |

<script>
export default {
  data () {
    return {
      normal: {
        value1: 10,
        value2: 50,
        value3: 80
      },
      color: {
        value1: 10,
        value2: 50,
        value3: 80
      }
    }
  }
}
</script>
<style>
.demo-slider {
  margin: 16px 0;
}
</style>
