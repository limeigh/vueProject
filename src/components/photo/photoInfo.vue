<template>
	<div class="tmpl">
		<!-- title -->
		<div class="title">
			<h2>{{photoInfo.title}}</h2>
			<p>
				{{photoInfo.add_time | fmtdate('YYYY-MM-DD')}}
				{{photoInfo.click}}次浏览
			</p>
		</div>
		<!-- 图片 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item, index) in thumimages">
           	 	<img class="preview-img" :src="item.src" height="109" width="109" @click="$preview.open(index, thumimages)">
            </li>
        </ul> 
	    <!-- 图片描述 -->
	    <div class="content" v-html="photoInfo.content">
	   
	    </div>
	    <!-- 图片评论 -->
	    <photoComment :artid="this.$route.params.id"></photoComment>
	</div>
</template>

<script>
	import photoComment from '../common/comment.vue'
	export default{
		data(){
			return {
				photoInfo:{

				},
				thumimages:[]
			}
		},
		created(){
			this.getphotoInfo()
			this.getthumimages()
		},
		methods:{
			getphotoInfo(){
				var id=this.$route.params.id
				var url='http://localhost:1888/api/getimageInfo/'+id
				this.$http.get(url).then(res=>{
					this.photoInfo=res.body.message[0]
				},res=>{
					console.log('发生异常')
				})
			},
			getthumimages(){
				var id=this.$route.params.id
				var url='http://localhost:1888/api/getthumimages/'+id
				this.$http.get(url).then(res=>{
					res.body.message.forEach(item=>{
						item.src='http://ofv795nmp.bkt.clouddn.com/'+item.src
						item.w=600
						item.h=400
					})
					this.thumimages=res.body.message
				},res=>{
					console.log('发生异常')
				})
			}
		},
		components:{
			photoComment
		}
	}
</script>

<style scoped>
	.title{
		padding-top: 10px;
		border-bottom: 1px solid rgba(92,92,92,0.2);
	}
	.title h2{
		font-size: 16px;
		color: #0094df;
	}
	.title p{
		font-size: 12px;
		color: rgba(92,92,92,0.6)
	}

	.mui-grid-view.mui-grid-9{
		background-color: #fff;
		border-top: none;
		border-left: none;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border-right: none;
		border-bottom: none;
		padding: 5px;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell > a:not(.mui-btn){
		padding: 0
	}

	.content{
		padding: 5px;
		color: #5c5c5c;
		font-size: 14px;
	}
</style>