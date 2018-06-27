<style>
.flex-wrapper {
  width: 100%;
  height: 56px;
  margin-top: 8px;
}
.flex-demo {
  width: 200px;
  height: 32px;
  background-color: #e0e0e0;
  text-align: center;
  line-height: 32px;
  margin-left: 8px;
}
.flex-wrapper:first-child {
  margin-top: 0;
}
.flex-demo:first-child {
  margin-left: 0;
}

</style>
# Layout

Muse-UI provides the layout component `mu-flex` based on [Flexible Box] (https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes).

## Example

:::demo
```html
<div style="width: 100%; background: #fff; padding: 8px;">
  <mu-flex class="flex-wrapper" justify-content="start">
    <mu-flex class="flex-demo" justify-content="center" >left</mu-flex>
  </mu-flex>
  <mu-flex class="flex-wrapper" justify-content="center">
    <mu-flex class="flex-demo" justify-content="center" >center</mu-flex>
  </mu-flex>
  <mu-flex class="flex-wrapper" justify-content="end">
    <mu-flex class="flex-demo" justify-content="center" >right</mu-flex>
  </mu-flex>
  <mu-flex class="flex-wrapper" align-items="center">
    <mu-flex class="flex-demo" justify-content="center" fill>fill</mu-flex>
    <mu-flex class="flex-demo" justify-content="center" fill>fill</mu-flex>
    <mu-flex class="flex-demo" justify-content="center" fill>fill</mu-flex>
  </mu-flex>
</div>
<style>
.flex-wrapper {
  width: 100%;
  height: 56px;
  margin-top: 8px;
}
.flex-demo {
  width: 200px;
  height: 32px;
  background-color: #e0e0e0;
  text-align: center;
  line-height: 32px;
  margin-left: 8px;
}
.flex-wrapper:first-child {
  margin-top: 0;
}
.flex-demo:first-child {
  margin-left: 0;
}
</style>
```
:::

## Flex Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| tag | Dom tag name after rendering | String | — | div |
| inline | whether it is `inline-flex` | Boolean | — | false |
| direction | specifies how the inner element is laid out in the flex container | String | row/column/row-reverse/column-reverse | row |
| wrap | specifies whether the flex element should be displayed in single or multiple lines | String | wrap/nowrap/wrap-reverse | nowrap |
| fill | whether this flex element fills the remaining space, set to true, then `flex: 1 1 auto`  | Boolean | — | false |
| justify-content | defines the flex element alignment for the spindle | String | start/center/end/between/around | start |
| align-items | defines the alignment of the flex element on the current line in the side axis | String | start/center/end/baseline/stretch | start |
| align-content | defines how the browser allocates space around the flexible box item on the side axis of the container when used as a property of a flex box container. | String | start/center/end/between/around/stretch | — |
| align-self | Aligns the flex elements in the current flex line and overwrites the align-items values. Align-self is ignored if the side axis orientation of any flex element is set to auto margin value. | String | auto/start/center/end/baseline/stretch | — |
