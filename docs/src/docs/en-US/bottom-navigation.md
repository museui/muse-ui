# Button navigation

`Mu-bottom-navigation` is used for the bottom navigation component.

## Example

:::demo
```html
<mu-container>
  <mu-bottom-nav>
    <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
  </mu-bottom-nav>
</mu-container>
:::

## Shift Mode

:::demo
```html
<mu-container style="max-width: 400px; width:100%;">
  <mu-bottom-nav :value.sync="shift" shift>
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

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| color | navigation color | String | — | — |
| shift | whether to use Shift mode | Boolean | — | false |
| value | use with bottom-nav-item , you can use the `.sync` modifier for two-way binding | — | — | — |

## Bottom Nav Events

| Name | Description | Parameters |
|------|------|------|
| change | triggered when the activated value changes | (value) |

## Bottom Nav Item Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| icon | icon | String | — | — |
| title | display title | String | — | — |
| value | when value is equal to the value of the parent component, it becomes selected | — | — | — |
| ripple | whether ripple effects are turned on | Boolean | — | true |
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
      bottomNav: 'recents',
      shift: 'movies'
    }
  }
}
</script>
