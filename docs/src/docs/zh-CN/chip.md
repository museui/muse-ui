# 薄片

`mu-chip` 是一种小块的用来呈现复杂实体的块，比如说日历的事件或联系人。它可以包含一张图片，一个短字符串(必要时可能被截取的字符串)，或者是其它的一些与实体对象有关的简洁的信息。

## 示例

:::demo
```html
<mu-container class="demo-chip-wrapper">
  <mu-chip class="demo-chip">
    default chip
  </mu-chip>
  <mu-chip class="demo-chip" @delete="handleClose" delete>
    delete chip
  </mu-chip>
  <mu-chip class="demo-chip" color="red">
    <mu-avatar :size="32">
      <img src="../../assets/images/uicon.jpg">
    </mu-avatar>
    avatar chip
  </mu-chip>
  <mu-chip class="demo-chip" color="green" @delete="handleClose" delete>
    <mu-avatar :size="32">
      <img src="../../assets/images/uicon.jpg">
    </mu-avatar>
    avatar delete chip
  </mu-chip>
  <mu-chip class="demo-chip" color="teal" @delete="handleClose" delete>
    <mu-avatar :size="32" color="blue">
      <mu-icon value="face"></mu-icon>
    </mu-avatar>
    icon avatar chip
  </mu-chip>

  <mu-chip class="demo-chip" color="blue300" @delete="handleClose" delete>
    <mu-avatar text-color="blue300" color="indigo900" :size="32">MB</mu-avatar> custom chip
  </mu-chip>
</mu-container>
<script>
export default {
  methods: {
    handleClose () {
      window.alert('你点击了删除按钮')
    }
  }
}
</script>
<style lang="less">
.demo-chip-wrapper {
  text-align: center;
}
.demo-chip {
  margin: 8px;
  vertical-align: middle;
}
</style>
```
:::

## Chips Array

:::demo
```html
<mu-container  class="demo-chip-wrapper">
  <mu-chip class="demo-chip" v-for="chip, index in chips" :key="chip" :color="chip" @delete="remove(index)" delete>{{chip}}</mu-chip>
  <mu-button color="primary" v-if="chips.length === 0" @click="reset">reset</mu-button>
</mu-container>
<script>
const initChips = ['primary', 'secondary', 'success', 'warning', 'info', 'error'];
export default {
  data () {
    return {
      chips: [...initChips]
    }
  },
  methods: {
    remove (index) {
      this.chips.splice(index, 1);
    },
    reset () {
      this.chips = [...initChips];
    }
  }
}
</script>
<style lang="less">
.demo-chip-wrapper {
  text-align: center;
}
.demo-chip {
  margin: 8px;
  vertical-align: middle;
}
</style>
```
:::


## Chip Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| color | chip 的颜色 | String | — | — |
| text-color | chip 文字颜色 | String | — | — |
| selected | 已选中状态 | Boolean | — | false |
| delete | 显示删除的图标 | Boolean | — | false |

## Chip Events

| 名称 | 介绍 | 回调参数 |
|------|------|-------|
| delete | 点击删除图标时触发事件 | — |

<script>
const initChips = ['primary', 'secondary', 'success', 'warning', 'info', 'error'];
export default {
  data () {
    return {
      chips: [...initChips]
    }
  },
  methods: {
    handleClose () {
      window.alert('你点击了删除按钮')
    },
    remove (index) {
      this.chips.splice(index, 1);
    },
    reset () {
      this.chips = [...initChips];
    }
  }
}
</script>
<style lang="less">
.demo-chip-wrapper {
  text-align: center;
}
.demo-chip {
  margin: 8px;
  vertical-align: middle;
}
</style>
