# Tooltip

The `mu-tooltip` is used to convey information when user hovers over an element, or it can also use `Open.sync` to control the display.

## Example

The `mu-tooltip` can wrap any element.

:::demo
```html
<mu-container>
  <mu-flex justify-content="around" align-items="center">
    <mu-tooltip content="Information">
      <mu-button color="primary">Tooltip</mu-button>
    </mu-tooltip>
    <mu-tooltip content="Print">
      <mu-button icon>
        <mu-icon value="print"></mu-icon>
      </mu-button>
    </mu-tooltip>
    <mu-tooltip content="Information">
      <span>Text message</span>
    </mu-tooltip>
  </mu-flex>
</mu-container>
```
:::

## Placement

:::demo
```html
<mu-container>
  <mu-flex justify-content="around" align-items="center">
    <mu-tooltip :placement="placement" content="Information">
      <mu-button color="primary">Tooltip</mu-button>
    </mu-tooltip>
    <mu-tooltip :placement="placement" content="Print">
      <mu-button icon>
        <mu-icon value="print"></mu-icon>
      </mu-button>
    </mu-tooltip>
    <mu-tooltip :placement="placement" content="Information">
      <span>Text message</span>
    </mu-tooltip>
  </mu-flex>
  <p class="demo-tooltip-title">Popup location:</p>
  <mu-row>
    <mu-col :key="p" v-for="p in placements" span="6" md="4">
      <mu-radio v-model="placement" :value="p" :label="p"></mu-radio>
    </mu-col>
  </mu-row>
</mu-container>
```
:::

## Tooltip Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| content | display content, used `slot="content"` instead | — | — |
| open | whether to display | Boolean | — | — |
| placement | where the Tooltip appears | String | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end | — |
| tooltip-class | tooltip style | String/Object/Array | — |

<script>
export default {
  data () {
    return {
      placements: [
        'top', 'top-start', 'top-end',
        'bottom', 'bottom-start', 'bottom-end',
        'left', 'left-start', 'left-end',
        'right', 'right-start', 'right-end'
      ],
      placement: 'bottom'
    }
  }
}
</script>

<style>
p.demo-tooltip-title {
  margin: 16px 0;
}
</style>
