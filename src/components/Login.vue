<template>
	<div class="tmpl">
		{{msg}},传入url中的参数id:{{this.$route.params.id}},传入url中的参数name:{{this.$route.params.name}}<br>
		<!-- 过滤器filters -->
		<input type="text" v-model="name">
		{{name | toLowerCase | replaceStr('a')}} 

		<!-- 计算属性computed -->
		<div>{{computed}}</div>

		<!-- mint-ui使用 -->
		<mt-button type="primary" plain size="large" @click="click">primary</mt-button>

		<!-- mui使用 -->
		<!-- 演示mui中的九宫格 -->
		<div class="mui-content">
	        <ul class="mui-table-view mui-grid-view mui-grid-9">
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                <span class="mui-icon mui-icon-home"></span>
	                <div class="mui-media-body">Home</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-gear"></span>
                    <div class="mui-media-body">Setting</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-info"></span>
                    <div class="mui-media-body">about</div></a></li>
	           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-more"></span>
                    <div class="mui-media-body">more</div></a></li>
	        </ul> 
		</div>
	</div>
</template>

<script>
// 导入sub组件
import subVue from './sub.vue'
	// 这种方式调用Toast组件一定要重新导入
	import { Toast } from 'mint-ui';
	// Toast('提示')

	export default{
		data(){
			return {
				msg:'登录页',
				name:''
			}
		},
		methods:{
			click(){
				// console.log(this.$route.params.id)
				this.$toast({
					message:'Upload Complete',
					position:'bottom',
					duration:5000
				})
			}
		},
		filters:{
			toLowerCase(name){
				return name.toLowerCase()
			},
			replaceStr(name,p){
				return name.replace(p,'')
			}
		},
		computed:{
			computed(){
				return this.name.toLowerCase()
			}
		}
	}
</script>

<style>
</style>