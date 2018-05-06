# 底部导航

`mu-bottom-navigation` 用于底部的导航组件。

## 示例

:::demo
```html
<mu-container>
  <mu-bottom-nav :value.sync="bottomNav" >
    <mu-bottom-nav-item value="recents" title="Recents" icon="restore"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="favorites" title="Favorites" icon="favorite"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="nearby" title="Nearby" icon="location_on"></mu-bottom-nav-item>
  </mu-bottom-nav>
</mu-container>
<script>
export default {
  data () {
    return {
      bottomNav: 'recents'
    }
  }
}
</script>
```
:::

## Shift Mode

:::demo
```html
<mu-container style="max-width: 400px; width:100%;">
  <mu-bottom-nav :value.sync="movies" shift>
    <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="music" title="Music" icon="music_note"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="books" title="Books" icon="books"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"></mu-bottom-nav-item>
  </mu-bottom-nav>
</mu-container>
<script>
export default {
  data () {
    return {
      shift: 'movies'
    }
  }
}
</script>
```
:::

## Bottom Nav Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| shift | 是否使用 shift 模式 | Boolean | — | false |
| value | 配合 bottom-nav-item 使用， 可使用 `.sync` 修饰符进行双向绑定 | — | — | — |

## Bottom Nav Events

| 名称 | 介绍 | 回调参数|
|------|------|------|
| change | 当被激活的value 改变时触发 | (value) |

## Bottom Nav Item Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| icon | 图标 | String | — | — |
| title | 显示的标题 | String | — | — |
| value | 当value 与父组件的 value值相等时，会变成选中状态 | — | — | — |
| ripple | 是否开启波纹效果 | Boolean | — | true |
| href | 相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签 | String | — | — |
| to | 表示目标路由的链接。设置之后组件会被渲染成`router-link`, 当被点击后，内部会立刻把 `to` 的值传到 `router.push()`，所以这个值可以是一个字符串或者是描述目标位置的对象。 | String/Object | - | - |
| tag | 有时候想要 `<router-link>` 渲染成某种标签，例如 `<li>`。 于是我们使用 `tag prop` 类指定何种标签，同样它还是会监听点击，触发导航。 | String |  - | - |
| activeClass | 设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 `linkActiveClass` 来全局配置。 | String |  - | - |
| event | 声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组 | String/Array | — | click |
| exact | "是否激活" 默认类名的依据是 **inclusive match** （全包含匹配）。 举个例子，如果当前的路径是 `/a` 开头的，那么 `<router-link to="/a">` 也会被设置 CSS 类名。| Boolean | — | — |
| exactActiveClass | 配置当链接被精确匹配的时候应该激活的 class。注意默认值也是可以通过路由构造函数选项 linkExactActiveClass 进行全局配置的。 | String | — | router-link-exact-active |
| append | 设置 `append` 属性后，则在当前（相对）路径前添加基路径。例如，我们从 `/a` 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b | Boolean | — | false |
| replace | 设置 `replace` 属性的话，当点击时，会调用 `router.replace()` 而不是 `router.push()`，于是导航后不会留下 history 记录。 | Boolean | — | false |

<script>
export default {
  data () {
    return {
      bottomNav: 'recents',
      shift: 'movies'
    }
  }
}
</script>
