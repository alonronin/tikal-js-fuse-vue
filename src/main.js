// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

import VueFire from 'vuefire'
import VueRouter from 'vue-router'

import db from './db'
import App from './App'
import Home from './components/Home.vue'
import Articles from './components/Articles'
import Article from './components/Article'

Vue.use(VueFire);
Vue.use(ElementUI, { locale });
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/articles', component: Articles },
  { path: '/articles/:id', component: Article }
];

const mode = 'history';

const router = new VueRouter({
  mode,
  routes
});

const data = {
  articles: []
};

const el = '#app';
const components = { App };
const template = '<App />';

const app = new Vue({
  el,
  data,
  template,
  components,
  router
});

db.articles.toArray().then(function(data){
  app.articles.push(...data);
});

