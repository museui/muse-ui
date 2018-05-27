# 按钮

`mu-button` 按钮组件，可以定制不同的颜色或者图标来替换标准的 html 按钮。

## 示例

:::demo
```html
<mu-container class="button-wrapper">
  <mu-button color="primary">Primary</mu-button>
  <mu-button color="secondary">Secondary</mu-button>
  <mu-button color="success">Success</mu-button>
  <mu-button color="warning">Warning</mu-button>
  <mu-button color="info">Info</mu-button>
  <mu-button color="error">Error</mu-button>
  <mu-button disabled>disabled</mu-button>
<mu-container>
<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
  }
}
</style>
```
:::

## 扁平

用于通用功能和减少分层在屏幕上,使其更具可读性。

:::demo
```html
<mu-container class="button-wrapper">
  <mu-button flat>Normal</mu-button>
  <mu-button flat color="primary">Primary</mu-button>
  <mu-button flat color="secondary">Secondary</mu-button>
  <mu-button flat color="success">Success</mu-button>
  <mu-button flat color="warning">Warning</mu-button>
  <mu-button flat disabled>disabled</mu-button>
<mu-container>
<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
  }
}
</style>
```
:::

## 图标

图标可作为按钮的主要内容, 也可以配合文字显示。

:::demo
```html
<mu-container>
  <div class="button-wrapper">
    <mu-button icon color="primary">
      <mu-icon value="grade"></mu-icon>
    </mu-button>
    <mu-button icon color="secondary">
      <mu-icon value="android"></mu-icon>
    </mu-button>
    <mu-button icon>
      <i class="mudocs-icon-custom-github"></i>
    </mu-button>
    <mu-button icon color="red">
      <mu-icon value="thumb_up"></mu-icon>
    </mu-button>
  </div>
  <div class="button-wrapper">
    <mu-button flat color="primary">
      <mu-icon left value="grade"></mu-icon>
      Star
    </mu-button>
    <mu-button flat color="secondary">
      <mu-icon left value="android"></mu-icon>
      Android
    </mu-button>
    <mu-button flat>
      github
      <mu-icon :size="24" right value=":mudocs-icon-custom-github"></mu-icon>
    </mu-button>
    <mu-button flat color="red">
      thumb
      <mu-icon right value="thumb_up"></mu-icon>
    </mu-button>
  </div>
  <div class="button-wrapper">
    <mu-button color="primary">
      <mu-icon left value="grade"></mu-icon>
      Star
    </mu-button>
    <mu-button color="secondary">
      <mu-icon left value="android"></mu-icon>
      Android
    </mu-button>
    <mu-button>
      delete
      <mu-icon right value="delete"></mu-icon>
    </mu-button>
    <mu-button color="red">
      Send
      <mu-icon right value="send"></mu-icon>
    </mu-button>
  </div>
<mu-container>
<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
    vertical-align: top;
  }
}
</style>
```
:::

## 浮动

浮动按钮是圆形的，通常包含一个图标。

::: demo
```html
<mu-container class="button-wrapper">
  <mu-button fab small color="primary">
    <mu-icon value="grade"></mu-icon>
  </mu-button>
  <mu-button fab small color="pink">
    <mu-icon value="android"></mu-icon>
  </mu-button>
  <mu-button fab color="indigo">
    <mu-icon value="remove"></mu-icon>
  </mu-button>
  <mu-button fab color="teal">
    <mu-icon value="add"></mu-icon>
  </mu-button>
  <mu-button large fab color="red">
    <mu-icon value="edit"></mu-icon>
  </mu-button>
  <mu-button large fab color="purple">
    <mu-icon value="thumb_up"></mu-icon>
  </mu-button>
<mu-container>
  <style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
    vertical-align: middle;
  }
  a.mu-button {
    text-decoration: none;
  }
}
</style>
```
:::

## 不同的大小

按钮可以被设置不同的尺寸，`small`、`normal`、`large`。

:::demo
```html
<mu-container class="button-wrapper">
  <mu-flex justify-content="center" align-items="center">
    <mu-button small color="primary">small</mu-button>
    <mu-button color="success">normal</mu-button>
    <mu-button large color="red">large</mu-button>
  </mu-flex>
  <mu-flex justify-content="center" align-items="center">
    <mu-button fab small color="primary">
       <mu-icon value="grade"></mu-icon>
    </mu-button>
    <mu-button fab color="success">
      <mu-icon value="edit"></mu-icon>
    </mu-button>
    <mu-button fab large color="red">
      <mu-icon value="thumb_up"></mu-icon>
    </mu-button>
  </mu-flex>
</mu-container>
<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
    vertical-align: middle;
  }
  a.mu-button {
    text-decoration: none;
  }
}
</style>
```
:::

## 圆角和块状按钮

:::demo
```html
<mu-container class="button-wrapper">
  <mu-flex justify-content="center" align-items="center">
    <mu-button round color="success">Round button</mu-button>
  </mu-flex>
  <mu-flex justify-content="center" align-items="center">
    <mu-button full-width color="primary">full width button</mu-button>
  </mu-flex>
</mu-container>
<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
    vertical-align: middle;
  }
  a.mu-button {
    text-decoration: none;
  }
}
</style>
```
:::

## Button props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| color | 按钮的颜色 | String | — | - |
| textColor | 文本颜色 | String | — | — |
| ripple | 是否有波纹效果 | Boolean | — | true |
| fab | 浮动按钮 | Boolean | — | false |
| flat | 扁平按钮 | Boolean | — | false |
| icon | 图标按钮 | Boolean | — | false |
| small | 小型按钮 | Boolean | — | false |
| large | 大型按钮 | Boolean | — | false |
| round | 圆角按钮 | Boolean | — | false |
| full-width | 块状按钮 | Boolean | — | false |
| disabled | 禁用按钮 | Boolean | — | false |
| type | 按钮类型, 等同于 button 标签的 type 属性 | String | - | button |
| keyboard-focused | 键盘事件获取焦点 | Boolean | — | false |
| href | 相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签 | String | — | — |
| to | 表示目标路由的链接。设置之后组件会被渲染成`router-link`, 当被点击后，内部会立刻把 `to` 的值传到 `router.push()`，所以这个值可以是一个字符串或者是描述目标位置的对象。 | String/Object | - | - |
| tag | 有时候想要 `<router-link>` 渲染成某种标签，例如 `<li>`。 于是我们使用 `tag prop` 类指定何种标签，同样它还是会监听点击，触发导航。 | String |  - | - |
| active-class | 设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 `linkActiveClass` 来全局配置。 | String |  - | - |
| event | 声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组 | String/Array | — | click |
| exact | "是否激活" 默认类名的依据是 **inclusive match** （全包含匹配）。 举个例子，如果当前的路径是 `/a` 开头的，那么 `<router-link to="/a">` 也会被设置 CSS 类名。| Boolean | — | — |
| exact-active-class | 配置当链接被精确匹配的时候应该激活的 class。注意默认值也是可以通过路由构造函数选项 linkExactActiveClass 进行全局配置的。 | String | — | router-link-exact-active |
| append | 设置 `append` 属性后，则在当前（相对）路径前添加基路径。例如，我们从 `/a` 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b | Boolean | — | false |
| replace | 设置 `replace` 属性的话，当点击时，会调用 `router.replace()` 而不是 `router.push()`，于是导航后不会留下 history 记录。 | Boolean | — | false |

<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
    vertical-align: middle;
  }
  a.mu-button {
    text-decoration: none;
  }
}
</style>
