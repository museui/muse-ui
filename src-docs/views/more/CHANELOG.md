## 2.1.0

### Features

  * add [BackTop](http://www.muse-ui.org/#/backTop)
  * add [Breadcrumb](http://www.muse-ui.org/#/breadcrumb)
  * add [timeline](http://www.muse-ui.org/#/timeline)

## 2.0.3

### Features

  * Support SSR
  * Removes components that use the popup mixin from the DOM when open property is false [#496](https://github.com/museui/muse-ui/issues/496)

### Bugs

  * fix the pagination option spelling mistake [#459](https://github.com/museui/muse-ui/pull/459)
  * 修复 popover 在移动端点外面空白处不能正确关闭 [#471](https://github.com/museui/muse-ui/issues/471)
  * 修复 Circular Progress 的 size 小于36部分不显示 [#440](https://github.com/museui/muse-ui/issues/440)
  * 修复 table 组件被选中的行被删除时，残留在 selectedRowsIndex 中 [#463](https://github.com/museui/muse-ui/issues/463)
  * Fix autocomplete focus issue [#495](https://github.com/museui/muse-ui/issues/495)
  * 修复 mu-table unSelectAll() 无效 [#455](https://github.com/museui/muse-ui/issues/455)
  * 修复 v-if + tooltip vue warn [#457](https://github.com/museui/muse-ui/issues/457)
  * 修复最新版谷歌浏览器中，日期插件出现无法显示bug [#461](https://github.com/museui/muse-ui/issues/461)
  * 修复 mu-dialog throws error: Cannot read property 'offsetHeight' of undefined [#447](https://github.com/museui/muse-ui/issues/447)
  * 修复 toggled list 在展开时会有一个明显的下沉抖动 [#426](https://github.com/museui/muse-ui/issues/426)

## 2.0.2

### Features

  * 增加表单组件 `name` 属性支持 [#402](https://github.com/museui/muse-ui/issues/402)
  * selectField 增加 open，close 的事件支持 [#399](https://github.com/museui/muse-ui/issues/399)
  * 增加可点击组件router-link的支持 [#39](https://github.com/museui/muse-ui/issues/39)

### Bugs

  * 修复 datePicker 无法返回2月份的bug [#401](https://github.com/museui/muse-ui/issues/401)
  * 修复 table 组件在 tr 只剩下1个时，无法触发rowSelection事件 [#415](https://github.com/museui/muse-ui/issues/415)
  * 修复 chip 组件click事件没有事件对象传入问题 [#408](https://github.com/museui/muse-ui/issues/408)
  * 修复 selectField autoWidth设置无效的问题 [#414](https://github.com/museui/muse-ui/issues/414)

## 2.0.1

### Bugs

  * 修复在app-bar中为flat-button增加href属性后按钮会发生错位 [#397](https://github.com/museui/muse-ui/issues/397)
  * 修复Dialog组件里面使用SelectField后的bug [#390](https://github.com/museui/muse-ui/issues/390)
  * 修复Dialog 组件无法点击Overlay层关闭 [#386](https://github.com/museui/muse-ui/issues/386)
  * 修复日期控件当前月份无法返回到上个月 [#385](https://github.com/museui/muse-ui/issues/385)
  * 修复Safari浏览器中，Bottom Navigation组件显示异常 [#384](https://github.com/museui/muse-ui/issues/384)
  * 修复 drawer 的show， hide事件触发依赖docked属性 [#381](#https://github.com/museui/muse-ui/issues/381)

## 2.0.0

### Features
  * 官网更新，logo更改（我们终于有自己的logo了）
  * 默认主题变为紫色，原默认主题变为`theme-light`
    ```javascript
    import 'muse-ui/dist/theme-light.css' // 使用原来的默认主题
    ```
  * 增加波纹效果的配置，可以通过配置全局关闭波纹效果;
    ```javascript
    import MuseUI from 'muse-ui';
    MuseUI.config({
      disableTouchRipple: true,
      disableFocusRipple: true
    })
    ```
  * 项目升级到 webpack2.2, 并支持Vue2.0
  * 增加yarn的支持
  * 提供引用自定义字体图标解决方案，所有设置icon的地方可以 `':' + 样式名称`
  ```html
  <mu-icon value=":fa fa-user"/>
  <mu-raised-button icon=":fa fa-user"/>
  ```

### Bugs
  * 修复 IconButton 点两次才生效的问题, fixed [#298](https://github.com/museui/muse-ui/issues/298)
  * 修复 textField change事件不是延迟触发的问题, fixed [#283](https://github.com/museui/muse-ui/issues/283)
  * 修复 selectField 不能选择值为 0 的项, fixed [#299](https://github.com/museui/muse-ui/issues/299)
  * 修复 dropdown, selectField 有时不能选择的问题, fixed [#350](https://github.com/museui/muse-ui/issues/350)
  * 修复 dialog 阴影闪烁, 内容模糊的问题, fixed [#336](https://github.com/museui/muse-ui/issues/336) [#305](https://github.com/museui/muse-ui/issues/305)
  * 修复 listItem 嵌套时Toggle效果失效, fixed [#296](https://github.com/museui/muse-ui/issues/296)
  * 修复 InfiniteScroll 导致滚动条抖动的问题 [#284](https://github.com/museui/muse-ui/pull/284)
  * 修复 popup 弹框 `esc` 键盘事件监听问题，fixed [#378](https://github.com/museui/muse-ui/issues/378)
  * 修复 autoComplete 事件触发不正确的问题, fixed [#372](https://github.com/museui/muse-ui/issues/372)
  * 修复 autoComplete 控件在未弹出提示框的时候一直按回车会触发Select事件, fixed [#348](https://github.com/museui/muse-ui/issues/348)
  * 修复 textField 多行文本框无法为1行的问题, fixed [#331](https://github.com/museui/muse-ui/issues/331)
  * 修复 textField 鼠标手势错误的问题, fixed [#364](https://github.com/museui/muse-ui/issues/364)
  * 修复 Tabs 组件 tabLightStyle 计算错误, fixed [#309](https://github.com/museui/muse-ui/issues/309)
  * 修复 popover 关闭时没有动画的问题, fixed [#340](https://github.com/museui/muse-ui/issues/340)

## 2.0.0-rc.5

### Bugs
  * 修复 datepicker, timePicker 弹出位置不居中的问题；
  * 修复 Pagination 组件的部分问题 #252
  * 修复 autoComplete 在选择时报错的问题 #250

## 2.0.0-rc.3

### Features
  * dialog 动画方案修改为滑动效果
  * 增加全局配置关闭波纹效果 [#234](https://github.com/museui/muse-ui/issues/234)

### Bugs
  * 修复 table 选择无法控制的问题 [#240](https://github.com/museui/muse-ui/issues/240)
  * 修复 firefox 下按钮波纹效果无效 [#233](https://github.com/museui/muse-ui/issues/233)
  * 修复 circularProgress 影响样式的问题 [#238](https://github.com/museui/muse-ui/issues/238)
  * 修复 Pagination 的 pageSizeChange 触发时机问题[#223](https://github.com/museui/muse-ui/issues/223)

## 2.0.0-rc.2

### Bugs

  * 修复 appBar zDepth属性无效
  * 修复 drawer出现闪屏的问题
  * 修复 bottomNav 更换主题是样式没有随之改变
  * 修复 icon size无法通过iconClass修改的问题
  * 修复 pagination 计算属性覆写导致报错

## 2.0.0-rc.1

### Features

  * 增加html中直接使用 vue 和 muse-ui 时的支持
  * 改善dialog组件的动画效果
  * 完成英文文档翻译

### Bugs

  * 修复 datepicker 组件不能正常选择日期的问题
  * 修复 table 组件取消全选是不触发rowSelection 的问题
  * 修复 textField 使用时对不齐的问题

## 2.0.0-beta.3

### Features

  * 增加一些组件英文文档

### Bugs

  * 修复 infiniteScroll 在window下无法触发load事件的问题
  * 修复 selectField 部分属性无法添加样式的问题
  * 修复 listItem 只有一个的时候会出现滚动条的bug
  * 修复 ssr 下部分属性使用 `window.` 导致无法运行

## 2.0.0-beta.1

### Features

  * 每个组件新增多个自定义样式参数；
  * 增加对非material Design icons 的支持，使用时加前缀 `:`；
  * 增加单元测试和文档国际化的支持

### Bugs

  * 修复 textField hintText 点击获取焦点多次的问题
  * 修复 autoComplete 无法初始化设置值的问题
  * 修复 dialog 中 button的样式问题
  * 修复 tabs getActiveIndex方法中this.$children可能获取不完整
  * 修复 selectField 在有些情况无法显示选择项
  * 修复 ssr 环境中全局使用window报错
  * 修复 pagination 的 total 和 pageSiz 改变的时候因为 current 没有改变导致不去更新相关联的参数的问题
  * 修复 textField 多行禁用的时候还可以输入的问题

## 2.0.0-alpha.11

### Features

  * 新增 [circularProgress](#/circularProgress) 组件
  * dropDownMenu, iconMenu, selectField, autoComplete 组件新增 `scroller` 属性
  * autoComplete 组件新增 `maxHeight` 属性
  * 更改所有表单组件 change 事件触发条件 (必须是因为用户行为导致value改变才触发)

### Bugs

  * 修复 pagination 修改 defaultPageSize 或者 pageSize 的时候不生效的问题
  * 修复 pagination 页码小于5个的时候显示不正常
  * 修复 dialog 中，两个action button，一个为 a，一个为 button 的话，样式显示问题
  * 修复 datePicker 组件格式化显示不完善的问题

## 2.0.0-alpha.10

### Features

  * 新增 [pagination](#/pagination) 组件

### Bugs

  * 修复 Text Field multiLine，如果带浮动标签，则容器高度不对
  * 在 slider 父级元素上加上定位属性会导致拖动定位异常
  * 修复 autoComplete 组件提示内容不显示的问题

## 2.0.0-alpha.9

### Features

  * 重构 slider 组件,内部不再使用 input[type=range]
  * bottomSheet, dialog, popover, popup 组件新增 open 参数（用于控制打开于关闭）, 新增 `show` (打开动画结束后)，`hide` (关闭动画结束后) 事件
  * drawer 新增 `show` (打开动画结束后)，`hide` (关闭动画结束后) 事件

### Bugs

  * 修复 menuItem 文本过长显示重叠
  * 修复 Text Field multiLine模式下 rows & rowsMax 设置无效的问题
  * 修复 drawer 的 open=true, docked=false 没有遮盖层
  * 修复 tabs 组件 z-index 值过低的问题
  * 修复 popover 在 dialog 组件中使用定位出错的问题
  * 修复 dialog 嵌套使用时没有遮盖上一个 dialog 的问题

## 2.0.0-alpha.8

### Features

  * bottomNavItem 增加 `default` slot
  * iconMenu 增加 `icon` slot
  * flexboxItem 增加 `grow` 和 `shrink` 属性, `basis` 替换 `span`

### Bugs

  * 修改 tbody 在 selectedRow 的时候全选时重复 emit 事件给父组件
  * 修复slider min参数设置后显示于实际值不一致的问题
  * 优化部分组件的动画效果
  * 修复textField float效果在 `type=number` 时的bug

## 2.0.0-alpha.7

### Features

  * table 组件增加 `enableSelectAll` 属性
  * tr 组件增加 `selected` 属性，控制tr选择

### Bugs

  * 修复 selectField无法选择 value 为 0 的项
  * 修复 radio,checkbox,switch 鼠标移出后波纹不消失的问题
  * 修复 mu-text-field设置type为number后，maxLength显示错误

## 2.0.0-alpha.5

### Features

  * bottomNavItem 新增 `href` 属性
  * tab 新增 `href`, `disabled` 属性
  * menuItem 增加 `click` 事件

### Bugs

  * 修复 textField 提示文字可以选择的问题
  * 修复 appbar 标题溢出不显示的问题
  * 修复 badge 组件 `color` 属性无效

## 2.0.0-alpha.4

### Bugs

  * 修复多行文本光标与提示文字不对齐
  * 修复drawer组件销毁后overlay仍存在的问题
  * 修复drawer docked切换后zIndex没有重置的问题
  * 修复table选择后再取消以后全选框仍选中的问题
  * 修改tooltip错位的问题

## 2.0.0-alpha.3

### Bugs

  * 修复 refreshControl 和波纹点击冲突的问题
  * 修复对 CommonJs 规范的支持不友好的问题
  * 修复 menu 组件嵌套点击时会报错

## 2.0.0-alpha.2

### Features

  * 更改组件变量命名和主题文件中的使用
  * 增加 carbon, dark, teal 主题

### Bugs

  * 修复 slider 组件在 ios 设备上显示出错的bug

## 2.0.0-alpha.1

### Features

  * Add 38 Material Design Components
  * Add 7 others components
