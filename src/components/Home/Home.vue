<template>
	<div class="tmpl">
		<!-- 引用公用组件中的轮播图组件 -->
		<CarouselFigure :imgLists="lists"></CarouselFigure>

		<!-- 利用mui中的9宫格实现系统的导航按钮-->
		<div class="mui-content">
	        <ul class="mui-table-view mui-grid-view mui-grid-9">
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<router-link to="/newsList">
	                    <span class="mui-icon icon-home"></span>
	                    <div class="mui-media-body">news</div>
	                </router-link>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<a href="#">
	                    <span class="mui-icon icon-home"></span>
	                    <div class="mui-media-body">home</div>
	                </a>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<a href="#">
	                    <span class="mui-icon icon-home"></span>
	                    <div class="mui-media-body">Home</div>
	                </a>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<a href="#">
	                    <span class="mui-icon icon-home"></span>
	                    <div class="mui-media-body">Home</div>
	                </a>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<a href="#">
	                    <span class="mui-icon icon-home"></span>
	                    <div class="mui-media-body">Home</div>
	                </a>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<a href="#">
	                    <span class="mui-icon icon-home"></span>
	                    <div class="mui-media-body">Home</div>
	                </a>
	            </li>
	        </ul> 
		</div>
	</div>
</template>

<script>
//导入公用的轮播图组件
import CarouselFigure from '../common/CarouselFigure.vue'

export default{
	data(){
		return {
			lists:[]
		}
	},
	components:{
		CarouselFigure
	},
	created(){
		this.getImage()
	},
	methods:{
		getImage(){
			var url='http://localhost:1666/api/getlunbo'
			this.$http.get(url).then(res=>{
				this.lists=res.body.message
				// console.log(this.$route)
			},res=>{
				alert('发生异常')
			})
		}
	}
}
</script>

<style scoped>  /*这里的scoped属性是保证里面的样式只对当前组件生效*/
	.tmpl{
		margin-bottom: 0px;
	}
	.icon-home{
		width: 40px;
		height: 40px;
		background:url('../../../static/images/nav.png') round;
	}
	.mui-grid-view.mui-grid-9{
		background-color:#fff;
		border-left: none;
		border-top: none;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border-right: none;
		border-bottom:none;
	}
	.mui-content > .mui-table-view:first-child {
	    margin-top: 0px;
	}
</style>