# 提示

`mu-tooltip`  对于用户悬停在元素上时传递信息， 也可以使用 `open.sync` 控制显示。

## 示例

`mu-tooltip` 可以包裹任何元素

:::demo
```html
<mu-container>
  <mu-flex justify-content="around" align-items="center">
    <mu-tooltip content="提示信息">
      <mu-button color="primary">Tooltip</mu-button>
    </mu-tooltip>
    <mu-tooltip content="打印">
      <mu-button icon>
        <mu-icon value="print"></mu-icon>
      </mu-button>
    </mu-tooltip>
    <mu-tooltip content="提示信息">
      <span>文本提示信息</span>
    </mu-tooltip>
  </mu-flex>
</mu-container>
```
:::

## 位置

:::demo
```html
<mu-container>
  <mu-flex justify-content="around" align-items="center">
    <mu-tooltip :placement="placement" content="提示信息">
      <mu-button color="primary">Tooltip</mu-button>
    </mu-tooltip>
    <mu-tooltip :placement="placement" content="打印">
      <mu-button icon>
        <mu-icon value="print"></mu-icon>
      </mu-button>
    </mu-tooltip>
    <mu-tooltip :placement="placement" content="提示信息">
      <span>文本提示信息</span>
    </mu-tooltip>
  </mu-flex>
  <p class="demo-tooltip-title">弹出位置：</p>
  <mu-row>
    <mu-col :key="p" v-for="p in placements" span="6" md="4">
      <mu-radio v-model="placement" :value="p" :label="p"></mu-radio>
    </mu-col>
  </mu-row>
</mu-container>
```
:::

## Tooltip Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| content | 显示内容，可使用 `slot="content"` 代替 | String | — | — |
| open | 是否显示 | Boolean | — | — |
| placement | Tooltip 的出现位置 | String | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end | — |
| tooltip-class | Tooltip 样式 | String/Object/Array | — |

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
