<template>
	<div class="tmpl">
		<!-- 利用mint-ui中的swipe组件实现轮播图 -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(item,index) in lists" :key="index">
		  	<img :src="item.img" alt="">
		  </mt-swipe-item>
		</mt-swipe>

		<!-- 利用mui中的9宫格实现系统的导航按钮-->
		<div class="mui-content">
	        <ul class="mui-table-view mui-grid-view mui-grid-9">
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<a href="#">
	                    <span class="mui-icon icon-home"></span>
	                    <div class="mui-media-body">home</div>
	                </a>
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
export default{
	data(){
		return {
			lists:[
				{img:'https://pic.hiweixiu.com/images/uploadImg/banner/201705/20170508171912_320.png'},
				{img:'https://pic.hiweixiu.com/images/uploadImg/banner/201705/20170508171925_490.png'},
				{img:'https://pic.hiweixiu.com/images/uploadImg/banner/201705/20170508171856_106.png'}
			]
		}
	},
	created(){
	},
	methods:{
	}
}
</script>

<style scoped>  /*这里的scoped属性是保证里面的样式只对当前组件生效*/
	.mint-swipe{
		height: 155px;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.mui-content > .mui-table-view:first-child {
	    margin-top: 0px;
	}
	.icon-home{
		width: 40px;
		height: 40px;
		background:url('../../../static/images/nav.png') no-repeat;
		background-size:  40px 40px;
	}
</style>