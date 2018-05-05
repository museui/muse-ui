# 栅格布局

Muse-UI 使用 [Bootstrap 4.0](https://getbootstrap.com/docs/4.0/layout/grid/) 的栅格系统，以移动端优先原则，基于 flex box 布局设计的栅格布局。

## 基础布局

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

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

## 间隔

每一个 `col` 存在间隔，通过设置 `gutter` 实现。

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

## 偏移

通过设置 `col` 组件的 `offset` 属性可以指定偏移的格数

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

## 响应式布局

预设了四个响应尺寸：sm、md、lg 和 xl

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

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| fluid | 是否是流体布局，设置之后 container 的 width 不会响应式改变，恒为 100% | Boolean | — | false |

## Row Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| tag | 渲染之后的 dom 标签名称 | String | — | div |
| gutter | 是否有间隔 | Boolean | — | false |
| wrap | 指定 flex 元素单行显示还是多行显示 | String | wrap/nowrap/wrap-reverse | nowrap |
| fill | 此 flex 元素是否填充满剩余空间， 设置为 true, 则 `flex: 1 1 auto`  | Boolean | — | false |
| justify-content | 定义了主轴的 flex 元素对齐方式 | String | start/center/end/between/around | start |
| align-items | 定义了侧轴方向上将当前行上的 flex 元素对齐方式 | String | start/center/end/baseline/stretch | start |
| align-content | 定义了当作为一个 flex box 容器的属性时，浏览器如何在容器的侧轴围绕弹性盒子项目分配空间。 | String | start/center/end/between/around/stretch | — |
| align-self | 对齐当前 flex 行中的 flex 元素，并覆盖 align-items 的值. 如果任何 flex 元素的侧轴方向 margin 值设置为 auto，则会忽略 align-self。 | String | auto/start/center/end/baseline/stretch | — |

## Col Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| tag | 渲染之后的 dom 标签名称 | String | — | div |
| align-self | 对齐当前 flex 行中的 flex 元素，并覆盖 align-items 的值. 如果任何 flex 元素的侧轴方向 margin 值设置为 auto，则会忽略 align-self。 | String | auto/start/center/end/baseline/stretch | — |
| fill | 此 flex 元素是否填充满剩余空间， 设置为 true, 则 `flex: 1 1 auto`  | Boolean | — | false |
| span | 栅格占据的格数 | Number/String | — | — |
| sm | `≥576px` 响应式栅格数 | Number/String | — | — |
| md | `≥768px` 响应式栅格数 | Number/String | — | — |
| lg | `≥992px` 响应式栅格数 | Number/String | — | — |
| xl | `≥1200px` 响应式栅格数 | Number/String | — | — |
| order | 规定了弹性容器中的可伸缩项目在布局时的顺序。 | Number/String | — | — |
| offset | 栅格左侧的间隔格数 | Number/String | — | — |


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
