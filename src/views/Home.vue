<template>
	<div class="home">
		<!--<div class='home_top'>
			<img src="http://s17.mogucdn.com/p1/160801/idid_ifqwinzwgy3dmyzrmezdambqgyyde_58x33.png"/>
			<a href=""><input type="text" placeholder="套装"/></a>
			<img src="http://d02.res.meilishuo.net/pic/_o/75/2f/5539a21f7825b2fcd3a3cf98f70a_36_32.c1.png"/>
		</div>-->
		<swiper :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide v-for='item in arrLunboData'><img :src="item.image" class='swiperImg'/></swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		    <!--<div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div>-->
		    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
		</swiper>
		<div class="list">
			<ul>
				<li v-for='item in arrList'><img :src="item.image"/><p>{{item.title}}</p></li>
			</ul>
		</div>
		<div class='showThree' v-for='item in arrShowThree'>
			<img :src="item.image"/>
			<div class="ShowThreeList">
				<ul>
					<li v-for='item1 in item.goodsList'><img :src="item1.image"/><p>{{item1.title}}</p><p>￥{{item1.price}}</p></li>
				</ul>
			</div>
		</div>
		<div class="show">
			<ul>
				<li v-for='item in arrMoren'><div class='showDiv1' v-if='item.lefttop_taglist[0]'><img :src="item.lefttop_taglist[0].img"/></div><div class='showDiv2' v-if='item.leftbottom_taglist[0]'><img :src="item.leftbottom_taglist[0]"/></div><img :src="item.show.img"/><p>{{item.title}}</p><span>{{item.price}}</span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAQAAACBf8+OAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfgBQsKGyhUZV/lAAACFElEQVQ4y4WST0hUURSHv/N00tBSiiTEbDMuJA0KsTAmKkLMpHAT1ASVNO9BbVsMLmoWUhCtrM0bp0QpAg0pQsWNIOhqEELFqBn7Y4JRUU5ZTYwzp8Wo5XuCd3XvOd/9cc7vHGGd07U9eVYmzRF3RtyhgbwPo9SISnPgmTNnuPE5kxoSKpn2nk0b4p35BIGLTFG+0LIhnrK0VMatpxICbXXqO/CezRoEQhDokwl2JQLrttpTuOAVr1bg0xMSNWsBws3axye6jHgm5olfmhMFUaPjJn4t+0+h0RwEUAmPs281mmSUVrHP8QgkyQxxjRMzYoHhFcQul4Pi1Qr14mUnMJ0r3xV+GfWXx9yWWrPMLn/0yBM9RUIg/FD9LBqn/6m6zU31ahMJ47ABxRfoolD77ZPrw90FqX5t4gvHAhOSbarjnl4hhd/qdcJ2kQxoHfOe4y3Ty76LmlflNh55HNntxOWu1sl7fC3Ta8ZUdl3SUPrRVcs88MCacUx1rlJzeN34x6U+CVrlWgLZC0yuVlzfXZK96RRQ7cIzVSt4pMGOMpR8Y9+KbIOylyxJRWe+c8WqQafso+Gx9CA1sqAFBNNv7dDXPIlpTrrSiZeAtDGsdfKZa8WlUitDbOXGz3daDOkdWSh3tfYXul/38M24U9R+ZhGI0hA5lGnTI8DvnFdrFhjub1k6b/zIPLcSjjEdEB8jZjT7+gvlxMINFm2JJAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0wNS0xMVQxMDoyNzo0MCswODowMHmNt/wAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMDUtMTFUMTA6Mjc6NDArMDg6MDAI0A9AAAAAAElFTkSuQmCC"/><span>{{item.cfav}}</span></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	name:'home',
	data (){
		return{
			name:'homehome',
			arrLunboData:[],
//			arrSearchData:[],
			arrList:[],
			arrShowThree:[],
			arrMoren:[],
			swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 500,
          loop:true,
          autoplayDisableOnInteraction:false,
//        direction : 'vertical',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
//        prevButton:'.swiper-button-prev',
//        nextButton:'.swiper-button-next',
//        scrollbar:'.swiper-scrollbar',
          mousewheelControl : true,
          observeParents:true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart(swiper){
            //console.log(swiper)
          },
          // more Swiper configs and callbacks...
          // ...
        }
		}
	},
	// you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
	mounted:function(){
		this.$http.get('static/json/lunbo.json').then(function(res){
			//console.log(res.body.data)
			this.arrLunboData=res.body.data['20114'].list;
//			this.arrSearchData=res.body.data['6348'].list;
			this.arrList=res.body.data['13730'].list;
		})
		this.$http.get('static/json/niuzaiku.json').then(function(res){
			//console.log(res)
			this.arrShowThree=res.body.data;
		})
		this.$http.get('static/json/moren.json').then(function(res){
			console.log(res)
			this.arrMoren=res.body.data.list;
		})
	}
}
</script>

<style>
*{margin: 0;padding: 0;}	
.home{width: 100%;height: 90%;overflow: auto;position: absolute;}
.home>swiper{width: 100%;}	
.swiperImg{width: 100%;}
/*.home .home_top{width: 100%;height: 6rem;}
.home .home_top>img:nth-of-type(1){width: 8%;vertical-align: middle;margin: 3rem 0 0 1rem;}
.home .home_top>img:nth-of-type(2){width: 7%;vertical-align: middle;}
.home .home_top>a{display: inline-block;width: 30rem;height: 4rem;}
.home .home_top>a>input{width: 100%;height: 100%;}*/
.list{width: 100%;height: 15rem;}
.list>ul{width: 100%;height: 100%;padding:1rem 0 0 0;overflow: hidden;white-space: nowrap;overflow-x: scroll;}
.list>ul::-webkit-scrollbar{display: none;}
.list>ul>li{width: 23%;height: 100%;display: inline-block;}
.list>ul>li>img{width: 70%;}
.list>ul>li>p{width: 100%;height: 3rem;font-size: 2rem;}
.showThree{width: 100%;}
.showThree>img{width: 100%;}
.ShowThreeList{width: 100%;margin: 1rem 0 0 0;}
.ShowThreeList>ul{width: 100%;height:30rem;overflow: hidden;white-space: nowrap;overflow-x: scroll;}
.ShowThreeList>ul::-webkit-scrollbar{display: none;}
.ShowThreeList>ul>li{width: 28%;height:100%;display: inline-block;}
.ShowThreeList>ul>li>img{width: 95%;text-align: right;}
.ShowThreeList>ul>li>p:nth-of-type(1){width: 100%;height: 3rem;font-size: 2rem;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
.ShowThreeList>ul>li>p:nth-of-type(2){width: 100%;height: 3rem;font-size: 2rem;text-align: left;color: #f14a6b;}
.show{width: 100%;margin: 1rem 0 0 0;}
.show>ul{width: 100%;}
.show>ul>li{width: 50%;height:48rem;display:inline-block;vertical-align: middle;position: relative;}
.show>ul>li>img:nth-of-type(1){width:95%;height:40rem;display: block;margin: 0 auto;}
.show>ul>li>p{width: 100%;height: 4rem;font-size: 2.5rem;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
.show>ul>li>span{display: inline-block;width: 50%;height: 3rem;font-size: 2rem;}
.show>ul>li>span:nth-of-type(1){color: #F14A6B;}
.show>ul>li>span:nth-of-type(2){width: 40%;height: 3rem;text-align: left;}
.showDiv1{position: absolute;left: 1rem;top: 1rem;}
.showDiv2{position: absolute;left: 1rem;bottom: 8rem;}
</style>