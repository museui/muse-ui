# Muse UI
![](https://api.travis-ci.org/museui/muse-ui.svg?branch=master)
[![npm package](https://img.shields.io/npm/v/muse-ui.svg)](https://www.npmjs.org/package/muse-ui)
[![NPM downloads](http://img.shields.io/npm/dm/muse-ui.svg)](https://npmjs.org/package/muse-ui)
[![Join the chat at https://gitter.im/muse-ui/muse-ui](https://badges.gitter.im/muse-ui/muse-ui.svg)](https://gitter.im/muse-ui/muse-ui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Material Design UI library for Vuejs 2.0

## Links

* [Home Page](https://museui.github.io/)
* [中文文档](https://museui.github.io/#/install)
* [English Docs](https://museui.github.io/?lang=en)

## Install

```bash
npm install muse-ui -save
```

## Get Started

```javascript
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
```

or


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
import 'muse-components/styles/base.less' // 加载基础的样式
import appBar from 'muse-components/appBar'
import avatar from 'muse-components/avatar'
// ..
Vue.component(appBar.name, appBar)
Vue.component(avatar.name, avatar)
```


## Browser Support

* IE 10+
* Andorid 4.4+
* IOS 7+

## Changelog

Detailed changes for each release are documented in the [release notes](https://museui.github.io/#/changeLog).

## Contribution

Please make sure to read the [Contributing Guide](https://museui.github.io/#/contributing) before making a pull request.

## Dependencies

* [vuejs 2.0](https://vuejs.org/)
* [keycode](https://github.com/timoxley/keycode)
* [material icons](https://fonts.googleapis.com/icon?family=Material+Icons)
* [material design](https://material.google.com)

## Licence

muse-ui is open source and released under the MIT Licence.

Copyright (c) 2016 myron
