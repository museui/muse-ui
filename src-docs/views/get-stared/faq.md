## 常见问题解答

### 如何单组件按需加载

#### 首先更改webpack配置

`webpack.conf.js`

webpack1

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

#### 然后在 `main.js` 内引入

```javascript
import Vue from 'vue'
import 'muse-components/styles/base.less' // 加载基础的样式
import appBar from 'muse-components/appBar'
import avatar from 'muse-components/avatar'
// ..
Vue.component(appBar.name, appBar)
Vue.component(avatar.name, avatar)
```
<br/><br/>
### 关于Html 中使用组件和 `.vue` 文件中使用组件的区别

1. html 中标签必须闭合

```html
<mu-flat-button></mu-flat-button>
```

2. html 不支持大小写所有的驼峰属性(或者事件)需要用`-`分隔

```html
<mu-flat-button background-color="red" @hover-exit="hoverExit"></mu-flat-button>
```

<br/><br/>
### 关于字体和图标

Muse UI 使用 [Roboto字体](https://fonts.google.com/specimen/Roboto) 和 [Materials Icon](https://github.com/google/material-design-icons)

官网上是直接使用URL的方式加载的
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```
鉴于网络情况，使用是可以去相应的网站下载到本地使用即可

* https://fonts.google.com/specimen/Roboto
* https://github.com/google/material-design-icons

<br/><br/>
### 对于其它字体图标的兼容
Muse UI 推荐使用 `Material Icon` 如果需要使用其它字体图标的地方，只需要 ':' + 样式名称即可

```html
<mu-icon value=":fa fa-user"/>
<mu-flat-button  icon=":fa fa-user"/>
```

<br/><br/>
### 关于IE浏览器中无法显示Material Icons的解决方法 [issue#512](https://github.com/museui/muse-ui/issues/512)
#### 原因:

**还是CSS 定义问题。**

如果按照muse-ui官方说明文档index.html中引入
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```
返回的css定义中，缺少对ie浏览器的支持
```css
/* fallback */
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: local('Material Icons'), local('MaterialIcons-Regular'), url(https://fonts.gstatic.com/s/materialicons/v22/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
```

#### 解决方式

国内网络原因(你懂的)，本地化部署字体
参考了[Material Icons Guide](http://google.github.io/material-design-icons/#setup-method-2-self-hosting)

1. 下载Material Icons字体包

Material Icons官方下载地址，目前为[Material Icons 3.0.1](https://github.com/google/material-design-icons/releases)

2. 解压后找到iconfont目录，你要的都在这里了

复制如下文件到你的static目录中,
 - material-icons.css
 - MaterialIcons-Regular.eot
 - MaterialIcons-Regular.ijmap
 - MaterialIcons-Regular.svg
 - MaterialIcons-Regular.ttf
 - MaterialIcons-Regular.woff
 - MaterialIcons-Regular.woff2

其中material-icons.css内容如下
```css
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
       local('MaterialIcons-Regular'),
       url(MaterialIcons-Regular.woff2) format('woff2'),
       url(MaterialIcons-Regular.woff) format('woff'),
       url(MaterialIcons-Regular.ttf) format('truetype');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
```


3. 在index.html中引用

```html
<link rel="stylesheet" href="static/fonts/material-icons/material-icons.css">
```

你的图标出来的。:)