## FAQ

### How to load a single component?

#### Step 1: Edit `webpack.conf.js`

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

#### Step 2:  Import it in `main.js`

```javascript
import Vue from 'vue'
import 'muse-components/styles/base.less' // load basic css style
import appBar from 'muse-components/appBar'
import avatar from 'muse-components/avatar'
// ..
Vue.component(appBar.name, appBar)
Vue.component(avatar.name, avatar)
```
<br/><br/>
### The difference between `.html` and `.vue`

1. tag must be closed

```html
<mu-flat-button></mu-flat-button>
```

2. use `-` to separate instead of camel-case naming

```html
<mu-flat-button background-color="red" @hover-exit="hoverExit"></mu-flat-button>
```

<br/><br/>
### Font and Icon

Muse UI uses the [Roboto Font](https://fonts.google.com/specimen/Roboto) with [Material Icons](https://github.com/google/material-design-icons).

This is the example shown on the official website:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```
However, your network might not be very good, so you can also download it to use it!

* https://fonts.google.com/specimen/Roboto
* https://github.com/google/material-design-icons

<br/><br/>
### Use other fonts or icons
Muse UI recommend using `Material Icons`, but if you want to use others, you can do this, ':' + `className`, as follows:

```html
<mu-icon value=":fa fa-user"/>
<mu-flat-button  icon=":fa fa-user"/>
```

<br/><br/>
### IE can't display Material Icons [issue#512](https://github.com/museui/muse-ui/issues/512)
#### Reason:

**This is caused by CSS styles.**

If you do this:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```
IE doesn't support the CSS returned.
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

#### Solution

Download it locally!

Refering to [Material Icons Guide](http://google.github.io/material-design-icons/#setup-method-2-self-hosting)

1. Download `Material Icons`

The address of Material Icons: [Material Icons 3.0.1](https://github.com/google/material-design-icons/releases)

2. Unzip

Copy them to your `static`:
 - material-icons.css
 - MaterialIcons-Regular.eot
 - MaterialIcons-Regular.ijmap
 - MaterialIcons-Regular.svg
 - MaterialIcons-Regular.ttf
 - MaterialIcons-Regular.woff
 - MaterialIcons-Regular.woff2

material-icons.css:
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


3. Import in `index.html`

```html
<link rel="stylesheet" href="static/fonts/material-icons/material-icons.css">
```

The icons should now show!
