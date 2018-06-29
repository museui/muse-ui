# Breadcrumbs Navigation

The `mu-breadcrumbs` component is a page-assisted navigator. It can use icons or text characters as delimiters.

## Example

The text delimiters are used by default, and is changed by setting the `divider` property.

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

## Icon separator

Customize the different delimiters by the `divider` slot.

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

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| divider | delimiters  | String | — | '/' |

## Breadcrumbs Slots

| Name | Description |
|------|------|
| divider | delimiters slot，override the `divider` property after setting. |
| default | — |

## Breadcrumbs Item Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| disabled | whether to disable this navigation，generally used for the last one of breadcrumbs navigation | Boolean | — | false |
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
