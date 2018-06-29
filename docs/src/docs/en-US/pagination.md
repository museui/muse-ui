# Pagination

The `mu-pagination` is used to separate data sets.

## Example

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

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| total | the number of total entries | Number | — | — |
| current | current page, support for `.sync` modifiers | Number | — | — |
| page-size | each page shows the number of entries | Number  | — | 10 |
| page-count | the number of page buttons, which will collapse when the total number of pages exceeds this value
 | Number | an odd number is greater than or equal to 5 and less than or equal to 21 | 7 |

## Pagination Events

| Name | Description | Parameters |
|------|------|-------|
| change | trigger event when current page changes | — |

<script>
export default {
    data () {
        return {
            current: 1
        }
    }
}
</script>
