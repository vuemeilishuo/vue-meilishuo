// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import Home from './views/Home'
import Category from './views/Category'
import Shopcar from './views/Shopcar'
import Mine from './views/Mine'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

const routes = [
	{path:'/',component:Home},
	{path:'/home',component:Home},
	{path:'/category',component:Category},
	{path:'/shopcar',component:Shopcar},
	{path:'/mine',component:Mine}
]

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
