## Muse UI Contributing Guide

Hi! 首先感谢你使用 Muse UI。

Muse UI 是一套 Material Design 风格开源组件库，旨在快速搭建页面。它基于 Vue 2.0 开发，并提供了自定义主题，充分满足可定制化的需求。

Muse UI 的成长离不开大家的支持，如果你愿意为 Muse UI 贡献代码或提供建议，请阅读以下内容。

## Issue 规范

* issue 仅用于提交 Bug 或 Feature 相关的内容，其它内容可能会被直接关闭。使用上有问题可以来 [gitter](https://gitter.im/muse-ui/muse-ui) 大家一起讨论

* 在提交 issue 之前，请搜索相关内容是否已被提出。

* 请说明 Muse UI 和 Vue 的版本号，并提供操作系统和浏览器信息。推荐使用 [JSFiddle](https://jsfiddle.net/) 生成在线 demo，这能够更直观地重现问题。


## Pull Request 规范

* 请先 fork 一份到自己的项目下，不要直接在仓库下建分支。

* commit 信息要以[组件名]: 描述信息 的形式填写，例如 appbar: fix xxx bug。

* 不要提交 `dist` 或 `docs` 文件夹下的文件

* 执行 npm run build 后可以正确打包文件。

* 提交 PR 前请 rebase，确保 commit 记录的整洁。

* 如果是修复 bug，请在 PR 中给出描述信息。

## 开发环境搭建

首先你需要 Node.js 6+ 和 NPM 3+

```bash
git clone git@github.com:museui/muse-ui.git
npm run dev
# open http://localhost:3000
```

安装慢可以使用 yarn 搭配 taobao registry

```bash
npm i yarn -g
yarn config set registry https://registry.npm.taobao.org
yarn
npm run dev

# open http://localhost:3000
```

build:

```bash
npm run build
```

## 代码规范

eslint [standard](https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style) 规范，建议IDE上添加 eslint 的插件。

## 加入 Muse UI 团队

发送邮件至 myronliu347@gmail.com , 我们一起完善 Muse UI。
