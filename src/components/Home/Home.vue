<template>
	<div class="tmpl">
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(item,index) in lists" :key="index">
		  	<img :src="item.img" alt="">
		  </mt-swipe-item>
		</mt-swipe>
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
		margin-bottom: 20px;
	}
	img{
		width: 100%;
		height: 100%;
	}
</style>