<template>
  <div id="app">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/articles">Articles</el-menu-item>
    </el-menu>

    <router-view></router-view>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-default/index.css'
</script>

<style>
  body {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased
  }
</style>
