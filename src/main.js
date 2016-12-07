// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueFire from 'vuefire'

import db from './db'
import App from './App'

Vue.use(VueFire);
Vue.use(ElementUI);

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  data: {
    articles: []
  },
  template: '<App :articles="articles" />',
  components: { App }
});

db.articles.toArray().then(function(data){
  app.articles.push(...data);
});

