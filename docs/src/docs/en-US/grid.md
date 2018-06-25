# Grid layout

Muse-ui uses the [Bootstrap 4.0] (https://getbootstrap.com/docs/4.0/layout/grid/) grid system to move the end-priority principle, based on the Flex box layout design of the grid layout.

## Basic layout

With the row and col components, and through the span properties of the col component, we are free to combine the layout.

:::demo
```html
<mu-container class="demo-container is-stripe">
  <mu-row>
    <mu-col span="12"><div class="grid-cell"></div></mu-col>
  </mu-row>
  <mu-row>
    <mu-col span="6"><div class="grid-cell"></div></mu-col>
    <mu-col span="6"><div class="grid-cell"></div></mu-col>
  </mu-row>
  <mu-row>
    <mu-col span="4"><div class="grid-cell"></div></mu-col>
    <mu-col span="4"><div class="grid-cell"></div></mu-col>
    <mu-col span="4"><div class="grid-cell"></div></mu-col>
  </mu-row>
  <mu-row>
    <mu-col span="3"><div class="grid-cell"></div></mu-col>
    <mu-col span="3"><div class="grid-cell"></div></mu-col>
    <mu-col span="3"><div class="grid-cell"></div></mu-col>
    <mu-col span="3"><div class="grid-cell"></div></mu-col>
  </mu-row>
  <mu-row>
    <mu-col span="2"><div class="grid-cell"></div></mu-col>
    <mu-col span="2"><div class="grid-cell"></div></mu-col>
    <mu-col span="2"><div class="grid-cell"></div></mu-col>
    <mu-col span="2"><div class="grid-cell"></div></mu-col>
    <mu-col span="2"><div class="grid-cell"></div></mu-col>
    <mu-col span="2"><div class="grid-cell"></div></mu-col>
  </mu-row>
</mu-container>
<style lang="less">
.demo-container {
  .row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-cell {
    border-radius: 4px;
    height: 36px;
    background: rgba(255, 255, 255, 0.8);
  }
}
.demo-container.is-stripe .col:nth-child(2n) .grid-cell{
  background: rgba(0, 0, 0, 0.54);
}
</style>

```
:::

## Gap

Each `col` has an gap, set by `gutter`.

:::demo
```html
<mu-container class="demo-container">
  <mu-row gutter>
    <mu-col span="6"><div class="grid-cell"></div></mu-col>
    <mu-col span="6"><div class="grid-cell"></div></mu-col>
  </mu-row>
  <mu-row gutter>
    <mu-col span="4"><div class="grid-cell"></div></mu-col>
    <mu-col span="4"><div class="grid-cell"></div></mu-col>
    <mu-col span="4"><div class="grid-cell"></div></mu-col>
  </mu-row>
  <mu-row gutter>
    <mu-col span="3"><div class="grid-cell"></div></mu-col>
    <mu-col span="3"><div class="grid-cell"></div></mu-col>
    <mu-col span="3"><div class="grid-cell"></div></mu-col>
    <mu-col span="3"><div class="grid-cell"></div></mu-col>
  </mu-row>
</mu-container>
<style lang="less">
.demo-container {
  .row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-cell {
    border-radius: 4px;
    height: 36px;
    background: rgba(255, 255, 255, 0.8);
  }
}
.demo-container.is-stripe .col:nth-child(2n) .grid-cell{
  background: rgba(0, 0, 0, 0.54);
}
</style>
```
:::

## Offset

You can specify the number of cells to offset by setting the `offset` property of the `col` component.

:::demo
```html
<mu-container class="demo-container">
  <mu-row gutter>
    <mu-col span="3"><div class="grid-cell"></div></mu-col>
    <mu-col span="3" offset="3"><div class="grid-cell"></div></mu-col>
  </mu-row>
  <mu-row gutter>
    <mu-col span="3" offset="3"><div class="grid-cell"></div></mu-col>
    <mu-col span="3" offset="3"><div class="grid-cell"></div></mu-col>
  </mu-row>
  <mu-row gutter>
    <mu-col span="6" offset="3"><div class="grid-cell"></div></mu-col>
  </mu-row>
</mu-container>
<style lang="less">
.demo-container {
  .row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-cell {
    border-radius: 4px;
    height: 36px;
    background: rgba(255, 255, 255, 0.8);
  }
}
.demo-container.is-stripe .col:nth-child(2n) .grid-cell{
  background: rgba(0, 0, 0, 0.54);
}
</style>
```
:::

## Responsive layout

Presets four response sizes: sm, md, lg, and xl.

:::demo
```html
<mu-container class="demo-container is-stripe">
<mu-row gutter>
  <mu-col span="8" sm="6" md="4" lg="3" xl="1"><div class="grid-cell"></div></mu-col>
  <mu-col span="4" sm="6" md="8" lg="9" xl="11"><div class="grid-cell"></div></mu-col>
  <mu-col span="4" sm="6" md="8" lg="9" xl="11"><div class="grid-cell"></div></mu-col>
  <mu-col span="8" sm="6" md="4" lg="3" xl="1"><div class="grid-cell"></div></mu-col>
</mu-row>
</mu-container>
```
:::

## Container Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| fluid | whether it is a fluid layout, the width of the container will not be changed after the setting, and the constant is 100% | Boolean | — | false |

## Row Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| tag | the DOM tag name after rendering | String | — | div |
| gutter | whether is a gap | Boolean | — | false |
| wrap | specify whether the flex element single-line display or multiline display | String | wrap/nowrap/wrap-reverse | nowrap |
| fill | whether this flex element fills the remaining space, set to true, then `flex: 1 1 auto`  | Boolean | — | false |
| justify-content | define the flex element alignment for the spindle | String | start/center/end/between/around | start |
| align-items | define the flex element alignment on the current line in the direction of the side axis | String | start/center/end/baseline/stretch | start |
| align-content | define how the browser allocates space around an flexible box item on the side axis of a container when it is a property of a flex box container. | String | start/center/end/between/around/stretch | — |
| align-self | Aligns the flex elements in the current flex line and overwrites the align-items values. Align-self is ignored if the side axis orientation of any flex element is set to auto margin value. | String | auto/start/center/end/baseline/stretch | — |

## Col Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| tag | the DOM tag name after rendering | String | — | div |
| align-self | Aligns the flex elements in the current flex line and overwrites the align-items values. Align-self is ignored if the side axis orientation of any flex element is set to auto margin value. | String | auto/start/center/end/baseline/stretch | — |
| fill | whether this flex element fills the remaining space, set to true, then `flex: 1 1 auto`  | Boolean | — | false |
| span | number of grids occupied by grid | Number/String | — | — |
| sm | `≥576px` number of response grids | Number/String | — | — |
| md | `≥768px` number of response grids | Number/String | — | — |
| lg | `≥992px` number of response grids | Number/String | — | — |
| xl | `≥1200px` number of response grids | Number/String | — | — |
| order | specify the order in which scalable items in an flexible container are laid out in the layout. | Number/String | — | — |
| offset | number of grids to the left of the grid | Number/String | — | — |


<style lang="less">
.demo-container {
  .row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-cell {
    border-radius: 4px;
    height: 36px;
    background: rgba(255, 255, 255, 0.8);
  }
}
.demo-container.is-stripe .col:nth-child(2n) .grid-cell{
  background: rgba(0, 0, 0, 0.54);
}
</style>
