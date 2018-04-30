import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home';
import Install from '../docs/install.md';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/install',
      name: 'install',
      component: Install
    }
  ]
});
