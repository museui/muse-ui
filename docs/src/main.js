import Vue from 'vue';
import './assets/font-icons/style.css';
import './assets/github-markdown.css';
import './assets/atom-one-light.css';
import MuseUI from '../../ui';
import App from './App';
import ColorPalette from './components/color-palette';
import DemoBlock from './components/demo-block';
import router from './router';
Vue.use(MuseUI);
Vue.component(ColorPalette.name, ColorPalette);
Vue.component(DemoBlock.name, DemoBlock);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

const app = new Vue({
  ...App,
  router
});

app.$mount('#app');
