# 纸片

`mu-paper` 是一个阴影效果的容器。

## 示例

设置 `z-depth` 调整阴影的深度。

:::demo
```html
<mu-container>
  <mu-paper class="demo-paper" :z-depth="1"></mu-paper>
  <mu-paper class="demo-paper" :z-depth="2"></mu-paper>
  <mu-paper class="demo-paper" :z-depth="3"></mu-paper>
  <mu-paper class="demo-paper" :z-depth="4"></mu-paper>
  <mu-paper class="demo-paper" :z-depth="5"></mu-paper>
</mu-container>
```
:::


## 圆形

:::demo
```html
<mu-container>
  <mu-paper class="demo-paper" circle :z-depth="1"></mu-paper>
  <mu-paper class="demo-paper" circle :z-depth="2"></mu-paper>
  <mu-paper class="demo-paper" circle :z-depth="3"></mu-paper>
  <mu-paper class="demo-paper" circle :z-depth="4"></mu-paper>
  <mu-paper class="demo-paper" circle :z-depth="5"></mu-paper>
</mu-container>
```
:::

## Paper Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| z-depth | 纸片的阴影程度 | Number | 1—6 | — |
| round | 圆角的纸片 | Boolean | — | false |
| circle | 圆形的纸片 | Boolean | — | false |

<style lang="css">
.demo-paper {
  display: inline-block;
  height: 100px;
  width: 100px;
  margin: 20px;
  text-align: center;
}
</style>
