<template>
  <div id="app">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">Orders</el-menu-item>
    </el-menu>
    <h2>{{ count }}</h2>
    <ul>
      <li v-for="article in articles">
        <pre>{{ article.author }}</pre>
      </li>
    </ul>
    <hello></hello>
  </div>
</template>

<script>
import 'element-ui/lib/theme-default/index.css';
import firebase from 'firebase'
import Hello from './components/Hello'

const config = {
    apiKey: "AIzaSyA-HlcV4jtbhB0sL2D74SK9RVH9oZIQgVU",
    authDomain: "js-fuseday-2016-stream.firebaseapp.com",
    databaseURL: "https://js-fuseday-2016-stream.firebaseio.com",
    storageBucket: "js-fuseday-2016-stream.appspot.com",
    messagingSenderId: "533084422648"
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database();

export default {
  name: 'app',
  firebase: {
    articles: db.ref('/stream')
  },
  computed: {
    count() {
      return this.articles.length
    }
  },
  components: {
    Hello
  }
}
</script>

<style>
#app {
}
</style>
