// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

const First = {template: '<div><h2>我的第一个页面</h2></div>'};
import secondcomponent from './components/secondcomponent.vue';

//创建一个路由器实例
//并且配置路由规则
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
	{
		path: '/first',
		component: First
	},{
		path: '/second',
		component: secondcomponent
	}]
});

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
