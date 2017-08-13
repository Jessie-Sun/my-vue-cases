<template>
  <div id="app">
    <nav class="top-menu">
      <ul>
        <li v-for="item in menuList">
          <router-link :to="item.url">{{item.name}}</router-link>
        </li>
      </ul>
    </nav>
    <hr>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      menuList: [
        {name: '首页', url: '/home'},
        {name: '用户', url: '/user/19'},
        {name: '产品', url: '/product/20'}
      ]
    }
  }
}
</script>

<style>
  .top-menu ul, .top-menu li {
    list-style: none;
  }
  .top-menu {
    overflow: hidden;
  }
  .top-menu li {
    float: left;
    width: 100px;
  }
</style>
