<template>
	<div class="App">
		<!-- 整个系统的头部 -->
		<mt-header fixed title="基于Vue和Webpack的CMS系统"></mt-header>
		<!-- 公用的返回按钮 -->
		<div class="back" v-if="isShow">
			<a @click="goback">返回</a>
		</div>

		<!-- 路由占位,将来所有组件都是替换这个位置来实现页面跳转
		这也是一个单页系统的实现 -->
		<router-view></router-view>

		<!-- 整个系统的底部 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-camera"><span id="goshop" class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/san">
				<span class="mui-icon mui-icon-weixin"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">通知</span>
			</router-link>
			<router-link class="mui-tab-item" to="/si">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
// 导入公用commonJs
import {vueObj} from './commonJs/common.js'

const SHOPCARCOUNT = 'shopcarCount'
vueObj.$on('goshop',function(data){
	var goshop = document.querySelector('#goshop')
	var count=goshop.innerText - 0
	count += data
	count >=1 ? count = count :count = 1
	goshop.innerText = count
	localStorage.setItem(SHOPCARCOUNT,count)
})

window.onload=function(){
	document.querySelector('#goshop').innerText = localStorage.getItem(SHOPCARCOUNT) || 0
}
	export default{
		data(){
			return {
				isShow:false
			}
		},
		methods:{
			goback(){
				this.$router.go(-1); //返回上一个页面
			}
		},
		created(){
				this.isShow=true
		},
		watch:{
			'$route':function(newVal,oldVal){
				newVal.path.toLowerCase() === '/home' ? this.isShow=false:this.isShow=true
			}
		}
	}
</script>

<style scoped>
	.back{
		position: fixed;
		top: 10px;
		left: 10px;
		z-index: 10;
	}
	.back a{
		color: #fff;
		font-size: 16px;
	}
</style>