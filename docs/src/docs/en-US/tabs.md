# 选项卡

`mu-tabs` 使在不同的视图和功能间探索和切换以及浏览不同类别的数据集合起来变得简单。

## 示例

:::demo
```html
<mu-container>
  <mu-tabs :value.sync="active">
    <mu-tab>TAB ITEM 1</mu-tab>
    <mu-tab>TAB ITEM 2</mu-tab>
    <mu-tab>TAB ITEM 3</mu-tab>
  </mu-tabs>
  <div class="demo-text" v-if="active === 0">
    <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
  </div>
  <div class="demo-text" v-if="active === 1">
    <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
    <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
    <p>“那么就去地狱找到你，我绝对不逃！”</p>
    <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
  </div>
  <div class="demo-text" v-if="active === 2">
    <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
    <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
    <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
    <p>“也许吧，未来……给你了。”</p>
  </div>
</mu-container>
<script>
export default {
  data () {
    return {
      active: 0
    };
  }
}
</script>
<style lang="less">
.demo-text {
  padding: 16px;
  background: #fff;
  p {
    margin: 8px 0;
  }
}
</style>

```
:::

## 居中

:::demo
```html
<mu-container>
  <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
    <mu-tab>TAB ITEM 1</mu-tab>
    <mu-tab>TAB ITEM 2</mu-tab>
    <mu-tab>TAB ITEM 3</mu-tab>
  </mu-tabs>
  <div class="demo-text" v-if="active1 === 0">
    <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
  </div>
  <div class="demo-text" v-if="active1 === 1">
    <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
    <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
    <p>“那么就去地狱找到你，我绝对不逃！”</p>
    <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
  </div>
  <div class="demo-text" v-if="active1 === 2">
    <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
    <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
    <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
    <p>“也许吧，未来……给你了。”</p>
  </div>
</mu-container>
<script>
export default {
  data () {
    return {
      active1: 0
    };
  }
}
</script>
<style lang="less">
.demo-text {
  padding: 16px;
  background: #fff;
  p {
    margin: 8px 0;
  }
}
</style>

```
:::

## 全宽

:::demo
```html
<mu-container>
  <mu-tabs :value.sync="active2" color="green" indicator-color="yellow" full-width>
    <mu-tab>TAB ITEM 1</mu-tab>
    <mu-tab>TAB ITEM 2</mu-tab>
    <mu-tab>TAB ITEM 3</mu-tab>
  </mu-tabs>
  <div class="demo-text" v-if="active2 === 0">
    <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
  </div>
  <div class="demo-text" v-if="active2 === 1">
    <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
    <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
    <p>“那么就去地狱找到你，我绝对不逃！”</p>
    <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
  </div>
  <div class="demo-text" v-if="active2 === 2">
    <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
    <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
    <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
    <p>“也许吧，未来……给你了。”</p>
  </div>
</mu-container>
<script>
export default {
  data () {
    return {
      active2: 0
    };
  }
}
</script>
<style lang="less">
.demo-text {
  padding: 16px;
  background: #fff;
  p {
    margin: 8px 0;
  }
}
</style>

```
:::


## 图标

:::demo
```html
<mu-container>
  <mu-tabs :value.sync="active3" center color="teal">
    <mu-tab>
      <mu-icon value="phone"></mu-icon>
      RECENTS
    </mu-tab>
    <mu-tab>
      <mu-icon value="favorite"></mu-icon>
      FAVORITES
    </mu-tab>
    <mu-tab>
      <mu-icon value="person_pin"></mu-icon>
      NEARBY
    </mu-tab>
  </mu-tabs>
  <div class="demo-text" v-if="active3 === 0">
    <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
  </div>
  <div class="demo-text" v-if="active3 === 1">
    <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
    <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
    <p>“那么就去地狱找到你，我绝对不逃！”</p>
    <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
  </div>
  <div class="demo-text" v-if="active3 === 2">
    <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
    <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
    <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
    <p>“也许吧，未来……给你了。”</p>
  </div>
</mu-container>
<script>
export default {
  data () {
    return {
      active3: 0
    };
  }
}
</script>
<style lang="less">
.demo-text {
  padding: 16px;
  background: #fff;
  p {
    margin: 8px 0;
  }
}
</style>

```
:::



## Tabs Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| color | 颜色 | String | — | — |
| indicator-color | 底部高亮线颜色 | String | — | — |
| inverse | 是否启动反色模式，将更改组件的样式 | Boolean | — | — |
| full-width | mu-tab 是否自动适应父元素宽度 | Boolean | — | — |
| center | mu-tab 是否居中显示 | Boolean | — | — |
| value | 用于控制 mu-tab 激活状态 | — | — | 0 |

## Tabs Events

| 参数 | 介绍 | 回调参数 |
|------|------|-------|
| change | 当 `mu-tab` 被点击时触发事件 | (value) |

## Tab Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| disabled | 是否禁用 | Boolean | — | false |
| value | 用于控制是否激活，默认是该组件的下标值 | — | — | — |
| ripple | 是否有波纹效果 | Boolean | — | true |
| href | 相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签 | String | — | — |
| to | 表示目标路由的链接。设置之后组件会被渲染成`router-link`, 当被点击后，内部会立刻把 `to` 的值传到 `router.push()`，所以这个值可以是一个字符串或者是描述目标位置的对象。 | String/Object | - | - |
| tag | 有时候想要 `<router-link>` 渲染成某种标签，例如 `<li>`。 于是我们使用 `tag prop` 类指定何种标签，同样它还是会监听点击，触发导航。 | String |  - | - |
| active-class | 设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 `linkActiveClass` 来全局配置。 | String |  - | - |
| event | 声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组 | String/Array | — | click |
| exact | "是否激活" 默认类名的依据是 **inclusive match** （全包含匹配）。 举个例子，如果当前的路径是 `/a` 开头的，那么 `<router-link to="/a">` 也会被设置 CSS 类名。| Boolean | — | — |
| exact-active-class | 配置当链接被精确匹配的时候应该激活的 class。注意默认值也是可以通过路由构造函数选项 linkExactActiveClass 进行全局配置的。 | String | — | router-link-exact-active |
| append | 设置 `append` 属性后，则在当前（相对）路径前添加基路径。例如，我们从 `/a` 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b | Boolean | — | false |
| replace | 设置 `replace` 属性的话，当点击时，会调用 `router.replace()` 而不是 `router.push()`，于是导航后不会留下 history 记录。 | Boolean | — | false |

<script>
export default {
  data () {
    return {
      active: 0,
      active1: 0,
      active2: 0,
      active3: 0
    };
  }
}
</script>
<style lang="less">
.demo-text {
  padding: 16px;
  background: #fff;
  p {
    margin: 8px 0;
  }
}
</style>
