import Vue from 'vue';
import 'typeface-roboto';
import './assets/font-icons/style.css';
import './assets/github-markdown.css';
import './assets/atom-one-light.css';
import MuseUI from '../../ui';
import FastClick from 'fastclick';
import './theme.js';
import App from './App';
import ColorPalette from './components/color-palette';
import DemoBlock from './components/demo-block';
import router from './router';
import progress from './components/progress';
Vue.use(MuseUI);
Vue.component(ColorPalette.name, ColorPalette);
Vue.component(DemoBlock.name, DemoBlock);
Vue.config.productionTip = false;

if (navigator && navigator.userAgent.toLowerCase().indexOf('mobile') !== -1) FastClick.attach(document.body);
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  progress.start();
  next();
});

router.afterEach(() => {
  progress.end();
});

const app = new Vue({
  ...App,
  router
});

app.$mount('#app');
