## 使用

Muse-UI 和其它 vue 的插件一样可以使用 `Vue.use()` 方法全部加载， 也可以通过 `webpack` 配置来单组件加载。

### 全部加载

```javascript
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
```


### 单个组件加载

**webpack.conf.js** webpack1

```javascript
{
  // ...
  module: {
    loaders: [
      // ...
      {
        test: /muse-ui.src.*?js$/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    // ...
    alias: {
      'muse-components': 'muse-ui/src'
    }
  }
}
```

webpack2

```javascript
{
  // ...
  rules: {
    loaders: [
      // ...
      {
        test: /muse-ui.src.*?js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    // ...
    alias: {
      'muse-components': 'muse-ui/src'
    }
  }
}
```

**main.js**

```javascript
import Vue from 'vue'
import 'muse-components/styles/base.less' // 加载基础的样式
import appBar from 'muse-components/appBar'
import avatar from 'muse-components/avatar'
// ..
Vue.component(appBar.name, appBar)
Vue.component(avatar.name, avatar)
```
