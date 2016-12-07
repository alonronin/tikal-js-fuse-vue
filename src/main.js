// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'

import db from './db'
import App from './App'
import Articles from './components/Articles'

Vue.use(VueFire);
Vue.use(ElementUI);
Vue.use(VueRouter);

const Home = Articles

const routes = [
  { path: '/home', component: Home },
]

const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  data: {
    articles: []
  },
  template: '<App />',
  components: { App },
  router
});

db.articles.toArray().then(function(data){
  app.articles.push(...data);
});

