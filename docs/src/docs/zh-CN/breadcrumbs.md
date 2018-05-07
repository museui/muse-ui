# 面包屑导航

`mu-breadcrumbs` 组件是一个页面辅助导航器。它可以使用图标或文字符作为分隔符。

## 示例

默认情况下使用文本分隔符，通过设定 `divider` 属性改变。

:::demo
```html
<mu-container>
  <mu-breadcrumbs>
    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
  </mu-breadcrumbs>
  <mu-breadcrumbs divider="—">
    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
  </mu-breadcrumbs>
</mu-container>
<script>
export default {
  data () {
    return {
      items: [
        {
          text: 'Dashboard',
          disabled: false
        },
        {
          text: 'Link 1',
          disabled: false
        },
        {
          text: 'Link 2',
          disabled: true
        }
      ]
    }
  }
};
</script>
```
:::

## 图标分隔符

通过 `divider` slot 定制不同的分隔符。

:::demo
```html
<mu-container>
  <mu-breadcrumbs>
    <mu-icon value="forward" slot="divider"></mu-icon>
    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
  </mu-breadcrumbs>
  <mu-breadcrumbs divider="—">
    <mu-icon value="chevron_right" slot="divider"></mu-icon>
    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
  </mu-breadcrumbs>
</mu-container>
<script>
export default {
  data () {
    return {
      items: [
        {
          text: 'Dashboard',
          disabled: false
        },
        {
          text: 'Link 1',
          disabled: false
        },
        {
          text: 'Link 2',
          disabled: true
        }
      ]
    }
  }
};
</script>
```
:::

## Breadcrumbs Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| divider | 分隔符  | String | — | '/' |

## Breadcrumbs Slots

| 名称 | 介绍 |
|------|------|
| divider | 分隔符插槽，设置之后会覆盖 `divider` 属性. |
| default | — |

## Breadcrumbs Item Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| disabled | 是否禁用此导航，一般用于面包屑导航的最后一个 | Boolean | — | false |
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
      items: [
        {
          text: 'Dashboard',
          disabled: false
        },
        {
          text: 'Link 1',
          disabled: false
        },
        {
          text: 'Link 2',
          disabled: true
        }
      ]
    }
  }
}
</script>
