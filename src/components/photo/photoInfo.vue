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
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<a href="#">
           	 		<img src="https://pic.hiweixiu.com/images/uploadImg/banner/201705/20170508171925_490.png" width="109" height="109">
            	</a>
            </li>
        </ul> 
    <!-- 图片描述 -->
    <div class="content" v-html="photoInfo.content">
   
    </div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				photoInfo:{}
			}
		},
		created(){
			this.getphotoInfo()
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
			}
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