<template>
  <div id="app">
    <ul id='tab'>
    	<li>
    		<router-link to='/home'>首页</router-link>
    	</li>
    	<li>
    		<router-link to='category'>分类</router-link>
    	</li>
    	<li>
    		<router-link to='shopcar'>购物车</router-link>
    	</li>
    	<li>
    		<router-link to='mine'>我</router-link>
    	</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;
  overflow: auto;*/
}
ul{list-style: none;}
a{text-decoration: none;font-size: 3rem;}
#tab{width: 100%;height: 10%;position: fixed;bottom: 0;background: rgba(255,255,255,.95);}
#tab>li{width: 25%;float: left;}
</style>
