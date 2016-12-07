<template>
  <div id="app">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      <el-menu-item index="3">Orders</el-menu-item>
    </el-menu>

    </el-submenu>
    <router-view></router-view>

  </div>
</template>

<script>
  import 'element-ui/lib/theme-default/index.css'
  import Hello from './components/Hello'

  export default {
    props: ['articles'],
    components: {
      Hello
    }
  }

</script>

<style>
  body {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased
  }

</style>
