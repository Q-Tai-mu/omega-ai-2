<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-11-26 23:23:25
 * @LastEditTime: 2021-12-02 14:39:58
 * @LastEditors: MArio
-->
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Layout />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Layout from "./view/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style>
html,
body #app {
  height: 100%;
  /* border-radius: 10px; */
  overflow: hidden;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica,
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */

}
</style>
