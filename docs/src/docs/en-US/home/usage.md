Muse-UI is based on Vue 2.0 implementation and needs to be installed as a plugin for Vue.

```javascript
import Vue from 'vue';
import MuseUI from 'muse-ui';

Vue.use(MuseUI);

const app = new Vue({
  render (h) {
    return h('mu-button', {}, 'Hello World');
  }
});
```
