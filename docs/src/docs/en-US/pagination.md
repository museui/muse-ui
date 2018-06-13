# 分页

`mu-pagination` 组件用于分隔数据集。

## 示例

:::demo
```html
<mu-container>
  <mu-flex justify-content="center">
    <mu-pagination :total="1000" :current.sync="current"></mu-pagination>
  </mu-flex>
  <mu-flex justify-content="center" style="margin: 32px 0;">
    <mu-pagination raised :total="1000" :current.sync="current"></mu-pagination>
  </mu-flex>
  <mu-flex justify-content="center">
    <mu-pagination raised circle :total="1000" :current.sync="current"></mu-pagination>
  </mu-flex>
</mu-container>
<script>
export default {
    data () {
        return {
            current: 1
        }
    }
}
</script>
```
:::


## Pagination Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| total | 总条目数 | Number | — | — |
| current | 当前页数, 支持 `.sync` 修饰符 | Number | — | — |
| page-size | 每页显示条目个数 | Number  | — | 10 |
| page-count | 页码按钮的数量，当总页数超过该值时会折叠 | Number | 大于等于 5 且小于等于 21 的奇数 | 7 |

## Pagination Events

| 名称 | 介绍 | 回调参数 |
|------|------|-------|
| change | 当前页更改时触发事件 | — |

<script>
export default {
    data () {
        return {
            current: 1
        }
    }
}
</script>
