import Vue from 'vue';
import MuseUI from '../../ui';
import './assets/font-icons/style.css';
import './assets/github-markdown.css';
import './assets/atom-one-light.css';
import App from './App';
import router from './router';
Vue.use(MuseUI);
Vue.config.productionTip = false;

const app = new Vue({
  ...App,
  router
});

app.$mount('#app');
