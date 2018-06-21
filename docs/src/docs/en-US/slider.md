# 滑块

`mu-slider` 用于在一个固定区间内进行选择。

## 示例

:::demo
```html
<mu-container>
  <mu-slider class="demo-slider" v-model="normal.value1"></mu-slider>
  <mu-slider class="demo-slider" :step="10" v-model="normal.value2"></mu-slider>
  <mu-slider class="demo-slider" disabled v-model="normal.value3"></mu-slider>
</mu-container>
```
:::

## 色彩

可以使用 `color` 、`track-color` 和 `thumb-color` 属性来设置滑块的颜色。

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

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| value | 当前值,支持 `v-model` 指令 | Number | — | — |
| max | 最大值 | Number | — | 100 |
| min | 最小值 | Number | — | 0 |
| step | 步长	| Number | — | 0.1 |
| color | 颜色 | String | — | — |
| thumb-color | 拇指颜色 | String | — | — |
| track-color | 填充色彩 | String | — | — |
| disabled | 是否禁用 | Boolean | — | — |
| display-value | 是否显示当前值 | Boolean | — | — |

## Slider Events

| 名称 | 介绍 | 参数 |
|-----|------|-----|
| change | 值改变时触发 | (value) |

## Slider change

| 名称 | 介绍 | 回调参数 |
|------|------|--------|
| change | 拖动滑块改变值时触发事件 | (value) |

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
