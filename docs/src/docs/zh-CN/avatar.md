# 头像

`mu-avatar` 用于显示用户头像、简短的问题和图标。

## 示例

设置 `size` 属性，可以改变 `mu-avatar` 的大小

:::demo
```html
<mu-container style="padding: 16px 0;">
  <mu-flex>
    <mu-flex>
      改变大小：
    </mu-flex>
    <mu-flex fill style="padding: 0 16px;">
      <mu-slider v-model="size" :min="36" :step="1" :max="200"/>
    </mu-flex>
  </mu-flex>
  <mu-row justify-content="center">
    <mu-avatar :size="size">
      <img src="../../assets/images/uicon.jpg">
    </mu-avatar>
  </mu-row>
</mu-container>
<script>
export default {
  data () {
    return {
      size: 56
    }
  }
}
</script>
```
:::

## 显示文字或者图标

:::demo
```html
<mu-container>
  <mu-flex justify-content="around" >
    <mu-avatar color="indigo">
      <mu-icon value="account_circle"></mu-icon>
    </mu-avatar>
    <mu-avatar>
      <img src="../../assets/images/uicon.jpg">
    </mu-avatar>
    <mu-avatar text-color="orange200" color="pink400">
      <mu-icon value="folder"></mu-icon>
    </mu-avatar>
    <mu-avatar color="teal">
      K
    </mu-avatar>
      <mu-avatar color="red">
      L
    </mu-avatar>
    <mu-avatar text-color="deepOrange300" color="purple500">
      MU
    </mu-avatar>
  </mu-flex>
</mu-container>
```
:::

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| color | 组件的背景色 | String | — | — |
| text-color| 文字的颜色 | String | — | — |
| size | 组件大小 | Number/String | — | 48 |


<script>
export default {
  data () {
    return {
      size: 56
    }
  }
}
</script>

