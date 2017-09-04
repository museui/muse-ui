export default {
  to: 'The link that will ill be rendered in the target route. When clicked, the value of the to prop will be passed to `router.push()` internally, so the value can be either a string or a location descriptor object.',
  tag: 'Sometimes we want `<router-link>` to render as another tag, e.g `<li>`. Then we can use the tag prop to specify which tag to render, and it will still listen to click events for navigation.',
  activeClass: 'Configure the active CSS class applied when the link is active. Note the default value can also be configured globally via the `linkActiveClass` router constructor option.',
  event: 'Specify the event(s) that can trigger the link navigation.',
  exact: 'The default active class matching behavior is inclusive match. For example, `<router-link to="/a">` will get this class applied as long as the current path starts with `/a/` or is `/a`.',
  append: 'Setting `append` prop always appends the relative path to the current path. For example, assuming we are navigating from `/a` to a relative link b, without append we will end up at `/b`, but with append we will end up at `/a/b`.',
  replace: 'Setting replace prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record.'
}
