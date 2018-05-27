# 时间选择器

`mu-time-picker` 用于时间选择

:::demo
```html
<mu-container>
  <mu-flex>
    <mu-checkbox class="demo-picker-form" v-model="landscape" label="landscape"></mu-checkbox>
    <mu-radio class="demo-picker-form" v-model="type" value="ampm" label="ampm"></mu-radio>
    <mu-radio class="demo-picker-form" v-model="type" value="24hr" label="24hr"></mu-radio>
  </mu-flex>
  <mu-flex justify-content="between" align-items="end" wrap="wrap">
    <mu-paper :z-depth="1">
      <mu-time-picker :time.sync="time" :format="type" :landscape="landscape"></mu-time-picker>
    </mu-paper>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      time: undefined,
      landscape: false,
      type: 'ampm'
    };
  }
}
</script>
<style>
.demo-picker-form {
  margin: 0 16px 16px;
}
</style>
```
:::

## Time Picker

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| color | 时间选择器颜色 | String | — | — |
| time | 选择的时间，支持 `.sync` 修饰符 | Date | — | new Date() |
| format | 日期模式 | String | ampm/24hr | ampm |
| no-display | 是否不存在时间显示部分  | Boolean | — | false |
| landscape | 是否横屏显示 | Function | — | — |

## Date Picker Events

| 名称 | 介绍 | 回调参数 |
|------|-----|--------|
| change | 当选择日期改变时触发事件 | (time, mode, finished) |


<script>
export default {
  data () {
    return {
      time: undefined,
      landscape: false,
      type: 'ampm'
    };
  }
}
</script>

<style>
.demo-picker-form {
  margin: 0 16px 16px;
}
</style>
