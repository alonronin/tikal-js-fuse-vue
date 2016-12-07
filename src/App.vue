<template>
  <div id="app">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal">
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
    <articles :articleList="articles"></articles>
  </div>
</template>

<script>
import 'element-ui/lib/theme-default/index.css'
import db from './db'
import Hello from './components/Hello'
import Articles from './components/Articles'

export default {
  name: 'app',
  firebase: {
    articles: db.ref('/stream').limitToLast(25),
  },
  computed: {
    count() {
      return this.articles.length
    }
  },
  components: {
    Hello,
    Articles
  }
}

</script>

<style>
body {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased
}

</style>
