<template>
	<div class="tmpl">
		<!-- 利用mint-ui中的swipe组件实现轮播图 -->
		<!-- 这个轮播图是一个公用的组件 -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(item,index) in imgLists" :key="index">
		  	<a :href="item.url"><img :src="item.img" alt=""></a>
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		props:['imgLists']
	}
</script>

<style scoped>
	img{
		width: 100%;
		height: 100%;
	}
	.mint-swipe{
		height: 250px;
	}
</style>