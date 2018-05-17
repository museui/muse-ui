# 进度条

`mu-linear-progress` 和 `mu-circular-progress` 用于向用户显示数据加载进度。

## 示例

:::demo
```html
<mu-container>
  <mu-flex class="demo-linear-progress">
    <mu-linear-progress></mu-linear-progress>
  </mu-flex>
  <mu-flex class="demo-linear-progress">
    <mu-linear-progress color="secondary"></mu-linear-progress>
  </mu-flex>
  <mu-flex class="demo-linear-progress">
    <mu-linear-progress :value="linear" mode="determinate" color="green"></mu-linear-progress>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      linear: 10
    }
  },
  created () {
    this.timer = setInterval(() => {
      this.linear += 10;
      if (this.linear > 100) this.linear = 0;
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) clearInterval(this.timer);
  }
}
</script>

<style>
.demo-linear-progress {
  margin: 16px 0;
}
</style>
```
:::

## 不同的色彩和大小

:::demo
```html
<mu-container>
  <mu-flex class="demo-linear-progress">
    <mu-linear-progress mode="determinate" :value="30"></mu-linear-progress>
  </mu-flex>
  <mu-flex class="demo-linear-progress">
    <mu-linear-progress mode="determinate" :value="60" :size="10" color="secondary"></mu-linear-progress>
  </mu-flex>
  <mu-flex class="demo-linear-progress">
    <mu-linear-progress mode="determinate" :value="90"  :size="15" color="green"></mu-linear-progress>
  </mu-flex>
</mu-container>
<style>
.demo-linear-progress {
  margin: 16px 0;
}
</style>
```
:::

## 环形进度条

:::demo
```html
<mu-circular-progress class="demo-circular-progress" :size="36"></mu-circular-progress>
<mu-circular-progress class="demo-circular-progress" color="secondary" :stroke-width="5" :size="48"></mu-circular-progress>
<mu-circular-progress class="demo-circular-progress" color="warning" :stroke-width="7" :size="56"></mu-circular-progress>
```
:::

## 定值圆环

:::demo
```html
<mu-circular-progress class="demo-circular-progress" mode="determinate" :value="40" :size="56"></mu-circular-progress>
<mu-circular-progress class="demo-circular-progress" mode="determinate" :value="60" color="secondary" :stroke-width="5" :size="72"></mu-circular-progress>
<mu-circular-progress class="demo-circular-progress" mode="determinate" :value="80" color="warning" :stroke-width="7" :size="96"></mu-circular-progress>
```
:::

## Linear Progress Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| mode | 显示模式， indeterminate 不确定进度模式，这时 value、min、max 无效, determinate 需要通过改变value值来改变进度显示 | String | indeterminate/determinate | indeterminate |
| max | 最大值 | Number | — | 100 |
| min | 最小值 | Number | — | 0 |
| value | 进度显示值 | Number | — | — |
| size | 进度条高度 | Number | — | — |
| color | 颜色 | String | — | — |

## Circular Progress Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| mode | 显示模式， indeterminate 不确定进度模式，这时 value、min、max 无效, determinate 需要通过改变value值来改变进度显示 | String | indeterminate/determinate | indeterminate |
| max | 最大值 | Number | — | 100 |
| min | 最小值 | Number | — | 0 |
| value | 进度显示值 | Number | — | — |
| size | 圆环的尺寸 | Number | — | — |
| stroke-width | 圆环的宽度 | Number | — | — |
| color | 颜色 | String | — | — |

<script>
export default {
  data () {
    return {
      linear: 10
    }
  },
  created () {
    this.timer = setInterval(() => {
      this.linear += 10;
      if (this.linear > 100) this.linear = 0;
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) clearInterval(this.timer);
  }
}
</script>

<style>
.demo-linear-progress {
  margin: 16px 0;
}
.demo-circular-progress {
  margin: 0 16px;
}
</style>
