import Vue from 'vue';
import MuseUI from '../ui';
import App from './App';
Vue.use(MuseUI);

const app = new Vue({
  ...App
});

app.$mount('#app');
