<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <firstcomponent></firstcomponent>
    <ul>
      <li><router-link to="/first">点我跳转到第一页</router-link></li>
      <li><router-link to="/second">点我跳转到第二页</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import firstcomponent from './components/firstcomponent.vue'


export default {
  data () {
    return {
      msg: "Hello World"
    }
  },
  components: {firstcomponent}
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
