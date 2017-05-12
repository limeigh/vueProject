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
			<router-link class="mui-tab-item" to="/er">
				<span class="mui-icon mui-icon-weixin"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">通知</span>
			</router-link>
			<router-link class="mui-tab-item" to="/san">
				<span class="mui-icon mui-icon-camera"></span>
				<span class="mui-tab-label">购物</span>
			</router-link>
			<router-link class="mui-tab-item" to="/si">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				'isShow':false
			}
		},
		methods:{
			goback(){
				this.$router.go(-1); //返回上一个页面
			}
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