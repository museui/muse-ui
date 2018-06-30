import 'babel-polyfill';
import Vue from 'vue';
import 'typeface-roboto';
import './assets/font-icons/material/material-icons.css';
import './assets/font-icons/style.css';
import './assets/github-markdown.css';
import './assets/atom-one-light.css';
import MuseUI from 'muse-ui';
import Progress from 'muse-ui-progress';
import FastClick from 'fastclick';
import './theme.js';
import App from './App';
import ColorPalette from './components/color-palette';
import DemoBlock from './components/demo-block';
import router from './router';
import { changeLocale } from './locale';
Vue.use(MuseUI);
Vue.use(Progress, {
  color: 'secondary'
});
Vue.component(ColorPalette.name, ColorPalette);
Vue.component(DemoBlock.name, DemoBlock);
Vue.config.productionTip = false;

if (navigator && navigator.userAgent.toLowerCase().indexOf('mobile') !== -1) FastClick.attach(document.body);
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.lang) {
    changeLocale(to.meta.lang);
  }
  window.scrollTo(0, 0);
  Progress.start();
  next();
});

router.afterEach(() => {
  Progress.done();
});

const app = new Vue({
  ...App,
  router
});

app.$mount('#app');
