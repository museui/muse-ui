## Muse UI Contributing Guide

Hi! First of all, thank you for using Muse UI.

Muse UI is a set of Material Design style open source component library, designed for building pages rapidly. It is developed based on Vue 2.0 and provides a custom themes that are able to fully satisfy your customizable needs.

The growth of Muse UI is inseparable from the support of everyone. If you wish to either contribute to Muse UI or provide us with your suggestions, please read the following guidelines.

## Issue Guidelines

* Issues are only used for submitting Bug or Feature related content, other content may be closed directly. For usage problems, we can discuss it together on [gitter](https://gitter.im/muse-ui/muse-ui).

* Before submitting an issue, please search if any related issues have already been submitted.

* Please state the version number of Muse UI and Vue, also provide us with your operating system and browser information. We recommend using [JSFiddle](https://jsfiddle.net/) to generate an online demo for reproducing the problem more intuitively.


## Pull Request Guidelines

* Please fork a copy of the repository to your own project. Do not create a branch within the repository.

* Commit message must be filled based on the `[Component Name]: Description` format. For example, *appbar: fix xxx bug*

* Do not submit files under the `dist` or `docs` directory.

* Ensure files can be bundled correctly after executing `npm run build`.

* Please rebase before submitting a PR to ensure tidyness in our commit history。

* If it is a bug fix, please provide a description of it in the PR.

## Development Environment Setup

First, you need Node.js 6+ and NPM 3+.

```bash
git clone git@github.com:museui/muse-ui.git
npm run dev

# open http://localhost:3000
```

If installation is slow, you can use yarn with the taobao registry:

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

## Code Guidelines

ESLint [standard](https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style) Style Guide. We recommend adding the ESLint plugin to your IDE.

## Join the Muse UI team

Send an email to myronliu347@gmail.com - let's complete Muse UI together.
