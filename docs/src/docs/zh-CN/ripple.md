# 波纹组件

`mu-ripple` 用于自定义一些元素的点击波纹效果；

## 示例

:::demo
```html
<mu-ripple class="mu-ripple-demo demo-1">
  Click Me
</mu-ripple>
<mu-ripple class="mu-ripple-demo demo-2" color="yellow" :opacity="0.7">
  Click Me
</mu-ripple>
<mu-ripple class="mu-ripple-demo demo-3" color="red" :opacity="0.5">
  Click Me
</mu-ripple>
```
:::


## 按需引入

工具类的组件在 `lib/Helpers` 目录下

```javascript
import Vue from 'vue';
import Helpers from 'muse-ui/lib/Helpers';

Vue.use(Helpers);
```

## Ripple Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| tag  | 渲染元素标签名 | String | — | div |
| color | 波纹颜色 | String | — | — |
| opacity | 波纹的透明度 | Number | 0-1 | 0.3 |

<style lang="less">
.mu-ripple-demo {
  position: relative;
  width: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  background-color: #fff;
  border-radius: 4px;
  &.demo-1 {
    color: #2196f3;
    border: 1px solid #2196f3;
  }
  &.demo-2 {
    background-color: #2196f3;
    color: #fff;
  }
  &.demo-3 {
    background-color: #4caf50;
    color: #fff;
  }
}

</style>
