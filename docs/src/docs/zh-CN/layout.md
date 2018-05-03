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
# 布局

Muse-UI 提供基于 [Flexible Box](https://developer.mozilla.org/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) 的布局组件 `mu-flex`。

## 示例

:::demo
```html
<div style="width: 100%; background: #fff; padding: 8px;">
  <mu-flex class="flex-wrapper" justify-content="start">
    <mu-flex class="flex-demo" justify-content="center" >1</mu-flex>
  </mu-flex>
  <mu-flex class="flex-wrapper" justify-content="center">
    <mu-flex class="flex-demo" justify-content="center" >1</mu-flex>
  </mu-flex>
  <mu-flex class="flex-wrapper" justify-content="end">
    <mu-flex class="flex-demo" justify-content="center" >1</mu-flex>
  </mu-flex>
  <mu-flex class="flex-wrapper" align-items="center">
    <mu-flex class="flex-demo" justify-content="center" fill>1</mu-flex>
    <mu-flex class="flex-demo" justify-content="center" fill>2</mu-flex>
    <mu-flex class="flex-demo" justify-content="center" fill>3</mu-flex>
  </mu-flex>
</div>
```
:::

## Flex Props
| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| tag | 渲染之后的 dom 标签名称 | String | - | div |
| inline | 是否是`inline-flex` | Boolean | - | false |
| direction | 指定了内部元素是如何在 flex 容器中布局的 | String | row/column/row-reverse/column-reverse | row |
| wrap | 指定 flex 元素单行显示还是多行显示 | String | wrap/nowrap/wrap-reverse | nowrap |
| fill | 此 flex 元素是否填充满剩余空间， 设置为 true, 则 `flex: 1 1 auto`  | Boolean | - | false |
| justify-content | 定义了主轴的 flex 元素对齐方式 | String | start/center/end/between/around | start |
| align-items | 定义了侧轴方向上将当前行上的 flex 元素对齐方式 | String | start/center/end/baseline/stretch | start |
| align-content | 定义了当作为一个 flex box 容器的属性时，浏览器如何在容器的侧轴围绕弹性盒子项目分配空间。 | String | start/center/end/between/around/stretch | - |
| align-self | 对齐当前 flex 行中的 flex 元素，并覆盖 align-items 的值. 如果任何 flex 元素的侧轴方向 margin 值设置为 auto，则会忽略 align-self。 | String | auto/start/center/end/baseline/stretch | - |
