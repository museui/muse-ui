## Usage

Muse-UI can be loading all with the `Vue.use()` method as same as the other vue plugin, also we can use the `webpack` to loading the single component.

### Loading All

```javascript
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
```


### Loading Single Component

**webpack.conf.js**

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

**main.js**

```javascript
import Vue from 'vue'
import 'muse-components/styles/base.less' // loading the basic of style
import appBar from 'muse-components/appBar'
import avatar from 'muse-components/avatar'
// ..
Vue.component(appBar.name, appBar)
Vue.component(avatar.name, avatar)
```
