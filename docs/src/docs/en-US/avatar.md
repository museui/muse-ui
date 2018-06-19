# Avatar

`Mu-avatar` uses to display user avatar, simple questions and icons.

## Example

Setting `size` property can change `mu-avatar`'s size.

:::demo
```html
<mu-container style="padding: 16px 0;">
  <mu-flex>
    <mu-flex>
      change size：
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

## Display text or icon

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

## Avatar Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| color | component background | String | — | — |
| text-color| font color | String | — | — |
| size | component size | Number/String | — | 48 |


<script>
export default {
  data () {
    return {
      size: 56
    }
  }
}
</script>

