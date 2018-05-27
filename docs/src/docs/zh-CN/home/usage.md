Muse-UI 基于 Vue 2.0 实现，需要作为 Vue 的一个插件安装使用

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
