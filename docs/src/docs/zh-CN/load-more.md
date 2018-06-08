# 加载控件

`mu-load-more` 内置下拉加载和无限滚动功能。

## 示例

按住下拉刷新，或者滚动到底加载数据。

:::demo
```html
<mu-paper :z-depth="1" class="demo-loadmore-wrap">
  <mu-appbar color="teal">
    <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    LoadMore
    <mu-button icon slot="right" @click="refresh()">
      <mu-icon value="refresh"></mu-icon>
    </mu-button>
  </mu-appbar>
  <mu-container ref="container" class="demo-loadmore-content">
    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
      <mu-list>
        <template v-for="i in num">
          <mu-list-item>
            <mu-list-item-title>List Item {{i}}</mu-list-item-title>
          </mu-list-item>
          <mu-divider v-if=" i < num "/>
        </template>
      </mu-list>
    </mu-load-more>
  </mu-container>
</mu-paper>
<script>
export default {
  data () {
    return {
      num: 10,
      refreshing: false,
      loading: false
    }
  },
  methods: {
    refresh () {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        this.num = 10;
      }, 2000)
    },
    load () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.num += 10;
      }, 2000)
    }
  }
};
</script>

<style lang="less">
.demo-loadmore-wrap {
  width: 100%;
  max-width: 360px;
  height: 420px;
  display: flex;
  flex-direction: column;
  .mu-appbar {
    width: 100%;
  }
}
.demo-loadmore-content {
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>

```
:::

## Load More Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| refreshing | 是否正在刷新数据 | Boolean | — | false |
| loading | 是否正在加载数据 | Boolean | — | false |
| loading-text | 加载文字 | String | — | — |
| loaded-all | 数据是否已全部加载 | Boolean | — | — |

## Load More Events

| 名称  | 介绍  | 回调参数 |
|-------|------|--------|
| refresh | 需要刷新数据时触发 | — |
| load | 需要加载数据时触发 | — |



<script>
export default {
  data () {
    return {
      num: 10,
      refreshing: false,
      loading: false
    }
  },
  methods: {
    refresh () {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        this.num = 10;
      }, 2000)
    },
    load () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.num += 10;
      }, 2000)
    }
  }
};
</script>

<style lang="less">
.demo-loadmore-wrap {
  width: 100%;
  max-width: 360px;
  height: 420px;
  display: flex;
  flex-direction: column;
  .mu-appbar {
    width: 100%;
  }
}
.demo-loadmore-content {
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
