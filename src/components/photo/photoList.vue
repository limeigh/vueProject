<template>
	<div class="tmpl">
		<!-- 分类 -->
		<div class="cate">
			<ul>
				<li><a @click="getImgList(0)">全部</a></li>
				<li v-for="item in cate"><a @click="getImgList(item.id)">{{item.title}}</a></li>
			</ul>
		</div>
		<!-- 图片列表 -->
		<div class="imgList">
			<ul>
			  <li v-for="item in imglist">
			  	<router-link v-bind='{to:"/photo/photoInfo/"+item.id}'>
			    	<img v-lazy="item.img_url">
			  	</router-link>
			    <div class="imgDescribe">
			    	<span class="title" v-text="item.title"></span>
			    	<div class="zhaiyao" v-text="item.zhaiyao"></div>
			    </div>
			  </li>
			</ul>
		</div>
	</div>
</template>

<script>
import { Indicator } from 'mint-ui'
	export default {
		data(){
			return {
				cate:[],
				imglist:[]
			}
		},
		created(){
			this.getCate()
			this.getImgList(0)
		},
		methods:{
			getCate(){
				var url='http://localhost:1888/api/getimgcategory'
				this.$http.get(url).then(res=>{
					this.cate=res.body.message
				},res=>{
					console.log('发生异常')
				})
			},
			getImgList(cateId){
				// console.log(cateId)
				Indicator.open('loading...')
				var url='http://localhost:1888/api/getimages/'+cateId
				this.$http.get(url).then(res=>{
					res.body.message.forEach(item=>{
						item.img_url='http://ofv795nmp.bkt.clouddn.com/'+item.img_url
					})
					this.imglist=res.body.message
					Indicator.close()
				},res=>{
					console.log('发生异常')
				})
			}
		}
	}
</script>

<style scoped>
	ul{
		padding:0;
		margin: 0;
	}
	li{
		list-style: none
	}
	.cate{
		max-width: 350px;
		overflow: auto;
	}
	.cate ul{
		padding-left: 10px;
		white-space:nowrap;
		margin-bottom: 10px;
	}
	.cate ul li{
		display: inline-block;
		padding:0 0 0 5px;
	}
	.cate li a{
		font-size: 14px;
	}
	.imgList li{
		position: relative;
	}
	.imgList li img{
		width:100%;
		height: 300px;
	}
	image[lazy=loading] {
	  width: 40px;
	  height: 300px;
	  margin: auto;
	}
	.imgList li .imgDescribe{
		color: #fff;
		position: absolute;
		bottom: 0px;
		left: 0px;
		background-color: rgba(0,0,0,0.4)
	}
	.imgList li .imgDescribe .title{
		font-weight: bold;
		font-size: 16px;
	}
	.imgList li .imgDescribe .zhaiyao{
		font-size: 12px;
		margin-bottom: 10px;
	}
</style>