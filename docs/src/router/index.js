import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home';
import demo from '../views/demo';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
});
