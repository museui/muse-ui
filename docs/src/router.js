import Vue from 'vue';
import Router from 'vue-router';
import navConfig from './configs/nav';
import langs from './configs/lang';
import Home from './views/home';
Vue.use(Router);

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  meta: {}
}];

langs.forEach(({ lang }) => {
  registerRoute(navConfig[lang], lang);
});

function registerRoute (navs, lang) {
  navs.forEach((nav) => {
    if (nav.href) return;
    if (nav.children) {
      registerRoute(nav.children, lang);
    } else {
      routes.push({
        name: `${lang}-${nav.path.substring(1)}`,
        path: `/${lang}${nav.path}`,
        component: () => {
          return import(`./docs/${lang}${nav.path}`);
        },
        meta: {
          title: `Muse-UI ${nav.name}`,
          name: nav.name,
          path: nav.path
        }
      });
    }
  });
}

routes.push({
  path: '*',
  redirect: '/'
});

export default new Router({
  routes
});
