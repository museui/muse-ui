# Tabs

The `mu-tabs` makes it easy to explore and switch between different views and functions and browse different categories of data.

## Example

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

## Centered

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

## Full width

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


## Icons

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

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| color | color | String | — | — |
| indicator-color | bottom highlight line color | String | — | — |
| inverse | whether to start the inverse mode and will changes the style of the component | Boolean | — | — |
| full-width | whether mu-tab is automatically adapt to parent element width | Boolean | — | — |
| center | whether mu-tab is centered display | Boolean | — | — |
| value | used to control mu-tab activation state | — | — | 0 |

## Tabs Events

| Attribute | Description | Parameters |
|------|------|-------|
| change | trigger when `mu-tab` clicked | (value) |

## Tab Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| disabled | whether it is disabled | Boolean | — | false |
| value | used to control whether to activate, the default is the subscript value of the component | — | — | — |
| ripple | whether there is ripple effect | Boolean | — | true |
| href | Equivalent to the href attribute of the a tag. After setting, it will be rendered as a tag. The default is to use the button tag. | String | — | — |
| to | Indicates the link to the target route. After setup, the component will be rendered as `router-link`, and when clicked, the value of `to` will be immediately passed to `router.push()`, so the value can be a string or an object that describes the target location. | String/Object | - | - |
| tag | When you want the `<router-link>` to be rendered as a tag, such as `<li>`. So we use the `tag prop` class to specify which tag, and it will still listen to clicks and trigger navigation. | String |  - | - |
| active-class | Sets the CSS class name to use when the link is activated. The default value can be configured globally via the construction option `linkactiveclass` of the route. | String |  - | - |
| event | declares an event that can be used to trigger a navigation. Can be a string or an array that contains a string | String/Array | — | click |
| exact |  The "Activate" default class name is based on the **inclusive match** (all contains matches). For example, if the current path starts with `/a`, then `<router-link to=""/a"">` CSS class name will also be set. | Boolean | — | — |
| exact-active-class | Configure the class that should be activated when the link is exactly matched. Note The default values can also be configured globally through the routing constructor option Linkexactactiveclass. | String | — | router-link-exact-active |
| append | When the `append` property is set, the base path is added before the current (relative) path. For example, we navigate from `/a` to a relative path b, if no append is configured, the path is `/b`, and if it is `/a/b` | Boolean | — | false |
| replace | Setting the `replace` property, when clicked, will call `router.replace()` instead of `router.push()`, so the navigation will not leave the history record. | Boolean | — | false |

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
